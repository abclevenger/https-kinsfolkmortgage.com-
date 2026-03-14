import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "How Much House Can I Afford?",
  description:
    "Find out how much house you can afford based on your income, debts, and down payment. Includes salary-based examples and affordability rules.",
};

const faqItems = [
  {
    question: "How do lenders decide how much house I can afford?",
    answer:
      "Lenders use your debt-to-income ratio (DTI) as the primary measure. They compare your total monthly debt payments — including the proposed mortgage — against your gross monthly income. Most conventional loans cap DTI at 43–50%, and the 28/36 rule is a common guideline: housing costs should not exceed 28% of gross income, and total debts should stay under 36%. Your credit score, down payment, and cash reserves also influence the maximum loan amount.",
  },
  {
    question: "Does my down payment change how much house I can afford?",
    answer:
      "Absolutely. A larger down payment reduces the amount you need to borrow, which lowers your monthly payment and can eliminate private mortgage insurance (PMI). For example, putting 20% down on a $400,000 home means financing $320,000 instead of $388,000 with 3% down. The smaller loan amount qualifies you more easily and saves thousands in interest over the life of the loan.",
  },
  {
    question: "Should I buy the maximum amount I'm approved for?",
    answer:
      "Not necessarily. Just because a lender approves you for a certain amount doesn't mean that's the right budget for your lifestyle. Lender calculations don't account for childcare, savings goals, travel, hobbies, or other personal expenses. Most financial advisors recommend keeping your housing costs well below the maximum to maintain financial flexibility and avoid feeling house-poor.",
  },
  {
    question: "How do interest rates affect affordability?",
    answer:
      "Interest rates have a major impact on your monthly payment and total borrowing power. For every 1% increase in rate, your purchasing power drops by roughly 10%. At 5.5%, a $2,000/month payment supports a ~$352,000 mortgage. At 7%, that same payment only supports ~$300,000. Even small rate differences compound significantly over 30 years.",
  },
  {
    question: "What is the 28/36 rule?",
    answer:
      "The 28/36 rule is a widely used guideline for housing affordability. The first number (28) means your total housing costs — mortgage payment, property taxes, insurance, and HOA fees — should not exceed 28% of your gross monthly income. The second number (36) means your total monthly debt payments (housing plus car loans, student loans, credit cards, etc.) should stay below 36% of gross income. While some loan programs allow higher ratios, staying within these limits reduces financial stress.",
  },
];

const salaryExamples = [
  {
    salary: "$60,000",
    monthly: "$5,000",
    housing28: "$1,400",
    homeRange: "$240,000 – $280,000",
    note: "With 5–10% down, FHA or conventional financing. PMI will apply below 20% down.",
  },
  {
    salary: "$80,000",
    monthly: "$6,667",
    housing28: "$1,867",
    homeRange: "$320,000 – $370,000",
    note: "Comfortable range for most Florida markets. Conventional 3% down or FHA 3.5% down are popular choices.",
  },
  {
    salary: "$100,000",
    monthly: "$8,333",
    housing28: "$2,333",
    homeRange: "$400,000 – $460,000",
    note: "Strong purchasing power. With 10% or more down, you'll access competitive conventional rates.",
  },
  {
    salary: "$120,000",
    monthly: "$10,000",
    housing28: "$2,800",
    homeRange: "$480,000 – $550,000",
    note: "Well-positioned for mid-range to higher-end homes. Consider a 15-year term to save on total interest.",
  },
  {
    salary: "$150,000",
    monthly: "$12,500",
    housing28: "$3,500",
    homeRange: "$600,000 – $700,000",
    note: "Upper range with room for a comfortable monthly budget. Jumbo loan territory may apply above conforming limits.",
  },
];

export default function HowMuchHouseCanIAffordPage() {
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
              { label: "How Much House Can I Afford" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              How Much House Can I Afford?
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Find out how much house you can afford based on your income, debts,
              and down payment. We break it down by salary level with real
              examples and the rules lenders actually use.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mortgage-prequalified/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET PRE-QUALIFIED
              </Link>
              <a
                href="#salary-examples"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                SEE EXAMPLES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 28/36 Rule */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                The 28/36 Rule: How Lenders Measure Affordability
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Before you start shopping for homes, it&apos;s essential to
                  understand how lenders determine what you can afford. The most
                  widely used guideline is the <strong>28/36 rule</strong>, which
                  sets two thresholds for your income:
                </p>
                <ul className="list-none space-y-3 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">28%</span>
                    <span>
                      Your total housing costs — mortgage principal and interest,
                      property taxes, homeowners insurance, and HOA fees — should
                      not exceed 28% of your gross monthly income. This is your
                      front-end ratio.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">36%</span>
                    <span>
                      Your total monthly debt payments — housing costs plus car
                      loans, student loans, credit card minimums, and other
                      obligations — should stay below 36% of gross income. This
                      is your back-end ratio (DTI).
                    </span>
                  </li>
                </ul>
                <p>
                  These aren&apos;t hard caps. Many loan programs — including
                  FHA and some conventional options — allow DTI ratios up to 43%
                  or even 50% with strong compensating factors. But staying
                  within the 28/36 framework keeps your monthly budget
                  comfortable and leaves room for savings, emergencies, and
                  lifestyle spending.
                </p>
                <p>
                  The key insight: your{" "}
                  <Link
                    href="/dti-calculator/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    debt-to-income ratio
                  </Link>{" "}
                  determines how much of your income is available for a mortgage
                  payment. The lower your existing debts, the more house you can
                  afford at any given income level.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Salary Examples */}
      <section id="salary-examples" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Home Affordability by Salary
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              These estimates assume a 30-year fixed mortgage around 6.5–7%, low
              to moderate existing debt, and property taxes and insurance typical
              of the Florida market.
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {salaryExamples.map((ex, i) => (
              <ScrollReveal key={ex.salary} delay={i < 4 ? (i as 0 | 1 | 2 | 3) : undefined}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                    <div className="sm:w-40 shrink-0">
                      <p className="text-sm text-text-muted font-sans">
                        Annual Salary
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {ex.salary}
                      </p>
                    </div>
                    <div className="sm:w-44 shrink-0">
                      <p className="text-sm text-text-muted font-sans">
                        28% Housing Budget
                      </p>
                      <p className="text-xl font-bold text-accent">
                        {ex.housing28}
                        <span className="text-sm font-normal text-text-muted">
                          /mo
                        </span>
                      </p>
                    </div>
                    <div className="sm:w-52 shrink-0">
                      <p className="text-sm text-text-muted font-sans">
                        Estimated Home Price
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {ex.homeRange}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-muted font-sans leading-relaxed">
                        {ex.note}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-xs text-text-light text-center mt-6 max-w-2xl mx-auto">
            These estimates are approximate and assume minimal existing debt.
            Your actual affordability depends on your full financial profile
            including credit score, debts, down payment, and current interest
            rates.
          </p>
        </div>
      </section>

      {/* Additional Context */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What Else Affects Your Buying Power?
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Down Payment Size
                </h3>
                <p>
                  Your down payment directly affects how much you need to borrow
                  and whether you&apos;ll pay private mortgage insurance (PMI).
                  Putting 20% down eliminates PMI entirely, which can save $100
                  to $300 per month depending on your loan amount. Even if you
                  can&apos;t reach 20%, a larger down payment still lowers your
                  monthly payment and the total interest you&apos;ll pay.
                  Programs like FHA (3.5% down) and conventional (3% down) make
                  homeownership accessible with modest savings.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Interest Rates
                </h3>
                <p>
                  Interest rates are one of the most powerful levers in the
                  affordability equation. A 1% change in rate can shift your
                  purchasing power by roughly 10%. At 6% on a 30-year fixed
                  loan, a $2,000 monthly payment supports approximately a
                  $334,000 mortgage. At 7%, that same payment only covers about
                  $300,000. Locking in a competitive rate — and understanding
                  how rate changes affect your budget — is critical.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Credit Score
                </h3>
                <p>
                  Your credit score doesn&apos;t just determine whether you
                  qualify — it affects the rate you&apos;re offered, which in
                  turn affects how much house you can afford. Borrowers with
                  scores above 740 typically receive the best available rates,
                  while scores below 680 may face pricing adjustments that
                  increase the effective cost of the loan. Improving your credit
                  score before applying can meaningfully expand your buying
                  power.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Property Taxes and Insurance
                </h3>
                <p>
                  Don&apos;t overlook property taxes and homeowners insurance
                  when calculating affordability. In Florida, property tax rates
                  vary by county but typically range from 0.8% to 1.2% of the
                  home&apos;s assessed value annually. Homeowners insurance —
                  particularly in hurricane-prone areas — can be higher than the
                  national average. These costs are part of your total housing
                  payment and directly affect how much home your income can
                  support.
                </p>
                <p>
                  The best way to get a clear picture of what you can afford is
                  to run your numbers through a{" "}
                  <Link
                    href="/mortgage-calculator/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    mortgage calculator
                  </Link>{" "}
                  and then speak with a loan officer who can factor in your
                  complete financial profile.
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
              title="Affordability FAQ"
              subtitle="Common questions about home affordability and buying power."
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
              Find Out Exactly What You Can Afford
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Tell us about your income and goals, and a Kinsfolk Mortgage
              specialist will help you understand your full buying power — no
              obligation.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Affordability Guide"
                buttonText="Get My Affordability Estimate"
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
              { href: "/dti-calculator/", label: "DTI Calculator" },
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
              {
                href: "/first-time-home-buyer/",
                label: "First-Time Buyer Guide",
              },
              { href: "/mortgage-prequalified/", label: "Get Pre-Qualified" },
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
            headline: "How Much House Can I Afford?",
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
