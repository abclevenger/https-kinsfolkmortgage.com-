"use client";

import { useState } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/submit-form";

interface StepConfig {
  question: string;
  subtitle?: string;
  type: "choice" | "text" | "slider" | "contact";
  options?: string[];
  field?: string;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  showFor?: "purchase" | "refinance" | "both";
}

const steps: StepConfig[] = [
  {
    question: "Purchase or Refinance?",
    type: "choice",
    options: ["I want to purchase", "I want to refinance"],
    field: "loanType",
    showFor: "both",
  },
  {
    question: "City or Zip Code",
    subtitle: "Where is the home located?",
    type: "text",
    field: "homeLocation",
    showFor: "both",
  },
  {
    question: "What type of home is it?",
    type: "choice",
    options: ["Single Family", "Townhouse", "Condominium", "Multi-Family"],
    field: "propertyType",
    showFor: "both",
  },
  {
    question: "Where are you in the home buying process?",
    type: "choice",
    options: [
      "Looking to buy in more than 3 months",
      "Looking to buy in 1 to 3 months",
      "Looking to buy within one month",
      "Found a home",
      "Signed a purchase contract",
    ],
    field: "timeline",
    showFor: "purchase",
  },
  {
    question: "How do you plan to use your new home?",
    type: "choice",
    options: ["Primary Residence", "Vacation Property", "Investment Property"],
    field: "homeUse",
    showFor: "both",
  },
  {
    question: "Have you or your spouse served in the US military?",
    subtitle: "Veterans and active US military may be eligible for a $0 down VA loan.",
    type: "choice",
    options: ["Yes", "No"],
    field: "militaryStatus",
    showFor: "both",
  },
  {
    question: "Are you actively working with a real estate agent?",
    type: "choice",
    options: ["Yes", "No"],
    field: "hasAgent",
    showFor: "purchase",
  },
  {
    question: "Is this your first time purchasing a home?",
    type: "choice",
    options: ["Yes", "No"],
    field: "firstTimeBuyer",
    showFor: "purchase",
  },
  {
    question: "What is the approximate purchase price?",
    subtitle: "It's OK to estimate",
    type: "slider",
    field: "estimatedPurchasePrice",
    min: 50000,
    max: 1500000,
    step: 10000,
    prefix: "$",
    showFor: "purchase",
  },
  {
    question: "What is the estimated value of your property?",
    subtitle: "It's OK to estimate",
    type: "slider",
    field: "propertyValue",
    min: 50000,
    max: 1500000,
    step: 10000,
    prefix: "$",
    showFor: "refinance",
  },
  {
    question: "How much do you have for a down payment?",
    subtitle: "It's OK to estimate",
    type: "slider",
    field: "downPayment",
    min: 0,
    max: 500000,
    step: 5000,
    prefix: "$",
    showFor: "purchase",
  },
  {
    question: "What is the balance of your first mortgage?",
    subtitle: "It's OK to estimate",
    type: "slider",
    field: "mortgageBalance",
    min: 0,
    max: 1500000,
    step: 10000,
    prefix: "$",
    showFor: "refinance",
  },
  {
    question: "What is your current employment status?",
    type: "choice",
    options: ["Employed", "Self-Employed/1099 Independent Contractor", "Retired"],
    field: "employmentType",
    showFor: "both",
  },
  {
    question: "What is your household gross annual income?",
    subtitle: "Before taxes",
    type: "choice",
    options: [
      "Less than $30,000",
      "$30,000 - $50,000",
      "$50,000 - $75,000",
      "$75,000 - $100,000",
      "Greater than $100,000",
    ],
    field: "annualIncome",
    showFor: "both",
  },
  {
    question: "Do you know your approximate credit score?",
    subtitle: "Don't worry — there are options for every range.",
    type: "choice",
    options: ["Excellent 740+", "Good 700-739", "Average 660-699", "Fair 600-659", "Poor < 600"],
    field: "creditRange",
    showFor: "both",
  },
  {
    question: "Have you had a bankruptcy or foreclosure in the past 3 years?",
    subtitle: "This doesn't disqualify you — it just helps me know what programs to look at.",
    type: "choice",
    options: ["No", "Yes"],
    field: "bankruptcyOrForeclosure",
    showFor: "both",
  },
  {
    question: "Last step — how should I reach you?",
    subtitle: "I'll personally follow up to talk through your options.",
    type: "contact",
    field: "contact",
    showFor: "both",
  },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

interface Props {
  /** Override the form name sent in the webhook payload */
  formName?: string;
  /** Extra data to merge into the payload (e.g. calculator results) */
  extraData?: Record<string, string>;
}

export default function MortgageForm({ formName = "Mortgage Pre-Qualification", extraData }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});
  const [animDir, setAnimDir] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);

  const loanType = answers["loanType"]?.includes("purchase") ? "purchase" : "refinance";
  const loanGoal = answers["loanType"]?.includes("purchase") ? "purchase" : "refinance";

  const visibleSteps = steps.filter(
    (s) => s.showFor === "both" || s.showFor === loanType || currentStep === 0
  );

  const step = visibleSteps[currentStep];
  const totalSteps = visibleSteps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  function animateStep(dir: "forward" | "back", newStep: number) {
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentStep(newStep);
      setAnimating(false);
    }, 150);
  }

  function handleChoice(value: string) {
    setAnswers((prev) => ({ ...prev, [step.field!]: value }));
    if (currentStep < totalSteps - 1) {
      setTimeout(() => animateStep("forward", currentStep + 1), 150);
    }
  }

  function handleNext() {
    if (currentStep < totalSteps - 1) {
      animateStep("forward", currentStep + 1);
    }
  }

  function handleBack() {
    if (currentStep > 0) {
      animateStep("back", currentStep - 1);
    }
  }

  function formatPhone(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  function validateContact(): boolean {
    const errors: Record<string, string> = {};
    if (!contact.firstName.trim()) errors.firstName = "First name is required";
    if (!contact.lastName.trim()) errors.lastName = "Last name is required";
    if (!contact.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!contact.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s()-]{7,}$/.test(contact.phone)) {
      errors.phone = "Enter a valid phone number";
    }
    if (!consent) errors.consent = "You must agree to the Communications Policy";
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit() {
    if (!validateContact()) return;
    if (submitting) return;

    setSubmitting(true);
    setSubmitError("");

    const payload: Record<string, string> = {
      firstName: contact.firstName.trim(),
      lastName: contact.lastName.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
      loanGoal,
      ...answers,
      ...(extraData || {}),
    };

    try {
      const result = await submitLead(payload, formName);
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 success-pop">
          <svg aria-hidden="true" className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path className="draw-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-2">Great — I&apos;ll Be in Touch Soon</h3>
        <p className="text-text-muted mb-4">
          I&apos;ve got your information and I&apos;ll personally reach out to walk through your
          options. Talk soon!
        </p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
          <Link href="/mortgage-calculator/" className="text-accent hover:text-accent-dark font-medium transition-colors">
            Estimate your payment →
          </Link>
          <span className="hidden sm:inline text-text-light">·</span>
          <Link href="/first-time-home-buyer/" className="text-accent hover:text-accent-dark font-medium transition-colors">
            First-time buyer guide →
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

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex justify-between text-xs text-text-muted mb-2">
          <span>
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        className={`min-h-[280px] flex flex-col transition-all duration-150 ease-out ${
          animating
            ? animDir === "forward"
              ? "opacity-0 translate-x-4"
              : "opacity-0 -translate-x-4"
            : "opacity-100 translate-x-0"
        }`}
      >
        <h3 className="text-xl font-bold text-primary mb-1">{step.question}</h3>
        {step.subtitle && <p className="text-sm text-text-muted mb-6">{step.subtitle}</p>}
        {!step.subtitle && <div className="mb-6" />}

        {step.type === "choice" && (
          <div className="space-y-2">
            {step.options!.map((opt) => (
              <button
                key={opt}
                onClick={() => handleChoice(opt)}
                className={`w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
                  answers[step.field!] === opt
                    ? "border-accent bg-accent/10 text-primary"
                    : "border-border hover:border-accent/50 text-text-dark hover:bg-accent/5"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step.type === "text" && (
          <div>
            <input
              type="text"
              value={answers[step.field!] || ""}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [step.field!]: e.target.value }))}
              onKeyDown={(e) => {
                if (e.key === "Enter" && answers[step.field!]?.trim()) {
                  e.preventDefault();
                  handleNext();
                }
              }}
              placeholder="Enter city or zip code..."
              aria-label="City or zip code"
              className="w-full px-5 py-3.5 rounded-xl border-2 border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/10 text-sm transition-all duration-200"
              autoFocus
            />
          </div>
        )}

        {step.type === "slider" && (
          <div>
            <div className="text-3xl font-bold text-primary mb-6 text-center">
              {step.prefix}
              {formatNumber(Number(answers[step.field!] || step.min || 0))}
              {step.suffix}
            </div>
            <input
              type="range"
              min={step.min}
              max={step.max}
              step={step.step}
              value={answers[step.field!] || step.min}
              onChange={(e) => setAnswers((prev) => ({ ...prev, [step.field!]: e.target.value }))}
              aria-label={step.question}
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-xs text-text-muted mt-2">
              <span>
                {step.prefix}
                {formatNumber(step.min || 0)}
              </span>
              <span>
                {step.prefix}
                {formatNumber(step.max || 0)}
              </span>
            </div>
          </div>
        )}

        {step.type === "contact" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="First name *"
                  aria-label="First name"
                  value={contact.firstName}
                  onChange={(e) => {
                    setContact((c) => ({ ...c, firstName: e.target.value }));
                    setContactErrors((prev) => ({ ...prev, firstName: "" }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none text-sm transition-all duration-200 ${
                    contactErrors.firstName
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      : "border-border focus:border-accent focus:ring-2 focus:ring-accent/10"
                  }`}
                />
                {contactErrors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{contactErrors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name *"
                  aria-label="Last name"
                  value={contact.lastName}
                  onChange={(e) => {
                    setContact((c) => ({ ...c, lastName: e.target.value }));
                    setContactErrors((prev) => ({ ...prev, lastName: "" }));
                  }}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none text-sm transition-all duration-200 ${
                    contactErrors.lastName
                      ? "border-red-400 focus:border-red-500"
                      : "border-border focus:border-accent focus:ring-2 focus:ring-accent/10"
                  }`}
                />
                {contactErrors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{contactErrors.lastName}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address *"
                aria-label="Email address"
                value={contact.email}
                onChange={(e) => {
                  setContact((c) => ({ ...c, email: e.target.value }));
                  setContactErrors((prev) => ({ ...prev, email: "" }));
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none text-sm transition-all duration-200 ${
                  contactErrors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-border focus:border-accent focus:ring-2 focus:ring-accent/10"
                }`}
              />
              {contactErrors.email && (
                <p className="text-red-500 text-xs mt-1">{contactErrors.email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone number *"
                aria-label="Phone number"
                value={contact.phone}
                onChange={(e) => {
                  setContact((c) => ({ ...c, phone: formatPhone(e.target.value) }));
                  setContactErrors((prev) => ({ ...prev, phone: "" }));
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none text-sm transition-all duration-200 ${
                  contactErrors.phone
                    ? "border-red-400 focus:border-red-500"
                    : "border-border focus:border-accent focus:ring-2 focus:ring-accent/10"
                }`}
              />
              {contactErrors.phone && (
                <p className="text-red-500 text-xs mt-1">{contactErrors.phone}</p>
              )}
            </div>
            <div>
              <label className="flex items-start gap-2 text-xs text-text-muted mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setContactErrors((prev) => ({ ...prev, consent: "" }));
                  }}
                  className="mt-0.5 accent-accent"
                  aria-label="Consent to communications policy and privacy policy"
                />
                <span>
                  By checking this box, I consent to receive calls, emails, and SMS/text messages
                  from Kinsfolk Mortgage LLC at the phone number provided, including by autodialer.
                  Consent is not a condition of purchase. Msg &amp; data rates may apply. Msg frequency
                  varies. Reply STOP to cancel. I agree to the{" "}
                  <Link href="/communications-policy/" className="text-primary underline">
                    Communications Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy/" className="text-primary underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {contactErrors.consent && (
                <p className="text-red-500 text-xs mt-1">{contactErrors.consent}</p>
              )}
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">
                {submitError}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-6 py-2.5 text-sm font-medium text-text-muted hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          Back
        </button>
        {step.type === "contact" ? (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-8 py-2.5 bg-accent hover:bg-accent-dark text-primary-dark font-semibold text-sm rounded-xl transition-colors shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {submitting ? (
              <>
                <svg aria-hidden="true" className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </>
            ) : (
              "Submit"
            )}
          </button>
        ) : step.type !== "choice" ? (
          <button
            onClick={handleNext}
            className="px-8 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-xl transition-colors"
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}
