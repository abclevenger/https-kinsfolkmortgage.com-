import { NextRequest, NextResponse } from "next/server";
import { sanitizePayload, sendToGHL } from "@/lib/webhook";

/**
 * POST /api/submit-lead
 *
 * Receives lead form data from the front end, sanitizes it,
 * then forwards it to GoHighLevel via webhook.
 *
 * This server-side proxy avoids CORS issues and keeps the
 * webhook URL out of client-side code.
 */
export async function POST(request: NextRequest) {
  try {
    const raw = await request.json();

    if (!raw.firstName || !raw.lastName || !raw.email || !raw.phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields: firstName, lastName, email, phone" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(raw.email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    const payload = sanitizePayload(raw);

    if (!payload.timestamp) {
      payload.timestamp = new Date().toISOString();
    }

    const result = await sendToGHL(payload);

    if (process.env.FORM_DEBUG === "true") {
      console.log("[api/submit-lead]", result);
    }

    if (!result.success && process.env.GHL_WEBHOOK_URL) {
      return NextResponse.json(
        { success: false, message: "Submission failed. Please try again." },
        { status: 502 }
      );
    }

    // If webhook URL isn't set, we still return success in dev so the UI flow works
    return NextResponse.json({
      success: true,
      message: process.env.GHL_WEBHOOK_URL
        ? "Thank you! Your information has been submitted."
        : "Form received (webhook not configured — dev mode).",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error processing your request." },
      { status: 500 }
    );
  }
}
