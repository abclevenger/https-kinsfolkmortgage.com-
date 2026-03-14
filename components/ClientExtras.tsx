"use client";

import dynamic from "next/dynamic";

const StickyMobileCTA = dynamic(
  () => import("@/components/StickyMobileCTA"),
  { ssr: false }
);
const BackToTop = dynamic(() => import("@/components/BackToTop"), {
  ssr: false,
});

export default function ClientExtras() {
  return (
    <>
      <StickyMobileCTA />
      <BackToTop />
    </>
  );
}
