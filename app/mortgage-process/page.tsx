import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSteps from "@/components/ProcessSteps";
import FAQSection from "@/components/FAQSection";
import ScrollReveal from "@/components/ScrollReveal";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "The Mortgage Process Explained – Kinsfolk Mortgage LLC",
  description:
    "Learn how the mortgage process works from prequalification to closing. Our step-by-step guide covers everything you need to know about buying a home with confidence.",
};

const processSteps = [
  {
    number: "01",
    title: "Pre-Qualify",
    description:
      "Get a clear picture of your borrowing power with a quick financial assessment — no hard credit pull required.",
  },
  {
    number: "02",
    title: "Find Your Home",
    description:
      "Armed with your prequalification, work with a real estate agent to shop confidently within your budget.",
  },
  {
    number: "03",
    title: "Submit Your Application",
    description:
      "Complete your full mortgage application and provide supporting documents so we can begin processing your loan.",
  },
  {
    number: "04",
    title: "Processing & Verification",
    description:
      "Our team assembles your loan file, verifies income and assets, and orders the property appraisal.",
  },
  {
    number: "05",
    title: "Underwriting",
    description:
      "An underwriter reviews your complete file and makes the final decision on your loan approval.",
  },
  {
    number: "06",
    title: "Closing Day",
    description:
      "Sign your documents, receive your keys, and officially become a homeowner. Congratulations!",
  },
];

const processFAQs = [
  {
    question: "How long does the entire mortgage process take?",
    answer:
      "From application to closing, the process typically takes 30 to 45 days. However, timelines can vary depending on the loan type, your responsiveness with documentation, and the current volume at the lender. Staying organized and responsive is the best way to keep things on schedule.",
  },
  {
    question: "What can I do to speed up my mortgage approval?",
    answer:
      "Have your documents ready before you apply — pay stubs, W-2s, tax returns, and bank statements. Respond quickly to any requests from your loan officer, avoid opening new credit accounts or making large purchases during the process, and keep your finances as stable as possible.",
  },
  {
    question: "What happens if my appraisal comes in low?",
    answer:
      "If the appraised value is lower than the purchase price, you have several options: negotiate a lower price with the seller, increase your down payment to cover the gap, challenge the appraisal with additional comparable sales data, or in some cases, walk away if your contract includes an appraisal contingency.",
  },
  {
    question: "Can my mortgage be denied after preapproval?",
    answer:
      "Yes, though it's uncommon. A denial can happen if your financial situation changes significantly — for example, if you lose your job, take on new debt, or if issues arise during the title search or appraisal. This is why it's important to keep your finances stable throughout the process.",
  },
  {
    question: "What should I bring to closing?",
    answer:
      "Bring a valid government-issued photo ID, a cashier's check or wire transfer confirmation for your closing costs and down payment (your lender will provide the exact amount), and any documents your closing agent or attorney has requested. Your loan officer will give you a detailed checklist ahead of time.",
  },
  {
    question: "Do I need a real estate agent to buy a home?",
    answer:
      "While it's not legally required, working with a buyer's agent is highly recommended. They represent your interests, negotiate on your behalf, and guide you through the complexities of the transaction — typically at no direct cost to you, since the seller usually covers the agent's commission.",
  },
];

export default function MortgageProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary-dark/50 to-primary/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "The Mortgage Process" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The Mortgage Process, Step by Step
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Buying a home doesn&apos;t have to be overwhelming. Here&apos;s a clear look at every
              stage of the mortgage journey — from your first conversation with a loan officer to the
              moment you get your keys.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote/"
                className="px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
              >
                GET YOUR QUOTE
              </Link>
              <Link
                href="/mortgage-prequalified/"
                className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-200"
              >
                GET PREQUALIFIED
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Overview */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessSteps
            steps={processSteps}
            title="Your Path to Homeownership"
            subtitle="Each step brings you closer to the keys to your new home. Here's what to expect along the way."
          />
        </div>
      </section>

      {/* Step 1 Detail */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-accent/30">01</span>
              <h2 className="text-3xl font-bold text-primary">Pre-Qualify for Your Mortgage</h2>
            </div>
            <div className="space-y-4 font-sans text-text-muted leading-relaxed">
              <p>
                Prequalification is your first real step toward homeownership. During this stage,
                you&apos;ll share basic financial information — your income, debts, assets, and credit
                history — so your loan officer can estimate how much you may be able to borrow. In
                most cases, this can be done online or over the phone in just a few minutes, and it
                doesn&apos;t require a hard credit pull.
              </p>
              <p>
                Getting prequalified early gives you a realistic budget to work with and signals to
                sellers and real estate agents that you&apos;re a serious buyer. It also gives you an
                opportunity to address any potential issues — like a high debt-to-income ratio or an
                error on your credit report — before you start shopping.
              </p>
              <p>
                At Kinsfolk Mortgage, prequalification is free and comes with no obligation.{" "}
                <Link
                  href="/mortgage-prequalified/"
                  className="text-accent hover:text-accent-dark font-semibold underline"
                >
                  Start your prequalification now
                </Link>{" "}
                and take the first step with confidence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Step 2 Detail */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-accent/30">02</span>
              <h2 className="text-3xl font-bold text-primary">Find the Right Home</h2>
            </div>
            <div className="space-y-4 font-sans text-text-muted leading-relaxed">
              <p>
                With a prequalification letter in hand, you&apos;re ready to begin house hunting. A
                good real estate agent will help you identify properties that match your needs and
                budget, schedule viewings, and provide insight into local market conditions. Knowing
                your price range upfront keeps your search focused and prevents the frustration of
                falling in love with a home that&apos;s out of reach.
              </p>
              <p>
                As you tour homes, think beyond the surface. Consider the neighborhood, commute
                times, school districts, and potential maintenance costs. Your agent can run
                comparable sales data to help you make competitive offers. When you find the one, your
                agent will guide you through the offer and negotiation process.
              </p>
              <p>
                Need a trusted agent in your area?{" "}
                <Link
                  href="/real-estate-agent-recommendation/"
                  className="text-accent hover:text-accent-dark font-semibold underline"
                >
                  Request a real estate agent recommendation
                </Link>{" "}
                from our network of experienced professionals.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Step 3 Detail */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-accent/30">03</span>
              <h2 className="text-3xl font-bold text-primary">Submit Your Full Application</h2>
            </div>
            <div className="space-y-4 font-sans text-text-muted leading-relaxed">
              <p>
                Once your offer is accepted, it&apos;s time to formally apply for your mortgage.
                You&apos;ll complete a detailed application and provide supporting documentation
                including recent pay stubs, W-2s or tax returns, bank statements, and information
                about the property. This is when your lender begins building your complete loan file.
              </p>
              <p>
                Within three business days of submitting your application, you&apos;ll receive a Loan
                Estimate — a standardized document that outlines your projected interest rate, monthly
                payment, closing costs, and other key terms. Review this carefully and ask your loan
                officer about anything that isn&apos;t clear.
              </p>
              <p>
                Being organized and responsive at this stage makes a big difference. Having your
                documents ready to go and responding promptly to requests from your loan officer helps
                prevent delays and keeps your timeline on track.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Mortgage Journey?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Get a personalized quote with no obligation. We&apos;ll walk you through every step.
          </p>
          <Link
            href="/quote/"
            className="inline-block px-8 py-3.5 bg-accent hover:bg-accent-dark text-primary-dark font-bold rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
          >
            GET YOUR FREE QUOTE
          </Link>
        </div>
      </section>

      {/* Step 4 Detail */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-accent/30">04</span>
              <h2 className="text-3xl font-bold text-primary">Processing & Verification</h2>
            </div>
            <div className="space-y-4 font-sans text-text-muted leading-relaxed">
              <p>
                During the processing phase, your loan processor takes the reins. They&apos;ll
                verify all the information in your application — confirming your employment, income,
                assets, and identity. They&apos;ll also order the home appraisal, which is an
                independent assessment of the property&apos;s market value conducted by a licensed
                appraiser.
              </p>
              <p>
                The processor coordinates with multiple parties — the title company, the appraiser,
                your employer, your bank, and potentially others — to assemble a complete, accurate
                loan package. If anything is missing or needs clarification, they&apos;ll reach out
                to you directly. Quick responses on your part help keep everything moving.
              </p>
              <p>
                This stage typically takes one to two weeks. During this time, it&apos;s important to
                avoid any major financial changes — don&apos;t open new credit lines, make large
                purchases, or change jobs if possible, as these can complicate or delay your
                approval.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Step 5 Detail */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-accent/30">05</span>
              <h2 className="text-3xl font-bold text-primary">Underwriting & Approval</h2>
            </div>
            <div className="space-y-4 font-sans text-text-muted leading-relaxed">
              <p>
                Underwriting is where the final decision on your loan is made. An underwriter — a
                specialist trained in risk assessment — reviews your entire file to make sure
                everything meets the lender&apos;s guidelines and the requirements of the specific
                loan program. They&apos;re looking at your ability to repay, the value of the
                property, and the overall risk of the loan.
              </p>
              <p>
                The underwriter may issue a &ldquo;clear to close,&rdquo; meaning your loan is fully
                approved, or they may come back with conditions — additional documents or
                explanations needed before final sign-off. Common conditions include updated pay
                stubs, letters of explanation for large deposits, or proof that a prior debt has been
                paid off.
              </p>
              <p>
                Once all conditions are satisfied and you receive your clear to close, the finish line
                is in sight. Your lender will prepare your final Closing Disclosure, which details
                every cost and term of your loan. You&apos;ll have at least three business days to
                review it before closing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Step 6 Detail */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold text-accent/30">06</span>
              <h2 className="text-3xl font-bold text-primary">Closing Day</h2>
            </div>
            <div className="space-y-4 font-sans text-text-muted leading-relaxed">
              <p>
                Closing day is when everything comes together. You&apos;ll meet with a closing agent
                (or attorney, depending on your state) to sign your mortgage documents, including the
                promissory note, deed of trust, and closing disclosure. Bring a valid photo ID and
                your cashier&apos;s check or wire transfer confirmation for your down payment and
                closing costs.
              </p>
              <p>
                The signing process usually takes about an hour. Your closing agent will walk you
                through each document, and your loan officer can be available by phone if any
                last-minute questions arise. Once everything is signed and funds are transferred, the
                deed is recorded with your local government.
              </p>
              <p>
                And then — you get your keys. Congratulations, you&apos;re officially a homeowner!
                Your first mortgage payment will typically be due about 30 to 60 days after closing,
                and your lender will provide all the details on how and where to make payments.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              items={processFAQs}
              title="Common Questions About the Mortgage Process"
              subtitle="Still wondering about the details? Here are answers to questions we hear most often."
              withSchema
            />
          </ScrollReveal>
          <div className="mt-8 font-sans">
            <p className="text-text-muted leading-relaxed">
              Have a question we didn&apos;t cover?{" "}
              <Link
                href="/faq/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                Visit our full mortgage FAQ
              </Link>{" "}
              or{" "}
              <Link
                href="/contact-me/"
                className="text-accent hover:text-accent-dark font-semibold underline"
              >
                contact us directly
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA with Lead Form */}
      <section className="py-20 bg-bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Take the First Step Today
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto font-sans">
              Whether you&apos;re buying your first home or your fifth, we&apos;re here to guide you
              through every step of the process.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border/50">
            <LeadForm
              formName="mortgage-process"
              buttonText="Start My Mortgage Journey"
              showLoanGoal
              showMessage
            />
          </div>
        </div>
      </section>
    </>
  );
}
