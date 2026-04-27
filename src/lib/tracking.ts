declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type LeadConversionEvent = {
  conversionId: string;
  pagePath: string;
  topic?: string;
};

const trackedConversionKeyPrefix = "connectcore:tracked-conversion:";

const hasTrackedConversion = (conversionId: string) => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(`${trackedConversionKeyPrefix}${conversionId}`) === "1";
};

const markConversionTracked = (conversionId: string) => {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(`${trackedConversionKeyPrefix}${conversionId}`, "1");
};

export const trackLeadConversion = ({ conversionId, pagePath, topic }: LeadConversionEvent) => {
  if (hasTrackedConversion(conversionId)) {
    return false;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: import.meta.env.VITE_GTM_LEAD_EVENT_NAME || "lead_form_submitted",
    conversionId,
    pagePath,
    topic,
  });

  if (typeof window.gtag === "function") {
    const eventName = import.meta.env.VITE_GA_LEAD_EVENT_NAME || "generate_lead";
    const adsSendTo = import.meta.env.VITE_GOOGLE_ADS_SEND_TO;

    window.gtag("event", eventName, {
      event_category: "lead",
      event_label: topic || "contact",
      ...(adsSendTo ? { send_to: adsSendTo } : {}),
    });
  }

  markConversionTracked(conversionId);
  return true;
};

export {};