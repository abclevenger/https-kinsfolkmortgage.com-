"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

const rates = [
  { label: "30-Year Fixed", rate: "6.75%", apr: "6.82%", note: "Most popular" },
  { label: "15-Year Fixed", rate: "5.99%", apr: "6.10%", note: "Fastest equity" },
  { label: "FHA 30-Year", rate: "6.25%", apr: "7.15%", note: "Low down payment" },
  { label: "VA 30-Year", rate: "6.25%", apr: "6.45%", note: "No down payment" },
  { label: "5/1 ARM", rate: "6.50%", apr: "7.20%", note: "Lower initial rate" },
  { label: "Jumbo 30-Year", rate: "7.00%", apr: "7.08%", note: "Loans above $766,550" },
];

const bestRateTips = [
  {
    title: "Improve Your Credit Score",
    desc: "Pay down revolving debt, dispute errors on your report, and avoid opening new accounts before applying. Even a 20-point increase can meaningfully lower your rate.",
  },
  {
    title: "Make a Larger Down Payment",
    desc: "Putting 20% or more down eliminates PMI entirely and signals lower risk to lenders, which typically results in a better rate offer.",
  },
  {
    title: "Compare Multiple Lenders",
    desc: "Rates can vary significantly between lenders. Get at least three quotes and compare not just rates, but APRs, fees, and closing costs.",
  },
  {
    title: "Consider Discount Points",
    desc: "Paying points upfront (1 point = 1% of the loan amount) can buy down your rate. This makes sense if you plan to stay in the home long enough to recoup the cost.",
  },
  {
    title: "Lock at the Right Time",
    desc: "Once you find a rate you're comfortable with, lock it in. Waiting for rates to drop further is a gamble — and rates can move quickly in either direction.",
  },
];

const faqItems = [
  {
    question: "How often do mortgage rates change in Florida?",
    answer:
      "Mortgage rates can change daily — and sometimes multiple times per day. They're influenced by the bond market, Federal Reserve policy, inflation data, and broader economic conditions. The rates you see quoted today may not be available tomorrow, which is why locking in a rate once you're ready is important.",
  },
  {
    question: "What's the difference between interest rate and APR?",
    answer:
      "The interest rate is the base cost of borrowing money, expressed as a percentage. The APR (Annual Percentage Rate) includes the interest rate plus other loan costs like origination fees, discount points, and mortgage insurance premiums. APR gives you a more complete picture of your total borrowing cost and is the better number to use when comparing loan offers.",
  },
  {
    question: "Are Florida mortgage rates different from national averages?",
    answer:
      "Florida rates generally track close to national averages, but can differ slightly due to state-specific factors like property insurance costs, property taxes, and local housing market conditions. Florida's lack of a state income tax makes it attractive to buyers, which can influence local market dynamics.",
  },
  {
    question: "Can I negotiate my mortgage rate?",
    answer:
      "Yes. While base rates are driven by the market, lenders have some flexibility in the margin they charge. Having strong credit, a large down payment, or competing offers from other lenders gives you leverage. A mortgage broker like Kinsfolk Mortgage can shop multiple lenders on your behalf to find you the most competitive rate.",
  },
  {
    question: "Should I wait for rates to drop before buying?",
    answer:
      "Trying to time the market is risky. If rates drop, you can refinance later. But if rates rise while you wait, you could end up paying significantly more. Meanwhile, home prices may also increase. The best time to buy is when you're financially ready — not when you're guessing where rates will go.",
  },
  {
    question: "How do I lock in a mortgage rate?",
    answer:
      "Once you have an accepted purchase contract and have chosen a lender, you can request a rate lock. This guarantees your rate for a set period — typically 30, 45, or 60 days. Rate locks protect you from market fluctuations while your loan is being processed. If your closing is delayed beyond the lock period, you may need to pay for an extension.",
  },
];

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Kinsfolk Mortgage LLC - Mortgage Rate Information",
  url: "https://kinsfolkmortgage.com/mortgage-rates-florida/",
  provider: {
    "@type": "MortgageBroker",
    name: "Kinsfolk Mortgage LLC",
    identifier: { "@type": "PropertyValue", name: "NMLS", value: "2610890" },
    telephone: "+1-813-638-0862",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1936 Bruce B Downs Blvd Suite 442",
      addressLocality: "Wesley Chapel",
      addressRegion: "FL",
      postalCode: "33543",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Florida" },
  serviceType: "Mortgage Rate Comparison",
};

export default function MortgageRatesFloridaPage() {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <title>Florida Mortgage Rates Today | Kinsfolk Mortgage LLC</title>
      <meta
        name="description"
        content="See today's estimated mortgage rates in Florida. Compare rates for 30-year fixed, 15-year fixed, FHA, VA, and ARM loans. Get a personalized rate quote from Kinsfolk Mortgage."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Mortgage Rates Florida" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Florida Mortgage Rates Today
            </h1>
            <p className="text-white/70 text-lg mb-4 font-sans">
              Compare estimated mortgage rates for Florida home loans. See
              current rates for conventional, FHA, VA, ARM, and jumbo mortgages —
              then get a personalized quote from Kinsfolk Mortgage.
            </p>
            <p className="text-white/50 text-sm font-sans">
              Last updated: {today}
            </p>
          </div>
        </div>
      </section>

      {/* Rate Table */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Estimated Florida Mortgage Rates
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl font-sans">
              Today&apos;s estimated rates across popular loan programs. Rates
              assume a 740+ credit score and 20% down payment unless otherwise
              noted.
            </p>
          </ScrollReveal>

          {/* Desktop table */}
          <ScrollReveal>
            <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white text-left">
                    <th className="px-6 py-4 font-semibold text-sm">
                      Loan Type
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm text-center">
                      Rate
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm text-center">
                      APR
                    </th>
                    <th className="px-6 py-4 font-semibold text-sm">
                      Highlights
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rates.map((r, i) => (
                    <tr
                      key={r.label}
                      className={`border-t border-border/30 ${
                        i % 2 === 0 ? "bg-white" : "bg-bg-light/50"
                      } hover:bg-accent/5 transition-colors`}
                    >
                      <td className="px-6 py-5 font-semibold text-primary">
                        {r.label}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="text-2xl font-bold text-accent">
                          {r.rate}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center text-text-muted font-medium">
                        {r.apr}
                      </td>
                      <td className="px-6 py-5 text-text-muted text-sm font-sans">
                        {r.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Mobile cards */}
          <div className="md:hidden grid gap-4">
            {rates.map((r) => (
              <ScrollReveal key={r.label}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-border/50">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-primary">{r.label}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                      {r.note}
                    </span>
                  </div>
                  <div className="flex items-end gap-6">
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                        Rate
                      </p>
                      <p className="text-3xl font-bold text-accent">{r.rate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                        APR
                      </p>
                      <p className="text-lg font-medium text-text-muted">
                        {r.apr}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-6 bg-white/80 border border-border/50 rounded-xl px-5 py-4 space-y-3">
              <p className="text-text-muted text-xs leading-relaxed font-sans">
                <span className="font-semibold text-primary">Important Disclosures:</span>{" "}
                The rates and APRs shown above are <strong>estimates for illustrative purposes only</strong> and
                do not constitute a loan offer, commitment to lend, or guarantee of any rate or term.
                Rates assume a credit score of 740+, a loan amount of $400,000, a 20% down payment
                ($100,000) on a primary residence purchase in Florida, and a 30-day rate lock unless
                otherwise noted. FHA rates assume 3.5% down payment with upfront and monthly mortgage
                insurance premiums included in APR. VA rates assume 0% down payment with VA funding
                fee included in APR.
              </p>
              <p className="text-text-muted text-xs leading-relaxed font-sans">
                Actual rates, APRs, payments, and loan terms are subject to change without notice and
                may vary based on your individual credit profile, loan amount, down payment, property
                type, property location, occupancy, and other factors. All mortgage loans are subject
                to credit and property approval. Not all borrowers will qualify. Additional terms and
                conditions may apply. Contact Kinsfolk Mortgage LLC for current rates and a
                personalized loan estimate.
              </p>
              <p className="text-text-muted text-xs leading-relaxed font-sans">
                Kinsfolk Mortgage LLC, NMLS# 2610890. Equal Housing Opportunity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Affects Your Rate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What Affects Your Mortgage Rate?
              </h2>
              <div className="space-y-5 text-text-muted leading-relaxed font-sans">
                <p>
                  <span className="font-semibold text-primary">
                    Credit score
                  </span>{" "}
                  is the single biggest factor within your control. Borrowers
                  with scores of 740 and above consistently receive the lowest
                  rates, while those below 680 may face significantly higher
                  costs. Even a modest improvement of 20–40 points can translate
                  into thousands of dollars saved over the life of a loan.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Down payment size
                  </span>{" "}
                  directly impacts your rate because it determines your
                  loan-to-value (LTV) ratio. A larger down payment means less
                  risk for the lender, which typically results in a better rate.
                  Putting 20% or more down also eliminates the need for private
                  mortgage insurance on conventional loans.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Loan type and term
                  </span>{" "}
                  play a major role. Government-backed loans like FHA and VA have
                  their own rate structures and insurance requirements.
                  Shorter-term loans (15-year vs. 30-year) almost always carry
                  lower rates because the lender&apos;s money is tied up for
                  less time — though monthly payments will be higher.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Property type and use
                  </span>{" "}
                  also matter. Primary residences get the best rates, while
                  second homes and investment properties carry rate premiums.
                  Condos and multi-unit properties may also see slightly higher
                  rates compared to single-family homes.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Market conditions
                  </span>{" "}
                  are the external force driving rates. The Federal Reserve&apos;s
                  monetary policy, inflation expectations, bond market
                  performance, and global economic events all influence where
                  mortgage rates land on any given day.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Current Rate Trends */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Current Rate Trends
              </h2>
              <div className="space-y-5 text-text-muted leading-relaxed font-sans">
                <p>
                  Mortgage rates have remained elevated compared to the
                  historically low levels seen during 2020–2021, but have shown
                  signs of stabilization. The Federal Reserve&apos;s approach to
                  managing inflation continues to be the dominant factor
                  influencing rate movements. As the Fed evaluates economic data
                  and adjusts its federal funds rate, the mortgage market
                  responds — sometimes before official announcements are even
                  made.
                </p>
                <p>
                  In Florida, strong buyer demand and limited housing inventory
                  continue to support a competitive market. While higher rates
                  have cooled the pace of price appreciation, well-qualified
                  buyers are still finding opportunities — particularly as some
                  sellers adjust expectations and offer concessions on closing
                  costs or rate buydowns.
                </p>
                <p>
                  Most economists expect rates to gradually ease over the coming
                  months if inflation continues to moderate, though a return to
                  sub-4% rates is unlikely in the near term. For buyers who are
                  financially ready, the current environment presents an
                  opportunity to lock in a rate and build equity — with the
                  option to refinance if rates move meaningfully lower in the
                  future.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How to Get the Best Rate */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              How to Get the Best Mortgage Rate
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl font-sans">
              Smart preparation can save you tens of thousands over the life of
              your loan. Here&apos;s what moves the needle.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestRateTips.map((tip, i) => (
              <ScrollReveal key={tip.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 group h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4 font-bold text-lg">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">
                    {tip.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner with LeadForm */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get Your Personalized Rate
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-sans">
              The rates shown on this page are estimates and are not a loan offer
              or commitment to lend. Your actual rate will depend on your credit
              profile, loan amount, and other factors. Fill out the form below
              for a personalized rate quote — no obligation.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <LeadForm
                formName="Rate Quote Request"
                buttonText="Get My Rate Quote"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Rate Lock Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                  Rate Lock Options
                </h2>
                <div className="space-y-5 text-text-muted leading-relaxed font-sans">
                  <p>
                    A rate lock is a commitment from your lender to hold a
                    specific interest rate for a set period while your loan is
                    being processed. It protects you from market fluctuations
                    between the time you apply and the time you close.
                  </p>
                  <p>
                    Most lenders offer rate locks of 30, 45, or 60 days. A
                    30-day lock is standard for straightforward transactions,
                    while 45- or 60-day locks provide more breathing room for
                    new construction, complex purchases, or situations where
                    closing may take longer. Longer lock periods may cost
                    slightly more, since the lender is assuming additional risk
                    by guaranteeing the rate for a longer window.
                  </p>
                  <p>
                    The best time to lock is once you have an accepted purchase
                    contract and are confident the transaction will close within
                    your lock window. Locking too early (before you have a
                    contract) or too late (after rates have moved against you)
                    can both be costly. Your Kinsfolk Mortgage loan officer will
                    help you decide when the timing is right.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    days: "30-Day Lock",
                    desc: "Standard for most purchase transactions. Best pricing, ideal when your closing timeline is clear.",
                    tag: "Most common",
                  },
                  {
                    days: "45-Day Lock",
                    desc: "Extra cushion for transactions that may need additional time — common with busy markets or complex files.",
                    tag: "Flexible",
                  },
                  {
                    days: "60-Day Lock",
                    desc: "Best for new construction or closings with extended timelines. Slightly higher cost, but maximum protection.",
                    tag: "Extended",
                  },
                ].map((lock) => (
                  <div
                    key={lock.days}
                    className="bg-bg-light rounded-2xl p-6 border border-border/50"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-primary">
                        {lock.days}
                      </h3>
                      <span className="text-xs bg-accent/15 text-accent px-2.5 py-1 rounded-full font-semibold">
                        {lock.tag}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm leading-relaxed font-sans">
                      {lock.desc}
                    </p>
                  </div>
                ))}
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
              title="Mortgage Rate FAQ"
              subtitle="Common questions about mortgage rates in Florida."
              withSchema
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">
            Explore More Resources
          </h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            {[
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
              { href: "/conventional-loans/", label: "Conventional Loans" },
              { href: "/fha-loans/", label: "FHA Loans" },
              { href: "/va-loans/", label: "VA Loans" },
              {
                href: "/first-time-home-buyer/",
                label: "First-Time Home Buyer",
              },
              { href: "/quote/", label: "Get a Quote" },
              { href: "/prequalify/", label: "Get Pre-Qualified" },
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
