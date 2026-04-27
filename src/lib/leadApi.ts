import type { LeadFormSchema } from "@/lib/leadSecurity";

const defaultLeadEndpoint = "/api/leads";

const resolveLeadEndpoint = () => import.meta.env.VITE_LEAD_ENDPOINT_URL?.trim() || defaultLeadEndpoint;

const isSecureLeadEndpoint = (endpoint: string) => {
  if (endpoint.startsWith("/")) {
    return true;
  }

  try {
    const url = new URL(endpoint, window.location.origin);
    return url.protocol === "https:" || url.hostname === "localhost" || url.hostname === "127.0.0.1";
  } catch {
    return false;
  }
};

export type SubmitLeadResult = {
  conversionId: string;
};

export const submitLead = async (payload: LeadFormSchema): Promise<SubmitLeadResult> => {
  const endpoint = resolveLeadEndpoint();

  if (!isSecureLeadEndpoint(endpoint)) {
    throw new Error("Lead delivery must use HTTPS.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    credentials: "omit",
    body: JSON.stringify(payload),
  });

  let responseBody: unknown = null;

  try {
    responseBody = await response.json();
  } catch {
    responseBody = null;
  }

  if (!response.ok) {
    const message =
      typeof responseBody === "object" && responseBody !== null && "message" in responseBody
        ? String(responseBody.message)
        : "We could not send your message. Please try again or call our team directly.";

    throw new Error(message);
  }

  const conversionId =
    typeof responseBody === "object" && responseBody !== null && "conversionId" in responseBody
      ? String(responseBody.conversionId)
      : crypto.randomUUID();

  return { conversionId };
};