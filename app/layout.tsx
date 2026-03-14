import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Mortgage Broker in Wesley Chapel, FL — Kinsfolk Mortgage",
    template: "%s | Kinsfolk Mortgage LLC",
  },
  description:
    "Chaunci Witherspoon is a mortgage broker in Wesley Chapel, FL helping first-time buyers and homeowners navigate pre-approval, FHA, VA, and conventional loans. NMLS# 2610890.",
  keywords: [
    "mortgage broker Wesley Chapel FL",
    "Wesley Chapel mortgage lender",
    "home loan Wesley Chapel",
    "mortgage pre-approval Florida",
    "first time home buyer Wesley Chapel",
    "refinance mortgage Wesley Chapel FL",
    "FHA loan Florida",
    "VA loan Wesley Chapel",
  ],
  authors: [{ name: "Kinsfolk Mortgage LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kinsfolk Mortgage LLC",
    title: "Mortgage Broker in Wesley Chapel, FL — Kinsfolk Mortgage",
    description:
      "Mortgage broker in Wesley Chapel, FL. Chaunci Witherspoon helps first-time buyers and homeowners with pre-approval, FHA, VA, and conventional loans.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Broker in Wesley Chapel, FL — Kinsfolk Mortgage",
    description: "Wesley Chapel mortgage broker helping first-time buyers and homeowners with clear, step-by-step guidance.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://kinsfolkmortgage.com/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MortgageBroker",
        "@id": "https://kinsfolkmortgage.com/#organization",
        name: "Kinsfolk Mortgage LLC",
        url: "https://kinsfolkmortgage.com/",
        telephone: "+1-813-638-0862",
        email: "info@kinsfolkmortgage.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1936 Bruce B Downs Blvd Suite 442",
          addressLocality: "Wesley Chapel",
          addressRegion: "FL",
          postalCode: "33543",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.2397,
          longitude: -82.3275,
        },
        sameAs: [
          "https://www.facebook.com/kinsfolkmortgage",
          "https://www.instagram.com/kinsfolkmortgage",
          "https://www.linkedin.com/company/kinsfolkmortgage",
          "https://www.google.com/maps/place/Kinsfolk+Mortgage+LLC/",
          "https://www.yelp.com/biz/kinsfolk-mortgage-wesley-chapel",
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        employee: {
          "@type": "Person",
          name: "Chaunci Witherspoon",
          jobTitle: "Owner / Mortgage Broker",
          url: "https://kinsfolkmortgage.com/chaunci-witherspoon/",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://kinsfolkmortgage.com/#website",
        url: "https://kinsfolkmortgage.com/",
        name: "Kinsfolk Mortgage LLC",
        publisher: { "@id": "https://kinsfolkmortgage.com/#organization" },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://widgets.leadconnectorhq.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${sans.variable} ${serif.variable} antialiased font-sans`}>
        <Header />
        <main id="main-content" className="pt-20">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <BackToTop />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69b4d3df0eb19983ff9ee461"
          defer
        />
      </body>
    </html>
  );
}
