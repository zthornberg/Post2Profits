import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Post2Profits terms of service for website usage.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 lg:pt-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-8">
          Terms of Service
        </h1>
        <p className="text-text-muted text-sm mb-12">
          Last updated: February 10, 2026
        </p>

        <div className="space-y-8 text-text-secondary leading-relaxed">
          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Post2Profits website, you accept and
              agree to be bound by the terms and provisions of this agreement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              2. Services
            </h2>
            <p>
              Post2Profits provides marketing consulting and Meta advertising
              system development services. The website serves as an informational
              and lead generation tool. Specific service agreements are
              established separately through our partnership application process.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos,
              images, and software, is the property of Post2Profits and protected
              by applicable intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              4. Disclaimer
            </h2>
            <p>
              Results referenced on this website are based on specific client
              engagements and are not guaranteed for every client. Marketing
              results vary based on many factors including industry, budget,
              market conditions, and execution.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              Post2Profits shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of or inability to use the website or services.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              6. Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
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
