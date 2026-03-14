"use client";

import { useState } from "react";
import Link from "next/link";
import RentVsBuyCalculator from "@/components/calculators/RentVsBuyCalculator";
import LeadForm from "@/components/LeadForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

const faqItems = [
  {
    question: "How long do I need to stay in a home for buying to make sense?",
    answer:
      "In most markets, you need to stay in a home for at least 3 to 5 years for buying to be financially advantageous over renting. This timeframe allows you to build enough equity to offset the upfront costs of purchasing — including closing costs, moving expenses, and any repairs. Our calculator factors in your expected time horizon to help you see exactly when the break-even point occurs.",
  },
  {
    question: "Does the calculator account for home appreciation and rent increases?",
    answer:
      "Yes. The rent vs. buy calculator factors in estimated home appreciation, annual rent increases, investment returns on the money you would otherwise save by renting, and the tax benefits of homeownership. These variables make a significant difference in the long-term comparison and give you a more realistic picture than a simple monthly payment comparison.",
  },
  {
    question: "What costs does the calculator include for homeownership?",
    answer:
      "The calculator includes your mortgage payment (principal and interest), property taxes, homeowners insurance, private mortgage insurance (if applicable), HOA fees, and estimated maintenance costs. It also factors in the opportunity cost of your down payment — the returns you could have earned if you had invested that money instead of putting it toward a home purchase.",
  },
  {
    question: "Is it better to rent or buy in Florida right now?",
    answer:
      "The answer depends entirely on your personal financial situation, how long you plan to stay, and the specific market you're looking at. Florida's lack of a state income tax and strong home appreciation in many areas can make buying attractive. However, if you plan to move within a year or two, renting may cost less overall. Use our calculator with your actual numbers to get a personalized answer.",
  },
];

export default function RentVsBuyCalculatorPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [calcData, setCalcData] = useState<Record<string, string>>({});

  function handleGetQuote(data: Record<string, string>) {
    setCalcData(data);
    setShowQuoteForm(true);
    setTimeout(() => {
      document
        .getElementById("rent-buy-quote-form")
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
              { label: "Rent vs Buy" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Rent vs Buy Calculator
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Should you rent or buy a home in Florida? Use our free rent vs.
              buy calculator to compare costs and find out when buying makes
              financial sense.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#calculator"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                USE THE CALCULATOR
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
              Compare Renting vs. Buying
            </h2>
            <RentVsBuyCalculator onGetQuote={handleGetQuote} />
          </div>
          <p className="text-xs text-text-light text-center mt-4 max-w-xl mx-auto">
            This calculator provides estimates for informational purposes only and does not constitute a loan offer or commitment to lend. Actual costs, rates, and terms will vary based on your individual financial profile and market conditions. All mortgage loans are subject to credit and property approval. Contact Kinsfolk Mortgage LLC (NMLS# 2610890) for a personalized analysis.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      {showQuoteForm && (
        <section id="rent-buy-quote-form" className="py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-primary mb-2">
                Get Your Personalized Quote
              </h3>
              <p className="text-sm text-text-muted mb-6">
                Based on your rent vs. buy analysis, let us put together a
                personalized mortgage offer for you.
              </p>
              <LeadForm
                formName="Calculator — Rent vs Buy"
                extraData={{ ...calcData, calculatorSource: "rent-vs-buy" }}
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
                Rent vs Buy: Making the Right Decision
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  The decision to rent or buy a home is one of the most
                  significant financial choices you&apos;ll make. While
                  homeownership has long been considered part of the American
                  dream, it isn&apos;t always the right move for everyone at
                  every stage of life. The answer depends on your financial
                  situation, your time horizon, and the local real estate market.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Time Horizon Matters Most
                </h3>
                <p>
                  The single biggest factor in the rent-vs.-buy equation is how
                  long you plan to stay in one place. Buying a home comes with
                  substantial upfront costs — closing costs, inspections, and
                  moving expenses — that can take several years to recoup through
                  equity growth and appreciation. If you plan to stay in a home
                  for at least five years, buying almost always comes out ahead.
                  If you&apos;re likely to relocate within a year or two, renting
                  typically makes more financial sense because you avoid those
                  transaction costs entirely.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Market Conditions and Location
                </h3>
                <p>
                  Local housing market conditions play a critical role.
                  Florida&apos;s real estate market has seen consistent
                  appreciation in many areas over the past decade, driven by
                  population growth, no state income tax, and strong demand from
                  both domestic and international buyers. In markets where home
                  values are rising steadily, buying lets you capture that
                  appreciation as equity in your home. In areas where prices are
                  flat or declining, renting may be the safer choice while you
                  wait for conditions to improve.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Tax Benefits of Homeownership
                </h3>
                <p>
                  Homeowners may deduct mortgage interest and property taxes on
                  their federal income tax returns, which can significantly
                  reduce the effective cost of owning a home. While the 2017 tax
                  reforms raised the standard deduction — meaning fewer
                  homeowners itemize than before — borrowers with larger
                  mortgages or those in higher tax brackets still benefit
                  substantially. It&apos;s worth consulting a tax professional to
                  understand how homeownership deductions apply to your specific
                  situation.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Building Wealth Through Equity
                </h3>
                <p>
                  Every mortgage payment you make builds equity in your home —
                  an asset that grows over time as you pay down the principal and
                  the property appreciates. Rent payments, by contrast, build
                  equity for your landlord. Over a 30-year mortgage, a homeowner
                  can accumulate hundreds of thousands of dollars in wealth
                  simply through regular payments and market appreciation. This
                  forced savings mechanism is one of the most compelling
                  arguments for buying when the numbers make sense.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Flexibility and Lifestyle Considerations
                </h3>
                <p>
                  Renting offers flexibility that ownership cannot match. If your
                  career requires frequent moves, if you&apos;re still exploring
                  neighborhoods, or if you prefer to avoid the responsibilities
                  of maintenance and repairs, renting may suit your lifestyle
                  better. Homeownership, on the other hand, provides stability
                  — your mortgage payment stays predictable (with a fixed rate),
                  you can renovate to your taste, and you aren&apos;t subject to
                  landlord decisions about lease renewals or rent increases.
                </p>
                <p>
                  There&apos;s no universal right answer. The best approach is to
                  run the numbers for your specific situation using the
                  calculator above, then talk to a mortgage professional who can
                  help you understand the full picture.
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
              title="Rent vs Buy FAQ"
              subtitle="Common questions about the rent vs. buy decision."
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
              {
                href: "/first-time-home-buyer/",
                label: "First-Time Buyer Guide",
              },
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
