"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "/prequalify/", label: "Pre-Qualify" },
  { href: "/mortgage-calculator/", label: "Calculators" },
  { href: "/mortgage-rates-florida/", label: "Rates" },
  { href: "/loan-options/", label: "Loan Options" },
  { href: "/first-time-home-buyer/", label: "First-Time Buyers" },
  { href: "/chaunci-witherspoon/", label: "About" },
  { href: "/contact-me/", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:px-4 focus:py-2 focus:bg-accent focus:text-primary-dark focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "bg-primary border-white/10 shadow-lg shadow-black/10"
            : "bg-primary/95 backdrop-blur-md border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
            <Link href="/" className="flex items-center group" onClick={closeMobile}>
              <Image
                src="/images/logo.png"
                alt="Kinsfolk Mortgage LLC"
                width={180}
                height={60}
                className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-14"}`}
                priority
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white rounded-lg transition-all duration-200 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://kinsfolkmortgage.my1003app.com/1703351/register"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2.5 bg-primary-light hover:bg-primary text-white font-semibold text-sm rounded-lg transition-all duration-200 border border-white/20 active:scale-95"
              >
                Apply Online
              </a>
              <Link
                href="/quote/"
                className="ml-1 px-5 py-2.5 bg-accent hover:bg-accent-dark text-primary-dark font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-accent/20 active:scale-95"
              >
                Talk to Chaunci
              </Link>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu with slide animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <div className="bg-primary-dark border-t border-white/10 px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors text-sm font-medium active:bg-white/15"
                tabIndex={mobileOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href="https://kinsfolkmortgage.my1003app.com/1703351/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-primary-light hover:bg-primary text-white font-semibold text-sm rounded-lg text-center transition-colors border border-white/20 active:scale-[0.98]"
                tabIndex={mobileOpen ? 0 : -1}
              >
                Apply Online
              </a>
              <Link
                href="/quote/"
                onClick={closeMobile}
                className="block px-4 py-3 bg-accent hover:bg-accent-dark text-primary-dark font-semibold text-sm rounded-lg text-center transition-colors active:scale-[0.98]"
                tabIndex={mobileOpen ? 0 : -1}
              >
                Talk to Chaunci
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}
    </>
  );
}
