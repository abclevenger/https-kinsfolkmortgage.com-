import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "10 First-Time Home Buyer Mistakes to Avoid",
  description:
    "Avoid the most common first-time home buyer mistakes. From skipping pre-qualification to waiving inspections — protect your investment. Kinsfolk Mortgage LLC.",
};

const mistakes = [
  {
    number: "01",
    title: "Not Getting Pre-Qualified First",
    description:
      "Shopping for homes before you know what you can afford wastes time and sets you up for disappointment. Pre-qualification is free, takes minutes, and gives you a clear budget to work with. It also signals to sellers that you're a serious, vetted buyer.",
    link: { href: "/mortgage-prequalified/", label: "Get pre-qualified now" },
  },
  {
    number: "02",
    title: "Ignoring Your Credit Score",
    description:
      "Your credit score directly affects your interest rate and which loan programs you qualify for. A score difference of even 40 points can cost or save you tens of thousands of dollars over the life of a 30-year mortgage. Check your score early and address any issues before you apply.",
    link: { href: "/first-time-buyer-credit-score/", label: "Credit score guide" },
  },
  {
    number: "03",
    title: "Only Looking at the Monthly Payment",
    description:
      "A low monthly payment can hide high long-term costs. A longer loan term or adjustable rate might look affordable now but cost far more in total interest. Always compare the total cost of the loan — including interest, insurance, and fees — not just the monthly number.",
    link: { href: "/mortgage-calculator/", label: "Compare loan scenarios" },
  },
  {
    number: "04",
    title: "Underestimating Closing Costs",
    description:
      "Many first-time buyers focus exclusively on the down payment and are caught off guard by closing costs, which typically add 2–5% of the purchase price. Appraisal fees, title insurance, origination charges, prepaid taxes, and homeowners insurance all add up fast.",
    link: { href: "/first-time-buyer-closing-costs/", label: "Closing costs guide" },
  },
  {
    number: "05",
    title: "Making Large Purchases Before Closing",
    description:
      "Buying a car, furniture, or appliances on credit before your mortgage closes can derail your loan approval. These purchases increase your debt-to-income ratio and can trigger a credit score drop at the worst possible time. Wait until after closing to make major purchases.",
  },
  {
    number: "06",
    title: "Not Shopping for the Best Rate",
    description:
      "Accepting the first mortgage rate you're offered can cost you thousands. Even a 0.25% difference in interest rate on a $300,000 loan translates to roughly $15,000 over 30 years. Get quotes from at least two or three lenders and compare their Loan Estimates side by side.",
    link: { href: "/quote/", label: "Get your rate quote" },
  },
  {
    number: "07",
    title: "Skipping the Home Inspection",
    description:
      "Waiving the inspection to win a competitive bid is one of the riskiest moves a first-time buyer can make. A professional inspection can uncover structural issues, roof damage, plumbing problems, or electrical hazards that could cost tens of thousands to fix. The $300–$500 inspection fee is money well spent.",
  },
  {
    number: "08",
    title: "Not Researching Down Payment Assistance",
    description:
      "Thousands of dollars in grants and assistance go unclaimed every year because buyers don't know they exist. Florida offers programs through Florida Housing, Hometown Heroes, and local SHIP programs that can cover part or all of your down payment and closing costs.",
    link: { href: "/first-time-home-buyer-florida-programs/", label: "Florida buyer programs" },
  },
  {
    number: "09",
    title: "Draining Your Savings for the Down Payment",
    description:
      "Putting every available dollar toward the down payment leaves you vulnerable. Unexpected repairs, job disruptions, or medical expenses can create financial stress if you have no reserves. Aim to keep at least 3 to 6 months of living expenses in savings after closing.",
    link: { href: "/first-time-buyer-down-payment/", label: "Down payment guide" },
  },
  {
    number: "10",
    title: "Going It Alone Without Professional Help",
    description:
      "The home buying process involves complex contracts, timelines, and financial decisions. Working with an experienced loan officer and a trusted real estate agent protects your interests and ensures you don't miss deadlines, overlook fine print, or leave money on the table.",
    link: { href: "/real-estate-agent-recommendation/", label: "Get an agent referral" },
  },
];

const faqItems = [
  {
    question: "What is the biggest mistake first-time buyers make?",
    answer:
      "The single most common and costly mistake is not getting pre-qualified before shopping for homes. Without pre-qualification, you don't know your budget, sellers won't take your offers seriously, and you risk falling in love with a property you can't afford. Pre-qualification is free, fast, and sets you up for a much smoother process.",
  },
  {
    question: "Should I buy a home if I have student loans?",
    answer:
      "Student loans don't automatically disqualify you. Lenders evaluate your debt-to-income ratio — the percentage of your gross monthly income that goes toward all debt payments. If your DTI is within acceptable limits (typically 43–50% depending on the program), you can qualify. FHA loans in particular offer flexibility for borrowers with existing debt.",
  },
  {
    question: "How much should I keep in savings after buying?",
    answer:
      "Financial advisors generally recommend maintaining 3 to 6 months of living expenses as an emergency fund after closing. This cushion protects you against unexpected repairs, temporary income disruptions, or other financial surprises during your first year of homeownership. Don't put every dollar into your down payment.",
  },
  {
    question: "Is it worth buying in a competitive market?",
    answer:
      "Yes, as long as you don't overextend yourself. In competitive markets, focus on getting pre-qualified early, setting firm budget limits, and working with an experienced agent. Avoid emotional bidding wars that push you beyond your comfortable range. If you lose a few offers, that's normal — the right home at the right price will come along.",
  },
];

export default function MistakesPage() {
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
              { label: "Mistakes to Avoid" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              10 First-Time Home Buyer Mistakes to Avoid
            </h1>
            <p className="text-white/70 text-lg font-sans">
              Buying your first home is exciting — and complex. These are the mistakes we see most
              often, along with how to sidestep each one and protect your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Mistakes List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-10">
              The 10 Most Common Pitfalls
            </h2>
          </ScrollReveal>
          <div className="space-y-6 max-w-4xl">
            {mistakes.map((mistake, i) => (
              <ScrollReveal key={mistake.number} delay={Math.min((i % 4) + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="text-3xl font-bold text-accent/30 shrink-0 leading-none font-mono">
                      {mistake.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-2">{mistake.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed font-sans">
                        {mistake.description}
                      </p>
                      {mistake.link && (
                        <Link
                          href={mistake.link.href}
                          className="inline-block mt-3 text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                        >
                          {mistake.link.label} →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Avoid These Mistakes with Expert Guidance
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Working with a knowledgeable loan officer is the best way to stay on track. Our
            complete first-time buyer guide covers everything from loan programs to closing day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/first-time-home-buyer/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              READ THE FULL GUIDE
            </Link>
            <Link
              href="/mortgage-prequalified/"
              className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
            >
              GET PRE-QUALIFIED
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
              title="Common Questions"
              subtitle="More answers for first-time home buyers."
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
              Get Expert Help from Day One
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              The best way to avoid first-time buyer mistakes is to work with someone who knows the
              process inside and out. Tell us about your goals and a Kinsfolk Mortgage specialist
              will guide you through every step.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Mistakes Guide Inquiry"
                buttonText="Start My Journey"
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
              href="/first-time-buyer-credit-score/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Credit Score Guide
            </Link>
            <Link
              href="/first-time-buyer-closing-costs/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Closing Costs Guide
            </Link>
            <Link
              href="/first-time-home-buyer-florida-programs/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Florida Programs
            </Link>
            <Link
              href="/quote/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
