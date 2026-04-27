import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  getRemainingSubmissionCooldownMs,
  isSubmissionTooFast,
  leadFormSchema,
  registerSubmissionAttempt,
  sanitizeLeadPayload,
  type LeadFormSchema,
} from "@/lib/leadSecurity";
import { submitLead } from "@/lib/leadApi";

const defaultValues: LeadFormSchema = {
  fullName: "",
  email: "",
  phone: "",
  topic: "",
  message: "",
  company: "",
};

const ContactPage = () => {
  const navigate = useNavigate();
  const formStartedAtRef = useRef(Date.now());
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<LeadFormSchema>({
    resolver: zodResolver(leadFormSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitError(null);

    if (isSubmissionTooFast(formStartedAtRef.current)) {
      setSubmitError("Please take a few seconds to review your details before submitting.");
      return;
    }

    const cooldownMs = getRemainingSubmissionCooldownMs();

    if (cooldownMs > 0) {
      setSubmitError(`Too many attempts. Please wait ${Math.ceil(cooldownMs / 1000)} seconds and try again.`);
      return;
    }

    const sanitizedValues = sanitizeLeadPayload(values);
    const validatedValues = leadFormSchema.safeParse(sanitizedValues);

    if (!validatedValues.success) {
      setSubmitError(validatedValues.error.issues[0]?.message || "Please review the form and try again.");
      return;
    }

    try {
      const result = await submitLead(validatedValues.data);

      registerSubmissionAttempt();
      form.reset(defaultValues);
      formStartedAtRef.current = Date.now();

      navigate("/thank-you", {
        state: {
          conversionId: result.conversionId,
          topic: validatedValues.data.topic,
        },
      });
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unable to submit your request right now.");
    }
  });

  return (
    <>
      <TopBar />
      <Navbar />
      <section className="py-16 lg:py-24">
        <div className="container max-w-5xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-extrabold lg:text-5xl">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Whether you have a quick connectivity question or need a full advisory consultation, our team is ready to help with clarity, honest guidance, and stronger lead protection.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold font-heading">Send Us Your Question</h2>
              <div className="mb-6 rounded-2xl border border-border bg-accent/40 p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-primary" />
                  <p className="text-sm text-accent-foreground">
                    This form validates required fields, blocks disposable emails, checks US phone numbers, strips HTML, throttles repeat submissions, and only records conversions after a successful submission.
                  </p>
                </div>
              </div>

              {submitError ? (
                <Alert variant="destructive" className="mb-6">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Submission blocked</AlertTitle>
                  <AlertDescription>{submitError}</AlertDescription>
                </Alert>
              ) : null}

              <Form {...form}>
                <form className="space-y-5" noValidate onSubmit={onSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input autoComplete="name" maxLength={80} placeholder="Jane Smith" required {...field} />
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
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input autoComplete="email" maxLength={120} placeholder="jane@example.com" required type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input autoComplete="tel-national" inputMode="tel" maxLength={25} placeholder="(555) 234-5678" required type="tel" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Topic</FormLabel>
                          <FormControl>
                            <Input maxLength={100} placeholder="Internet billing question" required {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How Can We Help?</FormLabel>
                        <FormControl>
                          <Textarea maxLength={1500} placeholder="Share the issue, provider, timeline, and the kind of help you need." required rows={6} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input autoComplete="off" tabIndex={-1} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to our Terms & Conditions and Privacy Policy. Messages are sent only to secure HTTPS endpoints and reviewed before any follow-up.
                  </p>

                  <Button disabled={form.formState.isSubmitting} size="lg" type="submit">
                    {form.formState.isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {form.formState.isSubmitting ? "Submitting Securely..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            <div className="space-y-8">
              <h2 className="mb-6 text-2xl font-bold font-heading">Reach Our Team Directly</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+18668678680" className="text-muted-foreground hover:text-primary">(866) 867-8680</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:support@connectcoresolutions.com" className="text-muted-foreground hover:text-primary">support@connectcoresolutions.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="text-muted-foreground">Serving clients remotely across the United States</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-accent p-6">
                <p className="text-xs text-accent-foreground">
                  ConnectCore Solutions is a fully independent advisory service. We are not affiliated with any ISP, cable, or streaming company. Advisory fees apply separately for all consultations provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
