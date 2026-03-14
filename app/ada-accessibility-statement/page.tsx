import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADA Accessibility Statement – Kinsfolk Mortgage LLC",
  description: "ADA Accessibility Statement for Kinsfolk Mortgage LLC.",
};

export default function ADAAccessibilityStatementPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            ADA Accessibility Statement
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-muted [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-accent [&_a]:underline">
            <p>
              Kinsfolk Mortgage LLC is committed to providing a website that is accessible to all
              its customers and compliant with accessibility guidelines. We are continually making
              improvements to meet these guidelines, and our website has been designed with
              accessibility in mind.
            </p>
            <p>
              If you need assistance or have specific questions or feedback about this site&apos;s
              accessibility, please contact us via email at{" "}
              <a href="mailto:info@kinsfolkmortgage.com">info@kinsfolkmortgage.com</a>.
            </p>
            <p>
              If you have found an inaccessible area on the site, please assist our team by
              informing us of the issue via email at{" "}
              <a href="mailto:info@kinsfolkmortgage.com">info@kinsfolkmortgage.com</a>. In the
              event a page cannot be made accessible, we will work with you to make a text version
              of the content available.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
