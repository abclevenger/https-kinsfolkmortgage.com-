import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "First-Time Buyer Down Payment Guide",
  description:
    "Understand your down payment options as a first-time home buyer in Florida. Compare 0%, 3%, 3.5%, and 5–20% down programs plus Florida assistance. Kinsfolk Mortgage LLC.",
};

const faqItems = [
  {
    question: "Do I need 20% down to buy my first home?",
    answer:
      "No. While 20% down eliminates private mortgage insurance on conventional loans, most first-time buyer programs require far less. FHA loans start at 3.5%, conventional loans at 3%, and VA and USDA loans offer 0% down options. Many buyers purchase their first home with well under 10% down.",
  },
  {
    question: "What is down payment assistance?",
    answer:
      "Down payment assistance (DPA) programs provide grants, forgivable loans, or low-interest second mortgages to help cover your down payment and sometimes closing costs. In Florida, the Florida Housing Finance Corporation and local SHIP programs offer DPA to qualifying first-time buyers. Eligibility typically depends on income, purchase price, and the property's location.",
  },
  {
    question: "Can I use gift money for my down payment?",
    answer:
      "Yes. FHA loans allow your entire down payment to come from a gift from a family member, employer, or approved organization. Conventional loans also permit gift funds, though some programs require that a portion of the down payment come from your own savings if you're putting less than 20% down. Your lender will need a gift letter documenting the source.",
  },
  {
    question: "How does my down payment affect my monthly payment?",
    answer:
      "A larger down payment reduces the amount you borrow, which lowers your monthly principal and interest payment. It can also eliminate or reduce private mortgage insurance. For example, on a $300,000 home, putting 20% down ($60,000) versus 3.5% ($10,500) could lower your monthly payment by several hundred dollars and remove PMI entirely.",
  },
];

export default function DownPaymentPage() {
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
              { label: "Down Payment Guide" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              First-Time Buyer Down Payment Guide
            </h1>
            <p className="text-white/70 text-lg font-sans">
              You don&apos;t need 20% saved to buy your first home. Learn about the programs that
              make homeownership accessible with as little as 0% down — and the Florida assistance
              programs that can help close the gap.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                How Much Down Payment Do You Actually Need?
              </h2>
              <div className="font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  The 20% down payment is one of the most persistent myths in home buying. While
                  putting 20% down has advantages — it eliminates private mortgage insurance and
                  lowers your monthly payment — it&apos;s far from the only option. In fact, data
                  from the National Association of Realtors shows that the median down payment for
                  first-time buyers has consistently been between 6% and 8% in recent years. Many
                  buyers put down even less.
                </p>
                <p>
                  The amount you need depends entirely on which loan program you choose. Each
                  program has different requirements, and understanding those differences is the
                  first step toward a realistic savings plan.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Down Payment Breakdown */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Down Payment by Loan Program
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl font-sans">
              Here&apos;s what you can expect to put down based on the loan type you choose.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "0% Down — VA & USDA Loans",
                description:
                  "VA loans are available to veterans, active-duty service members, and eligible surviving spouses — with absolutely no down payment required. USDA loans also offer zero-down financing for homes in eligible rural and suburban areas. Both programs eliminate one of the biggest barriers to homeownership.",
                link: { href: "/va-loans/", label: "Learn about VA loans" },
              },
              {
                title: "3% Down — Conventional Loans",
                description:
                  "Several conventional loan programs allow first-time buyers to put just 3% down. Fannie Mae's HomeReady and Freddie Mac's Home Possible are specifically designed for lower-income borrowers and those buying in underserved areas. On a $300,000 home, that's just $9,000 — often attainable with savings and assistance combined.",
                link: { href: "/conventional-loans/", label: "Learn about conventional loans" },
              },
              {
                title: "3.5% Down — FHA Loans",
                description:
                  "FHA loans require 3.5% down when your credit score is 580 or higher. For a $300,000 home, that's $10,500. If your score falls between 500 and 579, you'll need 10% down. FHA loans are especially popular with first-time buyers because they combine a low down payment with flexible credit requirements.",
                link: { href: "/fha-loans/", label: "Learn about FHA loans" },
              },
              {
                title: "5–20% Down — Building Equity Faster",
                description:
                  "Putting more money down reduces the amount you borrow and can lower your interest rate. At 10% down, your monthly payment drops noticeably. At 20%, private mortgage insurance is eliminated on conventional loans entirely. If you have the savings and want to minimize long-term costs, a larger down payment is a smart move.",
                link: { href: "/mortgage-calculator/", label: "Estimate your payment" },
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans">
                    {item.description}
                  </p>
                  <Link
                    href={item.link.href}
                    className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                  >
                    {item.link.label} →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Florida Assistance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Down Payment Assistance in Florida
              </h2>
              <div className="font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Florida offers several programs specifically designed to help first-time buyers
                  with their down payment and closing costs. The Florida Housing Finance Corporation
                  provides assistance through its first mortgage programs, which include options for
                  down payment and closing cost help in the form of forgivable second mortgages or
                  deferred-payment loans.
                </p>
                <p>
                  The Hometown Heroes program, administered by Florida Housing, is available to
                  full-time employees in over 50 eligible professions including teachers, nurses,
                  law enforcement, and military personnel. It offers up to 5% of the first mortgage
                  loan amount as a forgivable second mortgage for down payment and closing cost
                  assistance. County and city SHIP (State Housing Initiatives Partnership) programs
                  provide additional locally funded options that vary by area.
                </p>
                <p>
                  These assistance programs can often be layered with FHA, VA, or conventional
                  financing, making it possible for many first-time buyers to purchase a home with
                  little to no money out of pocket.
                </p>
              </div>
              <Link
                href="/first-time-home-buyer-florida-programs/"
                className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-dark font-semibold transition-colors"
              >
                Explore all Florida buyer programs
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

      {/* Mid-page CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure How Much You Can Afford?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Use our mortgage calculator to see how different down payment amounts affect your monthly
            payment — or get pre-qualified in minutes to find out exactly what you can borrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/mortgage-calculator/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              CALCULATE PAYMENTS
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
              title="Down Payment FAQ"
              subtitle="Common questions about down payments for first-time home buyers."
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
              Let&apos;s Find Your Down Payment Path
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Every buyer&apos;s situation is different. Share your details and a Kinsfolk Mortgage
              specialist will help you understand your down payment options and available assistance
              programs.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Down Payment Guide Inquiry"
                buttonText="Explore My Options"
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
