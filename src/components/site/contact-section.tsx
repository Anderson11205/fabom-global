"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BUSINESS_TYPES,
  BUDGET_OPTIONS,
  SERVICE_OPTIONS,
  SITE,
  TIMELINE_OPTIONS,
} from "@/lib/site-config";
import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";
import { CONTACT_FORM_DEFAULTS } from "@/lib/contact-schema";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./whatsapp-icon";

type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string };

function ContactMethods() {
  return (
    <div className="space-y-4">
      <a
        href={`mailto:${SITE.email}?subject=Website%20enquiry`}
        className="flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-gold"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-gold">
          <Mail className="h-4 w-4" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-steel">
            Email
          </span>
          <span className="mt-1 block text-[14px] font-semibold text-navy">
            {SITE.email}
          </span>
          <span className="mt-1 block text-[12.5px] text-steel">
            Best for detailed briefs — attach anything useful.
          </span>
        </span>
      </a>

      <a
        href={SITE.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-4 border border-line bg-white p-5 transition-colors hover:border-gold"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#1faa53] text-white">
          <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-steel">
            WhatsApp
          </span>
          <span className="mt-1 block text-[14px] font-semibold text-navy">
            {SITE.whatsappDisplay}
          </span>
          <span className="mt-1 block text-[12.5px] text-steel">
            Fastest way to reach me — opens a direct chat.
          </span>
        </span>
      </a>

      <div className="flex items-start gap-4 border border-line bg-white p-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-gold">
          <MapPin className="h-4 w-4" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-steel">
            Location
          </span>
          <span className="mt-1 block text-[14px] font-semibold text-navy">
            {SITE.location}
          </span>
          <span className="mt-1 block text-[12.5px] text-steel">
            Working with businesses locally and worldwide — meetings happen
            online.
          </span>
        </span>
      </div>

      <div className="border border-line bg-navy p-5 text-white">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
          What happens next
        </p>
        <ol className="mt-3 space-y-2.5 text-[13px] leading-relaxed text-white/75">
          <li className="flex gap-2.5">
            <span className="font-display font-bold text-gold">1.</span>
            Your enquiry is read personally — no bots, no call centres.
          </li>
          <li className="flex gap-2.5">
            <span className="font-display font-bold text-gold">2.</span>
            We discuss your goals and I recommend the most practical approach.
          </li>
          <li className="flex gap-2.5">
            <span className="font-display font-bold text-gold">3.</span>
            You receive a clear, itemised quote — no obligation, no pressure.
          </li>
        </ol>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: CONTACT_FORM_DEFAULTS,
    mode: "onTouched",
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok?: boolean; reference?: string; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(
          data.message ?? "Something went wrong while sending your enquiry."
        );
      }

      setSubmitState({ status: "success", reference: data.reference ?? "" });
      form.reset(CONTACT_FORM_DEFAULTS);
      toast({
        title: "Enquiry sent",
        description: "Thank you — your project enquiry has been received.",
      });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your enquiry.";
      setSubmitState({ status: "error", message });
      toast({
        title: "Enquiry not sent",
        description: message,
        variant: "destructive",
      });
    }
  }

  const selectClass =
    "h-11 rounded-[2px] border-input bg-white px-3 text-sm data-[placeholder]:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/60";

  return (
    <section id="contact" className="bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="section-label">Contact</p>
          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-navy md:text-[2.75rem]">
              Tell me about your project
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-steel">
              Fill in the enquiry form below and it will reach me directly, or
              message me on WhatsApp if you prefer to chat first. The more you
              share, the more useful my first reply will be.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal delay={0.08}>
            <ContactMethods />
          </Reveal>

          <Reveal delay={0.14}>
            <div className="border border-line bg-white p-6 md:p-9">
              {submitState.status === "success" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-tint">
                    <CheckCircle2 className="h-7 w-7 text-[#1faa53]" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-navy">
                    Enquiry received
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-steel">
                    Thank you — your enquiry has been delivered to FABOM GLOBAL
                    {submitState.reference ? (
                      <>
                        {" "}with reference{" "}
                        <span className="font-mono font-semibold text-navy">
                          #{submitState.reference.slice(-8).toUpperCase()}
                        </span>
                      </>
                    ) : null}
                    . You will receive a personal reply at the email address you
                    provided.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={SITE.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 items-center justify-center gap-2 bg-navy px-6 text-[13px] font-semibold text-white transition-colors hover:bg-navy-soft"
                    >
                      <WhatsAppIcon />
                      Continue on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitState({ status: "idle" })}
                      className="inline-flex h-11 items-center justify-center border border-line px-6 text-[13px] font-semibold text-navy transition-colors hover:border-gold"
                    >
                      Send another enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Full name <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Adaeze Okafor"
                                autoComplete="name"
                                className="h-11 rounded-[2px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Email address <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@company.com"
                                autoComplete="email"
                                className="h-11 rounded-[2px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Business name <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your business name"
                                autoComplete="organization"
                                className="h-11 rounded-[2px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="currentWebsite"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Current website{" "}
                              <span className="font-normal text-steel">(optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Leave empty if you don't have one yet"
                                className="h-11 rounded-[2px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Type of business <span className="text-destructive">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className={selectClass}>
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {BUSINESS_TYPES.map((t) => (
                                  <SelectItem key={t} value={t} className="text-[13px]">
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="serviceRequired"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Service required <span className="text-destructive">*</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className={selectClass}>
                                  <SelectValue placeholder="What do you need?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {SERVICE_OPTIONS.map((s) => (
                                  <SelectItem key={s} value={s} className="text-[13px]">
                                    {s}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="estimatedBudget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Estimated budget{" "}
                              <span className="font-normal text-steel">(optional)</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className={selectClass}>
                                  <SelectValue placeholder="Helps me suggest the right scope" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {BUDGET_OPTIONS.map((b) => (
                                  <SelectItem key={b} value={b} className="text-[13px]">
                                    {b}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="preferredTimeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[13px] font-semibold text-navy">
                              Preferred timeline{" "}
                              <span className="font-normal text-steel">(optional)</span>
                            </FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger className={selectClass}>
                                  <SelectValue placeholder="When would you like to launch?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {TIMELINE_OPTIONS.map((t) => (
                                  <SelectItem key={t} value={t} className="text-[13px]">
                                    {t}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="projectDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[13px] font-semibold text-navy">
                            Project description <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              rows={5}
                              placeholder="Tell me about your business, what you want the website to achieve, any pages or features you have in mind, and anything else that matters."
                              className="min-h-[120px] rounded-[2px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="consent"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex items-start gap-3 rounded-[2px] border border-line bg-mist p-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={(checked) =>
                                  field.onChange(checked === true)
                                }
                                className="mt-0.5"
                              />
                            </FormControl>
                            <FormLabel className="!mt-0 text-[12.5px] font-normal leading-relaxed text-steel">
                              I agree that FABOM GLOBAL may use the details in
                              this enquiry to reply to me about my project.
                              Details are never sold or shared with third
                              parties. <span className="text-destructive">*</span>
                            </FormLabel>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {submitState.status === "error" ? (
                      <p
                        role="alert"
                        className="border border-destructive/30 bg-destructive/5 px-4 py-3 text-[13px] font-medium text-destructive"
                      >
                        {submitState.message} If the problem continues, please
                        email {SITE.email} or message me on WhatsApp.
                      </p>
                    ) : null}

                    <div className="flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
                      <Button
                        type="submit"
                        disabled={submitState.status === "sending"}
                        className="h-12 flex-1 gap-2 rounded-[2px] bg-navy text-sm font-semibold text-white hover:bg-navy-soft disabled:opacity-60 sm:flex-none sm:px-8"
                      >
                        {submitState.status === "sending" ? (
                          <>
                            <span
                              aria-hidden="true"
                              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" aria-hidden="true" />
                            Submit enquiry
                          </>
                        )}
                      </Button>
                      <a
                        href={SITE.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 flex-1 items-center justify-center gap-2 border border-line bg-white px-6 text-sm font-semibold text-navy transition-colors hover:border-gold hover:bg-gold-tint sm:flex-none"
                      >
                        <WhatsAppIcon className="text-[#1faa53]" />
                        Or message me on WhatsApp
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                    <p className="text-[11.5px] leading-relaxed text-steel">
                      Fields marked <span className="text-destructive">*</span> are
                      required. Your details are used only to respond to this
                      enquiry.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
