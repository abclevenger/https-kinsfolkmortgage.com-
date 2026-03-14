import ScrollReveal from "./ScrollReveal";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Props {
  steps?: Step[];
  title?: string;
  subtitle?: string;
}

const defaultSteps: Step[] = [
  { number: "01", title: "Let's Talk", description: "We'll have a quick conversation about your goals, your finances, and what kind of loan might work best for you." },
  { number: "02", title: "Get Pre-Qualified", description: "I'll review your info and let you know what you may qualify for — so you can shop for homes with confidence." },
  { number: "03", title: "Find Your Home", description: "Once you know your budget, you can start house hunting. I'll be available if any questions come up along the way." },
  { number: "04", title: "Submit Your Application", description: "When you're ready, I'll help you gather the right documents and walk you through the full application — no guesswork." },
  { number: "05", title: "I Handle the Details", description: "I'll coordinate with underwriters, title companies, and everyone else involved so you don't have to chase anyone down." },
  { number: "06", title: "Close & Get Your Keys", description: "We'll review everything together before you sign. Then it's official — welcome home." },
];

export default function ProcessSteps({ steps = defaultSteps, title, subtitle }: Props) {
  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary">{title}</h2>
          {subtitle && <p className="text-text-muted mt-3 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={Math.min(i + 1, 4)}>
            <div className="relative bg-white rounded-xl p-4 sm:p-6 border border-border hover:border-accent/40 hover:shadow-lg transition-all duration-300 group">
              <span className="text-4xl sm:text-5xl font-bold text-border/60 group-hover:text-accent/30 transition-colors absolute top-4 right-5">
                {step.number}
              </span>
              <div className="relative">
                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
