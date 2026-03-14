import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Second Look – Kinsfolk Mortgage LLC",
  description:
    "Compare your best offer with us today! Submit your Loan Estimate and we'll let you know within 24 hours if we can beat it.",
};

export default function SecondLookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
