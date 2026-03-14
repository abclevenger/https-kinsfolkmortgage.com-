import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Real Estate Agent Resources – Kinsfolk Mortgage LLC",
  description:
    "Partner with Kinsfolk Mortgage for fast pre-approvals, reliable closings, and exceptional client experience. Resources and tools for real estate agents in Tampa Bay.",
};

const benefits = [
  {
    title: "Fast Pre-Approvals",
    description:
      "Your clients receive same-day pre-approval letters so they can write competitive offers without delay. We understand that in a fast-moving market, hours matter.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Reliable Closings",
    description:
      "We close on time, every time. Our processing team manages every detail proactively so you never have to chase down updates or explain delays to your clients.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "You stay in the loop at every milestone. We provide regular status updates directly to you and your client — no surprises, no radio silence.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Co-Marketing Support",
    description:
      "Grow your brand alongside ours. We offer co-branded open house flyers, social media content, and client-facing materials that position you as a trusted advisor.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Technology That Works",
    description:
      "Our digital platform gives your clients a seamless application experience and gives you real-time visibility into loan status — accessible from any device, anytime.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "You get a single point of contact who knows your business and your clients. No call centers, no transfers — just a direct line to someone who can get things done.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Kinsfolk Mortgage has become my go-to lending partner. Their pre-approvals are rock solid, and I never have to worry about last-minute surprises at the closing table. My clients consistently praise the experience.",
    name: "Sarah M.",
    title: "Realtor, Keller Williams Tampa",
  },
  {
    quote:
      "What sets Kinsfolk apart is the communication. I always know where my client's file stands, and so do they. That level of transparency makes my job easier and builds trust with every transaction.",
    name: "David R.",
    title: "Broker Associate, RE/MAX",
  },
  {
    quote:
      "I've referred over a dozen clients this year and every single one closed on time. The co-marketing materials are a bonus — they help me look professional and stay top of mind with past clients.",
    name: "Lisa T.",
    title: "Realtor, Coldwell Banker Wesley Chapel",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Refer Your Client",
    description:
      "Send us your client's contact information or have them reach out directly. We'll mention your referral and keep you connected throughout.",
  },
  {
    number: "02",
    title: "We Pre-Qualify",
    description:
      "Your client receives a thorough financial assessment and a same-day pre-approval letter — ready to submit with their offer.",
  },
  {
    number: "03",
    title: "Client Shops With Confidence",
    description:
      "Armed with a strong pre-approval, your client can compete in the market. We're available for quick re-letters if the purchase price changes.",
  },
  {
    number: "04",
    title: "We Close on Time",
    description:
      "Our processing team manages every detail to deliver a smooth, on-schedule closing. You and your client stay informed at every milestone.",
  },
];

const faqItems = [
  {
    question: "How quickly can you issue a pre-approval letter?",
    answer:
      "In most cases, we issue pre-approval letters the same business day. For straightforward applications, turnaround can be as fast as a few hours. If additional documentation is needed, we communicate that immediately so there are no delays on your end.",
  },
  {
    question: "How do you keep agents updated on loan status?",
    answer:
      "We provide proactive status updates at every key milestone — application received, appraisal ordered, underwriting submission, clear to close, and closing scheduled. You'll receive updates via your preferred method (email, text, or phone), and you always have a direct line to your dedicated contact.",
  },
  {
    question: "Do you offer co-branded marketing materials?",
    answer:
      "Yes. Our partner agents receive access to co-branded flyers, social media graphics, open house materials, and client-facing content. Preferred and Elite partners receive fully customized materials with your branding, headshot, and contact information.",
  },
  {
    question: "What loan programs do you offer for my clients?",
    answer:
      "We offer a full suite of mortgage products including Conventional, FHA, VA, USDA, Jumbo, and down payment assistance programs. Whether your client is a first-time buyer, a veteran, or purchasing an investment property, we have a solution that fits.",
  },
];

export default function RealEstateAgentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Real Estate Agent Resources" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Real Estate Agent Resources
            </h1>
            <p className="text-white/70 text-lg mb-8 font-sans">
              Your clients deserve a lending partner who performs. Kinsfolk Mortgage delivers fast
              pre-approvals, on-time closings, and proactive communication — so you can focus on
              selling homes, not managing the mortgage process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/agent-partner-program/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                JOIN THE PARTNER PROGRAM
              </Link>
              <a
                href="#why-agents-partner"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                SEE WHY AGENTS CHOOSE US
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Agents Partner With Us */}
      <section id="why-agents-partner" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Why Agents Partner With Us
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              We built our lending process around what matters most to real estate professionals —
              speed, reliability, and clear communication.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Agent Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              What Agents Say About Working With Us
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              Don&apos;t take our word for it — hear from the real estate professionals who trust us
              with their client referrals.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <ScrollReveal key={t.name}>
                <div className="bg-bg-light rounded-2xl p-8 border border-border/50 h-full flex flex-col">
                  <svg className="w-8 h-8 text-accent/40 mb-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="text-text-muted text-sm leading-relaxed font-sans mb-6 flex-1">
                    {t.quote}
                  </p>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.name}</p>
                    <p className="text-text-muted text-xs font-sans">{t.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              How the Referral Process Works
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              A straightforward four-step process that keeps you informed and your client on track
              from first contact to closing day.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number}>
                <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-border/50 h-full">
                  <span className="text-4xl font-bold text-accent/20">{step.number}</span>
                  <h3 className="text-lg font-bold text-primary mt-2 mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">
                    {step.description}
                  </p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-accent/30">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Client Experience?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto font-sans">
            Join the Kinsfolk Mortgage agent partner program and give your clients access to
            priority processing, dedicated support, and a lending team that closes on time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/agent-partner-program/"
              className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
            >
              JOIN THE PARTNER PROGRAM
            </Link>
            <Link
              href="/contact-me/"
              className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
            >
              CONTACT US DIRECTLY
            </Link>
          </div>
        </div>
      </section>

      {/* Agent Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              Agent Resources & Tools
            </h2>
            <p className="text-text-muted text-lg mb-12 max-w-2xl font-sans">
              Share these tools with your clients or use them to strengthen your own market
              knowledge. Every resource is designed to support the transaction from start to finish.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Mortgage Calculator",
                description:
                  "Help clients estimate monthly payments, compare loan terms, and understand how down payment size affects their bottom line.",
                href: "/mortgage-calculator/",
              },
              {
                title: "Get Pre-Qualified",
                description:
                  "Send your clients directly to our pre-qualification form. Fast, no-obligation, and designed for a smooth experience.",
                href: "/prequalify/",
              },
              {
                title: "Loan Options Overview",
                description:
                  "A comprehensive breakdown of every loan program we offer — Conventional, FHA, VA, USDA, and more.",
                href: "/loan-options/",
              },
              {
                title: "First-Time Buyer Guide",
                description:
                  "A detailed resource for clients who are new to the process. Covers everything from credit scores to closing costs.",
                href: "/first-time-home-buyer/",
              },
              {
                title: "The Mortgage Process",
                description:
                  "Walk your clients through every step from pre-qualification to closing day so they know what to expect.",
                href: "/mortgage-process/",
              },
              {
                title: "Agent Partner Program",
                description:
                  "Learn about our tiered partner program with priority processing, co-marketing, and dedicated support.",
                href: "/agent-partner-program/",
              },
            ].map((resource) => (
              <ScrollReveal key={resource.title}>
                <Link
                  href={resource.href}
                  className="block bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 group h-full"
                >
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed font-sans">
                    {resource.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold mt-4 group-hover:gap-2 transition-all font-sans">
                    View Resource
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={faqItems}
              title="Questions From Real Estate Agents"
              subtitle="Answers to the most common questions we receive from our agent partners."
              withSchema
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-bg-light border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-bold text-primary mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-3 font-sans text-sm">
            <Link
              href="/agent-partner-program/"
              className="px-4 py-2 rounded-lg bg-white border border-border hover:border-accent/40 text-primary font-medium transition-colors"
            >
              Agent Partner Program
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
