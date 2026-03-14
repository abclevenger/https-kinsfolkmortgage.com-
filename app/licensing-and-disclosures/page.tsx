import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Licensing and Disclosures – Kinsfolk Mortgage LLC",
  description: "Licensing and Disclosures for Kinsfolk Mortgage LLC.",
};

export default function LicensingAndDisclosuresPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Licensing and Disclosures
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-muted [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-accent [&_a]:underline">
            <h2>Company Information</h2>
            <p>
              Kinsfolk Mortgage LLC is a licensed mortgage broker. Company NMLS: 2610890. Chaunci
              Witherspoon NMLS: 1703351.
            </p>
            <p>
              For more information about our licensing status, please visit{" "}
              <a
                href="https://nmlsconsumeraccess.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NMLS Consumer Access
              </a>
              .
            </p>

            <h2>Equal Housing Opportunity</h2>
            <p>
              Kinsfolk Mortgage LLC is an equal housing lender. We are committed to making
              housing available to all qualified applicants without regard to race, color,
              national origin, religion, sex, familial status, or handicap.
            </p>

            <h2>Informational Purposes</h2>
            <p>
              The content on this website is for informational purposes only and is not a
              commitment to lend. All loan products are subject to credit and property approval.
              Rates, terms, and conditions are subject to change without notice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
