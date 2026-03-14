"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  withSchema?: boolean;
}

function AccordionItem({ item, isOpen, onToggle, id }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={`border rounded-xl overflow-hidden transition-colors duration-200 ${isOpen ? "border-accent/40 shadow-sm" : "border-border"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 sm:px-6 py-4 text-left hover:bg-bg-light transition-colors group"
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        id={`${id}-trigger`}
      >
        <span className={`font-semibold pr-4 transition-colors duration-200 ${isOpen ? "text-accent" : "text-primary"}`}>
          {item.question}
        </span>
        <span className={`flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-all duration-300 ${isOpen ? "bg-accent/10 rotate-180" : "bg-bg-light group-hover:bg-accent/10"}`}>
          <svg
            aria-hidden="true"
            className={`w-4 h-4 transition-colors duration-200 ${isOpen ? "text-accent" : "text-text-muted"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: height }}
      >
        <div ref={contentRef}>
          <p className="px-4 sm:px-6 pb-4 text-text-muted leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ items, title = "Frequently Asked Questions", subtitle, withSchema = true }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = useCallback((i: number) => {
    setOpen((prev) => (prev === i ? null : i));
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <div>
        {title && <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">{title}</h2>}
        {subtitle && <p className="text-text-muted mb-8">{subtitle}</p>}
        <div className="space-y-3" role="list">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={open === i}
              onToggle={() => toggle(i)}
              id={`faq-${i}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
