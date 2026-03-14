"use client";

import { useState } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/submit-form";

export default function RealEstateAgentRecommendationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    areaSeeking: "",
    notes: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\+?[\d\s()-]{7,}$/.test(formData.phone)) {
      errs.phone = "Enter a valid phone number";
    }
    if (!consent) errs.consent = "You must agree to the Communications Policy";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate() || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    const payload: Record<string, string> = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
    };
    if (formData.areaSeeking.trim()) payload.areaSeeking = formData.areaSeeking.trim();
    if (formData.notes.trim()) payload.message = formData.notes.trim();

    try {
      const result = await submitLead(payload, "Real Estate Agent Recommendation");
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

  const inputClass = (field: string) =>
    `w-full rounded-xl border-2 focus:outline-none px-4 py-3 text-sm transition-colors ${
      errors[field] ? "border-red-400 focus:border-red-500" : "border-border focus:border-accent"
    }`;

  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Real Estate Agent Recommendation
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Let us connect you with experienced and trusted real estate professionals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            <p className="text-text-muted leading-relaxed">
              Finding the right real estate agent can make all the difference in your home buying
              or selling journey. At Kinsfolk Mortgage, we understand the importance of working
              with professionals who have your best interests at heart.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">
                Real Estate Agent Endorsements
              </h2>
              <p className="text-text-muted leading-relaxed">
                The agents we recommend come highly recommended based on their track record of
                success, professionalism, and dedication to their clients. We only refer you to
                professionals we trust.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Community Expertise</h2>
              <p className="text-text-muted leading-relaxed">
                Our recommended agents have a comprehensive grasp of the local market. They know
                the neighborhoods, schools, amenities, and market trends to help you make informed
                decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Personalized Matchmaking</h2>
              <p className="text-text-muted leading-relaxed">
                We take the time to understand your needs, preferences, and goals. Based on your
                unique situation, we connect you with the right agent who can best serve you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">How It Works</h2>
              <ol className="list-decimal list-inside space-y-3 text-text-muted">
                <li>
                  <span className="font-semibold text-primary">Fill Out the Form</span> – Share your
                  details and what you&apos;re looking for.
                </li>
                <li>
                  <span className="font-semibold text-primary">Expert Analysis</span> – We review
                  your needs and identify the best agent matches.
                </li>
                <li>
                  <span className="font-semibold text-primary">Meet Your Match</span> – We introduce
                  you to agents who fit your criteria.
                </li>
                <li>
                  <span className="font-semibold text-primary">Make the Connection</span> – You
                  connect directly with your recommended agent and get started.
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                  <p className="text-text-muted">
                    We&apos;ve received your information. We&apos;ll be in touch shortly to connect
                    you with a trusted real estate professional.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-1">
                        First Name *
                      </label>
                      <input id="firstName" type="text" value={formData.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass("firstName")} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-1">
                        Last Name *
                      </label>
                      <input id="lastName" type="text" value={formData.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass("lastName")} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                      Email *
                    </label>
                    <input id="email" type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass("email")} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                      Phone *
                    </label>
                    <input id="phone" type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass("phone")} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="areaSeeking" className="block text-sm font-medium text-primary mb-1">
                      Area Seeking (City or Zip)
                    </label>
                    <input id="areaSeeking" type="text" value={formData.areaSeeking} onChange={(e) => update("areaSeeking", e.target.value)} className={inputClass("areaSeeking")} />
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-primary mb-1">
                      Notes
                    </label>
                    <textarea id="notes" rows={4} value={formData.notes} onChange={(e) => update("notes", e.target.value)} className="w-full rounded-xl border-2 border-border focus:border-accent focus:outline-none px-4 py-3 text-sm transition-colors resize-none" />
                  </div>

                  <label className="flex items-start gap-2 text-xs text-text-muted cursor-pointer">
                    <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); setErrors((prev) => ({ ...prev, consent: "" })); }} className="mt-0.5 accent-accent" />
                    <span>
                      I agree to the{" "}
                      <Link href="/communications-policy/" className="text-primary underline">Communications Policy</Link>.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs">{errors.consent}</p>}

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700 text-sm">{submitError}</div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-8 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-semibold rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              )}
            </div>

            <p className="text-sm text-text-muted italic">
              Your information is kept confidential. We only share your details with agents we
              recommend, and only with your consent.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
