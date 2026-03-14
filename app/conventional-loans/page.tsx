import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Conventional Loans – Kinsfolk Mortgage LLC",
  description:
    "Conventional loans offer flexible terms, competitive rates for strong credit, and no upfront mortgage insurance. Learn how Kinsfolk Mortgage can help you find the right conventional mortgage for your goals.",
};

const benefits = [
  {
    title: "No Upfront Mortgage Insurance",
    description:
      "Unlike FHA loans, conventional mortgages don't require an upfront insurance premium. If you put 20% or more down, you won't pay private mortgage insurance at all — and PMI can be removed once you reach 20% equity.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Flexible Loan Terms",
    description:
      "Choose from 10, 15, 20, 25, or 30-year fixed-rate terms, or opt for an adjustable-rate mortgage (ARM) to match your financial strategy. Shorter terms build equity faster; longer terms keep payments manageable.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Best Rates for Strong Credit",
    description:
      "Borrowers with credit scores of 740 and above typically qualify for the most competitive conventional rates available — often lower than those on government-backed loans for the same borrower profile.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Multiple Property Types",
    description:
      "Conventional loans can be used for primary residences, second homes, and investment properties — giving you far more flexibility than government-backed programs that are limited to primary residences only.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: "What is a conventional loan?",
    answer:
      "A conventional loan is a mortgage that isn't insured or guaranteed by a government agency like the FHA, VA, or USDA. Instead, conventional loans follow guidelines set by Fannie Mae and Freddie Mac (conforming loans) or exceed those limits (jumbo loans). They're the most common type of mortgage in the United States.",
  },
  {
    question: "How much do I need for a down payment on a conventional loan?",
    answer:
      "While 20% down is the traditional benchmark — and eliminates the need for private mortgage insurance — many conventional loan programs allow as little as 3% down for first-time buyers or 5% for repeat buyers. The larger your down payment, the lower your monthly payment and the better your interest rate will typically be.",
  },
  {
    question: "What credit score do I need for a conventional loan?",
    answer:
      "Most lenders require a minimum credit score of 620 for conventional loans. However, to access the best rates and terms, a score of 740 or higher is ideal. Borrowers in the 620–739 range can still qualify, but may see slightly higher rates or additional requirements.",
  },
  {
    question: "What's the difference between conforming and non-conforming conventional loans?",
    answer:
      "Conforming loans meet the guidelines and loan limits set by Fannie Mae and Freddie Mac. For 2025, the conforming limit is $766,550 in most areas (higher in designated high-cost markets). Non-conforming loans — commonly called jumbo loans — exceed these limits and typically require larger down payments, higher credit scores, and more reserves.",
  },
  {
    question: "Can I remove private mortgage insurance (PMI)?",
    answer:
      "Yes — this is a key advantage of conventional loans. Once your loan-to-value ratio reaches 80% (meaning you have 20% equity), you can request PMI removal. By law, your lender must automatically cancel PMI once you reach 78% LTV. This is different from FHA loans, where mortgage insurance often lasts the life of the loan.",
  },
  {
    question: "Should I choose a fixed-rate or adjustable-rate conventional loan?",
    answer:
      "A fixed-rate loan offers predictable payments for the entire term — ideal if you plan to stay in the home long-term. An adjustable-rate mortgage (ARM) starts with a lower rate for an initial period (typically 5 or 7 years) then adjusts annually. ARMs can be a smart choice if you plan to sell or refinance before the adjustment period begins.",
  },
];

export default function ConventionalLoansPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Loan Options", href: "/loan-options/" },
              { label: "Conventional Loans" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Conventional Loans — Flexibility Meets Competitive Rates
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Conventional loans are the most popular mortgage option in America for good reason.
              With flexible terms, no upfront insurance fees, and the ability to drop PMI, they
              reward financially prepared buyers with lower long-term costs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET YOUR QUOTE
              </Link>
              <a
                href="#conventional-benefits"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                SEE BENEFITS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="conventional-benefits" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Advantages of a Conventional Mortgage
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              Conventional loans give you more control over your mortgage — from choosing your term
              to eliminating insurance as you build equity.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <ScrollReveal key={b.title}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 group h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{b.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  Conventional Loan Requirements
                </h2>
                <p className="text-text-muted leading-relaxed mb-6 font-sans">
                  Conventional loans have somewhat stricter standards than government-backed
                  programs, but the trade-off is lower long-term costs and greater flexibility.
                  Here&apos;s what you&apos;ll typically need:
                </p>
                <ul className="space-y-3 font-sans">
                  {[
                    "Minimum credit score of 620 (740+ for the best rates)",
                    "Down payment of 3–20% depending on the program and buyer status",
                    "Debt-to-income ratio at or below 45% (some programs allow up to 50%)",
                    "Stable employment and verifiable income for at least two years",
                    "Sufficient cash reserves, especially for larger loan amounts or investment properties",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
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
                      <span className="text-text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-light rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Documentation Checklist
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                  Coming prepared with the right documents will help us process your application as
                  quickly as possible.
                </p>
                <ul className="space-y-2 text-sm text-text-muted font-sans">
                  {[
                    "Last 30 days of pay stubs from all employers",
                    "W-2s or 1099s from the past two years",
                    "Complete federal tax returns (two most recent years)",
                    "Bank and investment account statements (60 days)",
                    "Photo ID and Social Security number",
                    "Landlord reference or 12 months of rent payment proof (if applicable)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-px">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/quote/"
                  className="inline-block mt-6 px-6 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-bold text-sm rounded-lg transition-colors"
                >
                  Start Your Application
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Mid-page CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Good Credit Should Be Rewarded
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            If you&apos;ve worked hard to build strong credit and save for a down payment, a
            conventional loan puts you in the best position to take advantage of that
            discipline — with lower rates, more options, and the ability to drop mortgage insurance
            over time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              GET PRE-APPROVED
            </Link>
            <Link
              href="/mortgage-calculator/"
              className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
            >
              RUN THE NUMBERS
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
              title="Conventional Loan FAQ"
              subtitle="Get answers to the most common questions about conventional mortgage financing."
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
              Let&apos;s Find Your Best Rate
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Complete the form below and a Kinsfolk Mortgage loan officer will reach out with a
              personalized conventional loan quote tailored to your financial profile.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Conventional Loan Inquiry"
                buttonText="Request Conventional Loan Info"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-bg-light border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            <Link
              href="/loan-options/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              All Loan Options
            </Link>
            <Link
              href="/va-loans/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              VA Loans
            </Link>
            <Link
              href="/fha-loans/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              FHA Loans
            </Link>
            <Link
              href="/mortgage-calculator/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Mortgage Calculator
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
