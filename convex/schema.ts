import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  regions: defineTable({
    name: v.string(),
    market: v.string(),
    status: v.union(v.literal("Active"), v.literal("Planned"))
  }).index("by_market", ["market"]),

  members: defineTable({
    clerkUserId: v.optional(v.string()),
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    brokerage: v.optional(v.string()),
    role: v.union(v.literal("Admin"), v.literal("Regional Admin"), v.literal("Agent")),
    regionId: v.id("regions"),
    territory: v.string(),
    status: v.union(v.literal("Approved"), v.literal("Pending"), v.literal("Disabled")),
    points: v.number()
  })
    .index("by_email", ["email"])
    .index("by_region", ["regionId"])
    .index("by_status", ["status"]),

  resources: defineTable({
    title: v.string(),
    category: v.string(),
    format: v.union(v.literal("PDF"), v.literal("Canva"), v.literal("Deck"), v.literal("Video"), v.literal("Doc"), v.literal("Link")),
    status: v.union(v.literal("Ready"), v.literal("Draft"), v.literal("Coming Soon")),
    description: v.string(),
    href: v.string(),
    tags: v.array(v.string())
  }).index("by_category", ["category"]),

  trainings: defineTable({
    title: v.string(),
    length: v.string(),
    type: v.union(v.literal("Recorded"), v.literal("Live Replay"), v.literal("Workshop")),
    description: v.string(),
    href: v.string()
  }).index("by_type", ["type"]),

  events: defineTable({
    title: v.string(),
    date: v.string(),
    time: v.string(),
    type: v.union(v.literal("Coffee with Brad"), v.literal("Deal Lab"), v.literal("Training")),
    location: v.string(),
    href: v.string()
  }),

  pointSubmissions: defineTable({
    memberId: v.id("members"),
    activity: v.string(),
    points: v.number(),
    note: v.string(),
    proofUrl: v.optional(v.string()),
    status: v.union(v.literal("Pending"), v.literal("Approved"), v.literal("Rejected")),
    submittedAt: v.number(),
    reviewedAt: v.optional(v.number()),
    reviewedBy: v.optional(v.id("members"))
  })
    .index("by_member", ["memberId"])
    .index("by_status", ["status"]),

  bookRequests: defineTable({
    memberId: v.id("members"),
    bookType: v.string(),
    branding: v.string(),
    quantity: v.number(),
    status: v.union(v.literal("New"), v.literal("In Review"), v.literal("Fulfilled")),
    createdAt: v.number()
  })
    .index("by_member", ["memberId"])
    .index("by_status", ["status"])
});
