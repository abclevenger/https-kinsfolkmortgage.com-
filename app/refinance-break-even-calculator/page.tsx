"use client";

import { useState } from "react";
import Link from "next/link";
import RefinanceBreakEvenCalculator from "@/components/calculators/RefinanceBreakEvenCalculator";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

const faqItems = [
  {
    question: "What is a refinance break-even point?",
    answer:
      "The break-even point is the number of months it takes for your monthly savings from refinancing to exceed the total cost of the refinance. For example, if your refinance costs $4,000 in closing costs and you save $200 per month on your payment, your break-even point is 20 months. If you plan to stay in your home longer than the break-even period, refinancing saves you money. If you'll sell or move before that point, the costs outweigh the savings.",
  },
  {
    question: "What costs are involved in refinancing a mortgage?",
    answer:
      "Refinancing involves many of the same closing costs as your original mortgage: appraisal fee, title search and insurance, origination charges, recording fees, and potentially prepaid items like property taxes and insurance. These costs typically range from 2% to 5% of the loan amount. Some lenders offer no-closing-cost refinances where the fees are rolled into a slightly higher interest rate instead of paid upfront.",
  },
  {
    question: "When does it make sense to refinance?",
    answer:
      "Refinancing typically makes sense when you can lower your interest rate by at least 0.5% to 0.75%, you plan to stay in the home long enough to pass the break-even point, or you want to switch from an adjustable-rate to a fixed-rate mortgage. It can also make sense if you want to shorten your loan term, eliminate PMI, or tap into home equity for major expenses. The key is running the numbers for your specific situation.",
  },
  {
    question: "Does refinancing restart my mortgage clock?",
    answer:
      "Yes, refinancing replaces your existing loan with a new one, which resets the amortization schedule. If you've been paying a 30-year mortgage for 10 years and refinance into a new 30-year term, you'll have 30 more years of payments (40 years total). To avoid extending your payoff date, consider refinancing into a shorter term — like a 20-year or 15-year loan — or making extra payments on the new mortgage.",
  },
];

export default function RefinanceBreakEvenCalculatorPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [calcData, setCalcData] = useState<Record<string, string>>({});

  function handleGetQuote(data: Record<string, string>) {
    setCalcData(data);
    setShowQuoteForm(true);
    setTimeout(() => {
      document
        .getElementById("refi-quote-form")
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
              { label: "Refinance Break-Even" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Refinance Break-Even Calculator
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Calculate how long it takes to break even on a mortgage refinance.
              See if refinancing makes financial sense with our free calculator.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                RUN THE NUMBERS
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
              Refinance Break-Even Analysis
            </h2>
            <RefinanceBreakEvenCalculator onGetQuote={handleGetQuote} />
          </div>
          <p className="text-xs text-text-light text-center mt-4 max-w-xl mx-auto">
            This calculator provides estimates for informational purposes only and does not constitute a loan offer or commitment to lend. Actual refinance costs, rates, terms, and savings will vary based on your individual credit profile and market conditions. All mortgage loans are subject to credit and property approval. Contact Kinsfolk Mortgage LLC (NMLS# 2610890) for a personalized refinance analysis.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      {showQuoteForm && (
        <section id="refi-quote-form" className="py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-2">
                Get Your Refinance Quote
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Based on your break-even analysis, let us show you actual
                refinance rates and costs for your situation.
              </p>
              <LeadForm
                formName="Calculator — Refinance Break-Even"
                extraData={{
                  ...calcData,
                  calculatorSource: "refinance-break-even",
                }}
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
                Refinancing Strategy: When Does It Make Sense?
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Refinancing your mortgage can save you thousands of dollars
                  over the life of your loan — but only if the math works in
                  your favor. The break-even analysis is the most important
                  calculation you can do before deciding to refinance, because it
                  tells you exactly how long it takes for your savings to exceed
                  the costs. Without this analysis, you could end up spending
                  more on refinancing than you save.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Understanding the Break-Even Calculation
                </h3>
                <p>
                  The break-even point is simple in concept: divide your total
                  refinancing costs by your monthly savings. If refinancing costs
                  $5,000 and saves you $250 per month, you break even in 20
                  months. After that point, every month you stay in the home puts
                  money back in your pocket. The calculator above handles the
                  more nuanced version of this calculation, factoring in the
                  changing interest-to-principal ratio, the time value of money,
                  and how long you&apos;ve been paying your current mortgage.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  When to Consider Refinancing
                </h3>
                <p>
                  The most common reason to refinance is to secure a lower
                  interest rate. Even a reduction of 0.5% to 0.75% can translate
                  to significant savings on a large mortgage balance.
                  Homeowners also refinance to switch from an adjustable-rate
                  mortgage (ARM) to a fixed-rate loan for payment stability, to
                  shorten their loan term from 30 years to 15 or 20 years, or to
                  eliminate private mortgage insurance once they&apos;ve reached
                  20% equity.
                </p>
                <p>
                  Cash-out refinancing is another option, allowing you to tap
                  your home&apos;s equity for major expenses like home
                  improvements, debt consolidation, or education costs. In a
                  cash-out refinance, you take out a new loan for more than you
                  owe and receive the difference in cash. While this can be a
                  smart financial move, it increases your loan balance and should
                  be weighed carefully against alternatives.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Factors That Affect Your Break-Even Point
                </h3>
                <p>
                  Several variables influence how quickly you&apos;ll recoup your
                  refinancing costs. The size of the rate reduction is the
                  biggest factor — a larger drop means more monthly savings and
                  a faster break-even. Your remaining loan balance matters too:
                  refinancing a $400,000 balance produces more absolute savings
                  than refinancing $150,000, even at the same rate reduction.
                  Closing costs vary by lender and market, so shopping around for
                  competitive fees can shorten your break-even period
                  significantly.
                </p>
                <p>
                  Your plans for the home are equally important. If you&apos;re
                  confident you&apos;ll stay for many years beyond the
                  break-even point, refinancing is almost certainly worthwhile.
                  If there&apos;s a chance you&apos;ll sell within the next two
                  to three years, the upfront costs may not be justified. The
                  calculator above helps you model different scenarios so you can
                  make the decision with confidence.
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
              title="Refinance Break-Even FAQ"
              subtitle="Common questions about refinancing and break-even analysis."
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
              { href: "/loan-options/", label: "Loan Options" },
              {
                href: "/mortgage-rates-florida/",
                label: "Florida Mortgage Rates",
              },
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
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
