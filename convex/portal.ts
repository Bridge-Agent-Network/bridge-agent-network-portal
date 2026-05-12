import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listResources = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("resources").collect();
  }
});

export const listPointSubmissions = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("pointSubmissions").order("desc").collect();
  }
});

export const submitPointActivity = mutation({
  args: {
    memberId: v.id("members"),
    activity: v.string(),
    points: v.number(),
    note: v.string(),
    proofUrl: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("pointSubmissions", {
      ...args,
      status: "Pending",
      submittedAt: Date.now()
    });
  }
});

export const reviewPointActivity = mutation({
  args: {
    id: v.id("pointSubmissions"),
    status: v.union(v.literal("Approved"), v.literal("Rejected")),
    reviewedBy: v.id("members")
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      status: args.status,
      reviewedAt: Date.now(),
      reviewedBy: args.reviewedBy
    });
  }
});

export const createBookRequest = mutation({
  args: {
    memberId: v.id("members"),
    bookType: v.string(),
    branding: v.string(),
    quantity: v.number()
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("bookRequests", {
      ...args,
      status: "New",
      createdAt: Date.now()
    });
  }
});
