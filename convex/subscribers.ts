import { v, ConvexError } from "convex/values"
import { mutation } from "./_generated/server"

export const addSubscriber = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const isExistingSubscriber = !!(await ctx.db
      .query("subscribers")
      .withIndex("email", (q) => q.eq("email", args.email))
      .first())

    if (isExistingSubscriber) {
      return { status: "already_subscribed" as const }
    }

    await ctx.db.insert("subscribers", {
      name: args.name,
      email: args.email,
    })
  },
})
