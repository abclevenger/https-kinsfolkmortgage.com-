import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Communications Policy – Kinsfolk Mortgage LLC",
  description: "Communications Policy for Kinsfolk Mortgage LLC.",
};

export default function CommunicationsPolicyPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Communications Policy
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-muted [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-accent [&_a]:underline">
            <p>
              We may communicate with you in a variety of different ways including by email,
              voicemail, mail, text and SMS messaging, and in person. Some communications occur
              through multiple channels. Such communications are confidential and only intended for
              you or persons authorized to act on your behalf.
            </p>
            <p>
              By using the Service, you acknowledge the following communications-related practices.
              By providing a telephone number and submitting a form on this website you are
              consenting to be contacted by SMS text message (our message frequency may vary).
              Message &amp; data rates apply. Reply STOP to unsubscribe from further messaging.
              Reply HELP for more information.
            </p>
            <p>
              See our <Link href="/privacy-policy/">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
