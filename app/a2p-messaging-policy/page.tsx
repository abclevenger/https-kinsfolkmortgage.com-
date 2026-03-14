import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A2P Messaging Policy",
  description:
    "Application-to-Person (A2P) messaging policy for Kinsfolk Mortgage LLC. Learn about our SMS and text messaging practices, consent, opt-out, and data privacy.",
};

export default function A2PMessagingPolicyPage() {
  return (
    <>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            A2P Messaging Policy
          </h1>
          <p className="text-white/70 text-lg">Last updated: March 13, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none [&_h2]:text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-text-muted [&_ul]:mb-4 [&_ol]:text-text-muted [&_ol]:mb-4 [&_li]:mb-1 [&_a]:text-accent [&_a]:underline">
            <p>
              This Application-to-Person (A2P) Messaging Policy describes how Kinsfolk Mortgage LLC
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses SMS and text messaging
              to communicate with you. By opting in to receive text messages from us, you agree to the
              terms outlined in this policy.
            </p>

            <h2>1. Message Sender</h2>
            <p>
              Text messages are sent by or on behalf of Kinsfolk Mortgage LLC, located at
              1936 Bruce B Downs Blvd, Suite 442, Wesley Chapel, FL 33543. Company NMLS# 2610890.
            </p>

            <h2>2. Consent and Opt-In</h2>
            <p>
              By providing your mobile phone number and submitting a form on our website, checking a
              consent box, or otherwise opting in, you expressly consent to receive text messages from
              Kinsfolk Mortgage LLC. Consent is not a condition of purchase or service. You may opt in
              to receive messages through:
            </p>
            <ul>
              <li>Completing a lead form or mortgage questionnaire on our website</li>
              <li>Requesting a quote, pre-qualification, or callback</li>
              <li>Providing your phone number during a consultation</li>
              <li>Texting a keyword to our designated short code or phone number</li>
            </ul>

            <h2>3. Types of Messages</h2>
            <p>
              You may receive text messages related to:
            </p>
            <ul>
              <li>Mortgage application status updates</li>
              <li>Appointment reminders and confirmations</li>
              <li>Follow-up communications related to your inquiry</li>
              <li>Rate alerts and loan program information</li>
              <li>Document requests and processing updates</li>
              <li>General customer service communications</li>
            </ul>

            <h2>4. Message Frequency</h2>
            <p>
              Message frequency varies based on your interaction with our services. You may receive
              recurring messages. Typically, you can expect to receive between 1 and 10 messages per
              month depending on the status of your inquiry or application. During active loan
              processing, frequency may be higher.
            </p>

            <h2>5. Opt-Out Instructions</h2>
            <p>
              You may opt out of receiving text messages at any time by:
            </p>
            <ul>
              <li>Replying <strong>STOP</strong> to any text message you receive from us</li>
              <li>Contacting us at <a href="tel:8136380862">(813) 638-0862</a></li>
              <li>Emailing us at{" "}
                <a href="mailto:info@kinsfolkmortgage.com">info@kinsfolkmortgage.com</a> with the
                subject line &ldquo;Opt Out SMS&rdquo;
              </li>
            </ul>
            <p>
              After opting out, you will receive a one-time confirmation message. No further messages
              will be sent unless you re-enroll. Opting out of text messages does not affect your
              mortgage application or service.
            </p>

            <h2>6. Help and Support</h2>
            <p>
              For assistance with our messaging program, you may:
            </p>
            <ul>
              <li>Reply <strong>HELP</strong> to any text message for instructions</li>
              <li>Call us at <a href="tel:8136380862">(813) 638-0862</a></li>
              <li>Email us at{" "}
                <a href="mailto:info@kinsfolkmortgage.com">info@kinsfolkmortgage.com</a>
              </li>
            </ul>

            <h2>7. Message and Data Rates</h2>
            <p>
              Standard message and data rates may apply depending on your mobile carrier and plan.
              Kinsfolk Mortgage LLC is not responsible for any charges incurred from your wireless
              provider. Please contact your carrier for pricing details.
            </p>

            <h2>8. Supported Carriers</h2>
            <p>
              Our messaging program is supported by all major U.S. mobile carriers including but not
              limited to AT&amp;T, Verizon, T-Mobile, Sprint, U.S. Cellular, and their affiliates.
              Carriers are not liable for delayed or undelivered messages.
            </p>

            <h2>9. Privacy and Data Protection</h2>
            <p>
              We take your privacy seriously. The information you provide, including your phone number,
              is used solely for the purposes described in this policy and our{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link>. We do not sell, rent, or share your
              phone number or messaging data with third parties for marketing purposes.
            </p>
            <p>Your information may be shared with:</p>
            <ul>
              <li>Our messaging service providers for the sole purpose of delivering messages</li>
              <li>Regulatory authorities as required by law</li>
            </ul>

            <h2>10. No Sensitive Information</h2>
            <p>
              We will never request sensitive personal information via text message, including Social
              Security numbers, bank account details, passwords, or full credit card numbers. If you
              receive a text claiming to be from us requesting this type of information, do not respond
              and contact us immediately.
            </p>

            <h2>11. Age Requirement</h2>
            <p>
              Our messaging program is intended for individuals aged 18 and older. By opting in, you
              confirm that you are at least 18 years of age.
            </p>

            <h2>12. Changes to This Policy</h2>
            <p>
              We reserve the right to update or modify this A2P Messaging Policy at any time. Changes
              will be posted on this page with an updated effective date. Continued participation in our
              messaging program after changes are posted constitutes your acceptance of the updated
              policy.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have questions about this A2P Messaging Policy, contact us at:
            </p>
            <p>
              <strong>Kinsfolk Mortgage LLC</strong><br />
              1936 Bruce B Downs Blvd, Suite 442<br />
              Wesley Chapel, FL 33543<br />
              Phone: <a href="tel:8136380862">(813) 638-0862</a><br />
              Email: <a href="mailto:info@kinsfolkmortgage.com">info@kinsfolkmortgage.com</a><br />
              NMLS# 2610890
            </p>

            <h2>Related Policies</h2>
            <ul>
              <li><Link href="/privacy-policy/">Privacy Policy</Link></li>
              <li><Link href="/communications-policy/">Communications Policy</Link></li>
              <li><Link href="/terms-of-use/">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
