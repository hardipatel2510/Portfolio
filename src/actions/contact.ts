// src/actions/contact.ts
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate sending email or saving to database
  console.log("Form data submitted:", parsed.data);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // Example of simulating an error
  // if (parsed.data.email.includes("error")) {
  //   return {
  //     message: "There was an error sending your message. Please try again.",
  //     success: false,
  //   };
  // }

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}
