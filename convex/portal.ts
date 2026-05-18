import { mutation, query } from "./_generated/server";
import type { Id } from "./_generated/dataModel";
import type { MutationCtx, QueryCtx } from "./_generated/server";
import { v } from "convex/values";

type PortalCtx = QueryCtx | MutationCtx;

const bridgePointValues: Record<string, number> = {
  "Social media post using Bridge Agent strategy": 10,
  "Print marketing piece used": 15,
  "Listing presentation Three Values document signed": 25,
  "Three Values document signed at listing presentation": 25,
  "Deal Lab submission": 10,
  "Closed Renovate to Sell transaction using remodeling services": 100,
  "Complete onboarding": 100,
  "Complete Cash Offer module": 75,
  "Complete Reno-to-Sell module": 75,
  "Complete Builder Solution module": 75,
  "Attend monthly mastermind": 50,
  "Submit a seller opportunity": 100,
  "Submit a land opportunity": 150,
  "Post Bridge-approved content": 25
};

async function getApprovedMember(ctx: PortalCtx) {
  const identity = await ctx.auth.getUserIdentity();

  if (!identity) {
    throw new Error("Not authenticated");
  }

  const member = await ctx.db
    .query("members")
    .withIndex("by_clerk_user_id", (q) => q.eq("clerkUserId", identity.subject))
    .unique();

  if (!member || member.status !== "Approved") {
    throw new Error("Not authorized");
  }

  return member;
}

async function getAdminMember(ctx: PortalCtx) {
  const member = await getApprovedMember(ctx);

  if (member.role !== "Admin" && member.role !== "Regional Admin") {
    throw new Error("Admin access required");
  }

  return member;
}

function trimBounded(value: string, field: string, maxLength: number, minLength = 1) {
  const trimmed = value.trim();

  if (trimmed.length < minLength) {
    throw new Error(`${field} is required`);
  }

  if (trimmed.length > maxLength) {
    throw new Error(`${field} is too long`);
  }

  return trimmed;
}

function validateOptionalHttpsUrl(value: string | undefined) {
  const trimmed = value?.trim();

  if (!trimmed) {
    return undefined;
  }

  if (trimmed.length > 500) {
    throw new Error("Proof URL is too long");
  }

  const url = new URL(trimmed);

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error("Proof URL must start with http:// or https://");
  }

  return trimmed;
}

async function enforcePointSubmissionLimit(ctx: MutationCtx, memberId: Id<"members">) {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  const recentSubmissions = await ctx.db
    .query("pointSubmissions")
    .withIndex("by_member_submitted_at", (q) => q.eq("memberId", memberId).gte("submittedAt", oneHourAgo))
    .collect();

  if (recentSubmissions.length >= 20) {
    throw new Error("Too many submissions. Please wait before trying again.");
  }
}

async function enforceBookRequestLimit(ctx: MutationCtx, memberId: Id<"members">) {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;
  const recentRequests = await ctx.db
    .query("bookRequests")
    .withIndex("by_member_created_at", (q) => q.eq("memberId", memberId).gte("createdAt", oneHourAgo))
    .collect();

  if (recentRequests.length >= 5) {
    throw new Error("Too many submissions. Please wait before trying again.");
  }
}

export const listResources = query({
  args: {},
  handler: async (ctx) => {
    const member = await getApprovedMember(ctx);
    const resources = await ctx.db.query("resources").collect();

    if (member.role === "Admin" || member.role === "Regional Admin") {
      return resources;
    }

    return resources.filter((resource) => (resource.visibility ?? "Public") !== "Admin" && (resource.reviewState ?? "Published") === "Published");
  }
});

export const listPointSubmissions = query({
  args: {},
  handler: async (ctx) => {
    await getAdminMember(ctx);
    return await ctx.db.query("pointSubmissions").order("desc").collect();
  }
});

export const submitPointActivity = mutation({
  args: {
    activity: v.string(),
    note: v.string(),
    proofUrl: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const member = await getApprovedMember(ctx);
    const activity = trimBounded(args.activity, "Activity", 120);
    const points = bridgePointValues[activity];
    const note = trimBounded(args.note, "Note", 800);
    const proofUrl = validateOptionalHttpsUrl(args.proofUrl);
    await enforcePointSubmissionLimit(ctx, member._id);

    if (!points) {
      throw new Error("Unknown Bridge Points activity");
    }

    return await ctx.db.insert("pointSubmissions", {
      memberId: member._id,
      activity,
      points,
      note,
      proofUrl,
      status: "Pending",
      submittedAt: Date.now()
    });
  }
});

export const reviewPointActivity = mutation({
  args: {
    id: v.id("pointSubmissions"),
    status: v.union(v.literal("Approved"), v.literal("Rejected"))
  },
  handler: async (ctx, args) => {
    const reviewer = await getAdminMember(ctx);
    const submission = await ctx.db.get(args.id);

    if (!submission) {
      throw new Error("Point submission not found");
    }

    if (submission.status !== "Pending") {
      throw new Error("Point submission has already been reviewed");
    }

    await ctx.db.patch(args.id, {
      status: args.status,
      reviewedAt: Date.now(),
      reviewedBy: reviewer._id
    });

    if (args.status === "Approved") {
      const member = await ctx.db.get(submission.memberId);

      if (member) {
        await ctx.db.patch(member._id, {
          points: member.points + submission.points
        });
      }
    }
  }
});

export const createBookRequest = mutation({
  args: {
    bookType: v.string(),
    branding: v.string(),
    quantity: v.number()
  },
  handler: async (ctx, args) => {
    const member = await getApprovedMember(ctx);
    const bookType = trimBounded(args.bookType, "Book type", 80);
    const branding = trimBounded(args.branding, "Branding instructions", 1200);
    const quantity = Math.floor(args.quantity);
    await enforceBookRequestLimit(ctx, member._id);

    if (quantity < 1 || quantity > 500) {
      throw new Error("Quantity must be between 1 and 500");
    }

    return await ctx.db.insert("bookRequests", {
      memberId: member._id,
      bookType,
      branding,
      quantity,
      status: "New",
      createdAt: Date.now()
    });
  }
});
