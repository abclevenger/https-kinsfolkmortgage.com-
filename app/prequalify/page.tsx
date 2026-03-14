import type { Metadata } from "next";
import PrequalifyQuiz from "@/components/PrequalifyQuiz";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Get Pre-Qualified in Minutes",
  description:
    "Answer a few quick questions to see what mortgage programs you may qualify for. No hard credit pull at this stage. Free initial pre-qualification from Kinsfolk Mortgage LLC.",
};

const faqItems = [
  {
    question: "What is mortgage pre-qualification?",
    answer:
      "Pre-qualification is a quick assessment of your financial situation to estimate what mortgage programs and loan amounts you may qualify for. It\u2019s based on self-reported information and does not involve a hard credit inquiry at this stage. A formal credit check will be required if you proceed with a full loan application.",
  },
  {
    question: "Does pre-qualification affect my credit score?",
    answer:
      "No. Our online pre-qualification quiz does not pull your credit report or affect your credit score. It\u2019s based entirely on the information you provide. A formal credit inquiry would only occur if you choose to proceed with a full mortgage application.",
  },
  {
    question: "How long does the pre-qualification process take?",
    answer:
      "Our online quiz takes less than 2 minutes to complete. Once submitted, a Kinsfolk Mortgage specialist will review your information and follow up within 24 hours with personalized loan options.",
  },
  {
    question: "What\u2019s the difference between pre-qualification and pre-approval?",
    answer:
      "Pre-qualification is an informal estimate based on self-reported data. Pre-approval is a more thorough process that involves a credit check, income verification, and documentation review. Pre-approval carries more weight with sellers.",
  },
  {
    question: "What documents do I need for pre-qualification?",
    answer:
      "None! Our pre-qualification quiz only asks a few basic questions about your goals, price range, credit score estimate, and down payment. No documents, pay stubs, or tax returns are needed at this stage.",
  },
];

export default function PrequalifyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-primary-dark via-primary to-primary-light/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pre-Qualify" }]} />
          <div className="text-center mt-6 mb-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get Pre-Qualified in Minutes
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto font-sans">
              Answer a few quick questions to see what mortgage programs you may qualify for.
              No hard credit pull at this stage, no commitment &mdash; just honest answers.
            </p>
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PrequalifyQuiz />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-text-muted text-sm mt-1">Families Helped</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-primary">4.9 <span className="text-lg">&#9733;</span></p>
              <p className="text-text-muted text-sm mt-1">Average Rating</p>
            </div>
            <div>
              <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-3xl font-bold text-primary">24hr</p>
              <p className="text-text-muted text-sm mt-1">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            items={faqItems}
            title="Pre-Qualification FAQ"
            subtitle="Common questions about our pre-qualification process."
            withSchema
          />
        </div>
      </section>
    </>
  );
}
