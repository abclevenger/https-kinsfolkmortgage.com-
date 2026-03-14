import Link from "next/link";
import Image from "next/image";

const disclosureLinks = [
  { href: "/a2p-messaging-policy/", label: "A2P Messaging Policy" },
  { href: "/ada-accessibility-statement/", label: "ADA Accessibility Statement" },
  { href: "/communications-policy/", label: "Communications Policy" },
  { href: "/licensing-and-disclosures/", label: "Licensing and Disclosures" },
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-of-use/", label: "Terms of Use" },
];

const resourceLinks = [
  { href: "/prequalify/", label: "Pre-Qualify Now" },
  { href: "/mortgage-calculator/", label: "Mortgage Calculators" },
  { href: "/mortgage-rates-florida/", label: "Florida Rates" },
  { href: "/first-time-home-buyer/", label: "First-Time Buyers" },
  { href: "/mortgage-process/", label: "Mortgage Process" },
  { href: "/learning-center/", label: "Learning Center" },
  { href: "/faq/", label: "Mortgage FAQ" },
  { href: "/blog/", label: "Blog" },
];

const loanLinks = [
  { href: "/conventional-loans/", label: "Conventional Loans" },
  { href: "/fha-loans/", label: "FHA Loans" },
  { href: "/va-loans/", label: "VA Loans" },
  { href: "/loan-options/", label: "All Loan Options" },
  { href: "/real-estate-agents/", label: "For Agents" },
  { href: "/quote/", label: "Get A Quote" },
  { href: "/contact-me/", label: "Contact Us" },
  { href: "/reviews/", label: "Reviews" },
];

const serviceAreas = [
  { href: "/wesley-chapel-mortgage-broker/", label: "Wesley Chapel" },
  { href: "/tampa-mortgage-broker/", label: "Tampa" },
  { href: "/lutz-mortgage-broker/", label: "Lutz" },
  { href: "/new-tampa-mortgage/", label: "New Tampa" },
  { href: "/pasco-county-mortgage/", label: "Pasco County" },
  { href: "/land-o-lakes-mortgage-broker/", label: "Land O' Lakes" },
  { href: "/odessa-fl-mortgage/", label: "Odessa" },
];

const externalLinks = [
  {
    href: "https://kinsfolkmortgage.my1003app.com/1703351/register",
    label: "Apply Online",
  },
  {
    href: "https://nmlsconsumeraccess.org/",
    label: "NMLS Consumer Access",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Kinsfolk Mortgage LLC"
              width={180}
              height={60}
              className="h-14 w-auto mb-4"
              loading="lazy"
              sizes="180px"
            />
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              About Us
            </h2>
            <p className="text-sm leading-relaxed">
              At Kinsfolk Mortgage, we believe a mortgage is more than a loan — it&apos;s a key step
              toward building the life you envision. Backed by decades of combined experience, our
              team is dedicated to guiding you through the home financing journey with clarity,
              confidence, and care.
            </p>
            <div className="text-xs text-white/70 mt-3 space-y-1">
              <p>Company NMLS# 2610890 · Chaunci Witherspoon NMLS# 1703351</p>
              <p>Licensed Mortgage Broker — State of Florida</p>
              <p>
                <a
                  href="https://nmlsconsumeraccess.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent transition-colors"
                >
                  NMLS Consumer Access
                </a>
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <Image
                src="/images/eho.png"
                alt="Equal Housing Opportunity"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert opacity-50"
              />
              <span className="text-xs text-white/60">Equal Housing Opportunity</span>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  1936 Bruce B Downs Blvd<br />
                  Suite 442<br />
                  Wesley Chapel, FL 33543
                </span>
              </li>
              <li>
                <a href="tel:8136380862" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <svg aria-hidden="true" className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (813) 638-0862
                </a>
              </li>
              <li>
                <a href="mailto:info@kinsfolkmortgage.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <svg aria-hidden="true" className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us Today
                </a>
              </li>
            </ul>

            {/* Find Us On */}
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mt-8 mb-4">
              Find Us On
            </h2>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/kinsfolkmortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kinsfolkmortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/kinsfolkmortgage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/place/Kinsfolk+Mortgage+LLC/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Google Business Profile"
              >
                <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
              <a
                href="https://www.yelp.com/biz/kinsfolk-mortgage-wesley-chapel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                aria-label="Yelp"
              >
                <svg aria-hidden="true" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.98a.96.96 0 01-1.348-.853V2.656a.96.96 0 011.532-.767l5.476 4.18a.96.96 0 01-.265 1.644l-.4.176zm-6.343 3.27l4.995 1.98a.96.96 0 01.265 1.645l-5.476 4.18a.96.96 0 01-1.532-.768v-5.684a.96.96 0 011.348-.853l.4.176zm-3.634-3.27l-4.995 1.98a.96.96 0 00-.265 1.645l5.476 4.18a.96.96 0 001.532-.768v-5.684a.96.96 0 00-1.348-.853l-.4.176z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Disclosures and License Information */}
          <div>
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Disclosures &amp; Licensing
            </h2>
            <ul className="space-y-2.5">
              {disclosureLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Resources
            </h2>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="text-white font-semibold text-sm uppercase tracking-wider mt-6 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {loanLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://kinsfolkmortgage.my1003app.com/1703351/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-accent transition-colors"
                >
                  Apply Online →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <h2 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
            Service Areas
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {serviceAreas.map((area) => (
              <Link key={area.href} href={area.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                {area.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-xs text-white/60 leading-relaxed max-w-5xl">
            The content provided within this website is presented for information purposes only.
            This is not a commitment to lend or extend credit. Information and/or dates are subject
            to change without notice. All loans are subject to credit approval. Other restrictions
            may apply. Mortgage loans may be arranged through third party providers.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60">
              &copy; {new Date().getFullYear()} Kinsfolk Mortgage LLC. All rights reserved.
              NMLS# 2610890
            </p>
            <div className="flex items-center gap-4 text-xs text-white/60">
              <Link href="/privacy-policy/" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms-of-use/" className="hover:text-accent transition-colors">
                Terms of Use
              </Link>
              <span>·</span>
              <Link href="/ada-accessibility-statement/" className="hover:text-accent transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
