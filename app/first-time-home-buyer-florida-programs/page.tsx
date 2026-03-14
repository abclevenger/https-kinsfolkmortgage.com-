import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Florida First-Time Home Buyer Programs",
  description:
    "Florida Housing, Hometown Heroes, and SHIP programs for first-time home buyers. Down payment assistance and below-market rates. Kinsfolk Mortgage LLC.",
};

const faqItems = [
  {
    question: "Who qualifies for Florida first-time buyer programs?",
    answer:
      "Eligibility varies by program, but most Florida Housing programs require that you haven't owned a home in the past three years, meet income limits (which vary by county), purchase a home that will be your primary residence, complete a HUD-approved homebuyer education course, and work with an approved lender. Veterans and active military may be exempt from the first-time buyer requirement for some programs.",
  },
  {
    question: "What is the Florida Hometown Heroes program?",
    answer:
      "Hometown Heroes is a Florida Housing program that provides down payment and closing cost assistance to full-time employees in over 50 community-focused professions. This includes teachers, nurses, firefighters, law enforcement officers, childcare workers, and military personnel. The program offers up to 5% of the first mortgage loan amount as a forgivable 0% interest second mortgage with a 30-year term.",
  },
  {
    question: "Can I combine Florida assistance with an FHA or VA loan?",
    answer:
      "Yes. Most Florida Housing assistance programs are designed to be paired with FHA, VA, or conventional first mortgage products. For example, you can use a Florida Housing first mortgage with FHA terms and layer on their down payment assistance for closing costs. Your lender will help determine which combinations produce the lowest out-of-pocket cost for your situation.",
  },
  {
    question: "How do I apply for Florida down payment assistance?",
    answer:
      "Florida Housing programs must be accessed through an approved participating lender. You can't apply directly through the state. At Kinsfolk Mortgage, we'll determine which programs you qualify for, handle the paperwork, and guide you through the application process from start to finish. Get in touch to find out what's available in your area.",
  },
];

export default function FloridaProgramsPage() {
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
              { label: "Florida Programs" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Florida First-Time Home Buyer Programs
            </h1>
            <p className="text-white/70 text-lg font-sans">
              Florida offers some of the most generous first-time buyer programs in the country —
              from down payment grants to below-market interest rates. Here&apos;s what&apos;s
              available and how to take advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Florida Housing Finance Corporation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Florida Housing Finance Corporation
              </h2>
              <div className="font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  The Florida Housing Finance Corporation (commonly called Florida Housing) is the
                  state agency responsible for helping Floridians access affordable housing. For
                  first-time buyers, Florida Housing offers a suite of programs that include
                  below-market interest rate first mortgages, down payment and closing cost
                  assistance, and mortgage credit certificates that provide an annual federal tax
                  credit.
                </p>
                <p>
                  Florida Housing&apos;s first mortgage programs are available through a network of
                  approved lenders. These programs can be combined with FHA, VA, or conventional
                  loan products. Income limits and purchase price limits apply and vary by county,
                  so it&apos;s important to check current figures for your specific area. A
                  HUD-approved homebuyer education course is required before closing.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Key Programs for First-Time Buyers
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl font-sans">
              These are the most impactful Florida programs available to first-time buyers today.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Florida Hometown Heroes
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  Designed for community workers in over 50 eligible professions — teachers,
                  nurses, firefighters, law enforcement, childcare workers, military, and more.
                  Hometown Heroes provides up to 5% of the first mortgage loan amount as a 0%
                  interest, non-amortizing, 30-year deferred second mortgage for down payment and
                  closing cost assistance. The loan is forgiven if you remain in the home.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  SHIP Program
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  The State Housing Initiatives Partnership (SHIP) program distributes funds to
                  every county and most cities in Florida. Local governments use SHIP funds to
                  provide down payment assistance, closing cost help, and in some cases,
                  rehabilitation assistance. Each jurisdiction sets its own income limits and
                  assistance amounts, so benefits vary by location. Contact your county or city
                  housing office for details.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Down Payment Assistance (DPA)
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  Florida Housing offers several DPA options that can be paired with their first
                  mortgage programs. These include the Florida Assist program (a $10,000 0%
                  interest, deferred second mortgage), HLP (a $10,000 forgivable second mortgage
                  at 3%), and program-specific assistance tied to FHA, VA, or conventional first
                  mortgages. Eligibility depends on income, household size, and county.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={3}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  Mortgage Credit Certificate
                </h3>
                <p className="text-text-muted text-sm leading-relaxed font-sans">
                  The Mortgage Credit Certificate (MCC) program provides a federal tax credit
                  equal to a percentage of the mortgage interest you pay each year. This credit
                  directly reduces your federal income tax liability, putting more money back in
                  your pocket year after year for the life of the loan. MCCs can be used alongside
                  other Florida Housing programs for maximum savings.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                How to Access These Programs
              </h2>
              <div className="font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Florida Housing programs must be accessed through an approved participating
                  lender — you can&apos;t apply directly through the state. As a Florida Housing
                  approved lender, Kinsfolk Mortgage can help you determine which programs you
                  qualify for, compare your options, and handle the entire application process.
                </p>
                <p>
                  Most programs require completion of a HUD-approved homebuyer education course
                  before closing. These courses are available online and typically take a few hours.
                  They cover budgeting, the home buying process, and your responsibilities as a
                  homeowner — valuable information regardless of the assistance you receive.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            See the Complete First-Time Buyer Picture
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Florida programs are just one piece of the puzzle. Our full guide covers loan options,
            credit requirements, down payments, closing costs, and more.
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
              title="Florida Programs FAQ"
              subtitle="Common questions about Florida's first-time home buyer assistance programs."
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
              Find Out What You Qualify For
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Tell us about your situation and a Kinsfolk Mortgage specialist will identify which
              Florida programs you&apos;re eligible for and how much assistance you can receive.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Florida Programs Inquiry"
                buttonText="Check My Eligibility"
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
              href="/first-time-buyer-closing-costs/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Closing Costs Guide
            </Link>
            <Link
              href="/fha-loans/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              FHA Loans
            </Link>
            <Link
              href="/va-loans/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              VA Loans
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
