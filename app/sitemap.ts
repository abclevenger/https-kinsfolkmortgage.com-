import type { MetadataRoute } from "next";
import { posts, categories } from "@/lib/posts";
import { geoPages } from "@/lib/geo-pages";

const BASE = "https://kinsfolkmortgage.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${BASE}/`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/quote/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/mortgage-calculator/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/mortgage-prequalified/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/loan-options/`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/chaunci-witherspoon/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/blog/`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/learning-center/`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${BASE}/contact-me/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/reviews/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/faq/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/mortgage-process/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/va-loans/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/fha-loans/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/conventional-loans/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/real-estate-agent-recommendation/`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/second-look/`, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE}/privacy-policy/`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/terms-of-use/`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/licensing-and-disclosures/`, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE}/ada-accessibility-statement/`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/communications-policy/`, changeFrequency: "yearly" as const, priority: 0.2 },
    { url: `${BASE}/a2p-messaging-policy/`, changeFrequency: "yearly" as const, priority: 0.2 },
    // Pre-qualification quiz
    { url: `${BASE}/prequalify/`, changeFrequency: "monthly" as const, priority: 0.9 },
    // Mortgage rates
    { url: `${BASE}/mortgage-rates-florida/`, changeFrequency: "weekly" as const, priority: 0.9 },
    // First-time buyer cluster
    { url: `${BASE}/first-time-home-buyer/`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE}/first-time-buyer-down-payment/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/first-time-buyer-credit-score/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/first-time-home-buyer-florida-programs/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/first-time-buyer-closing-costs/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/first-time-home-buyer-mistakes/`, changeFrequency: "monthly" as const, priority: 0.6 },
    // Agent partner
    { url: `${BASE}/real-estate-agents/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/agent-partner-program/`, changeFrequency: "monthly" as const, priority: 0.6 },
    // Calculator pages
    { url: `${BASE}/rent-vs-buy-calculator/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/dti-calculator/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/amortization-calculator/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/refinance-break-even-calculator/`, changeFrequency: "monthly" as const, priority: 0.7 },
    // Affordability articles
    { url: `${BASE}/how-much-house-can-i-afford/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/mortgage-payment-500k/`, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/mortgage-payment-400k/`, changeFrequency: "monthly" as const, priority: 0.6 },
    // SEO blog articles
    { url: `${BASE}/fha-loan-requirements-florida/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/how-to-get-pre-approved-for-a-mortgage/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/best-time-to-buy-a-house-in-florida/`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/va-loan-florida-benefits/`, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const geoLandingPages = geoPages.map((geo) => ({
    url: `${BASE}/${geo.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((post) => ({
    url: `${BASE}/${post.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const categoryPages = categories.map((cat) => ({
    url: `${BASE}/category/${cat.slug}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...geoLandingPages,
    ...blogPages,
    ...categoryPages,
  ];
}
