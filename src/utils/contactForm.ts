import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters"),

  email: z
    .string()
    .email("Enter a valid email"),

  subject: z
    .string()
    .min(3, "Subject must contain at least 3 characters"),

  message: z
    .string()
    .min(10, "Message must contain at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactSchema>