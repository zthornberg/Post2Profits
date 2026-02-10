import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Post2Profits privacy policy — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-8">
          Privacy Policy
        </h1>
        <p className="text-text-muted text-sm mb-12">
          Last updated: February 10, 2026
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us, including when you
              fill out our partner application form (name, email, phone number,
              business information) or download our lead magnet resources.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              2. Tracking & Analytics
            </h2>
            <p className="mb-3">We use the following services to understand how visitors interact with our website:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-text-primary">Plausible Analytics</strong> — A privacy-focused analytics tool for traffic and behavior tracking. Plausible does not use cookies.
              </li>
              <li>
                <strong className="text-text-primary">Meta Pixel & Conversions API</strong> — Used for retargeting and conversion tracking for Meta (Facebook/Instagram) advertising.
              </li>
              <li>
                <strong className="text-text-primary">Google Tag Manager</strong> — A tag management system used to manage and deploy the tracking scripts listed above.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              Information collected through our application form is processed by
              GoHighLevel (our CRM platform) and used to evaluate partnership
              inquiries, schedule discovery calls, and communicate with you about
              our services.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              4. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We share data only with
              service providers necessary to operate our business (GoHighLevel for
              CRM, Calendly for scheduling, Vercel for hosting).
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              5. Your Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by contacting us at{" "}
              <a
                href="mailto:zack@post2profits.com"
                className="text-accent-blue hover:underline"
              >
                zack@post2profits.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              6. Contact
            </h2>
            <p>
              For questions about this privacy policy, contact us at{" "}
              <a
                href="mailto:zack@post2profits.com"
                className="text-accent-blue hover:underline"
              >
                zack@post2profits.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
