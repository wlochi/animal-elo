import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  animals: defineTable({
    name: v.string(),
    emoji: v.string(),
    score: v.number(),
  }).index("by_score", ["score"]),
});

