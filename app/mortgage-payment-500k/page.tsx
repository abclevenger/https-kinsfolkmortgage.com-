import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Mortgage Payment on a $500K House",
  description:
    "What's the monthly payment on a $500,000 house? See payment breakdowns for different down payments, rates, and loan types.",
};

const faqItems = [
  {
    question: "What is the monthly payment on a $500,000 house?",
    answer:
      "The monthly payment on a $500,000 house depends on your down payment, interest rate, and loan term. With 20% down ($100,000) at 6.75% on a 30-year fixed loan, the principal and interest payment is approximately $2,596 per month. Add property taxes and insurance, and the total payment is roughly $3,100–$3,200. With less down, the payment is higher due to a larger loan amount and PMI.",
  },
  {
    question: "How much do I need to make to afford a $500K house?",
    answer:
      "Using the 28% housing cost guideline, you'd need a gross annual income of roughly $130,000–$155,000 to comfortably afford a $500,000 home, depending on your down payment and existing debts. With 20% down and minimal debt, the lower end of that range works. With 3% down and car/student loan payments, you'd need closer to the higher end. A lower DTI gives you more flexibility.",
  },
  {
    question: "Do I need 20% down to buy a $500K house?",
    answer:
      "No. While 20% down ($100,000) eliminates PMI and gives you the lowest monthly payment, many buyers put down far less. Conventional loans allow as little as 3% ($15,000), and FHA loans require 3.5% ($17,500). VA loans offer 0% down for eligible borrowers. The trade-off is a higher monthly payment and mortgage insurance until you reach 20% equity.",
  },
  {
    question: "How much are property taxes and insurance on a $500K house in Florida?",
    answer:
      "In Florida, property taxes on a $500,000 home typically range from $4,000 to $6,000 per year depending on the county and homestead exemption status. Homeowners insurance varies widely — from $2,500 to $5,000+ per year — depending on location, coverage, and proximity to the coast. Combined, taxes and insurance add roughly $500–$900 per month to your mortgage payment.",
  },
];

const paymentScenarios = [
  {
    label: "3% Down (Conventional)",
    downPct: "3%",
    downAmt: "$15,000",
    loanAmt: "$485,000",
    rate: "6.75%",
    pi: "$3,146",
    pmi: "$200",
    taxIns: "$520",
    total: "$3,866",
    highlight: false,
  },
  {
    label: "3.5% Down (FHA)",
    downPct: "3.5%",
    downAmt: "$17,500",
    loanAmt: "$482,500",
    rate: "6.50%",
    pi: "$3,050",
    pmi: "$280",
    taxIns: "$520",
    total: "$3,850",
    highlight: false,
  },
  {
    label: "10% Down",
    downPct: "10%",
    downAmt: "$50,000",
    loanAmt: "$450,000",
    rate: "6.75%",
    pi: "$2,920",
    pmi: "$135",
    taxIns: "$520",
    total: "$3,575",
    highlight: false,
  },
  {
    label: "20% Down",
    downPct: "20%",
    downAmt: "$100,000",
    loanAmt: "$400,000",
    rate: "6.75%",
    pi: "$2,596",
    pmi: "$0",
    taxIns: "$520",
    total: "$3,116",
    highlight: true,
  },
];

export default function MortgagePayment500kPage() {
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
              { label: "Mortgage Payment on $500K House" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Mortgage Payment on a $500K House
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              What&apos;s the monthly payment on a $500,000 house? See payment
              breakdowns for different down payments, rates, and loan types.
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
              Monthly Payment Breakdown: $500,000 Home
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
                What Goes Into a $500K Mortgage Payment?
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  When people ask &ldquo;what&apos;s the monthly payment on a
                  $500,000 house,&rdquo; they&apos;re usually thinking about
                  principal and interest. But your actual monthly obligation
                  includes several additional components that significantly
                  affect the total. Understanding each piece helps you budget
                  accurately and avoid surprises.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Principal and Interest
                </h3>
                <p>
                  The principal and interest (P&amp;I) portion of your payment
                  pays down the amount you borrowed and covers the lender&apos;s
                  cost of lending. On a $400,000 loan (20% down on a $500K home)
                  at 6.75%, the P&amp;I payment is approximately $2,596 per
                  month. With less down, the loan amount — and therefore the
                  P&amp;I payment — increases proportionally.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Private Mortgage Insurance (PMI)
                </h3>
                <p>
                  If your down payment is less than 20%, your lender will
                  require private mortgage insurance to protect against default.
                  PMI on a $500K home typically ranges from $135 to $280 per
                  month depending on your down payment percentage and credit
                  score. PMI can be removed once you reach 20% equity, either
                  through payments or home appreciation. FHA loans use a
                  different mortgage insurance structure (MIP) that lasts for the
                  life of the loan in most cases.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Property Taxes
                </h3>
                <p>
                  Florida property taxes vary by county. On a $500,000 home,
                  expect to pay roughly $4,000 to $6,000 per year, or $333 to
                  $500 per month when escrowed into your mortgage payment.
                  Florida&apos;s homestead exemption reduces the taxable value
                  of your primary residence by up to $50,000, which can save
                  several hundred dollars annually.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Homeowners Insurance
                </h3>
                <p>
                  Insurance costs in Florida are higher than the national average
                  due to hurricane risk. For a $500,000 home, annual premiums
                  typically range from $2,500 to $5,000 or more depending on
                  location, construction type, and coverage. This adds $200 to
                  $400+ per month to your total payment. Shopping around and
                  bundling with auto insurance can help reduce premiums.
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
              title="$500K Mortgage Payment FAQ"
              subtitle="Common questions about buying a $500,000 home."
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
              Get Your Personalized $500K Payment Estimate
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Every buyer&apos;s situation is different. Tell us about yours and
              we&apos;ll provide a detailed payment breakdown based on actual
              rates.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Mortgage Payment — 500K"
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
              {
                href: "/first-time-home-buyer/",
                label: "First-Time Buyer Guide",
              },
              {
                href: "/mortgage-payment-400k/",
                label: "$400K Payment Breakdown",
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
            headline: "Mortgage Payment on a $500K House",
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
