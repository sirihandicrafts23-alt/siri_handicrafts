"use client"

import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCallback, useState } from "react"
import { toast } from "@/components/ui/toast"
import {
  SubscriberValues,
  subscriberValidation,
} from "@/validation/subsciberValidation"
import { useAddSubscriber } from "@/hooks/useAddSubscriber"

export default function FooterNewsletter() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const { mutate: addNewSubscriber, isPending } = useAddSubscriber()

  const handleNameInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value)
    },
    []
  )

  const handleEmailInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    []
  )

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    if (isPending) return

    const values: SubscriberValues = {
      name,
      email,
    }

    const result = subscriberValidation.safeParse(values)
    if (!result.success) {
      result.error.issues.forEach((i) => {
        toast.add({
          title: "Invalid input",
          description: i.message,
          type: "error",
        })
      })
      return
    }

    addNewSubscriber(result.data, {
      onSuccess: () => {
        toast.add({
          title: "New Subscriber added",
          description: "Thank you for subscribing to Siri Handicrafts",
          type: "success",
        })
        setName("")
        setEmail("")
      },
      onError: () => {
        toast.add({
          title: "Failed to add as subscriber 😢, try again!!",
          description: "Please input your details and click on Subscribe",
          type: "error",
        })
      },
    })
  }

  return (
    <div className="flex w-full max-w-2xl flex-col gap-3">
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="text-center font-serif text-lg font-semibold tracking-widest text-primary uppercase sm:text-xl">
          Stay Updated
        </h2>
        <p className="text-center text-xs leading-relaxed text-neutral-400 sm:text-sm">
          Subscribe for updates on new handcrafted collections and workshops.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full flex-col gap-2.5 md:flex-row md:items-center"
      >
        <div className="grid w-full flex-1 grid-cols-1 gap-2.5 sm:grid-cols-[1fr_1.4fr]">
          <Input
            type="text"
            name="name"
            value={name}
            required
            placeholder="Enter your name"
            aria-label="Your name"
            className="h-10 min-w-0 border-primary/30 bg-neutral-950 px-3.5 text-white placeholder:text-neutral-500 focus-visible:border-primary focus-visible:ring-primary/30"
            onChange={handleNameInput}
          />
          <Input
            type="email"
            name="email"
            value={email}
            required
            placeholder="Enter your email"
            aria-label="Email address"
            className="h-10 min-w-0 border-primary/30 bg-neutral-950 px-3.5 text-white placeholder:text-neutral-500 focus-visible:border-primary focus-visible:ring-primary/30"
            onChange={handleEmailInput}
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="h-10 w-full shrink-0 cursor-pointer gap-2 bg-primary px-6 font-serif text-xs font-semibold tracking-widest text-primary-foreground uppercase transition-colors hover:bg-primary/90 disabled:opacity-50 md:w-auto"
        >
          <span>Subscribe</span>
          {isPending ? (
            <Loader2 className="size-3.5 animate-spin" />
          ) : (
            <Send className="size-3.5" />
          )}
        </Button>
      </form>
    </div>
  )
}
