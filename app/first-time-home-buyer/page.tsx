import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
  title: "First-Time Home Buyer Guide",
  description:
    "Complete first-time home buyer guide for Florida. Down payment options, credit requirements, loan programs, and step-by-step process. Kinsfolk Mortgage LLC.",
};

const tocItems = [
  { label: "Is Now the Right Time?", id: "right-time" },
  { label: "Loan Programs", id: "loan-programs" },
  { label: "Down Payment Options", id: "down-payment" },
  { label: "Credit Score Requirements", id: "credit-score" },
  { label: "Florida Programs", id: "florida-programs" },
  { label: "Closing Costs", id: "closing-costs" },
  { label: "Mistakes to Avoid", id: "mistakes" },
  { label: "The Buying Process", id: "buying-process" },
];

const buyingSteps = [
  {
    number: "1",
    title: "Check Your Finances",
    description:
      "Review your credit score, savings, and monthly budget. Understanding where you stand financially sets the foundation for every decision that follows.",
  },
  {
    number: "2",
    title: "Get Pre-Qualified",
    description:
      "A pre-qualification letter shows sellers you're serious and tells you exactly how much home you can afford. This step costs nothing and takes minutes.",
  },
  {
    number: "3",
    title: "Choose Your Loan Program",
    description:
      "FHA, VA, Conventional, or USDA — each program has unique benefits. We'll help you compare options and pick the one that fits your situation.",
  },
  {
    number: "4",
    title: "Find Your Home",
    description:
      "Work with a real estate agent to tour homes within your budget. Once you find the right one, submit an offer with your pre-qualification letter attached.",
  },
  {
    number: "5",
    title: "Complete Underwriting",
    description:
      "Your lender verifies your income, assets, and the property's value through appraisal. We handle the heavy lifting and keep you informed at every stage.",
  },
  {
    number: "6",
    title: "Close and Get Your Keys",
    description:
      "Sign your final documents, pay closing costs, and receive the keys to your new home. Welcome to homeownership.",
  },
];

const faqItems = [
  {
    question: "How much money do I need to buy my first home?",
    answer:
      "The amount depends on your loan program and the home's purchase price. FHA loans require as little as 3.5% down, conventional loans start at 3%, and VA and USDA loans offer 0% down payment options. Beyond the down payment, budget for closing costs (typically 2–5% of the purchase price), a home inspection, and moving expenses. Many Florida assistance programs can help cover these upfront costs.",
  },
  {
    question: "What credit score do I need as a first-time buyer?",
    answer:
      "Minimum credit score requirements vary by loan type. FHA loans accept scores as low as 580 for the 3.5% down payment option (500–579 with 10% down). Conventional loans typically require a 620 minimum. VA loans have no official minimum score set by the VA, though most lenders look for at least 580–620. The higher your score, the better your interest rate will be.",
  },
  {
    question: "What is the difference between pre-qualification and pre-approval?",
    answer:
      "Pre-qualification is an initial estimate of how much you may be able to borrow based on self-reported financial information. It's a quick first step that doesn't require documentation. Pre-approval is more thorough — the lender verifies your income, assets, and credit, then issues a conditional commitment for a specific loan amount. Sellers take pre-approval letters more seriously because they indicate the buyer has already been vetted.",
  },
  {
    question: "Are there special programs for first-time home buyers in Florida?",
    answer:
      "Yes. Florida offers several programs through the Florida Housing Finance Corporation, including the Hometown Heroes program for community workers, down payment and closing cost assistance, and below-market interest rates for qualifying buyers. Many of these programs can be combined with FHA, VA, or conventional loans to reduce your out-of-pocket costs significantly.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "From pre-qualification to closing, the process typically takes 30 to 60 days once you're under contract. However, the timeline can vary depending on the loan type, the property, and how quickly you provide required documentation. Getting pre-qualified early and having your paperwork organized can help speed things up considerably.",
  },
  {
    question: "Can I buy a home with student loan debt?",
    answer:
      "Absolutely. Student loan debt doesn't disqualify you from buying a home. Lenders look at your debt-to-income ratio (DTI) — the percentage of your gross monthly income that goes toward debt payments. As long as your DTI falls within acceptable limits (typically 43–50% depending on the loan program), you can qualify. FHA loans in particular offer more flexibility for borrowers carrying student debt.",
  },
];

export default function FirstTimeHomeBuyerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "First-Time Home Buyer Guide" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              First-Time Home Buyer Guide
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Everything you need to know about buying your first home in Florida — from choosing the
              right loan program and understanding down payment options to navigating closing costs
              and avoiding common pitfalls. Kinsfolk Mortgage is here to guide you every step of the
              way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/mortgage-prequalified/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET PRE-QUALIFIED
              </Link>
              <a
                href="#right-time"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                START READING
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-bg-light border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-primary mb-6">What&apos;s in This Guide</h2>
            <nav className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 font-sans">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-border/50 hover:border-accent/40 hover:shadow-sm transition-all text-sm font-medium text-primary group"
                >
                  <svg
                    className="w-4 h-4 text-accent shrink-0 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {item.label}
                </a>
              ))}
            </nav>
          </ScrollReveal>
        </div>
      </section>

      {/* Is Now the Right Time */}
      <section id="right-time" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Is Now the Right Time to Buy?
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  If you&apos;ve been renting and wondering whether homeownership is within reach,
                  you&apos;re not alone. Millions of Americans face the same question every year, and
                  the answer is rarely a simple yes or no. The &ldquo;right time&rdquo; to buy
                  depends on a combination of personal finances, local market conditions, and
                  long-term goals — not just interest rates or headlines.
                </p>
                <p>
                  Florida&apos;s housing market continues to attract first-time buyers thanks to
                  competitive home prices relative to other high-growth states, the absence of a
                  state income tax, and a steady stream of new construction. Even when interest rates
                  fluctuate, the equity you build as a homeowner works in your favor over time.
                  Renting, by contrast, offers no return on the money you spend each month. Every
                  mortgage payment brings you closer to owning an asset outright.
                </p>
                <p>
                  That said, buying a home is a major financial commitment. Before you start touring
                  properties, it&apos;s essential to have a clear picture of your credit standing,
                  your savings, and how much home you can comfortably afford. The sections below walk
                  through every piece of the puzzle — from the loan programs available to you as a
                  first-time buyer to the Florida-specific assistance programs that can significantly
                  reduce your upfront costs.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Loan Programs */}
      <section id="loan-programs" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              First-Time Buyer Loan Programs
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              As a first-time buyer, you have access to several loan programs — each designed to
              lower the barrier to homeownership. Here&apos;s how they compare.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    FHA
                  </span>
                  <h3 className="text-xl font-bold text-primary">FHA Loans</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                  Backed by the Federal Housing Administration, FHA loans are one of the most
                  popular choices for first-time buyers. They require as little as 3.5% down with a
                  credit score of 580 or higher, and they accept lower scores with a larger down
                  payment. FHA loans also allow gift funds for the entire down payment and offer
                  competitive interest rates that rival conventional options.
                </p>
                <Link
                  href="/fha-loans/"
                  className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                >
                  Learn more about FHA loans →
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    VA
                  </span>
                  <h3 className="text-xl font-bold text-primary">VA Loans</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                  Available to active-duty military, veterans, and eligible surviving spouses, VA
                  loans offer exceptional terms: zero down payment, no private mortgage insurance,
                  and competitive interest rates. The VA doesn&apos;t set a minimum credit score,
                  though most lenders look for at least 580–620. If you&apos;ve served, this is
                  often the best loan program available.
                </p>
                <Link
                  href="/va-loans/"
                  className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                >
                  Learn more about VA loans →
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    Conv
                  </span>
                  <h3 className="text-xl font-bold text-primary">Conventional Loans</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                  Conventional loans are not backed by a government agency and follow guidelines set
                  by Fannie Mae and Freddie Mac. First-time buyers can put as little as 3% down, and
                  if you reach 20% equity, private mortgage insurance drops off entirely. Borrowers
                  with credit scores of 740 or above typically secure the most competitive rates
                  available in the market.
                </p>
                <Link
                  href="/conventional-loans/"
                  className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                >
                  Learn more about conventional loans →
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                    USDA
                  </span>
                  <h3 className="text-xl font-bold text-primary">USDA Loans</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                  USDA loans are designed for buyers purchasing in eligible rural and suburban areas.
                  They offer zero down payment and reduced mortgage insurance compared to FHA loans.
                  Income limits apply, but many areas in Florida outside of major metro centers
                  qualify. If your target neighborhood is in an eligible zone, a USDA loan could save
                  you thousands in upfront costs.
                </p>
                <Link
                  href="/loan-options/"
                  className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                >
                  Explore all loan options →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Down Payment Options */}
      <section id="down-payment" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Down Payment Options
                </h2>
                <div className="font-sans text-text-muted space-y-4 leading-relaxed">
                  <p>
                    The down payment is often the biggest hurdle for first-time buyers, but the
                    reality is you don&apos;t need 20% saved to buy a home. Multiple loan programs
                    let you get into a home with significantly less — and some require no down
                    payment at all.
                  </p>
                  <p>
                    VA and USDA loans offer true zero-down financing for eligible borrowers.
                    Conventional loans allow as little as 3% down through programs like HomeReady and
                    Home Possible, while FHA loans start at 3.5%. Florida also offers down payment
                    assistance programs that can provide grants or low-interest second mortgages to
                    cover part or all of your upfront costs.
                  </p>
                  <p>
                    Your down payment amount also affects your monthly payment and whether you&apos;ll
                    pay private mortgage insurance. Understanding these trade-offs is critical to
                    making the right decision for your budget.
                  </p>
                </div>
                <Link
                  href="/first-time-buyer-down-payment/"
                  className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-dark font-semibold transition-colors"
                >
                  Read our full down payment guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="bg-bg-light rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Down Payment at a Glance
                </h3>
                <ul className="space-y-3 font-sans text-sm">
                  {[
                    { program: "VA Loans", amount: "0% down", note: "Military/veteran eligibility required" },
                    { program: "USDA Loans", amount: "0% down", note: "Rural/suburban areas, income limits" },
                    { program: "Conventional", amount: "As low as 3%", note: "First-time buyer programs available" },
                    { program: "FHA Loans", amount: "3.5% minimum", note: "580+ credit score" },
                  ].map((row) => (
                    <li
                      key={row.program}
                      className="flex items-start gap-3 p-3 bg-white rounded-lg border border-border/30"
                    >
                      <span className="text-accent font-bold mt-px">✓</span>
                      <div>
                        <span className="font-semibold text-primary">{row.program}:</span>{" "}
                        <span className="text-text-muted">{row.amount}</span>
                        <p className="text-text-muted/70 text-xs mt-0.5">{row.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Credit Score Requirements */}
      <section id="credit-score" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Credit Score Requirements
              </h2>
              <div className="font-sans text-text-muted space-y-4 leading-relaxed">
                <p>
                  Your credit score is one of the most important factors in determining which loan
                  programs you qualify for and what interest rate you&apos;ll receive. The good news
                  is that you don&apos;t need perfect credit to buy your first home. FHA loans
                  accept scores as low as 580 for the minimum down payment option, and VA loans
                  have no official minimum set by the Department of Veterans Affairs.
                </p>
                <p>
                  Conventional loans generally require a minimum score of 620, but borrowers with
                  scores above 740 unlock the best rates. Even if your credit isn&apos;t where
                  you&apos;d like it to be today, there are proven strategies to improve it — often
                  in as little as a few months. Paying down credit card balances, disputing errors
                  on your report, and avoiding new credit inquiries can all make a meaningful
                  difference.
                </p>
              </div>
              <Link
                href="/first-time-buyer-credit-score/"
                className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-dark font-semibold transition-colors"
              >
                Read our full credit score guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Florida-Specific Programs */}
      <section id="florida-programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Florida-Specific Programs
              </h2>
              <div className="font-sans text-text-muted space-y-4 leading-relaxed">
                <p>
                  Florida is one of the most buyer-friendly states for first-time homeowners. The
                  Florida Housing Finance Corporation (Florida Housing) administers several programs
                  designed to help working Floridians achieve homeownership, including below-market
                  interest rates, down payment assistance, and closing cost help.
                </p>
                <p>
                  The Hometown Heroes program, for example, extends significant assistance to
                  community workers including teachers, nurses, firefighters, law enforcement
                  officers, and other essential employees. The State Housing Initiatives Partnership
                  (SHIP) program provides locally administered funds through counties and cities
                  across the state. These programs can often be combined with FHA, VA, or
                  conventional financing to dramatically reduce the cash you need at closing.
                </p>
              </div>
              <Link
                href="/first-time-home-buyer-florida-programs/"
                className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-dark font-semibold transition-colors"
              >
                Explore Florida buyer programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing Costs */}
      <section id="closing-costs" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Understanding Closing Costs
              </h2>
              <div className="font-sans text-text-muted space-y-4 leading-relaxed">
                <p>
                  Beyond the down payment, first-time buyers need to budget for closing costs —
                  the fees and expenses that finalize your mortgage. In Florida, closing costs
                  typically range from 2% to 5% of the home&apos;s purchase price. On a $350,000
                  home, that&apos;s roughly $7,000 to $17,500.
                </p>
                <p>
                  These costs include items like the appraisal fee, title insurance, origination
                  charges, property taxes, homeowners insurance, and prepaid interest. While closing
                  costs can feel like a lot on top of a down payment, there are strategies to reduce
                  them — including negotiating seller concessions, shopping for title and insurance
                  providers, and taking advantage of Florida&apos;s assistance programs.
                </p>
              </div>
              <Link
                href="/first-time-buyer-closing-costs/"
                className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-dark font-semibold transition-colors"
              >
                Read our closing costs guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Common Mistakes */}
      <section id="mistakes" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Common Mistakes to Avoid
              </h2>
              <div className="font-sans text-text-muted space-y-4 leading-relaxed">
                <p>
                  First-time buyers are navigating unfamiliar territory, and even small missteps can
                  cost thousands of dollars or delay your closing. The most common mistakes include
                  skipping pre-qualification, underestimating closing costs, making large purchases
                  before closing that affect your debt-to-income ratio, and not shopping around for
                  the best mortgage rate.
                </p>
                <p>
                  Another frequent pitfall is waiving the home inspection to win a competitive bid.
                  While it may seem like a strategic move in a hot market, it can lead to costly
                  surprises after you move in. Understanding these mistakes before you start the
                  process puts you in a far stronger position.
                </p>
              </div>
              <Link
                href="/first-time-home-buyer-mistakes/"
                className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-dark font-semibold transition-colors"
              >
                See all 10 mistakes to avoid
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Buying Process */}
      <section id="buying-process" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            steps={buyingSteps}
            title="The Home Buying Process"
            subtitle="From your first phone call to picking up your keys — here's what to expect at every stage."
          />
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Getting pre-qualified is free, takes just a few minutes, and shows you exactly how much
            home you can afford. No obligation, no commitment — just clarity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/mortgage-prequalified/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              GET PRE-QUALIFIED NOW
            </Link>
            <Link
              href="/mortgage-calculator/"
              className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
            >
              ESTIMATE PAYMENTS
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
              title="First-Time Buyer FAQ"
              subtitle="Answers to the questions we hear most from first-time home buyers."
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
              Start Your Home Buying Journey
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Tell us about your situation and a first-time buyer specialist from Kinsfolk Mortgage
              will reach out to walk you through your options — no pressure, no obligation.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="First-Time Buyer Pillar"
                buttonText="Get My Free Consultation"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-bg-light border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">Continue Exploring</h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            {[
              { href: "/first-time-buyer-down-payment/", label: "Down Payment Guide" },
              { href: "/first-time-buyer-credit-score/", label: "Credit Score Guide" },
              { href: "/first-time-home-buyer-florida-programs/", label: "Florida Programs" },
              { href: "/first-time-buyer-closing-costs/", label: "Closing Costs" },
              { href: "/first-time-home-buyer-mistakes/", label: "Mistakes to Avoid" },
              { href: "/mortgage-calculator/", label: "Mortgage Calculator" },
              { href: "/mortgage-prequalified/", label: "Get Pre-Qualified" },
              { href: "/quote/", label: "Get a Quote" },
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
