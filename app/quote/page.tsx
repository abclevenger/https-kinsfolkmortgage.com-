import type { Metadata } from "next";
import Image from "next/image";
import MortgageForm from "@/components/MortgageForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Let's Talk About Your Mortgage Options — Kinsfolk Mortgage",
  description:
    "Tell me a little about your situation, and I'll walk you through what your mortgage options look like. No pressure, no obligation. Wesley Chapel, FL.",
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Get A Quote" }]} />
          <div className="text-center mt-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let&apos;s Walk Through Your Options</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-sans">
              Tell me a little about your situation, and I&apos;ll follow up personally to 
              help you understand what&apos;s possible. No pressure, no sales pitch — just a 
              real conversation about your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-border/50">
                <MortgageForm />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary mb-1">Talk to a Real Person</h3>
                <p className="text-sm text-text-muted">
                  You&apos;ll hear back from Chaunci directly — not a call center.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary mb-1">No Commitment Needed</h3>
                <p className="text-sm text-text-muted">
                  This is a conversation, not an application. Ask anything.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-primary mb-1">I Shop for the Best Fit</h3>
                <p className="text-sm text-text-muted">
                  I compare options from multiple lenders so you don&apos;t have to.
                </p>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-white">
                <Image
                  src="/images/chaunci.png"
                  alt="Chaunci Witherspoon"
                  width={60}
                  height={60}
                  className="w-14 h-14 rounded-full border-2 border-accent mb-3 object-cover"
                />
                <h3 className="font-bold mb-2">Chaunci Witherspoon</h3>
                <p className="text-white/50 text-xs mb-4">Owner / Mortgage Broker · NMLS# 1703351</p>
                <div className="space-y-2">
                  <a
                    href="sms:8136380862"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (813) 638-0862
                  </a>
                  <a
                    href="mailto:info@kinsfolkmortgage.com"
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-accent transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@kinsfolkmortgage.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
