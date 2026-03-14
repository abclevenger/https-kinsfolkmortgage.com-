/**
 * Client-side tracking utilities.
 * Captures UTM parameters, referrer, page context, and user agent.
 */

export interface TrackingData {
  pageUrl: string;
  pageTitle: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  timestamp: string;
  userAgent: string;
}

export function getTrackingData(): TrackingData {
  if (typeof window === "undefined") {
    return {
      pageUrl: "",
      pageTitle: "",
      referrer: "",
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
      utmTerm: "",
      utmContent: "",
      timestamp: new Date().toISOString(),
      userAgent: "",
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    pageUrl: window.location.href,
    pageTitle: document.title,
    referrer: document.referrer,
    utmSource: params.get("utm_source") || "",
    utmMedium: params.get("utm_medium") || "",
    utmCampaign: params.get("utm_campaign") || "",
    utmTerm: params.get("utm_term") || "",
    utmContent: params.get("utm_content") || "",
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };
}
