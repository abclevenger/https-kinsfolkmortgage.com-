import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Mortgage Payment on a $400K House",
  description:
    "What's the monthly payment on a $400,000 house? Payment breakdowns by down payment percentage, loan type, and interest rate.",
};

const faqItems = [
  {
    question: "What is the monthly payment on a $400,000 house?",
    answer:
      "The monthly payment on a $400,000 house varies based on your down payment, interest rate, and loan type. With 20% down ($80,000) at 6.75% on a 30-year fixed mortgage, the principal and interest payment is approximately $2,077 per month. Add property taxes and insurance, and the total payment is roughly $2,500–$2,600. With a lower down payment, the payment increases due to a larger loan balance and mortgage insurance.",
  },
  {
    question: "How much income do I need to buy a $400K house?",
    answer:
      "Using the 28% front-end ratio guideline, you'd typically need a gross annual income of $105,000–$125,000 to afford a $400,000 home, depending on your down payment and other debts. With 20% down and low existing debt, the lower end of that range is sufficient. With an FHA loan at 3.5% down and moderate debts, you'd need income closer to the higher end. Your debt-to-income ratio is the key factor lenders evaluate.",
  },
  {
    question: "Is an FHA loan a good option for a $400K house?",
    answer:
      "FHA loans can be an excellent option for a $400,000 home, especially for first-time buyers or those with credit scores between 580 and 680. The 3.5% down payment requirement means you only need $14,000 upfront (plus closing costs). The trade-off is mortgage insurance — FHA loans require both an upfront MIP (1.75% of the loan amount) and an annual MIP that typically lasts the life of the loan. For buyers who plan to build equity and refinance later, FHA is a strong entry point.",
  },
  {
    question: "What are closing costs on a $400K house?",
    answer:
      "In Florida, closing costs on a $400,000 home typically range from $8,000 to $16,000 (2–4% of the purchase price). These include the appraisal fee, title search and insurance, origination charges, recording fees, prepaid property taxes, and homeowners insurance. Some costs are negotiable, and sellers may contribute toward buyer closing costs in certain situations. Florida's documentary stamp tax adds approximately $2,800 on a $400K purchase.",
  },
];

const paymentScenarios = [
  {
    label: "3.5% Down (FHA)",
    downPct: "3.5%",
    downAmt: "$14,000",
    loanAmt: "$386,000",
    rate: "6.25%",
    pi: "$2,376",
    pmi: "$270",
    taxIns: "$430",
    total: "$3,076",
    highlight: false,
  },
  {
    label: "5% Down (Conventional)",
    downPct: "5%",
    downAmt: "$20,000",
    loanAmt: "$380,000",
    rate: "6.75%",
    pi: "$2,465",
    pmi: "$160",
    taxIns: "$430",
    total: "$3,055",
    highlight: false,
  },
  {
    label: "10% Down",
    downPct: "10%",
    downAmt: "$40,000",
    loanAmt: "$360,000",
    rate: "6.75%",
    pi: "$2,336",
    pmi: "$110",
    taxIns: "$430",
    total: "$2,876",
    highlight: false,
  },
  {
    label: "20% Down",
    downPct: "20%",
    downAmt: "$80,000",
    loanAmt: "$320,000",
    rate: "6.75%",
    pi: "$2,077",
    pmi: "$0",
    taxIns: "$430",
    total: "$2,507",
    highlight: true,
  },
];

export default function MortgagePayment400kPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Learning Center", href: "/learning-center/" },
              { label: "Mortgage Payment on $400K House" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Mortgage Payment on a $400K House
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              What&apos;s the monthly payment on a $400,000 house? See payment
              breakdowns by down payment percentage, loan type, and interest
              rate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mortgage-prequalified/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET PRE-QUALIFIED
              </Link>
              <a
                href="#payment-breakdown"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                SEE PAYMENTS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Breakdown Table */}
      <section id="payment-breakdown" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Monthly Payment Breakdown: $400,000 Home
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              All estimates assume a 30-year fixed-rate mortgage. Taxes and
              insurance are estimated for a typical Florida property.
            </p>
          </ScrollReveal>
          <div className="space-y-4">
            {paymentScenarios.map((s, i) => (
              <ScrollReveal key={s.label} delay={i < 4 ? (i as 0 | 1 | 2 | 3) : undefined}>
                <div
                  className={`rounded-2xl p-6 sm:p-8 border transition-all duration-200 ${
                    s.highlight
                      ? "bg-primary/5 border-accent/40 shadow-md"
                      : "bg-white border-border/50 shadow-sm hover:shadow-md hover:border-accent/30"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
                    <div className="lg:w-52 shrink-0">
                      <p className="text-sm text-text-muted font-sans">
                        Scenario
                      </p>
                      <p className="text-lg font-bold text-primary">
                        {s.label}
                      </p>
                      {s.highlight && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold bg-accent/10 text-accent rounded">
                          No PMI
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
                      <div>
                        <p className="text-xs text-text-muted font-sans">
                          Down Payment
                        </p>
                        <p className="font-semibold text-primary">
                          {s.downAmt}{" "}
                          <span className="text-text-muted font-normal text-sm">
                            ({s.downPct})
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-sans">
                          Loan Amount
                        </p>
                        <p className="font-semibold text-primary">
                          {s.loanAmt}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-sans">
                          P&amp;I Payment
                        </p>
                        <p className="font-semibold text-primary">
                          {s.pi}
                          <span className="text-text-muted font-normal text-sm">
                            /mo
                          </span>
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted font-sans">
                          Est. Total Payment
                        </p>
                        <p className="text-xl font-bold text-accent">
                          {s.total}
                          <span className="text-sm font-normal text-text-muted">
                            /mo
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {s.pmi !== "$0" && (
                    <p className="mt-3 text-xs text-text-light font-sans">
                      Includes ~{s.pmi}/mo estimated PMI + ~{s.taxIns}/mo
                      property taxes &amp; insurance
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-xs text-text-light text-center mt-6 max-w-2xl mx-auto">
            Payment estimates are for illustration only. Actual rates, PMI
            costs, taxes, and insurance will vary based on your credit profile,
            location, and lender. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Understanding Your $400K Mortgage Payment
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  A $400,000 home is one of the most popular price points in
                  Florida, fitting comfortably within reach for many
                  dual-income households and higher-earning individual buyers. At
                  this price point, your monthly payment is shaped by four main
                  components: principal and interest, property taxes, homeowners
                  insurance, and potentially private mortgage insurance.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  How Your Down Payment Changes the Math
                </h3>
                <p>
                  Your down payment is the single biggest lever you control. With
                  20% down ($80,000), you finance $320,000 and avoid PMI
                  entirely, bringing your total monthly cost to around $2,507.
                  With an FHA loan at 3.5% down ($14,000), you finance $386,000
                  and pay mortgage insurance, pushing the total to approximately
                  $3,076. That&apos;s a $569 monthly difference — more than
                  $6,800 per year.
                </p>
                <p>
                  That said, saving $80,000 for a down payment takes years for
                  most buyers. The lower-down-payment options exist to help you
                  get into a home sooner, start building equity, and stop paying
                  rent. The &ldquo;right&rdquo; down payment balances your
                  savings timeline against the cost of waiting.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  FHA vs. Conventional for a $400K Home
                </h3>
                <p>
                  FHA loans are popular at this price point because they accept
                  lower credit scores (580+) and require only 3.5% down. The
                  trade-off is mortgage insurance that typically lasts the life
                  of the loan. Conventional loans require a 620+ credit score
                  but offer PMI that drops off automatically at 20% equity. If
                  your credit score is 700 or above, a conventional loan often
                  provides a lower total cost over time. Below 680, FHA may
                  offer a better rate despite the insurance.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Florida-Specific Costs
                </h3>
                <p>
                  Property taxes in Florida vary by county but generally range
                  from 0.8% to 1.2% of assessed value. On a $400,000 home,
                  that&apos;s roughly $3,200 to $4,800 per year. The homestead
                  exemption — available on your primary residence — can reduce
                  your taxable value by up to $50,000, saving you several
                  hundred dollars annually. Homeowners insurance in Florida is
                  higher than the national average, particularly in coastal
                  areas, so factor in $2,000 to $4,000+ per year depending on
                  your property&apos;s location and construction.
                </p>
                <p>
                  For a complete picture of what a $400,000 home would cost you
                  each month, use our{" "}
                  <Link
                    href="/mortgage-calculator/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    mortgage calculator
                  </Link>{" "}
                  with your actual down payment, credit score, and rate — or get
                  pre-qualified for a personalized estimate.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={faqItems}
              title="$400K Mortgage Payment FAQ"
              subtitle="Common questions about buying a $400,000 home."
              withSchema
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Get Your Personalized $400K Payment Estimate
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Every buyer&apos;s situation is different. Share your details and
              we&apos;ll provide a breakdown based on today&apos;s actual rates.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Mortgage Payment — 400K"
                buttonText="Get My Payment Estimate"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">
            Continue Exploring
          </h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            {[
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
              { href: "/fha-loans/", label: "FHA Loans" },
              {
                href: "/mortgage-payment-500k/",
                label: "$500K Payment Breakdown",
              },
              {
                href: "/how-much-house-can-i-afford/",
                label: "How Much Can I Afford?",
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

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mortgage Payment on a $400K House",
            author: {
              "@type": "Organization",
              name: "Kinsfolk Mortgage LLC",
            },
            publisher: {
              "@type": "Organization",
              name: "Kinsfolk Mortgage LLC",
            },
            datePublished: "2026-03-13",
            dateModified: "2026-03-13",
          }),
        }}
      />
    </>
  );
}
