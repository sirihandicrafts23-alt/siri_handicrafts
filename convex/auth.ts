import { Password } from "@convex-dev/auth/providers/Password"
import { convexAuth } from "@convex-dev/auth/server"
import { DataModel } from "./_generated/dataModel"

const CustomPassword = Password<DataModel>({
  profile(params) {
    const email = (params.email as string).trim().toLowerCase()

    return {
      email,
      name: (params.name as string) || email.split("@")[0],
      phoneNumber: Number(params.phoneNumber ?? 0),
    }
  },
})

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [CustomPassword],
  session: {
    totalDurationMs: 60 * 60 * 1000,
  },
})
