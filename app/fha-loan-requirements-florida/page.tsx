import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "FHA Loan Requirements in Florida (2025)",
  description:
    "Learn the credit score, down payment, and income requirements for FHA loans in Florida. See county loan limits and how to qualify with Kinsfolk Mortgage.",
};

const faqItems = [
  {
    question: "What credit score do I need for an FHA loan in Florida?",
    answer:
      "You need a minimum 580 credit score to qualify for the 3.5% down payment option. Borrowers with scores between 500 and 579 may still qualify but must put at least 10% down. Most FHA lenders in Florida prefer a 580 or higher because it unlocks the lowest down payment and the widest range of program options.",
  },
  {
    question: "How much is the down payment on an FHA loan?",
    answer:
      "The minimum down payment is 3.5% of the purchase price for borrowers with a 580+ credit score. On a $350,000 home, that's $12,250. The down payment can come from savings, gift funds from a family member, or eligible down payment assistance programs available in Florida.",
  },
  {
    question: "What are the FHA loan limits in Pasco and Hillsborough County?",
    answer:
      "For 2025, the FHA loan limit for a single-family home in both Pasco County and Hillsborough County is $498,257. This is the standard floor limit that applies to most Florida counties. Higher limits apply in designated high-cost areas, though most of the Tampa Bay region falls under the standard limit.",
  },
  {
    question: "How long does FHA mortgage insurance last?",
    answer:
      "If you put less than 10% down, FHA mortgage insurance premium (MIP) lasts for the entire life of the loan. If you put 10% or more down, MIP can be removed after 11 years. This is different from conventional PMI, which can be canceled once you reach 20% equity. Many FHA borrowers refinance into a conventional loan once they build enough equity to eliminate the ongoing insurance cost.",
  },
  {
    question: "Can I use an FHA loan to buy a condo in Florida?",
    answer:
      "Yes, but the condominium project must be on FHA's approved condo list or qualify for a single-unit approval. FHA has specific requirements for condo associations including financial reserves, owner-occupancy ratios, and insurance coverage. Your loan officer can check whether a specific condo project qualifies before you make an offer.",
  },
];

export default function FHALoanRequirementsFloridaPage() {
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
              { label: "FHA Loan Requirements Florida" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              FHA Loan Requirements in Florida
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              FHA loans are one of the most accessible paths to homeownership in
              Florida — especially for first-time buyers. Here&apos;s everything
              you need to know about qualifying, from credit scores and down
              payments to county loan limits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prequalify/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                CHECK YOUR ELIGIBILITY
              </Link>
              <Link
                href="/fha-loans/"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                FHA LOAN OVERVIEW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Score Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                FHA Credit Score Requirements
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  One of the biggest advantages of FHA financing is its
                  flexibility on credit scores. Unlike conventional loans that
                  typically require a 620 or higher, FHA loans work with two
                  credit tiers:
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">580+</span>
                    <span>
                      Qualifies for the minimum 3.5% down payment. This is the
                      tier most FHA borrowers fall into and the one that makes
                      the program so attractive for first-time buyers in Florida.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">500–579</span>
                    <span>
                      Still eligible for FHA financing, but requires a 10% down
                      payment. Fewer lenders serve this tier, so working with an
                      experienced broker like Chaunci Witherspoon at Kinsfolk
                      Mortgage can help you find lenders who will.
                    </span>
                  </li>
                </ul>
                <p>
                  Your credit score also influences the interest rate you
                  receive. While FHA sets the floor for eligibility, individual
                  lenders offer better pricing to borrowers with higher scores.
                  Even a modest credit improvement — from 620 to 660, for
                  example — can meaningfully reduce your rate and total cost over
                  the life of the loan.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Down Payment & DTI */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Down Payment and Debt-to-Income Ratios
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  The 3.5% Down Payment
                </h3>
                <p>
                  With a 580+ credit score, you only need 3.5% of the purchase
                  price as your down payment. On a $300,000 home, that&apos;s
                  $10,500. On a $400,000 home, it&apos;s $14,000. This is
                  significantly less than the 5–20% that conventional loans
                  often require, making FHA a popular choice for buyers who have
                  steady income but haven&apos;t saved a large lump sum.
                </p>
                <p>
                  Your down payment can come from several sources: personal
                  savings, gift funds from family, employer assistance programs,
                  or Florida-specific{" "}
                  <Link
                    href="/first-time-home-buyer/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    first-time home buyer programs
                  </Link>{" "}
                  that offer grants or forgivable second mortgages.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Debt-to-Income Ratio (DTI)
                </h3>
                <p>
                  FHA guidelines generally allow a front-end DTI (housing costs
                  only) of up to 31% and a back-end DTI (all monthly debts) of
                  up to 43%. However, with compensating factors — such as cash
                  reserves, a larger down payment, or a strong employment
                  history — borrowers with DTI ratios up to 50% may still
                  qualify. Your DTI is one of the most important factors in
                  determining your FHA loan amount, so understanding where you
                  stand before applying saves time and sets expectations.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Loan Limits & Property Requirements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                FHA Loan Limits in Florida (2025)
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  FHA loan limits are set annually by county and determine the
                  maximum mortgage amount you can finance with FHA insurance.
                  For 2025, the standard single-family limit — which applies to
                  the majority of Florida counties including Pasco County and
                  Hillsborough County — is <strong>$498,257</strong>.
                </p>
                <p>
                  If you&apos;re shopping in the Wesley Chapel, Tampa, or Land
                  O&apos; Lakes area, this limit covers the vast majority of
                  available homes. For multi-unit properties (duplexes, triplexes,
                  four-plexes), FHA limits are higher, making it possible to
                  purchase a small multifamily property with owner-occupancy and
                  use rental income to help qualify.
                </p>
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full text-sm border border-border/50 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          County
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          1-Unit Limit
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          2-Unit Limit
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border/30">
                        <td className="px-4 py-3">Pasco County</td>
                        <td className="px-4 py-3 font-semibold">$498,257</td>
                        <td className="px-4 py-3">$637,950</td>
                      </tr>
                      <tr className="border-t border-border/30 bg-primary/2">
                        <td className="px-4 py-3">Hillsborough County</td>
                        <td className="px-4 py-3 font-semibold">$498,257</td>
                        <td className="px-4 py-3">$637,950</td>
                      </tr>
                      <tr className="border-t border-border/30">
                        <td className="px-4 py-3">Pinellas County</td>
                        <td className="px-4 py-3 font-semibold">$498,257</td>
                        <td className="px-4 py-3">$637,950</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  FHA Property Requirements
                </h3>
                <p>
                  The property itself must meet FHA&apos;s minimum property
                  standards (MPS). An FHA appraisal is more detailed than a
                  conventional one — the appraiser checks for safety, structural
                  soundness, and livability issues. Common items flagged include
                  peeling paint (in pre-1978 homes), missing handrails, faulty
                  electrical, and roof conditions with less than two years of
                  remaining life. The home must be your primary residence;
                  investment properties and vacation homes are not eligible for
                  FHA financing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mortgage Insurance */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                FHA Mortgage Insurance Premium (MIP)
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Every FHA loan includes mortgage insurance, which protects the
                  lender in case of default. There are two components:
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1 whitespace-nowrap">
                      Upfront MIP
                    </span>
                    <span>
                      1.75% of the loan amount, financed into the mortgage. On a
                      $350,000 loan, this adds approximately $6,125 to your loan
                      balance.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1 whitespace-nowrap">
                      Annual MIP
                    </span>
                    <span>
                      0.55% of the loan balance per year for most borrowers,
                      paid monthly. On a $350,000 loan, that&apos;s roughly $160
                      per month. If your down payment is less than 10%, this
                      annual premium lasts for the life of the loan.
                    </span>
                  </li>
                </ul>
                <p>
                  While MIP adds to your monthly cost, it&apos;s what makes FHA
                  loans possible for borrowers who might not qualify for
                  conventional financing. Many buyers start with an FHA loan and
                  later refinance into a conventional loan to eliminate the
                  ongoing insurance once they&apos;ve built 20% equity.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How Chaunci Helps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                How Kinsfolk Mortgage Helps FHA Buyers
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Navigating FHA requirements is easier with a broker who knows
                  the program inside and out. Chaunci Witherspoon at Kinsfolk
                  Mortgage works with multiple FHA-approved lenders across
                  Florida, which means she can match you with the best rate and
                  terms for your specific situation — not just what one bank
                  happens to offer.
                </p>
                <p>
                  Whether you&apos;re a first-time buyer in Wesley Chapel,
                  rebuilding credit after a financial setback, or buying your
                  first home with gift funds for the down payment, Chaunci walks
                  you through every step. From pulling your credit and running
                  the numbers to locking your rate and coordinating with your
                  real estate agent, you&apos;ll have a dedicated partner
                  throughout the process.
                </p>
                <p>
                  Ready to find out if FHA is the right fit?{" "}
                  <Link
                    href="/prequalify/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    Start your pre-qualification
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/mortgage-calculator/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    run the numbers
                  </Link>{" "}
                  with our mortgage calculator.
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
              title="FHA Loan Requirements FAQ"
              subtitle="Common questions about FHA loans in Florida."
              withSchema
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              See If You Qualify for an FHA Loan
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Answer a few quick questions and Chaunci will review your
              eligibility — no obligation and no impact on your credit.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="FHA Loan Requirements"
                buttonText="Check My FHA Eligibility"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-bg-light border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">
            Continue Exploring
          </h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            {[
              { href: "/fha-loans/", label: "FHA Loan Overview" },
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
              { href: "/prequalify/", label: "Get Pre-Qualified" },
              {
                href: "/first-time-home-buyer/",
                label: "First-Time Buyer Guide",
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
            headline: "FHA Loan Requirements in Florida (2025)",
            author: {
              "@type": "Organization",
              name: "Kinsfolk Mortgage LLC",
            },
            publisher: {
              "@type": "Organization",
              name: "Kinsfolk Mortgage LLC",
            },
            datePublished: "2026-03-14",
            dateModified: "2026-03-14",
          }),
        }}
      />
    </>
  );
}
