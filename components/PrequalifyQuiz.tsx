"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/submit-form";

interface QuizAnswers {
  goal: string;
  homePrice: string;
  creditScore: string;
  downPayment: string;
  timeline: string;
}

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const STEPS = [
  {
    key: "goal" as const,
    question: "What\u2019s your goal?",
    subtitle: "Select the option that best describes your situation.",
    options: [
      { value: "Buy a Home", icon: "home" },
      { value: "Refinance", icon: "refresh" },
      { value: "Cash-Out Refinance", icon: "cash" },
      { value: "Investment Property", icon: "chart" },
    ],
  },
  {
    key: "homePrice" as const,
    question: "What\u2019s your target home price?",
    subtitle: "An estimate is perfectly fine at this stage.",
    options: [
      { value: "Under $250K", icon: null },
      { value: "$250K\u2013$400K", icon: null },
      { value: "$400K\u2013$600K", icon: null },
      { value: "$600K\u2013$800K", icon: null },
      { value: "$800K+", icon: null },
    ],
  },
  {
    key: "creditScore" as const,
    question: "What\u2019s your estimated credit score?",
    subtitle: "Don\u2019t worry \u2014 this won\u2019t affect your score.",
    options: [
      { value: "Excellent (740+)", icon: null },
      { value: "Good (680\u2013739)", icon: null },
      { value: "Fair (620\u2013679)", icon: null },
      { value: "Below 620", icon: null },
      { value: "Not Sure", icon: null },
    ],
  },
  {
    key: "downPayment" as const,
    question: "How much can you put down?",
    subtitle: "Your down payment affects which programs you qualify for.",
    options: [
      { value: "0% (VA/USDA eligible)", icon: null },
      { value: "Less than 3.5%", icon: null },
      { value: "3.5%\u20135%", icon: null },
      { value: "5%\u201310%", icon: null },
      { value: "10%\u201320%", icon: null },
      { value: "20%+", icon: null },
    ],
  },
  {
    key: "timeline" as const,
    question: "When do you plan to buy or refinance?",
    subtitle: "This helps us prioritize your application.",
    options: [
      { value: "ASAP (0\u201330 days)", icon: null },
      { value: "1\u20133 Months", icon: null },
      { value: "3\u20136 Months", icon: null },
      { value: "6\u201312 Months", icon: null },
      { value: "Just Exploring", icon: null },
    ],
  },
];

const TOTAL_STEPS = 6;

function StepIcon({ type }: { type: string }) {
  switch (type) {
    case "home":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1m-2 0h2" />
        </svg>
      );
    case "refresh":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case "cash":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "chart":
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function getPrograms(answers: QuizAnswers): string[] {
  const programs: string[] = [];
  const { creditScore, downPayment } = answers;

  if (downPayment === "0% (VA/USDA eligible)") {
    programs.push("You may qualify for VA or USDA zero-down programs");
  }

  if (
    (creditScore === "Excellent (740+)" || creditScore === "Good (680\u2013739)") &&
    downPayment !== "0% (VA/USDA eligible)" &&
    downPayment !== "Less than 3.5%"
  ) {
    programs.push("You likely qualify for Conventional and FHA programs");
  }

  if (creditScore === "Below 620") {
    programs.push("FHA programs may be available with credit counseling");
  }

  if (
    programs.length === 0 &&
    creditScore !== "Below 620"
  ) {
    programs.push("Multiple loan programs may be available for your situation");
  }

  return programs;
}

export default function PrequalifyQuiz() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);
  const [answers, setAnswers] = useState<QuizAnswers>({
    goal: "",
    homePrice: "",
    creditScore: "",
    downPayment: "",
    timeline: "",
  });
  const [contact, setContact] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const goTo = useCallback(
    (next: number, dir: "forward" | "back") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setStep(next);
        setAnimating(false);
      }, 250);
    },
    [animating]
  );

  function handleOption(key: keyof QuizAnswers, value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
    if (step < STEPS.length) {
      goTo(step + 1, "forward");
    }
  }

  function handleBack() {
    if (step > 0) goTo(step - 1, "back");
  }

  function updateContact(field: keyof ContactInfo, value: string) {
    setContact((c) => ({ ...c, [field]: value }));
    setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!contact.firstName.trim()) errs.firstName = "First name is required";
    if (!contact.lastName.trim()) errs.lastName = "Last name is required";
    if (!contact.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) {
      errs.email = "Please enter a valid email";
    }
    if (!contact.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(contact.phone.replace(/\D/g, ""))) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (!consent) errs.consent = "You must agree to continue";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    const payload: Record<string, string> = {
      goal: answers.goal,
      homePrice: answers.homePrice,
      creditScore: answers.creditScore,
      downPayment: answers.downPayment,
      timeline: answers.timeline,
      firstName: contact.firstName.trim(),
      lastName: contact.lastName.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
    };

    try {
      const result = await submitLead(payload, "Pre-Qualification Quiz");
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

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  if (submitted) {
    const programs = getPrograms(answers);
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-border/50 text-center">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-3">
            You&apos;re Pre-Qualified!
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Great news, {contact.firstName}! Based on your answers, here&apos;s what we found:
          </p>

          <div className="space-y-3 mb-8">
            {programs.map((program) => (
              <div
                key={program}
                className="flex items-start gap-3 text-left bg-bg-light rounded-xl px-5 py-4 border border-border/50"
              >
                <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-primary font-medium">{program}</span>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-xl p-5 mb-8 border border-primary/10">
            <p className="text-primary text-sm font-medium">
              A Kinsfolk Mortgage specialist will contact you within 24 hours with personalized options.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact-me/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-xl transition-colors shadow-lg shadow-accent/20 text-center"
            >
              Schedule a Call
            </Link>
            <Link
              href="/quote/"
              className="px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-colors text-center"
            >
              Apply Online
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl border-2 focus:outline-none text-sm transition-colors bg-white ${
      errors[field] ? "border-red-400 focus:border-red-500" : "border-border focus:border-accent"
    }`;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-primary">
            Step {step + 1} of {TOTAL_STEPS}
          </span>
          <span className="text-sm text-text-muted">
            {Math.round(progress)}% complete
          </span>
        </div>
        <div className="w-full h-2 bg-border/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      <div
        className={`transition-all duration-250 ease-in-out ${
          animating
            ? direction === "forward"
              ? "opacity-0 translate-x-8"
              : "opacity-0 -translate-x-8"
            : "opacity-100 translate-x-0"
        }`}
      >
        {step < STEPS.length ? (
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-border/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              {STEPS[step].question}
            </h2>
            <p className="text-text-muted mb-8">{STEPS[step].subtitle}</p>

            <div className={`grid gap-3 ${
              STEPS[step].options.length <= 4
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}>
              {STEPS[step].options.map((option) => {
                const isSelected = answers[STEPS[step].key] === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOption(STEPS[step].key, option.value)}
                    className={`relative flex items-center gap-3 px-5 py-4 rounded-xl border-2 text-left font-medium transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-accent bg-accent/10 text-primary shadow-md shadow-accent/10"
                        : "border-border hover:border-accent/50 hover:bg-bg-light text-primary"
                    }`}
                  >
                    {option.icon && (
                      <span className={`shrink-0 ${isSelected ? "text-accent" : "text-text-muted"}`}>
                        <StepIcon type={option.icon} />
                      </span>
                    )}
                    <span className="text-sm sm:text-base">{option.value}</span>
                    {isSelected && (
                      <svg className="w-5 h-5 text-accent ml-auto shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {step > 0 && (
              <button
                onClick={handleBack}
                className="mt-6 flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
          </div>
        ) : (
          /* Step 6: Contact Form */
          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-border/50">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
              Almost done! How can we reach you?
            </h2>
            <p className="text-text-muted mb-8">
              Enter your info below and a mortgage specialist will follow up with your personalized options.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="pq-firstName" className="block text-sm font-medium text-primary mb-1.5">
                    First name
                  </label>
                  <input
                    id="pq-firstName"
                    type="text"
                    placeholder="John"
                    value={contact.firstName}
                    onChange={(e) => updateContact("firstName", e.target.value)}
                    className={inputClass("firstName")}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="pq-lastName" className="block text-sm font-medium text-primary mb-1.5">
                    Last name
                  </label>
                  <input
                    id="pq-lastName"
                    type="text"
                    placeholder="Doe"
                    value={contact.lastName}
                    onChange={(e) => updateContact("lastName", e.target.value)}
                    className={inputClass("lastName")}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="pq-email" className="block text-sm font-medium text-primary mb-1.5">
                  Email address
                </label>
                <input
                  id="pq-email"
                  type="email"
                  placeholder="john@example.com"
                  value={contact.email}
                  onChange={(e) => updateContact("email", e.target.value)}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="pq-phone" className="block text-sm font-medium text-primary mb-1.5">
                  Phone number
                </label>
                <input
                  id="pq-phone"
                  type="tel"
                  placeholder="(813) 555-1234"
                  value={contact.phone}
                  onChange={(e) => updateContact("phone", e.target.value)}
                  className={inputClass("phone")}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <label className="flex items-start gap-2.5 text-sm text-text-muted cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setErrors((prev) => ({ ...prev, consent: "" }));
                  }}
                  className="mt-0.5 accent-accent w-4 h-4"
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
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-4 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-xl transition-colors shadow-lg shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Getting Your Results...
                  </>
                ) : (
                  "See My Results"
                )}
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="w-full flex items-center justify-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors cursor-pointer pt-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            </form>
          </div>
        )}
      </div>

      {/* No credit check notice */}
      <p className="text-center text-xs text-text-muted mt-6">
        <svg className="w-4 h-4 inline-block mr-1 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        No hard credit pull at this stage. Your information is secure and encrypted. This is not a loan application.
      </p>
    </div>
  );
}
