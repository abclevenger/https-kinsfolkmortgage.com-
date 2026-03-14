import type { Metadata } from "next";
import { getGeoPage } from "@/lib/geo-pages";
import GeoLandingPage from "@/components/GeoLandingPage";

const page = getGeoPage("lutz-mortgage-broker")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `https://kinsfolkmortgage.com/${page.slug}/` },
};

export default function LutzMortgageBroker() {
  return <GeoLandingPage page={page} />;
}
