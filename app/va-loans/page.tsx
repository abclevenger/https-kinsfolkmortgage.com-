import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "VA Loans – Kinsfolk Mortgage LLC",
  description:
    "VA loans offer eligible veterans, active-duty service members, and surviving spouses zero down payment, no PMI, and competitive rates. Learn how Kinsfolk Mortgage can help you secure your VA home loan.",
};

const benefits = [
  {
    title: "No Down Payment",
    description:
      "Qualified borrowers can finance 100% of the home's purchase price with no money down — one of the most powerful benefits available to those who have served.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "No Private Mortgage Insurance",
    description:
      "Unlike conventional loans that require PMI when you put less than 20% down, VA loans never charge private mortgage insurance — saving you hundreds each month.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Competitive Interest Rates",
    description:
      "Because VA loans are partially backed by the U.S. Department of Veterans Affairs, lenders can offer rates that are typically lower than those on conventional mortgages.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Flexible Credit Requirements",
    description:
      "VA loans are more forgiving when it comes to credit scores. Many lenders approve VA borrowers with scores as low as 580, making homeownership accessible to more veterans.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    question: "Who is eligible for a VA loan?",
    answer:
      "VA loans are available to active-duty service members, veterans who meet minimum service requirements, National Guard and Reserve members with qualifying service, and certain surviving spouses of deceased veterans. You'll need a Certificate of Eligibility (COE) from the VA to verify your entitlement.",
  },
  {
    question: "Is there a VA loan limit?",
    answer:
      "For borrowers with full entitlement, there is no VA loan limit — you can borrow as much as a lender is willing to approve without a down payment. If you have reduced entitlement (for example, from a previous VA loan still in use), county-level conforming loan limits may apply to the portion not covered by your remaining entitlement.",
  },
  {
    question: "What is the VA funding fee?",
    answer:
      "The VA funding fee is a one-time charge that helps fund the VA loan program so it remains available for future veterans. The fee varies based on your down payment, whether it's your first VA loan, and your service category. It can be rolled into the loan balance. Some veterans, including those receiving VA disability compensation, are exempt from this fee.",
  },
  {
    question: "Can I use a VA loan more than once?",
    answer:
      "Yes. Your VA loan benefit is reusable. Once you've paid off a previous VA loan and sold the property (or in some cases even while keeping the property), you can restore your entitlement and use the benefit again for a new home purchase.",
  },
  {
    question: "What types of properties qualify for a VA loan?",
    answer:
      "VA loans can be used to purchase single-family homes, condominiums (in VA-approved projects), multi-unit properties up to four units (as long as you occupy one unit), and certain manufactured homes. The property must serve as your primary residence.",
  },
  {
    question: "How long does the VA loan process take?",
    answer:
      "A typical VA loan closes in 30 to 45 days, similar to a conventional mortgage. The timeline depends on how quickly you provide documentation, the VA appraisal turnaround in your area, and lender processing times. Working with a VA-experienced loan officer like those at Kinsfolk Mortgage can help keep the process on track.",
  },
];

export default function VALoansPage() {
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
              { label: "VA Loans" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              VA Home Loans for Those Who Served
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              If you&apos;re a veteran, active-duty service member, or eligible surviving spouse, a
              VA loan may be the most powerful mortgage benefit available to you — offering zero down
              payment, no PMI, and rates that consistently beat the market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET YOUR VA LOAN QUOTE
              </Link>
              <a
                href="#va-benefits"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                EXPLORE BENEFITS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="va-benefits" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Why Veterans Choose VA Loans
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              The VA loan program was created to help service members achieve homeownership with
              benefits you won&apos;t find in any other mortgage product.
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

      {/* Eligibility */}
      <ScrollReveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  VA Loan Eligibility Requirements
                </h2>
                <p className="text-text-muted leading-relaxed mb-6 font-sans">
                  Eligibility is based on your service history, duty status, and discharge
                  conditions. Below are the general guidelines — but even if you&apos;re unsure,
                  it&apos;s worth reaching out so we can review your specific situation.
                </p>
                <ul className="space-y-3 font-sans">
                  {[
                    "90 consecutive days of active service during wartime",
                    "181 days of active service during peacetime",
                    "6 or more years of service in the National Guard or Reserves",
                    "Surviving spouse of a veteran who died in service or from a service-connected disability",
                    "Discharge under conditions other than dishonorable",
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
                  What You&apos;ll Need to Get Started
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                  Gathering your documentation ahead of time helps us move quickly. Here&apos;s what
                  most VA borrowers need:
                </p>
                <ul className="space-y-2 text-sm text-text-muted font-sans">
                  {[
                    "Certificate of Eligibility (COE) — we can help you obtain this",
                    "DD-214 (for veterans) or statement of service (for active duty)",
                    "Recent pay stubs, W-2s, or tax returns",
                    "Bank statements from the past two months",
                    "Government-issued photo ID",
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
                  Check Your Eligibility
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
            Ready to Use Your VA Loan Benefit?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Whether you&apos;re buying your first home or your fifth, our team specializes in
            guiding veterans through the VA loan process from pre-approval to closing day.
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
              CALCULATE PAYMENTS
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
              title="VA Loan FAQ"
              subtitle="Common questions from veterans and service members about the VA home loan program."
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
              Let&apos;s Get You Pre-Approved
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Fill out the form below and a VA loan specialist from Kinsfolk Mortgage will reach out
              to discuss your options — no obligation, no pressure.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm formName="VA Loan Inquiry" buttonText="Request VA Loan Info" />
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
              href="/fha-loans/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              FHA Loans
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
