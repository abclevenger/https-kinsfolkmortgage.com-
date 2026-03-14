/**
 * Client-side form submission utility.
 * Posts lead data to our API route, which then forwards to GHL.
 */

import { getTrackingData } from "./tracking";

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitLead(
  formData: Record<string, string>,
  formName: string,
  calculatorData?: Record<string, string>
): Promise<SubmitResult> {
  const tracking = getTrackingData();

  const payload: Record<string, string> = {
    ...formData,
    ...tracking,
    formName,
    ...(calculatorData || {}),
  };

  try {
    const res = await fetch("/api/submit-lead/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return { success: data.success, message: data.message };
  } catch {
    return { success: false, message: "Network error. Please check your connection and try again." };
  }
}
