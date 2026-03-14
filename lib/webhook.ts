/**
 * Centralized GoHighLevel webhook integration.
 *
 * Server-side only — used by the API route in app/api/submit-lead/route.ts.
 * The webhook URL is read from the GHL_WEBHOOK_URL environment variable.
 */

export interface LeadPayload {
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Lead details
  loanGoal?: string;
  message?: string;

  // Qualification (optional)
  estimatedPurchasePrice?: string;
  downPayment?: string;
  creditRange?: string;
  timeline?: string;
  employmentType?: string;
  propertyType?: string;
  firstTimeBuyer?: string;

  // Mortgage form extended fields
  homeLocation?: string;
  homeUse?: string;
  militaryStatus?: string;
  militaryBranch?: string;
  hasAgent?: string;
  annualIncome?: string;
  bankruptcyOrForeclosure?: string;
  mortgageBalance?: string;
  currentInterestRate?: string;
  hasSecondMortgage?: string;
  additionalCashOut?: string;
  propertyValue?: string;

  // Calculator data (optional)
  calculatorType?: string;
  homePrice?: string;
  loanAmount?: string;
  interestRate?: string;
  amortizationTerm?: string;
  monthlyPaymentEstimate?: string;
  affordabilityEstimate?: string;
  refinanceSavingsEstimate?: string;
  closingCostEstimate?: string;

  // Tracking (auto-populated by the API route)
  pageUrl?: string;
  pageTitle?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  formName?: string;
  calculatorSource?: string;
  timestamp?: string;
  userAgent?: string;

  // Catch-all for any extra fields
  [key: string]: string | undefined;
}

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, 2000);
}

export function sanitizePayload(raw: Record<string, unknown>): LeadPayload {
  const clean: Record<string, string> = {};
  for (const [key, value] of Object.entries(raw)) {
    if (value !== undefined && value !== null && value !== "") {
      clean[key] = sanitize(value);
    }
  }
  return clean as LeadPayload;
}

export interface WebhookResult {
  success: boolean;
  message: string;
  status?: number;
}

export async function sendToGHL(payload: LeadPayload): Promise<WebhookResult> {
  // ── Webhook URL is read from environment ──────────────────────────────
  // Set GHL_WEBHOOK_URL in your .env.local file.
  // Example: GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/XXXXXXX
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    const msg = "GHL_WEBHOOK_URL is not configured. Lead was NOT forwarded.";
    if (process.env.FORM_DEBUG === "true") {
      console.warn(`[webhook] ${msg}`);
      console.log("[webhook] Payload that would have been sent:", JSON.stringify(payload, null, 2));
    }
    return { success: false, message: msg };
  }

  try {
    if (process.env.FORM_DEBUG === "true") {
      console.log("[webhook] Sending to:", webhookUrl);
      console.log("[webhook] Payload:", JSON.stringify(payload, null, 2));
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (process.env.FORM_DEBUG === "true") {
      console.log("[webhook] Response status:", response.status);
    }

    if (!response.ok) {
      return {
        success: false,
        message: `Webhook returned ${response.status}`,
        status: response.status,
      };
    }

    return { success: true, message: "Lead submitted successfully", status: response.status };
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : "Unknown error";
    if (process.env.FORM_DEBUG === "true") {
      console.error("[webhook] Error:", errMsg);
    }
    return { success: false, message: `Webhook failed: ${errMsg}` };
  }
}
