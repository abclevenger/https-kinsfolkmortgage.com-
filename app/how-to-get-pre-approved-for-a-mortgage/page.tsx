import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "How to Get Pre-Approved for a Mortgage",
  description:
    "Step-by-step guide to mortgage pre-approval: documents needed, what lenders check, timeline, and how pre-approval differs from pre-qualification.",
};

const faqItems = [
  {
    question: "How long does mortgage pre-approval take?",
    answer:
      "With all your documents ready, a pre-approval can be issued in as little as 24–48 hours. At Kinsfolk Mortgage, Chaunci typically turns around pre-approval letters within one to two business days. Delays usually happen when documents are missing or additional verification is needed — having everything organized before you apply speeds up the process significantly.",
  },
  {
    question: "Does getting pre-approved hurt my credit score?",
    answer:
      "A pre-approval involves a hard credit inquiry, which may temporarily lower your score by a few points. However, credit scoring models treat multiple mortgage inquiries within a 14–45 day window as a single inquiry, so shopping multiple lenders during that period won't compound the impact. The minor dip recovers quickly and is far outweighed by the benefit of knowing your budget and showing sellers you're a serious buyer.",
  },
  {
    question: "How long is a mortgage pre-approval valid?",
    answer:
      "Most pre-approval letters are valid for 60 to 90 days. After that, your lender may need to re-verify your income, assets, and credit to issue a new letter. If your financial situation hasn't changed, renewal is usually quick. It's best to get pre-approved when you're ready to actively shop — not months before you plan to make offers.",
  },
  {
    question: "Can I get pre-approved with a low credit score?",
    answer:
      "Yes. FHA loans allow pre-approval with scores as low as 580 (or 500 with 10% down). VA and USDA loans also have flexible credit requirements. Even if your score isn't perfect, getting pre-approved helps you understand exactly where you stand and what you can afford. Chaunci can also advise on quick credit improvements that could unlock better rates before you commit to a loan.",
  },
  {
    question: "What's the difference between pre-approval and pre-qualification?",
    answer:
      "Pre-qualification is an informal estimate based on self-reported financial information — no documents are verified. Pre-approval is a formal process where the lender pulls your credit, verifies your income and assets, and issues a conditional commitment to lend up to a specific amount. Sellers and real estate agents take pre-approval letters much more seriously because they represent an actual underwriting review.",
  },
];

export default function HowToGetPreApprovedPage() {
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
              { label: "How to Get Pre-Approved" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              How to Get Pre-Approved for a Mortgage
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Pre-approval is the first real step toward buying a home. It tells
              you exactly what you can afford, strengthens your offer, and puts
              you ahead of other buyers. Here&apos;s how the process works from
              start to finish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prequalify/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                START PRE-APPROVAL
              </Link>
              <Link
                href="/mortgage-process/"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                THE FULL PROCESS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Pre-Approval Means */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What Mortgage Pre-Approval Actually Means
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  A mortgage pre-approval is a lender&apos;s conditional
                  commitment to loan you a specific amount based on a verified
                  review of your finances. Unlike a casual online estimate, it
                  involves pulling your credit report, reviewing your income
                  documentation, and running your profile through underwriting
                  guidelines.
                </p>
                <p>
                  The result is a pre-approval letter — a document you can show
                  sellers and real estate agents that says, in effect, &ldquo;a
                  lender has reviewed this buyer&apos;s finances and is prepared
                  to fund a loan up to this amount, pending a satisfactory
                  appraisal and final underwriting.&rdquo; In competitive
                  markets like Tampa Bay, a strong pre-approval letter is often
                  the difference between winning and losing a bidding situation.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pre-Approval vs Pre-Qualification */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Pre-Approval vs. Pre-Qualification
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  These terms get used interchangeably, but they&apos;re not the
                  same thing — and the distinction matters when you&apos;re
                  making offers.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mt-6 not-prose">
                  <div className="bg-white rounded-xl p-6 border border-border/50">
                    <h3 className="text-lg font-bold text-primary mb-3">
                      Pre-Qualification
                    </h3>
                    <ul className="space-y-2 text-text-muted text-sm font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-text-light mt-0.5">•</span>
                        Based on self-reported information
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-text-light mt-0.5">•</span>
                        No document verification
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-text-light mt-0.5">•</span>
                        Quick estimate, not a commitment
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-text-light mt-0.5">•</span>
                        Less weight with sellers
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-accent/30 shadow-sm">
                    <h3 className="text-lg font-bold text-primary mb-3">
                      Pre-Approval
                    </h3>
                    <ul className="space-y-2 text-text-muted text-sm font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        Verified income, assets, and credit
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        Underwriting review completed
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        Conditional loan commitment
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-0.5">✓</span>
                        Strong credibility with sellers
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="mt-6">
                  At{" "}
                  <Link
                    href="/mortgage-prequalified/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    Kinsfolk Mortgage
                  </Link>
                  , we go straight to pre-approval whenever possible. It gives
                  you a true picture of your buying power and puts you in the
                  strongest position from day one.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                Documents You&apos;ll Need for Pre-Approval
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Gathering your documents before you apply makes the process
                  dramatically faster. Here&apos;s what most lenders require:
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Income Verification
                </h3>
                <ul>
                  <li>
                    <strong>W-2 forms</strong> from the past two years
                  </li>
                  <li>
                    <strong>Recent pay stubs</strong> covering the last 30 days
                  </li>
                  <li>
                    <strong>Federal tax returns</strong> (1040s) from the last
                    two years — especially important for self-employed borrowers
                  </li>
                  <li>
                    <strong>1099 forms</strong> if you have freelance, contract,
                    or investment income
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Asset Documentation
                </h3>
                <ul>
                  <li>
                    <strong>Bank statements</strong> (checking and savings) for
                    the last two to three months
                  </li>
                  <li>
                    <strong>Investment account statements</strong> (401k, IRA,
                    brokerage) if using those funds
                  </li>
                  <li>
                    <strong>Gift letter</strong> if any portion of your down
                    payment is a gift from family
                  </li>
                </ul>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Identification and Other Items
                </h3>
                <ul>
                  <li>
                    <strong>Government-issued photo ID</strong> (driver&apos;s
                    license or passport)
                  </li>
                  <li>
                    <strong>Social Security number</strong> for the credit pull
                  </li>
                  <li>
                    <strong>Rental history</strong> or current mortgage statement
                  </li>
                  <li>
                    <strong>Divorce decree</strong> or separation agreement if
                    applicable
                  </li>
                </ul>
                <p>
                  Self-employed borrowers will also need a year-to-date profit
                  and loss statement and may be asked for business tax returns.
                  Chaunci will provide a personalized checklist based on your
                  specific situation so nothing slips through the cracks.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Lenders Look At */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                What Lenders Evaluate During Pre-Approval
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  Pre-approval isn&apos;t just a credit check. Lenders evaluate
                  four main pillars of your financial profile:
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Credit History and Score
                </h3>
                <p>
                  Your credit score determines which loan programs you qualify
                  for and the interest rate you&apos;ll receive. Conventional
                  loans typically require 620+, FHA loans work with 580+ (or 500
                  with 10% down), and VA loans have no official minimum but most
                  lenders look for 620+.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Income Stability
                </h3>
                <p>
                  Lenders want to see at least two years of consistent income.
                  For W-2 employees, this is straightforward. Self-employed
                  borrowers need to demonstrate stable or growing income over two
                  tax-return years. Job changes within the same field generally
                  aren&apos;t a problem, but gaps in employment or industry
                  switches may require explanation.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Debt-to-Income Ratio
                </h3>
                <p>
                  Your DTI — the percentage of gross income going toward monthly
                  debt payments — is one of the most critical factors. Most
                  programs want total DTI at or below 43–50%. The lower your
                  DTI, the more house you can afford and the stronger your
                  application looks to underwriters.
                </p>
                <h3 className="text-xl font-bold text-primary mt-8 mb-3">
                  Assets and Reserves
                </h3>
                <p>
                  Beyond the down payment, lenders like to see that you have
                  cash reserves — typically two to six months of mortgage
                  payments in savings. This shows you can absorb unexpected
                  expenses without missing payments.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How Chaunci Simplifies It */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                How Chaunci Simplifies the Pre-Approval Process
              </h2>
              <div className="prose prose-lg max-w-none font-sans text-text-muted space-y-5 leading-relaxed">
                <p>
                  The pre-approval process doesn&apos;t have to feel
                  overwhelming. At Kinsfolk Mortgage, Chaunci Witherspoon walks
                  you through every step — from organizing your documents to
                  explaining your options in plain language. As a mortgage broker,
                  she shops across multiple lenders to find the program and rate
                  that fits your situation, rather than being limited to one
                  bank&apos;s products.
                </p>
                <p>
                  Most buyers who work with Chaunci receive their pre-approval
                  letter within one to two business days. She also helps you
                  understand exactly how much home you can comfortably afford —
                  not just the maximum a lender will approve — so you enter the
                  market confident and prepared.
                </p>
                <p>
                  Ready to take the first step?{" "}
                  <Link
                    href="/prequalify/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    Start your pre-qualification online
                  </Link>{" "}
                  and Chaunci will follow up personally to move you toward full
                  pre-approval. Or explore our{" "}
                  <Link
                    href="/first-time-home-buyer/"
                    className="text-accent hover:text-accent-dark font-semibold"
                  >
                    first-time home buyer guide
                  </Link>{" "}
                  if you&apos;re just starting your research.
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
              title="Mortgage Pre-Approval FAQ"
              subtitle="Common questions about the pre-approval process."
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
              Get Pre-Approved in as Little as 24 Hours
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Share a few details and Chaunci will guide you through
              pre-approval — quickly, clearly, and with zero pressure.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Mortgage Pre-Approval"
                buttonText="Start My Pre-Approval"
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
              {
                href: "/mortgage-prequalified/",
                label: "Get Pre-Qualified",
              },
              { href: "/prequalify/", label: "Pre-Qualification Quiz" },
              { href: "/mortgage-process/", label: "The Mortgage Process" },
              {
                href: "/first-time-home-buyer/",
                label: "First-Time Buyer Guide",
              },
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
            headline: "How to Get Pre-Approved for a Mortgage",
            author: {
              "@type": "Organization",
              name: "Kinsfolk Mortgage LLC",
            },
            publisher: {
              "@type": "Organization",
              name: "Kinsfolk Mortgage LLC",
            },
            datePublished: "2026-03-14",
            dateModified: "2026-03-14",
          }),
        }}
      />
    </>
  );
}
