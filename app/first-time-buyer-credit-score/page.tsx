import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Credit Score Requirements for First-Time Buyers",
  description:
    "Learn the minimum credit scores for FHA, VA, and conventional loans. Tips to improve your credit before buying your first home. Kinsfolk Mortgage LLC.",
};

const faqItems = [
  {
    question: "What is the minimum credit score to buy a house?",
    answer:
      "The minimum credit score depends on the loan program. FHA loans require a minimum of 580 for the 3.5% down payment option (500–579 with 10% down). Conventional loans generally require 620 or higher. VA loans have no official minimum set by the VA, though most lenders require at least 580–620. The higher your score, the better rates and terms you'll qualify for.",
  },
  {
    question: "How quickly can I improve my credit score?",
    answer:
      "Some strategies can move your score within 30 to 90 days. Paying down credit card balances below 30% utilization, disputing inaccurate items on your credit report, and becoming an authorized user on a family member's seasoned account can all produce relatively fast results. Larger improvements, like recovering from missed payments, typically take 6 to 12 months of consistent positive history.",
  },
  {
    question: "Does checking my credit score lower it?",
    answer:
      "No. Checking your own credit is considered a soft inquiry and has zero impact on your score. When a lender pulls your credit as part of a mortgage application, that's a hard inquiry — but mortgage-related inquiries made within a 14 to 45-day window are grouped together and counted as a single inquiry for scoring purposes.",
  },
  {
    question: "Can I get a mortgage with bad credit?",
    answer:
      "Yes, depending on how low your score is and which programs you qualify for. FHA loans accept scores as low as 500 with 10% down, and certain lenders specialize in working with borrowers who have credit challenges. Working with a knowledgeable loan officer can help you identify the best path forward, even if your credit isn't perfect today.",
  },
];

export default function CreditScorePage() {
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
              { label: "Credit Score Requirements" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Credit Score Requirements for First-Time Buyers
            </h1>
            <p className="text-white/70 text-lg font-sans">
              Your credit score influences which loan programs you qualify for, the interest rate
              you&apos;ll receive, and how much you can borrow. Here&apos;s what you need to know
              before applying.
            </p>
          </div>
        </div>
      </section>

      {/* Minimum Scores by Loan Type */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Minimum Credit Scores by Loan Type
            </h2>
            <p className="text-text-muted text-lg mb-10 max-w-2xl font-sans">
              Different loan programs have different credit thresholds. Here&apos;s where each one
              stands.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                program: "FHA Loans",
                score: "580",
                detail:
                  "The FHA requires a minimum score of 580 for the 3.5% down payment option. Borrowers with scores between 500 and 579 can still qualify but will need 10% down. FHA loans are the most forgiving program for buyers working to rebuild their credit history.",
                link: "/fha-loans/",
              },
              {
                program: "VA Loans",
                score: "No VA minimum",
                detail:
                  "The Department of Veterans Affairs does not set an official minimum credit score. However, individual lenders typically require a score of at least 580 to 620. VA loans offer zero down payment and no PMI, making them one of the best options for eligible service members regardless of credit.",
                link: "/va-loans/",
              },
              {
                program: "Conventional Loans",
                score: "620",
                detail:
                  "Conventional loans generally require a minimum score of 620. Borrowers with scores of 740 and above qualify for the most competitive rates available. If your score is between 620 and 739, you can still get approved but may see higher rates or additional conditions.",
                link: "/conventional-loans/",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.program} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-1">{item.program}</h3>
                  <p className="text-accent font-bold text-2xl mb-3">{item.score}</p>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans flex-1">
                    {item.detail}
                  </p>
                  <Link
                    href={item.link}
                    className="text-accent hover:text-accent-dark font-semibold text-sm transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tips to Improve */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                  How to Improve Your Credit Score
                </h2>
                <div className="font-sans text-text-muted space-y-4 leading-relaxed">
                  <p>
                    If your credit score isn&apos;t where it needs to be, the good news is that
                    targeted improvements can move the needle in a matter of weeks or months. Credit
                    scoring models weigh several factors, and focusing on the highest-impact areas
                    produces the fastest results.
                  </p>
                  <p>
                    Payment history accounts for roughly 35% of your FICO score, making on-time
                    payments the single most important factor. Credit utilization — the percentage
                    of your available credit that you&apos;re using — accounts for about 30%.
                    Keeping your balances below 30% of your limits (and ideally under 10%) can
                    provide a significant boost.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-border/50 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Quick-Win Strategies</h3>
                <ul className="space-y-3 font-sans">
                  {[
                    "Pay down credit card balances below 30% utilization",
                    "Dispute any errors on your credit report with all three bureaus",
                    "Set up autopay to avoid missed or late payments",
                    "Avoid opening new credit accounts before applying for a mortgage",
                    "Ask a family member to add you as an authorized user on a seasoned card",
                    "Keep old credit accounts open — account age helps your score",
                    "Pay collection accounts if your lender recommends it",
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

      {/* Back to Pillar CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Your Credit Score Is Just One Piece
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto font-sans">
            Down payment, loan program, closing costs, and local assistance programs all factor into
            your ability to buy. Our complete first-time buyer guide covers everything.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/first-time-home-buyer/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              READ THE FULL GUIDE
            </Link>
            <Link
              href="/quote/"
              className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
            >
              GET A QUOTE
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
              title="Credit Score FAQ"
              subtitle="Common credit score questions from first-time home buyers."
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
              Not Sure Where You Stand?
            </h2>
            <p className="text-text-muted text-lg mb-10 font-sans">
              Share your information and a Kinsfolk Mortgage specialist will help you understand
              your credit position and the loan options available to you.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Credit Score Guide Inquiry"
                buttonText="Check My Options"
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
              href="/fha-loans/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              FHA Loans
            </Link>
            <Link
              href="/mortgage-prequalified/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Get Pre-Qualified
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
