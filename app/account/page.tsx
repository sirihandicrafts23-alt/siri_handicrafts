"use client"

import { useState } from "react"
import { useAuthActions } from "@convex-dev/auth/react"
import { useConvex } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"

export default function AuthForm() {
  const { signIn } = useAuthActions()
  const convex = useConvex()
  const router = useRouter()

  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn")
  const [identifier, setIdentifier] = useState("") // Username or Email on signIn
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (flow === "signUp") {
        // Check if username is already taken
        const existingEmail = await convex.query(api.users.getEmailByUsername, {
          email,
        })
        if (existingEmail) {
          throw new Error("Username is already taken.")
        }

        await signIn("password", {
          email,
          username,
          password,
          flow: "signUp",
        })
      } else {
        // Resolve username to email if user entered a username instead of email
        let loginEmail = identifier.trim()
        if (!loginEmail.includes("@")) {
          const resolvedEmail = await convex.query(
            api.users.getEmailByUsername,
            { email: loginEmail }
          )
          if (!resolvedEmail) {
            throw new Error("Invalid username or password.")
          }
          loginEmail = resolvedEmail
        }

        await signIn("password", {
          email: loginEmail,
          password,
          flow: "signIn",
        })
      }

      router.push("/")
      router.refresh()
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Authentication failed. Try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-sm flex-col gap-4 rounded-xl border p-6"
    >
      <h2 className="text-xl font-semibold">
        {flow === "signIn" ? "Sign In" : "Create Account"}
      </h2>

      {flow === "signUp" ? (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="rounded-md border px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border px-3 py-2 text-sm"
          />
        </>
      ) : (
        <input
          type="text"
          placeholder="Username or Email"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          className="rounded-md border px-3 py-2 text-sm"
        />
      )}

      <input
        type="password"
        placeholder="Password (min 8 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        minLength={8}
        required
        className="rounded-md border px-3 py-2 text-sm"
      />

      {error && <p className="text-xs text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
      >
        {loading ? "Please wait..." : flow === "signIn" ? "Sign In" : "Sign Up"}
      </button>

      <button
        type="button"
        onClick={() => {
          setFlow(flow === "signIn" ? "signUp" : "signIn")
          setError(null)
        }}
        className="text-xs text-muted-foreground underline"
      >
        {flow === "signIn"
          ? "Don't have an account? Sign up"
          : "Already have an account? Sign in"}
      </button>
    </form>
  )
}
