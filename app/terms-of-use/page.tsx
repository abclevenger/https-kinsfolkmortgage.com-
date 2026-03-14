import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use – Kinsfolk Mortgage LLC",
  description: "Terms of Use for Kinsfolk Mortgage LLC.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Use</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-muted [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-accent [&_a]:underline">
            <h2>1. Use of Website</h2>
            <p>
              You must be at least 18 years of age to use this website. This website may only be
              used for lawful purposes. You agree to use this website in compliance with all
              applicable laws and regulations.
            </p>

            <h2>2. No Guarantee of Loan Approval</h2>
            <p>
              Submitting information through this website does not guarantee loan approval. All
              loan applications are subject to our standard underwriting and approval process.
            </p>

            <h2>3. Changes to Rates, Terms, and Products</h2>
            <p>
              Our rates, terms, and products are subject to change without notice. The information
              displayed on this website may not reflect current availability.
            </p>

            <h2>4. Equal Housing Opportunity</h2>
            <p>
              Kinsfolk Mortgage LLC is an equal housing lender. We do not discriminate on the
              basis of race, color, national origin, religion, sex, familial status, or handicap
              in accordance with applicable law.
            </p>

            <h2>5. Privacy Policy</h2>
            <p>
              Your use of this website is governed by our{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link>, which describes how we
              collect, use, and protect your information.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos,
              images, and software, is the property of Kinsfolk Mortgage LLC and is protected by
              applicable intellectual property laws.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              Kinsfolk Mortgage LLC shall not be liable for any direct, indirect, incidental,
              special, consequential, or punitive damages arising from your use of or inability to
              use this website.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. We are not responsible for
              the content, accuracy, or practices of third-party sites. Your use of third-party
              links is at your own risk.
            </p>

            <h2>9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Your continued use
              of the website after any changes constitutes acceptance of the modified terms.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws
              of the State of Florida.
            </p>

            <h2>11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at{" "}
              <a href="mailto:info@kinsfolkmortgage.com">info@kinsfolkmortgage.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
