"use client";

import { useState } from "react";
import Link from "next/link";
import { submitLead } from "@/lib/submit-form";

export default function SecondLookPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    propertyState: "",
    closingDate: "",
    creditScore: "",
    propertyType: "",
    propertyUsage: "",
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
    if (formData.propertyState.trim()) payload.propertyState = formData.propertyState.trim();
    if (formData.closingDate.trim()) payload.closingDate = formData.closingDate.trim();
    if (formData.creditScore.trim()) payload.creditRange = formData.creditScore.trim();
    if (formData.propertyType) payload.propertyType = formData.propertyType;
    if (formData.propertyUsage) payload.homeUse = formData.propertyUsage;

    try {
      const result = await submitLead(payload, "Second Look");
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Second Look</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Compare your best offer with us today!
          </p>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <p className="text-text-muted leading-relaxed mb-10">
              Let&apos;s make sure you&apos;re getting the best deal possible! Submit your details
              and we&apos;ll let you know within 24 hours if we can beat their offer!
            </p>

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
                    We&apos;ve received your information. We&apos;ll review it and get back to you
                    within 24 hours to let you know if we can beat their offer!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="sl-firstName" className="block text-sm font-medium text-primary mb-1">First Name *</label>
                      <input id="sl-firstName" type="text" value={formData.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass("firstName")} />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="sl-lastName" className="block text-sm font-medium text-primary mb-1">Last Name *</label>
                      <input id="sl-lastName" type="text" value={formData.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass("lastName")} />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="sl-phone" className="block text-sm font-medium text-primary mb-1">Phone *</label>
                    <input id="sl-phone" type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass("phone")} />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="sl-email" className="block text-sm font-medium text-primary mb-1">Email *</label>
                    <input id="sl-email" type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass("email")} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="sl-propertyState" className="block text-sm font-medium text-primary mb-1">Property State</label>
                    <input id="sl-propertyState" type="text" value={formData.propertyState} onChange={(e) => update("propertyState", e.target.value)} className={inputClass("propertyState")} />
                  </div>
                  <div>
                    <label htmlFor="sl-closingDate" className="block text-sm font-medium text-primary mb-1">Closing Date</label>
                    <input id="sl-closingDate" type="date" value={formData.closingDate} onChange={(e) => update("closingDate", e.target.value)} className={inputClass("closingDate")} />
                  </div>
                  <div>
                    <label htmlFor="sl-creditScore" className="block text-sm font-medium text-primary mb-1">Credit Score</label>
                    <select id="sl-creditScore" value={formData.creditScore} onChange={(e) => update("creditScore", e.target.value)} className="w-full rounded-xl border-2 border-border focus:border-accent focus:outline-none px-4 py-3 text-sm transition-colors bg-white">
                      <option value="">Select credit range</option>
                      <option value="Excellent 740+">Excellent 740+</option>
                      <option value="Good 700-739">Good 700-739</option>
                      <option value="Average 660-699">Average 660-699</option>
                      <option value="Fair 600-659">Fair 600-659</option>
                      <option value="Poor < 600">Poor &lt; 600</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sl-propertyType" className="block text-sm font-medium text-primary mb-1">Property Type</label>
                    <select id="sl-propertyType" value={formData.propertyType} onChange={(e) => update("propertyType", e.target.value)} className="w-full rounded-xl border-2 border-border focus:border-accent focus:outline-none px-4 py-3 text-sm transition-colors bg-white">
                      <option value="">Select property type</option>
                      <option value="Single Family">Single Family</option>
                      <option value="Condo">Condo</option>
                      <option value="Multi Unit">Multi Unit</option>
                      <option value="Manufactured">Manufactured</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sl-propertyUsage" className="block text-sm font-medium text-primary mb-1">Property Usage</label>
                    <select id="sl-propertyUsage" value={formData.propertyUsage} onChange={(e) => update("propertyUsage", e.target.value)} className="w-full rounded-xl border-2 border-border focus:border-accent focus:outline-none px-4 py-3 text-sm transition-colors bg-white">
                      <option value="">Select property usage</option>
                      <option value="Primary Residence">Primary Residence</option>
                      <option value="Second Home">Second Home</option>
                      <option value="Investment">Investment</option>
                    </select>
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
          </div>
        </div>
      </section>
    </>
  );
}
