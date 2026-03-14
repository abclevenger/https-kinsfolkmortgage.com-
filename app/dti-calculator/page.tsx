"use client";

import { useState } from "react";
import Link from "next/link";
import DTICalculator from "@/components/calculators/DTICalculator";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

const faqItems = [
  {
    question: "What is a good debt-to-income ratio for a mortgage?",
    answer:
      "Most lenders prefer a total DTI ratio of 43% or below, though some loan programs allow up to 50%. For the best interest rates and loan terms, aim for a DTI under 36%. Your front-end ratio (housing costs only) should ideally be 28% or less of your gross monthly income. The lower your DTI, the more borrowing power you have and the less financial stress you'll carry.",
  },
  {
    question: "What debts are included in the DTI calculation?",
    answer:
      "Lenders include all recurring monthly debt obligations: mortgage or rent payments, car loans, student loans, minimum credit card payments, personal loans, child support, and alimony. They do not include expenses like utilities, groceries, insurance premiums (unless part of your mortgage escrow), or subscriptions. Only debts that appear on your credit report or are legally obligated payments count toward your DTI.",
  },
  {
    question: "How can I lower my DTI ratio before applying for a mortgage?",
    answer:
      "The most effective strategies include paying down credit card balances, paying off small loans entirely, avoiding new debt, and increasing your income. If you have student loans on an income-driven repayment plan, the lower monthly payment is what lenders use. You can also consider consolidating high-interest debt or asking a co-borrower with lower debt to join your application.",
  },
  {
    question: "Does my DTI affect the interest rate I receive?",
    answer:
      "Yes, indirectly. While DTI alone doesn't determine your rate, it affects which loan programs and pricing tiers you qualify for. Borrowers with lower DTI ratios are considered lower risk, which can open the door to better rate options and reduced mortgage insurance costs. A high DTI may limit you to loan programs with slightly higher rates or additional pricing adjustments.",
  },
];

export default function DTICalculatorPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Calculators", href: "/mortgage-calculator/" },
              { label: "DTI Calculator" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Debt-to-Income Calculator
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Calculate your debt-to-income ratio and find out how much mortgage
              you can qualify for. Free DTI calculator from Kinsfolk Mortgage.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                CALCULATE MY DTI
              </a>
              <a
                href="#seo-content"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-12 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Calculate Your DTI Ratio
            </h2>
            <DTICalculator />
          </div>
          <p className="text-xs text-text-light text-center mt-4 max-w-xl mx-auto">
            This calculator provides estimates for informational purposes only and does not constitute a loan offer, pre-qualification, or commitment to lend. Actual qualification requirements vary by lender and loan program. All mortgage loans are subject to credit and property approval. Not all borrowers will qualify. Contact Kinsfolk Mortgage LLC (NMLS# 2610890) for a personalized assessment.
          </p>
        </div>
      </section>

      {/* CTA to get pre-qualified */}
      <section className="py-12">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-primary mb-2">
            Want to Know What You Qualify For?
          </h3>
          <p className="text-sm text-text-muted mb-6 font-sans">
            Your DTI is just one piece of the puzzle. Get pre-qualified to see
            your full borrowing power — it&apos;s free and takes minutes.
          </p>
          <button
            onClick={() => {
              setShowQuoteForm(true);
              setTimeout(() => {
                document
                  .getElementById("dti-quote-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
          >
            GET PRE-QUALIFIED
          </button>
        </div>
      </section>

      {/* Quote Form */}
      {showQuoteForm && (
        <section id="dti-quote-form" className="py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-2">
                Get Pre-Qualified Today
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Tell us a bit about your situation and we&apos;ll show you what
                you qualify for — no obligation.
              </p>
              <LeadForm
                formName="Calculator — DTI"
                extraData={{ calculatorSource: "dti" }}
                showMessage={false}
                buttonText="Check My Options"
              />
            </div>
          </div>
        </section>
      )}

      {/* SEO Content */}
      <section id="seo-content" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Understanding Your Debt-to-Income Ratio
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Your debt-to-income ratio (DTI) is one of the most important
                  numbers in the mortgage qualification process. It tells lenders
                  how much of your gross monthly income is already committed to
                  debt payments — and how much room you have for a mortgage
                  payment on top of your existing obligations.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  How DTI Is Calculated
                </h3>
                <p>
                  DTI is expressed as a percentage. To calculate it, add up all
                  your monthly debt payments — including your projected mortgage
                  payment, car loans, student loans, minimum credit card
                  payments, and any other recurring obligations — then divide
                  that total by your gross monthly income (before taxes). For
                  example, if your monthly debts total $2,000 and your gross
                  income is $6,000, your DTI is 33%.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  What Lenders Look For
                </h3>
                <p>
                  Most mortgage lenders follow the 28/36 guideline: your housing
                  costs (front-end DTI) should not exceed 28% of gross income,
                  and your total debt payments (back-end DTI) should stay below
                  36%. However, many loan programs are more flexible. FHA loans
                  allow back-end DTI ratios up to 50% in some cases, and
                  conventional loans through Fannie Mae can go as high as 50%
                  with strong compensating factors like a high credit score or
                  significant cash reserves.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  How to Improve Your DTI
                </h3>
                <p>
                  If your DTI is too high to qualify for the mortgage amount you
                  want, there are several strategies to bring it down. The
                  fastest approach is to pay off smaller debts entirely —
                  eliminating a $200/month car payment, for instance, immediately
                  reduces your DTI. Paying down credit card balances also helps,
                  since lenders use your minimum required payment in the
                  calculation. Increasing your income through a raise, side work,
                  or adding a co-borrower are other effective approaches.
                </p>
                <p>
                  Avoid taking on any new debt in the months leading up to your
                  mortgage application. Even a new credit card or financed
                  furniture purchase can push your DTI above the threshold.
                  Lenders will pull your credit again just before closing, so any
                  new accounts that appear can jeopardize your approval.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={faqItems}
              title="DTI Calculator FAQ"
              subtitle="Common questions about debt-to-income ratios and mortgage qualification."
              withSchema
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-bg-light border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">
            Related Resources
          </h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            {[
              { href: "/mortgage-prequalified/", label: "Get Pre-Qualified" },
              {
                href: "/first-time-home-buyer/",
                label: "First-Time Buyer Guide",
              },
              { href: "/prequalify/", label: "Pre-Qualify Online" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
