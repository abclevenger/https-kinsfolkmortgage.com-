import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "VA Loan Benefits in Florida for Veterans",
  description:
    "Explore VA loan benefits in Florida: zero down payment, no PMI, competitive rates, and eligibility requirements. See how Kinsfolk Mortgage helps veterans.",
};

const faqItems = [
  {
    question: "Do VA loans require a down payment in Florida?",
    answer:
      "No. One of the most significant benefits of a VA loan is the zero down payment requirement. Eligible veterans, active-duty service members, and qualifying surviving spouses can finance 100% of the home's purchase price with no money down. This eliminates the biggest barrier to homeownership for many military families and allows you to keep your savings for moving costs, home improvements, or an emergency fund.",
  },
  {
    question: "What is the VA funding fee and can it be waived?",
    answer:
      "The VA funding fee is a one-time fee paid to the Department of Veterans Affairs that helps sustain the VA loan program. For first-time VA borrowers with no down payment, the fee is 2.15% of the loan amount. It can be financed into the mortgage. The funding fee is waived entirely for veterans with a service-connected disability rating of 10% or higher, Purple Heart recipients on active duty, and surviving spouses of veterans who died in service or from service-connected disabilities.",
  },
  {
    question: "What credit score do I need for a VA loan in Florida?",
    answer:
      "The VA itself does not set a minimum credit score requirement, but most lenders look for a score of 620 or higher. Some lenders work with scores below 620 on a case-by-case basis, especially if you have strong compensating factors like low debt, significant cash reserves, or a long and stable employment history. As a broker, Chaunci works with multiple VA-approved lenders and can help borrowers across a range of credit profiles.",
  },
  {
    question: "Can I use a VA loan more than once?",
    answer:
      "Yes. VA loan entitlement can be reused. If you've paid off a previous VA loan or sold the home and repaid the loan in full, your entitlement is restored. You may also be able to have two VA loans simultaneously if you have remaining entitlement — for example, if you're relocating for duty and want to keep your current home as a rental while buying a new primary residence with a second VA loan.",
  },
  {
    question: "Are VA loans only for single-family homes?",
    answer:
      "No. VA loans can be used for single-family homes, condominiums (in VA-approved projects), manufactured homes on permanent foundations, and multi-unit properties up to four units — as long as you live in one of the units as your primary residence. Multi-unit purchases are a smart strategy for building wealth through rental income while taking advantage of VA loan benefits.",
  },
];

export default function VALoanFloridaBenefitsPage() {
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
              { label: "VA Loan Florida Benefits" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              VA Loan Benefits in Florida
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              VA loans offer some of the most powerful mortgage benefits
              available — zero down payment, no monthly mortgage insurance, and
              competitive interest rates. Here&apos;s everything Florida
              veterans need to know.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prequalify/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                CHECK YOUR ELIGIBILITY
              </Link>
              <Link
                href="/va-loans/"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                VA LOAN OVERVIEW
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Down Payment */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Zero Down Payment
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  The defining advantage of a VA loan is the ability to purchase
                  a home with no down payment at all. For a $400,000 home,
                  that&apos;s $400,000 financed — no $14,000 (FHA 3.5%) or
                  $80,000 (conventional 20%) needed upfront.
                </p>
                <p>
                  This benefit is especially impactful in Florida&apos;s
                  growing markets where home prices have risen steadily. Instead
                  of spending years saving for a down payment while prices
                  climb, eligible veterans can enter the market now and start
                  building equity immediately. The savings you keep can go
                  toward furnishing your home, covering moving expenses, or
                  maintaining an emergency fund.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* No PMI + Competitive Rates */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                No Monthly Mortgage Insurance
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Unlike FHA and conventional loans with less than 20% down, VA
                  loans do not require private mortgage insurance (PMI) or
                  monthly mortgage insurance premiums (MIP). This is a major
                  cost savings — often $150 to $300+ per month on a typical
                  Florida home purchase.
                </p>
                <p>
                  Over the life of a 30-year mortgage, eliminating PMI can save
                  you tens of thousands of dollars. Combined with the zero down
                  payment benefit, it means your monthly payment is lower than
                  it would be with virtually any other loan type at the same
                  purchase price.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Competitive Interest Rates
                </h3>
                <p>
                  Because VA loans are partially guaranteed by the federal
                  government, lenders face less risk — and they pass that
                  benefit along through lower interest rates. VA rates are
                  typically 0.25% to 0.50% lower than comparable conventional
                  rates. On a $350,000 loan, that rate advantage can save you
                  $30,000 or more in interest over 30 years.
                </p>
                <p className="text-sm text-text-light">
                  Rates vary by lender, credit profile, and market conditions.
                  Contact Kinsfolk Mortgage (NMLS# 2610890) for current VA rate
                  quotes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VA Funding Fee */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Understanding the VA Funding Fee
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  The VA funding fee is a one-time cost that helps fund the VA
                  loan program for future generations of veterans. It takes the
                  place of monthly mortgage insurance and can be rolled into the
                  loan amount so you don&apos;t pay it out of pocket at closing.
                </p>
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full text-sm border border-border/50 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          Scenario
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          First Use
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          Subsequent Use
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border/30">
                        <td className="px-4 py-3">No down payment</td>
                        <td className="px-4 py-3 font-semibold">2.15%</td>
                        <td className="px-4 py-3">3.30%</td>
                      </tr>
                      <tr className="border-t border-border/30 bg-primary/2">
                        <td className="px-4 py-3">5% or more down</td>
                        <td className="px-4 py-3 font-semibold">1.50%</td>
                        <td className="px-4 py-3">1.50%</td>
                      </tr>
                      <tr className="border-t border-border/30">
                        <td className="px-4 py-3">10% or more down</td>
                        <td className="px-4 py-3 font-semibold">1.25%</td>
                        <td className="px-4 py-3">1.25%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  <strong>Fee exemptions:</strong> The funding fee is waived
                  entirely for veterans receiving VA disability compensation
                  (10% or higher rating), Purple Heart recipients serving on
                  active duty, and qualifying surviving spouses. If you believe
                  you may qualify for an exemption, Chaunci can help verify your
                  status during the pre-approval process.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                VA Loan Eligibility in Florida
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  To use a VA loan, you need a Certificate of Eligibility (COE)
                  that verifies your military service. Eligible borrowers
                  include:
                </p>
                <ul>
                  <li>
                    <strong>Active-duty service members</strong> with at least
                    90 consecutive days of active service
                  </li>
                  <li>
                    <strong>Veterans</strong> who meet minimum service
                    requirements (generally 90 days during wartime or 181 days
                    during peacetime)
                  </li>
                  <li>
                    <strong>National Guard and Reserve members</strong> with 6+
                    years of service or 90 days of active-duty service under
                    federal orders
                  </li>
                  <li>
                    <strong>Surviving spouses</strong> of service members who
                    died in the line of duty or from a service-connected
                    disability (provided they have not remarried, with certain
                    exceptions for remarriage after age 57)
                  </li>
                </ul>
                <p>
                  Chaunci can pull your COE directly through the VA&apos;s
                  lender portal in minutes — there&apos;s no need to visit a
                  VA office or wait for paperwork by mail. If your COE shows
                  remaining entitlement, you&apos;re ready to move forward.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  VA Loan Limits in Florida
                </h3>
                <p>
                  As of 2020, VA loan limits were effectively removed for
                  borrowers with full entitlement. This means there is no cap
                  on the amount you can borrow with zero down — though you
                  still need to qualify based on income, credit, and DTI. For
                  veterans with partial entitlement (for example, if you have
                  an existing VA loan), county limits still apply. In most
                  Florida counties, the conforming limit is $766,550 for 2025.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VA vs Conventional */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                VA Loan vs. Conventional Loan
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  For eligible veterans, the VA loan is almost always the more
                  cost-effective option. Here&apos;s how the two compare on a
                  $400,000 home purchase:
                </p>
                <div className="overflow-x-auto mt-6">
                  <table className="min-w-full text-sm border border-border/50 rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-primary/5">
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          Feature
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          VA Loan
                        </th>
                        <th className="px-4 py-3 text-left font-bold text-primary">
                          Conventional (5% Down)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border/30">
                        <td className="px-4 py-3">Down payment</td>
                        <td className="px-4 py-3 font-semibold text-accent">
                          $0
                        </td>
                        <td className="px-4 py-3">$20,000</td>
                      </tr>
                      <tr className="border-t border-border/30 bg-primary/2">
                        <td className="px-4 py-3">Monthly PMI/MIP</td>
                        <td className="px-4 py-3 font-semibold text-accent">
                          None
                        </td>
                        <td className="px-4 py-3">~$175/mo</td>
                      </tr>
                      <tr className="border-t border-border/30">
                        <td className="px-4 py-3">Typical interest rate</td>
                        <td className="px-4 py-3 font-semibold">~6.25%</td>
                        <td className="px-4 py-3">~6.75%</td>
                      </tr>
                      <tr className="border-t border-border/30 bg-primary/2">
                        <td className="px-4 py-3">Funding fee</td>
                        <td className="px-4 py-3">
                          2.15% (can be financed)
                        </td>
                        <td className="px-4 py-3">None</td>
                      </tr>
                      <tr className="border-t border-border/30">
                        <td className="px-4 py-3">Min. credit score</td>
                        <td className="px-4 py-3">~620 (lender-set)</td>
                        <td className="px-4 py-3">620</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-text-light mt-4">
                  Rate estimates for illustration only. Actual rates depend on
                  credit, loan amount, and market conditions. Contact Kinsfolk
                  Mortgage (NMLS# 2610890) for a personalized comparison.
                </p>
                <p className="mt-4">
                  Even with the VA funding fee, the combination of zero down,
                  no PMI, and a lower rate makes the VA loan significantly
                  cheaper over the life of the mortgage. Use our{" "}
                  <Link
                    href="/mortgage-calculator/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    mortgage calculator
                  </Link>{" "}
                  to run your own comparison.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How Chaunci Helps Veterans */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                How Kinsfolk Mortgage Helps Florida Veterans
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Chaunci Witherspoon at Kinsfolk Mortgage has deep experience
                  guiding veterans and military families through the VA loan
                  process in Florida. As a mortgage broker, she works with
                  multiple VA-approved lenders — which means she can shop for
                  the best rate and terms on your behalf rather than being
                  limited to a single bank&apos;s offerings.
                </p>
                <p>
                  From pulling your Certificate of Eligibility to coordinating
                  the appraisal and closing, Chaunci handles the details so you
                  can focus on finding the right home. Whether you&apos;re
                  buying your first home in Wesley Chapel, relocating to MacDill
                  Air Force Base, or using your VA benefit for the second or
                  third time, you&apos;ll have a knowledgeable partner every
                  step of the way.
                </p>
                <p>
                  Ready to explore your VA loan options?{" "}
                  <Link
                    href="/prequalify/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    Start your pre-qualification
                  </Link>{" "}
                  or learn more about{" "}
                  <Link
                    href="/loan-options/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    all available loan programs
                  </Link>
                  .
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
              title="VA Loan Benefits FAQ"
              subtitle="Common questions about VA loans in Florida."
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
              See If You Qualify for a VA Loan
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Thank you for your service. Let Chaunci help you make the most of
              the benefits you&apos;ve earned — start with a quick eligibility
              check.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="VA Loan Benefits"
                buttonText="Check My VA Eligibility"
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
              { href: "/va-loans/", label: "VA Loan Overview" },
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
              { href: "/prequalify/", label: "Get Pre-Qualified" },
              { href: "/loan-options/", label: "All Loan Options" },
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
            headline: "VA Loan Benefits in Florida for Veterans",
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
