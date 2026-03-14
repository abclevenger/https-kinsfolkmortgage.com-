import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Agent Partner Program – Kinsfolk Mortgage LLC",
  description:
    "Join the Kinsfolk Mortgage agent partner program. Fast pre-approvals, co-marketing support, and dedicated service for real estate agents in Wesley Chapel and Tampa Bay.",
};

const programBenefits = [
  {
    title: "Priority Processing for Your Clients",
    description:
      "Partner-referred clients move to the front of the queue. Your deals get the attention they deserve with expedited file review, faster conditions clearing, and priority scheduling for appraisals.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Point of Contact",
    description:
      "No more navigating call trees or explaining your situation to a new person every time. You get a single, named loan officer who knows your business, your preferences, and your clients.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Co-Branded Marketing Materials",
    description:
      "Strengthen your brand presence with professionally designed flyers, social media content, email templates, and open house materials featuring both your branding and ours.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Same-Day Pre-Approval Letters",
    description:
      "In competitive markets, timing is everything. We deliver pre-approval letters the same business day — often within hours — so your clients never miss an opportunity to submit a strong offer.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Weekly Rate Updates",
    description:
      "Stay informed and position yourself as a market expert. Our weekly rate commentary gives you the data and context you need to have smarter conversations with buyers about timing and affordability.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Joint Client Communication",
    description:
      "We keep you copied on key milestone updates and coordinate directly with you before contacting your client about sensitive topics. Your relationship with your client is always respected.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const programTiers = [
  {
    name: "Basic",
    tagline: "Reliable service for every referral",
    features: [
      "Same-day pre-approval letters",
      "Milestone status updates",
      "Access to all loan programs",
      "Client-facing resource library",
      "Direct loan officer contact",
    ],
    highlight: false,
  },
  {
    name: "Preferred",
    tagline: "Priority processing + co-marketing",
    features: [
      "Everything in Basic",
      "Priority file processing",
      "Co-branded marketing templates",
      "Weekly rate update emails",
      "Quarterly business review",
      "Social media content collaboration",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    tagline: "Full partnership with dedicated support",
    features: [
      "Everything in Preferred",
      "Dedicated loan officer assigned to your team",
      "Fully custom co-branded materials",
      "Joint client communication strategy",
      "Annual marketing budget contribution",
      "Priority access to new programs and products",
      "Invitation to exclusive partner events",
    ],
    highlight: false,
  },
];

const faqItems = [
  {
    question: "How do I qualify for the Preferred or Elite tier?",
    answer:
      "Tier placement is based on referral volume and the strength of our working relationship. New partners start at the Basic level and can move into Preferred or Elite as we build a track record together. We review tier status quarterly and will proactively reach out when you qualify for an upgrade.",
  },
  {
    question: "Is there a cost to join the partner program?",
    answer:
      "No. The Kinsfolk Mortgage agent partner program is completely free to join. There are no fees, no minimum referral requirements, and no contracts. We earn your continued partnership by delivering results for your clients.",
  },
  {
    question: "Can I refer clients from outside the Tampa Bay area?",
    answer:
      "We are licensed to originate mortgages throughout the state of Florida. While our deepest expertise and local market knowledge is in the Tampa Bay, Wesley Chapel, and Pasco County areas, we welcome referrals from anywhere in the state.",
  },
  {
    question: "What happens after I submit the partner inquiry form?",
    answer:
      "A member of our team will reach out within one business day to introduce themselves, learn about your business, and discuss how we can best support your clients. We'll set up your partner profile and provide everything you need to start referring clients right away.",
  },
];

export default function AgentPartnerProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Real Estate Agent Resources", href: "/real-estate-agents/" },
              { label: "Agent Partner Program" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Agent Partner Program
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              A structured partnership built for real estate professionals who want more from their
              lending relationships. Priority processing, co-marketing support, and a dedicated team
              that treats your referrals like our own clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#partner-form"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                JOIN THE PROGRAM
              </a>
              <a
                href="#program-tiers"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                VIEW PROGRAM TIERS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Program Benefits */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Partner Program Benefits
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              Every benefit is designed to help you close more deals, serve your clients better, and
              grow your business alongside ours.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programBenefits.map((b) => (
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

      {/* Program Tiers */}
      <section id="program-tiers" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Program Tiers
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              Three levels of partnership, each designed to match the depth of our working
              relationship. Every agent starts with a strong foundation — and the more we work
              together, the more we invest in your success.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {programTiers.map((tier) => (
              <ScrollReveal key={tier.name}>
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col ${
                    tier.highlight
                      ? "bg-primary text-white shadow-xl ring-2 ring-accent/50"
                      : "bg-white shadow-sm border border-border/50"
                  }`}
                >
                  {tier.highlight && (
                    <span className="inline-block px-3 py-1 bg-accent text-primary-dark text-xs font-bold rounded-full mb-4 self-start uppercase tracking-wide">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      tier.highlight ? "text-white" : "text-primary"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 font-sans ${
                      tier.highlight ? "text-white/70" : "text-text-muted"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                  <ul className="space-y-3 flex-1 font-sans">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            tier.highlight ? "text-accent" : "text-accent"
                          }`}
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
                        <span
                          className={`text-sm ${
                            tier.highlight ? "text-white/80" : "text-text-muted"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#partner-form"
                    className={`mt-8 block text-center px-6 py-3 font-bold text-sm rounded-lg transition-all duration-200 ${
                      tier.highlight
                        ? "bg-accent hover:bg-accent-dark text-primary-dark shadow-lg shadow-accent/20"
                        : "bg-primary hover:bg-primary-dark text-white"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="partner-form" className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
                Join the Partner Program
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto font-sans">
                Complete the form below and a member of our team will reach out within one business
                day to set up your partner account and discuss how we can best support your business.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
              <LeadForm
                formName="Agent Partner Inquiry"
                buttonText="Join the Program"
                showLoanGoal={false}
                showMessage
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={faqItems}
              title="Partner Program FAQ"
              subtitle="Common questions about joining and participating in the Kinsfolk Mortgage agent partner program."
              withSchema
            />
          </ScrollReveal>
          <div className="mt-8 font-sans">
            <p className="text-text-muted leading-relaxed">
              Have additional questions?{" "}
              <Link
                href="/contact-me/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                Contact us directly
              </Link>{" "}
              or{" "}
              <Link
                href="/real-estate-agents/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                explore our full agent resources
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-bg-light border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">Explore More</h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            <Link
              href="/real-estate-agents/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Agent Resources
            </Link>
            <Link
              href="/prequalify/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Pre-Qualify a Client
            </Link>
            <Link
              href="/mortgage-calculator/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/loan-options/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Loan Options
            </Link>
            <Link
              href="/contact-me/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
