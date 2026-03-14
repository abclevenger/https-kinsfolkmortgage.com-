"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export default function ScrollReveal({ children, className = "", delay = 0, stagger = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";
  const baseClass = stagger ? "stagger-children" : "reveal";

  return (
    <div ref={ref} className={`${baseClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
