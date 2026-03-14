"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/submit-form";

interface Props {
  formName: string;
  showLoanGoal?: boolean;
  showMessage?: boolean;
  extraData?: Record<string, string>;
  buttonText?: string;
  compact?: boolean;
}

const loanGoalOptions = [
  { value: "", label: "Select loan goal..." },
  { value: "purchase", label: "Purchase" },
  { value: "refinance", label: "Refinance" },
  { value: "renewal", label: "Renewal" },
  { value: "investment", label: "Investment" },
  { value: "other", label: "Other" },
];

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function LeadForm({
  formName,
  showLoanGoal = true,
  showMessage = true,
  extraData,
  buttonText = "Start the Conversation",
  compact = false,
}: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    loanGoal: "",
    message: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [shaking, setShaking] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "Required";
    if (!form.lastName.trim()) errs.lastName = "Required";
    if (!form.email.trim()) {
      errs.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Invalid email";
    }
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      errs.phone = "Required";
    } else if (phoneDigits.length < 7) {
      errs.phone = "Invalid phone";
    }
    if (!consent) errs.consent = "Required";
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
      const firstErrorField = formRef.current?.querySelector('[class*="border-red"]');
      if (firstErrorField) (firstErrorField as HTMLElement).focus();
    }

    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    const payload: Record<string, string> = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.replace(/\D/g, ""),
    };
    if (form.loanGoal) payload.loanGoal = form.loanGoal;
    if (form.message.trim()) payload.message = form.message.trim();
    if (extraData) Object.assign(payload, extraData);

    try {
      const result = await submitLead(payload, formName);
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 success-pop">
          <svg aria-hidden="true" className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path className="draw-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary mb-1">Got It — I&apos;ll Be in Touch Soon</h3>
        <p className="text-text-muted text-sm mb-4">Chaunci will personally follow up to talk through your options.</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
          <Link href="/mortgage-calculator/" className="text-accent hover:text-accent-dark font-medium">
            Try our calculators while you wait →
          </Link>
        </div>
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-sm text-text-muted mb-2">Have you worked with us before?</p>
          <a href="https://g.page/r/kinsfolkmortgage/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-dark font-medium transition-colors">
            Leave us a Google review
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border-2 bg-white text-text-dark focus:outline-none text-sm transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
        : "border-border focus:border-accent focus:ring-2 focus:ring-accent/10"
    }`;

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className={`space-y-4 ${shaking ? "shake" : ""}`}>
      <div className={compact ? "space-y-3" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}>
        <div>
          <input
            type="text"
            placeholder="First name *"
            aria-label="First name"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            className={inputClass("firstName")}
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <input
            type="text"
            placeholder="Last name *"
            aria-label="Last name"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            className={inputClass("lastName")}
          />
          {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
        </div>
      </div>
      <div>
        <input
          type="email"
          placeholder="Email address *"
          aria-label="Email address"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass("email")}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone number *"
          aria-label="Phone number"
          value={form.phone}
          onChange={(e) => update("phone", formatPhone(e.target.value))}
          className={inputClass("phone")}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {showLoanGoal && (
        <div>
          <select
            value={form.loanGoal}
            onChange={(e) => update("loanGoal", e.target.value)}
            aria-label="Loan goal"
            className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10 text-sm transition-all duration-200 bg-white"
          >
            {loanGoalOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {showMessage && (
        <div>
          <textarea
            placeholder="Message or notes (optional)"
            aria-label="Message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white text-text-dark focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10 text-sm transition-all duration-200 resize-none"
          />
        </div>
      )}

      <label className="flex items-start gap-2 text-xs text-text-muted cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            setErrors((prev) => ({ ...prev, consent: "" }));
          }}
          className="mt-0.5 accent-accent"
          aria-label="Consent to communications policy and privacy policy"
        />
        <span>
          By checking this box, I consent to receive calls, emails, and SMS/text messages
          from Kinsfolk Mortgage LLC at the phone number provided, including by autodialer.
          Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg frequency
          varies. Reply STOP to cancel. I agree to the{" "}
          <Link href="/communications-policy/" className="text-primary underline hover:text-accent transition-colors">
            Communications Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy/" className="text-primary underline hover:text-accent transition-colors">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm flex items-start gap-2">
          <svg aria-hidden="true" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-[0.98]"
      >
        {submitting ? (
          <>
            <svg aria-hidden="true" className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          buttonText
        )}
      </button>
    </form>
  );
}
