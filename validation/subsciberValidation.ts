import { z } from "zod"

export const subscriberValidation = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter a valid name")
    .max(32, "Name is too long")
    .toLowerCase(),
  email: z
    .email("Please enter a valid email address")
    .trim()
    .min(1, "Please enter your email address")
    .toLowerCase(),
})

export type SubscriberValues = z.infer<typeof subscriberValidation>
