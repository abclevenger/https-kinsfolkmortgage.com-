import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "FHA Loans – Kinsfolk Mortgage LLC",
  description:
    "FHA loans make homeownership possible with as little as 3.5% down and flexible credit requirements. Kinsfolk Mortgage guides first-time buyers and experienced homeowners through every step of the FHA loan process.",
};

const benefits = [
  {
    title: "Low Down Payment — Just 3.5%",
    description:
      "An FHA loan lets you purchase a home with as little as 3.5% down when you have a credit score of 580 or higher. That means a $300,000 home could require only $10,500 upfront.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Credit Standards",
    description:
      "FHA loans are designed to give borrowers a second chance. Credit scores as low as 580 qualify for the 3.5% down payment option, and scores between 500–579 may still qualify with 10% down.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Competitive Interest Rates",
    description:
      "Because FHA loans are insured by the Federal Housing Administration, lenders face less risk — which often translates to interest rates that rival or beat conventional loan offers.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Gift Funds Allowed",
    description:
      "Your entire down payment can come from a gift from a family member, employer, or approved charitable organization — making it even easier to get into your first home.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: "What is an FHA loan?",
    answer:
      "An FHA loan is a government-backed mortgage insured by the Federal Housing Administration. It's designed to help borrowers who may not qualify for conventional financing due to lower credit scores or limited savings. The FHA doesn't lend money directly — instead, it insures loans made by approved lenders like Kinsfolk Mortgage, reducing the lender's risk.",
  },
  {
    question: "Are FHA loans only for first-time homebuyers?",
    answer:
      "No. While FHA loans are extremely popular with first-time buyers because of the low down payment and flexible credit requirements, they're available to any borrower who meets eligibility criteria — including repeat buyers and those who already own a home.",
  },
  {
    question: "What is FHA mortgage insurance and how much does it cost?",
    answer:
      "FHA loans require two types of mortgage insurance: an upfront mortgage insurance premium (UFMIP) of 1.75% of the loan amount, which can be rolled into the loan, and an annual mortgage insurance premium (MIP) paid monthly. The annual MIP typically ranges from 0.45% to 1.05% of the loan balance depending on your loan term, amount, and down payment.",
  },
  {
    question: "What credit score do I need for an FHA loan?",
    answer:
      "You'll need a minimum credit score of 580 to qualify for the 3.5% down payment option. Borrowers with scores between 500 and 579 may still be eligible but will need at least 10% down. Your credit history, debt-to-income ratio, and employment stability also factor into the approval decision.",
  },
  {
    question: "What are FHA loan limits?",
    answer:
      "FHA loan limits vary by county and are updated annually. In most areas, the standard limit for a single-family home is $472,030, while high-cost areas may go up to $1,089,300. Check with us to find the current limit for your specific county — we'll help you understand exactly how much you can borrow.",
  },
  {
    question: "Can I use an FHA loan for a fixer-upper?",
    answer:
      "Yes. The FHA 203(k) rehabilitation loan allows you to finance both the purchase of a home and the cost of needed repairs in a single mortgage. This is an excellent option if you find a property that needs work but has great potential. There are two versions: the Limited 203(k) for smaller projects and the Standard 203(k) for major renovations.",
  },
];

export default function FHALoansPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Loan Options", href: "/loan-options/" },
              { label: "FHA Loans" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              FHA Loans — Your Path to Homeownership Starts Here
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Backed by the Federal Housing Administration, FHA loans are built for buyers who need
              flexibility — whether you&apos;re purchasing your first home with limited savings or
              rebuilding after a credit setback.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET YOUR FHA LOAN QUOTE
              </Link>
              <a
                href="#fha-benefits"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="fha-benefits" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Why Buyers Choose FHA Loans
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              FHA loans remove many of the barriers that keep people from buying a home. Here&apos;s
              what makes them stand out.
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
                  FHA Loan Requirements
                </h2>
                <p className="text-text-muted leading-relaxed mb-6 font-sans">
                  FHA guidelines are designed to be accessible, but there are still criteria
                  you&apos;ll need to meet. Here&apos;s a snapshot of what lenders look for:
                </p>
                <ul className="space-y-3 font-sans">
                  {[
                    "Minimum credit score of 580 for 3.5% down (500–579 with 10% down)",
                    "Steady employment history — typically two years with the same employer or in the same field",
                    "Debt-to-income ratio generally at or below 43%, though exceptions exist",
                    "The property must be your primary residence (no investment properties)",
                    "The home must meet FHA minimum property standards via an FHA appraisal",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
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
                      <span className="text-text-muted text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-bg-light rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Documents to Prepare
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                  Having your paperwork ready speeds up the approval process significantly. Plan to
                  gather the following:
                </p>
                <ul className="space-y-2 text-sm text-text-muted font-sans">
                  {[
                    "Two most recent pay stubs and W-2 forms",
                    "Federal tax returns from the past two years",
                    "Bank statements covering the last 60 days",
                    "Government-issued photo identification",
                    "Proof of any additional income (Social Security, alimony, etc.)",
                    "Landlord contact info or rent payment history",
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
                  See If You Qualify
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
            First-Time Buyer? You Deserve a Lender in Your Corner.
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Navigating your first mortgage can feel overwhelming. At Kinsfolk Mortgage, we walk you
            through every step — from pre-qualification to picking up your keys.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              START YOUR APPLICATION
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
              title="FHA Loan FAQ"
              subtitle="Answers to the most common questions about FHA home loans and how they work."
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
              Take the First Step Today
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Tell us a little about yourself and an FHA loan specialist from Kinsfolk Mortgage will
              be in touch to answer your questions and walk you through your options.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm formName="FHA Loan Inquiry" buttonText="Request FHA Loan Info" />
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
              href="/conventional-loans/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Conventional Loans
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
