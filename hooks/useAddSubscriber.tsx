import { api } from "@/convex/_generated/api"
import { useMutation } from "convex/react"
import { useCallback, useMemo, useState } from "react"

interface CreateSubscriberInterface {
  name: string
  email: string
}

type Response = {
  ok?: boolean
  error?: string
  message?: string
  status?: string
} | null

type Options = {
  onSuccess: (data: Response) => void
  onError?: (error: Response) => void
  onSettled?: () => void
  throwError?: boolean
}

export function useAddSubscriber() {
  const [data, setData] = useState<Response>(null)
  const [error, setError] = useState<Response | null>(null)
  const [status, setStatus] = useState<
    "success" | "error" | "settled" | "pending" | null
  >(null)

  const isPending = useMemo(() => status === "pending", [status])
  const isSuccess = useMemo(() => status === "success", [status])
  const isError = useMemo(() => status === "error", [status])
  const isSettled = useMemo(() => status === "settled", [status])

  const mutation = useMutation(api.subscribers.addSubscriber)

  const mutate = useCallback(
    async (values: CreateSubscriberInterface, options?: Options) => {
      try {
        setData(null)
        setError(null)
        setStatus("pending")

        const response = await mutation(values)
        options?.onSuccess?.(response)
        return response
      } catch (error) {
        setStatus("error")
        options?.onError?.(error as Response)
        if (options?.throwError) {
          throw error
        }
      } finally {
        setStatus("settled")
        options?.onSettled?.()
      }
    },
    [mutation]
  )

  return {
    mutate,
    data,
    error,
    isPending,
    isError,
    isSettled,
    isSuccess,
  }
}
