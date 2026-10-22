import { z } from "zod";

/**
 * Shared contact-form validation.
 * Used on the client for live field feedback and re-run on the server
 * inside /api/contact so nothing unvalidated ever reaches the database.
 */
export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Name is too long."),
  email: z
    .email("Please enter a valid email address, e.g. you@company.com.")
    .max(120, "Email address is too long."),
  businessName: z
    .string()
    .trim()
    .min(2, "Please enter your business name (or type 'Personal').")
    .max(120, "Business name is too long."),
  currentWebsite: z
    .string()
    .trim()
    .max(200, "Website address is too long.")
    .refine(
      (v) => v === "" || /^(https?:\/\/)?[\w-]+(\.[\w-]+)+\S*$/i.test(v),
      "Please enter a valid website address (or leave this field empty)."
    )
    .optional()
    .or(z.literal("")),
  businessType: z
    .string()
    .min(1, "Please select the type of business you run."),
  serviceRequired: z
    .string()
    .min(1, "Please select the service you are interested in."),
  estimatedBudget: z.string().max(60).optional().or(z.literal("")),
  preferredTimeline: z.string().max(60).optional().or(z.literal("")),
  projectDescription: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters.")
    .max(3000, "Please keep the description under 3,000 characters."),
  consent: z
    .boolean()
    .refine(
      (v) => v === true,
      "Please confirm you are happy for FABOM GLOBAL to reply to this enquiry."
    ),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const CONTACT_FORM_DEFAULTS: ContactFormValues = {
  fullName: "",
  email: "",
  businessName: "",
  currentWebsite: "",
  businessType: "",
  serviceRequired: "",
  estimatedBudget: "",
  preferredTimeline: "",
  projectDescription: "",
  consent: false,
};
