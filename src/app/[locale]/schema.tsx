import { z } from "zod";
export const formSchema = z.object({
  email: z.string().email({ message: "form.error.email" }),
  name: z.string().min(1, { message: "form.error.name" }),
  lastName: z.string().min(1, { message: "form.error.lastName" }),
  subject: z.string().min(1, { message: "form.error.subject" }),
  message: z.string().min(50, { message: "form.error.message" }),
});

export type ContactForm = z.infer<typeof formSchema>;
