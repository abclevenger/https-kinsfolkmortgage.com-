import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet Chaunci Witherspoon — Your Mortgage Guide in Wesley Chapel, FL",
  description:
    "Chaunci Witherspoon takes the confusion out of the mortgage process. He walks every client through the paperwork, explains what lenders look for, and makes homebuying feel manageable.",
};

const loanProcess = [
  {
    step: "01",
    title: "We Have a Conversation",
    description: "We'll talk about your goals and your financial picture. I'll help you understand what you may qualify for.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "You Shop with Confidence",
    description: "With a pre-qualification in hand, you know your budget and sellers take you seriously.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "We Handle the Paperwork",
    description: "I'll tell you exactly what's needed and walk you through each document — no guesswork involved.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "I Coordinate Everything",
    description: "I work behind the scenes with lenders, appraisers, and title companies so you don't have to.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Your Loan Gets Approved",
    description: "The underwriter reviews everything. I'll keep you updated so there are never any surprises.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    step: "06",
    title: "You Get the Keys",
    description: "We'll review everything together before you sign. Then it's official — welcome home.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
];

export default function ChaunciWitherspoonPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
                Nice to meet you! My name is...
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                Chaunci Witherspoon
              </h1>
              <p className="text-white/70 text-lg mb-1">Owner / Mortgage Broker</p>
              <p className="text-white/70 text-sm mb-6">NMLS# 1703351</p>

              <div className="flex items-center gap-3 mb-6">
                <a
                  href="https://www.facebook.com/ChaunciWitherspoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/chaunciwitherspoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/chaunci-d-witherspoon-mba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="tel:8137104602"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Phone"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@kinsfolkmortgage.com"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <p className="text-white/60 text-sm mb-8">
                If you&apos;re thinking about buying a home and aren&apos;t sure where to start, 
                that&apos;s exactly what I help with. Let&apos;s have a conversation — no commitment, 
                no pressure.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote/"
                  className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  Let&apos;s Talk About Your Options
                </Link>
                <Link
                  href="/contact-me/"
                  className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl" />
                <Image
                  src="/images/chaunci.png"
                  alt="Chaunci Witherspoon — mortgage broker in Wesley Chapel, FL"
                  width={400}
                  height={500}
                  className="relative rounded-2xl shadow-2xl object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            A Little About How I Work
          </h2>
          <p className="text-accent font-semibold mb-8">
            Chaunci Witherspoon, MBA — Founder &amp; Mortgage Broker — Kinsfolk Mortgage
          </p>

          <div className="space-y-5 text-text-muted leading-relaxed text-lg">
            <p>
              Most people who reach out to me say the same thing: &ldquo;I don&apos;t really know 
              how this works.&rdquo; And that&apos;s completely fine — that&apos;s why I&apos;m here. 
              I started Kinsfolk Mortgage because I believe everyone deserves someone who takes the 
              time to explain the process, not just push paperwork.
            </p>
            <p>
              When we work together, I start by listening. I want to understand what you&apos;re 
              trying to accomplish — whether that&apos;s buying your first home, refinancing to a 
              better rate, or figuring out if now is even the right time. From there, I walk you 
              through your options in plain language. No jargon, no pressure, no rushing you 
              through decisions.
            </p>
            <p>
              I handle the details that make people&apos;s heads spin — the paperwork, the 
              coordination with lenders and title companies, the back-and-forth that can feel 
              endless. My job is to make sure you always know where things stand and what comes 
              next, so you never feel lost in the process.
            </p>
            <p>
              Outside of work, I&apos;m focused on fitness, personal growth, and giving back 
              through mentorship and financial education. Helping people understand their money 
              is something I care about whether I&apos;m on the clock or not.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider text-center mb-3">
            How We Work Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-12">
            What the Process Actually Looks Like
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProcess.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:border-accent/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-accent/15 group-hover:text-accent transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-bold text-border">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
