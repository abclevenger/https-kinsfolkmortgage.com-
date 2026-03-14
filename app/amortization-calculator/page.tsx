"use client";

import { useState } from "react";
import Link from "next/link";
import AmortizationCalculator from "@/components/calculators/AmortizationCalculator";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

const faqItems = [
  {
    question: "What is an amortization schedule?",
    answer:
      "An amortization schedule is a complete table of periodic loan payments showing the amount of principal and interest that comprise each payment until the loan is paid off at the end of its term. Early in the schedule, a larger portion of each payment goes toward interest. As the loan matures, more of each payment is applied to the principal balance. This schedule helps you understand exactly where your money goes every month.",
  },
  {
    question: "How do extra payments affect my mortgage?",
    answer:
      "Extra payments go directly toward reducing your principal balance, which decreases the total interest you pay over the life of the loan and can shorten your loan term significantly. For example, adding just $200 per month to a $300,000 mortgage at 6.75% could save you over $75,000 in interest and pay off your loan nearly 6 years early. Even occasional lump-sum payments — like applying a tax refund — make a noticeable difference.",
  },
  {
    question: "Is a 15-year or 30-year mortgage better?",
    answer:
      "A 15-year mortgage has higher monthly payments but saves substantially on total interest — often hundreds of thousands of dollars. A 30-year mortgage offers lower monthly payments and more cash flow flexibility. The right choice depends on your budget, financial goals, and comfort level. Some borrowers choose a 30-year term but make extra payments as if it were a 15-year loan, giving them flexibility if finances get tight.",
  },
  {
    question: "Why does so much of my early payment go to interest?",
    answer:
      "Interest is calculated on your outstanding principal balance. At the beginning of your loan, the balance is at its highest, so the interest charge is largest. As you pay down the principal over time, the interest portion of each payment decreases and the principal portion increases. This is why extra payments early in the loan have the greatest impact — they reduce the balance that interest is calculated on for every remaining payment.",
  },
];

export default function AmortizationCalculatorPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [calcData, setCalcData] = useState<Record<string, string>>({});

  function handleGetQuote(data: Record<string, string>) {
    setCalcData(data);
    setShowQuoteForm(true);
    setTimeout(() => {
      document
        .getElementById("amort-quote-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

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
              { label: "Amortization Schedule" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Amortization Schedule Calculator
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Generate a full mortgage amortization schedule. See how extra
              payments reduce your loan term and total interest. Free calculator.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                BUILD MY SCHEDULE
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
              Amortization Schedule
            </h2>
            <AmortizationCalculator onGetQuote={handleGetQuote} />
          </div>
          <p className="text-xs text-text-light text-center mt-4 max-w-xl mx-auto">
            This calculator provides estimates for informational purposes only and does not constitute a loan offer or commitment to lend. Actual rates, payments, terms, and savings will vary based on your individual credit profile and market conditions. All mortgage loans are subject to credit and property approval. Contact Kinsfolk Mortgage LLC (NMLS# 2610890) for a personalized loan estimate.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      {showQuoteForm && (
        <section id="amort-quote-form" className="py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-2">
                Get Your Personalized Quote
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Want to see real rates for your amortization scenario? Let us put
                together a personalized offer.
              </p>
              <LeadForm
                formName="Calculator — Amortization"
                extraData={{ ...calcData, calculatorSource: "amortization" }}
                showMessage={false}
                buttonText="Request My Quote"
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
                Understanding Mortgage Amortization
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Mortgage amortization is the process of paying off your home
                  loan through regular monthly payments over a set period of
                  time. Each payment is split between principal (the amount you
                  borrowed) and interest (the cost of borrowing). Understanding
                  how this split works is key to making smart decisions about
                  your mortgage — from choosing the right loan term to deciding
                  whether extra payments are worth it.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  How Amortization Works
                </h3>
                <p>
                  In a standard amortization schedule, your monthly payment
                  stays the same for the life of the loan (assuming a fixed
                  rate), but the composition changes over time. In the first
                  years, most of your payment goes toward interest because your
                  outstanding balance is at its highest. As you pay down the
                  principal, the interest portion shrinks and the principal
                  portion grows. By the final years of the loan, the vast
                  majority of each payment reduces your balance.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  The Power of Extra Payments
                </h3>
                <p>
                  Making extra payments toward your mortgage principal is one of
                  the most effective ways to save money over the life of your
                  loan. Because extra payments reduce the balance that interest
                  is calculated on, even modest additional amounts can have a
                  dramatic impact. An extra $100 per month on a $350,000,
                  30-year mortgage at 6.75% saves approximately $55,000 in total
                  interest and takes nearly 4 years off the loan.
                </p>
                <p>
                  There are several strategies for making extra payments: adding
                  a fixed amount each month, making one extra payment per year
                  (often by switching to biweekly payments), or applying lump
                  sums like tax refunds or bonuses. The amortization calculator
                  above lets you model each of these scenarios so you can see
                  the exact impact.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Choosing the Right Loan Term
                </h3>
                <p>
                  The most common mortgage terms are 15 and 30 years, but 10-,
                  20-, and 25-year terms are also available. Shorter terms come
                  with higher monthly payments but significantly lower total
                  interest costs. A 15-year loan at 6.25% on $300,000 costs
                  roughly $2,572 per month but saves over $200,000 in interest
                  compared to a 30-year loan at 6.75%. The right term balances
                  your monthly budget with your long-term savings goals.
                </p>
                <p>
                  Use the amortization calculator above to compare different loan
                  terms and extra payment strategies. Seeing the full schedule
                  laid out — month by month — makes it clear how each decision
                  affects your total cost of homeownership.
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
              title="Amortization FAQ"
              subtitle="Common questions about mortgage amortization and payment strategies."
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
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
              { href: "/loan-options/", label: "Loan Options" },
              {
                href: "/mortgage-rates-florida/",
                label: "Florida Mortgage Rates",
              },
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
