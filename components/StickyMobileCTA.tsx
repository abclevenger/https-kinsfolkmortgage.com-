"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-primary/95 backdrop-blur-md border-t border-white/10 px-4 py-3 flex gap-2 safe-bottom">
        <Link
          href="/quote/"
          className="flex-1 text-center py-3 bg-accent hover:bg-accent-dark text-primary-dark font-bold text-sm rounded-lg transition-all duration-150 active:scale-[0.97]"
        >
          Talk to Chaunci
        </Link>
        <a
          href="tel:8136380862"
          className="flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white font-semibold text-sm rounded-lg transition-all duration-150 hover:bg-white/10 active:scale-[0.97]"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call
        </a>
      </div>
    </div>
  );
}
