import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MortgageForm from "@/components/MortgageForm";

export const metadata: Metadata = {
  title: "Get Pre-Qualified for a Home Loan — Kinsfolk Mortgage",
  description:
    "Find out what you may qualify for before you start house hunting. Chaunci Witherspoon walks you through the pre-qualification process step by step. Wesley Chapel, FL.",
};

export default function MortgagePrequalifiedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Know What You Qualify For — Before You Start Looking at Homes
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Pre-qualification gives you a clear picture of your budget so you can shop
                with confidence. I&apos;ll walk you through exactly what&apos;s needed and handle the heavy lifting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/quote/"
                  className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  Start Your Pre-Qualification
                </Link>
                <a
                  href="#learn-more"
                  className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
                >
                  How Does It Work?
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/happy-homebuyers.jpg"
                  alt="Couple meeting with mortgage professional"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section id="learn-more" className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
              <h3 className="text-2xl font-bold text-primary mb-4">
                What is pre-qualification, and why does it matter?
              </h3>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Pre-qualification is a quick look at your financial picture — your income, debts, 
                  and credit — to give you a realistic idea of how much home you can afford. Think of 
                  it as a roadmap before you start driving.
                </p>
                <p>
                  It also makes you a stronger buyer. When sellers see that you&apos;re pre-qualified, 
                  they know you&apos;re serious and financially prepared. In competitive markets, that 
                  can make all the difference. Many real estate agents actually require a pre-qualification 
                  letter before they&apos;ll start showing you homes.
                </p>
                <p>
                  The best part? It&apos;s quick, there&apos;s no commitment, and I&apos;ll walk you 
                  through every step.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Worried about your credit? Let&apos;s talk about it.
              </h3>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Your credit score is one of the things lenders look at — but it&apos;s not the only 
                  thing. It&apos;s a number based on your payment history, how much debt you carry, and 
                  how long you&apos;ve been managing credit. A lot of people are surprised to learn their 
                  score is better than they expected.
                </p>
                <p>
                  If you&apos;re not sure where you stand, you can check your score for free at{" "}
                  <a
                    href="https://www.freecreditreport.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-semibold underline"
                  >
                    freecreditreport.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.creditkarma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark font-semibold underline"
                  >
                    creditkarma.com
                  </a>
                  . But either way, don&apos;t let it stop you from reaching out.
                </p>
                <p>
                  Even if your score needs work, there are loan programs designed for that — 
                  and I can help you understand what steps might improve your position. No judgment, 
                  just honest guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Ready to See Where You Stand?</h2>
          <p className="text-text-muted text-lg mb-10">
            Answer a few quick questions below and I&apos;ll personally follow up to walk you through your options. 
            No obligation — just a straightforward conversation.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
            <MortgageForm />
          </div>
        </div>
      </section>
    </>
  );
}
