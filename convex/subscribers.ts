import { v } from "convex/values"
import { mutation } from "./_generated/server"

export const addSubscriber = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("subscribers", {
      name: args.name,
      email: args.email,
    })
  },
})
