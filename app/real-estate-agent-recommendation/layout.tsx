import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate Agent Recommendation – Kinsfolk Mortgage LLC",
  description:
    "Let us connect you with experienced and trusted real estate professionals.",
};

export default function RealEstateAgentRecommendationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
