import { z } from "zod";

const disposableEmailDomains = new Set([
  "10minutemail.com",
  "dispostable.com",
  "fakeinbox.com",
  "guerrillamail.com",
  "maildrop.cc",
  "mailinator.com",
  "tempmail.com",
  "throwawaymail.com",
  "yopmail.com",
]);

const TAG_PATTERN = /<[^>]*>/g;
const SCRIPT_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const MULTISPACE_PATTERN = /\s{2,}/g;
const NON_DIGIT_PATTERN = /\D/g;

const submissionLimiterConfig = {
  key: "connectcore:lead-submissions",
  maxAttempts: 5,
  windowMs: 60_000,
  minFormFillMs: 3_000,
} as const;

export type LeadFormValues = {
  fullName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  company?: string;
};

const sanitizeText = (value: string) =>
  value
    .replace(SCRIPT_PATTERN, " ")
    .replace(TAG_PATTERN, " ")
    .replace(MULTISPACE_PATTERN, " ")
    .trim();

export const sanitizeLeadPayload = (values: LeadFormValues): LeadFormValues => ({
  ...values,
  fullName: sanitizeText(values.fullName),
  email: sanitizeText(values.email).toLowerCase(),
  phone: sanitizeText(values.phone),
  topic: sanitizeText(values.topic),
  message: sanitizeText(values.message),
  company: values.company ? sanitizeText(values.company) : "",
});

export const normalizeUsPhoneNumber = (value: string) => {
  const digits = value.replace(NON_DIGIT_PATTERN, "");

  if (digits.length === 11 && digits.startsWith("1")) {
    return digits.slice(1);
  }

  return digits;
};

export const isValidUsPhoneNumber = (value: string) => {
  const digits = normalizeUsPhoneNumber(value);

  if (digits.length !== 10) {
    return false;
  }

  const areaCode = Number(digits[0]);
  const centralOfficeCode = Number(digits[3]);

  return areaCode >= 2 && centralOfficeCode >= 2;
};

export const isDisposableEmail = (email: string) => {
  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? disposableEmailDomains.has(domain) : false;
};

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Name is too long."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .refine((value) => !isDisposableEmail(value), "Use a real business or personal email address."),
  phone: z
    .string()
    .trim()
    .refine(isValidUsPhoneNumber, "Enter a valid US phone number."),
  topic: z
    .string()
    .trim()
    .min(3, "Enter a topic.")
    .max(100, "Topic is too long."),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a bit more so we can help.")
    .max(1500, "Message is too long."),
  company: z
    .string()
    .optional()
    .transform((value) => value?.trim() ?? "")
    .refine((value) => value.length === 0, "Spam submission detected."),
});

export type LeadFormSchema = z.infer<typeof leadFormSchema>;

const readSubmissionAttempts = () => {
  if (typeof window === "undefined") {
    return [] as number[];
  }

  try {
    const stored = window.sessionStorage.getItem(submissionLimiterConfig.key);
    if (!stored) {
      return [] as number[];
    }

    const parsed = JSON.parse(stored) as unknown;
    return Array.isArray(parsed) ? parsed.filter((value): value is number => typeof value === "number") : [];
  } catch {
    return [] as number[];
  }
};

const writeSubmissionAttempts = (attempts: number[]) => {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(submissionLimiterConfig.key, JSON.stringify(attempts));
};

export const getRemainingSubmissionCooldownMs = (now = Date.now()) => {
  const recentAttempts = readSubmissionAttempts().filter((timestamp) => now - timestamp < submissionLimiterConfig.windowMs);
  writeSubmissionAttempts(recentAttempts);

  if (recentAttempts.length < submissionLimiterConfig.maxAttempts) {
    return 0;
  }

  const oldestAttempt = recentAttempts[0];
  return Math.max(submissionLimiterConfig.windowMs - (now - oldestAttempt), 0);
};

export const registerSubmissionAttempt = (now = Date.now()) => {
  const recentAttempts = readSubmissionAttempts().filter((timestamp) => now - timestamp < submissionLimiterConfig.windowMs);
  recentAttempts.push(now);
  writeSubmissionAttempts(recentAttempts);
};

export const isSubmissionTooFast = (formOpenedAt: number, submittedAt = Date.now()) =>
  submittedAt - formOpenedAt < submissionLimiterConfig.minFormFillMs;

export const submissionSecurityConfig = submissionLimiterConfig;