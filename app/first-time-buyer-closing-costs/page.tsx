import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "First-Time Buyer Closing Costs Guide",
  description:
    "Understand closing costs when buying your first home. Typical fees, what's included, and how to reduce costs. Florida-specific info from Kinsfolk Mortgage LLC.",
};

const closingCostItems = [
  {
    name: "Appraisal Fee",
    range: "$400 – $600",
    description:
      "A licensed appraiser evaluates the property to confirm its market value. The lender requires this to ensure the home is worth the amount you're borrowing.",
  },
  {
    name: "Title Insurance & Search",
    range: "$1,000 – $3,000+",
    description:
      "Title insurance protects you and the lender against ownership disputes or liens on the property. In Florida, the buyer typically pays for the lender's title policy while the seller pays for the owner's policy (though this varies by county).",
  },
  {
    name: "Loan Origination Fee",
    range: "0.5% – 1% of loan",
    description:
      "This fee covers the lender's costs for processing, underwriting, and funding your mortgage. On a $300,000 loan, expect $1,500 to $3,000.",
  },
  {
    name: "Homeowners Insurance",
    range: "$1,200 – $4,000+/year",
    description:
      "Your lender will require proof of homeowners insurance before closing. Florida premiums tend to be higher than the national average due to hurricane risk. You'll typically prepay the first year at closing.",
  },
  {
    name: "Property Taxes (Prepaid)",
    range: "Varies by county",
    description:
      "You'll prepay a portion of property taxes at closing, covering the period between closing and the next tax due date. Your lender will escrow taxes going forward as part of your monthly payment.",
  },
  {
    name: "Recording & Government Fees",
    range: "$100 – $500",
    description:
      "These fees cover recording the deed and mortgage documents with the county. Florida also charges documentary stamp taxes on the deed (typically paid by the seller) and on the mortgage note.",
  },
];

const faqItems = [
  {
    question: "How much are closing costs for a first-time buyer?",
    answer:
      "Closing costs in Florida typically range from 2% to 5% of the home's purchase price. On a $350,000 home, that's approximately $7,000 to $17,500. The exact amount depends on your loan type, lender fees, insurance costs, prepaid items, and the county where the property is located.",
  },
  {
    question: "Can the seller pay my closing costs?",
    answer:
      "Yes. Seller concessions — where the seller agrees to pay a portion of your closing costs — are a common negotiating tool, especially in a buyer's market. FHA loans allow seller concessions up to 6% of the purchase price. Conventional loans allow 3% to 9% depending on your down payment. VA loans allow the seller to pay all of the buyer's closing costs plus up to 4% in concessions.",
  },
  {
    question: "Are closing costs included in the mortgage?",
    answer:
      "In most cases, closing costs are paid upfront at the closing table and are not rolled into the mortgage. However, some costs can be financed. For example, the FHA upfront mortgage insurance premium (1.75%) can be added to the loan balance. Some lenders also offer 'lender credit' options where you accept a slightly higher interest rate in exchange for reduced closing costs.",
  },
  {
    question: "How can I reduce my closing costs?",
    answer:
      "Several strategies can lower your closing costs: negotiate seller concessions as part of your purchase offer, compare quotes from multiple title companies and insurance providers, ask your lender about lender credit options, apply for Florida's down payment and closing cost assistance programs, and time your closing to minimize prepaid interest charges. Even small negotiations can save hundreds or thousands of dollars.",
  },
];

export default function ClosingCostsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "First-Time Buyer", href: "/first-time-home-buyer/" },
              { label: "Closing Costs" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              First-Time Buyer Closing Costs Guide
            </h1>
            <p className="text-white/70 text-lg font-sans">
              Closing costs catch many first-time buyers off guard. Understanding what they include,
              how much to expect, and how to reduce them gives you the clarity to budget confidently.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What Are Closing Costs?
              </h2>
              <div className="font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Closing costs are the fees and expenses you pay to finalize your mortgage — above
                  and beyond the down payment. They cover everything from the lender&apos;s
                  processing and underwriting work to third-party services like the appraisal,
                  title search, and insurance. In Florida, closing costs typically range from 2%
                  to 5% of the home&apos;s purchase price.
                </p>
                <p>
                  On a $350,000 home, that means you could pay anywhere from $7,000 to $17,500 in
                  closing costs. While that&apos;s a significant amount, not all of it is
                  negotiable or avoidable — but a good portion can be reduced with the right
                  strategy. Understanding each line item puts you in a stronger position to
                  negotiate and budget effectively.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Typical Closing Cost Breakdown
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl font-sans">
              Here are the most common closing costs you&apos;ll encounter as a first-time buyer
              in Florida.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {closingCostItems.map((item, i) => (
              <ScrollReveal key={item.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                  <h3 className="text-lg font-bold text-primary mb-1">{item.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{item.range}</p>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Reduce */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Ways to Reduce Closing Costs
                </h2>
                <div className="font-sans text-text-muted space-y-4 leading-relaxed">
                  <p>
                    While you can&apos;t eliminate closing costs entirely, several strategies can
                    bring them down substantially. The key is knowing which costs are fixed, which
                    are negotiable, and where third-party shopping can save you money.
                  </p>
                  <p>
                    Florida&apos;s down payment assistance programs often cover closing costs too,
                    and seller concessions can shift a significant portion of the burden to the
                    other side of the transaction.
                  </p>
                </div>
              </div>
              <div className="bg-bg-light rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-4">Cost-Saving Strategies</h3>
                <ul className="space-y-3 font-sans">
                  {[
                    "Negotiate seller concessions in your purchase contract",
                    "Shop and compare quotes from multiple title companies",
                    "Compare homeowners insurance providers before closing",
                    "Ask your lender about lender credit options",
                    "Apply for Florida closing cost assistance programs",
                    "Time your closing to reduce prepaid interest charges",
                    "Review your Loan Estimate and question unfamiliar fees",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-text-muted text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Estimate Your Total Costs
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Use our mortgage calculator to see how your down payment, loan amount, and estimated
            closing costs affect your monthly budget. Or read the full first-time buyer guide for
            the complete picture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/mortgage-calculator/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              CALCULATE PAYMENTS
            </Link>
            <Link
              href="/first-time-home-buyer/"
              className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
            >
              FULL BUYER GUIDE
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={faqItems}
              title="Closing Costs FAQ"
              subtitle="Common questions about closing costs for first-time home buyers."
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
              Get a Clear Picture of Your Costs
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Tell us about your home purchase and a Kinsfolk Mortgage specialist will provide a
              detailed estimate of your expected closing costs and discuss strategies to minimize
              them.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Closing Costs Guide Inquiry"
                buttonText="Get My Cost Estimate"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-bg-light border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">Related Guides</h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            <Link
              href="/first-time-home-buyer/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              ← Back to First-Time Buyer Guide
            </Link>
            <Link
              href="/first-time-buyer-down-payment/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Down Payment Guide
            </Link>
            <Link
              href="/first-time-home-buyer-florida-programs/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Florida Programs
            </Link>
            <Link
              href="/first-time-home-buyer-mistakes/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Mistakes to Avoid
            </Link>
            <Link
              href="/mortgage-calculator/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Mortgage Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
