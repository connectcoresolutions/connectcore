import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  getRemainingSubmissionCooldownMs,
  isDisposableEmail,
  isValidUsPhoneNumber,
  leadFormSchema,
  registerSubmissionAttempt,
  sanitizeLeadPayload,
} from "@/lib/leadSecurity";
import { trackLeadConversion } from "@/lib/tracking";

describe("leadSecurity", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.dataLayer = [];
    window.gtag = vi.fn();
  });

  it("sanitizes HTML and script payloads", () => {
    const result = sanitizeLeadPayload({
      fullName: " <b>Jane Smith</b> ",
      email: " Jane@Example.com ",
      phone: "(555) 234-5678",
      topic: "<script>alert(1)</script> Billing",
      message: "Need <strong>help</strong> with a modem swap.",
      company: "",
    });

    expect(result.fullName).toBe("Jane Smith");
    expect(result.email).toBe("jane@example.com");
    expect(result.topic).toBe("Billing");
    expect(result.message).toBe("Need help with a modem swap.");
  });

  it("accepts valid lead payloads and rejects disposable emails", () => {
    const valid = leadFormSchema.safeParse({
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "(555) 234-5678",
      topic: "Billing support",
      message: "I need help understanding a recent internet billing change.",
      company: "",
    });

    const invalid = leadFormSchema.safeParse({
      fullName: "Jane Smith",
      email: "jane@mailinator.com",
      phone: "(555) 234-5678",
      topic: "Billing support",
      message: "I need help understanding a recent internet billing change.",
      company: "",
    });

    expect(valid.success).toBe(true);
    expect(invalid.success).toBe(false);
    expect(isDisposableEmail("jane@mailinator.com")).toBe(true);
  });

  it("validates US phone numbers and enforces session throttling", () => {
    expect(isValidUsPhoneNumber("(555) 234-5678")).toBe(true);
    expect(isValidUsPhoneNumber("12345")).toBe(false);

    const baseTime = 1_000_000;

    for (let index = 0; index < 5; index += 1) {
      registerSubmissionAttempt(baseTime + index * 1000);
    }

    expect(getRemainingSubmissionCooldownMs(baseTime + 5_000)).toBeGreaterThan(0);
    expect(getRemainingSubmissionCooldownMs(baseTime + 61_000)).toBe(0);
  });
});

describe("tracking", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.dataLayer = [];
    window.gtag = vi.fn();
  });

  it("tracks a conversion once per session", () => {
    const firstTracked = trackLeadConversion({
      conversionId: "lead-123",
      pagePath: "/thank-you",
      topic: "Billing support",
    });

    const secondTracked = trackLeadConversion({
      conversionId: "lead-123",
      pagePath: "/thank-you",
      topic: "Billing support",
    });

    expect(firstTracked).toBe(true);
    expect(secondTracked).toBe(false);
    expect(window.dataLayer).toHaveLength(1);
    expect(window.gtag).toHaveBeenCalledTimes(1);
  });
});