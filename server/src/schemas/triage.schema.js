import { z } from "zod";

export const triageRequestSchema = z.object({
  message: z
    .string()
    .trim()
    .min(5, "Message must contain at least 5 characters.")
    .max(2000, "Message is too long."),
});

export const triageResponseSchema = z.object({
 category: z.enum([
  "Billing",
  "Technical",
  "Account",
  "Shipping",
  "Refund",
  "Cancellation",
  "Product",
  "General",
  "Other",
]),

  priority: z.enum(["P1", "P2", "P3", "P4"]),

  summary: z.string(),

  suggested_action: z.string(),

  needs_human: z.boolean(),

  confidence: z.number().min(0).max(1),
});