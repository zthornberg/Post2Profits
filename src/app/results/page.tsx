import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "See the real, verified results our Meta advertising systems deliver for home service businesses and B2B companies.",
};

const CASE_STUDIES = [
  {
    slug: "b2b-saas-company",
    title: "A B2B SaaS Company",
    industry: "B2B SaaS",
    metric: "8x ROAS",
    description:
      "Transformed a struggling ad account into a predictable pipeline machine by building a custom Meta advertising system designed for a 45-day sales cycle.",
    results: [
      { label: "ROAS", value: "8x" },
      { label: "Qualified Leads", value: "+300%" },
      { label: "Cost Per Lead", value: "-42%" },
    ],
  },
  {
    slug: "regional-home-services",
    title: "A Regional Home Services Firm",
    industry: "Home Services",
    metric: "4.2x ROAS",
    description:
      "Broke free from lead aggregator dependency by building a direct-to-consumer Meta advertising system that delivered exclusive, high-intent leads at scale.",
    results: [
      { label: "ROAS", value: "4.2x" },
      { label: "Monthly Leads", value: "350+" },
      { label: "Lead Cost", value: "-55%" },
    ],
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Proof of Performance
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
            Results That Speak for Themselves
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Real results from real partnerships. Every number is verified, every
            outcome is measurable.
          </p>
        </div>
      </section>

      {/* Aggregate metrics */}
      <Section className="bg-bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-border">
          <div className="text-center p-8">
            <p className="font-heading text-4xl sm:text-5xl text-accent-blue">
              $10M+
            </p>
            <p className="text-text-secondary text-sm mt-2 uppercase tracking-wider">
              Client Revenue Generated
            </p>
          </div>
          <div className="text-center p-8">
            <p className="font-heading text-4xl sm:text-5xl text-accent-gold">
              4,500+
            </p>
            <p className="text-text-secondary text-sm mt-2 uppercase tracking-wider">
              High-Ticket Leads Delivered
            </p>
          </div>
          <div className="text-center p-8">
            <p className="font-heading text-4xl sm:text-5xl text-accent-blue">
              35%
            </p>
            <p className="text-text-secondary text-sm mt-2 uppercase tracking-wider">
              Average CPA Reduction
            </p>
          </div>
        </div>
      </Section>

      {/* Case study cards */}
      <Section>
        <SectionHeading
          eyebrow="Case Studies"
          title="Partner Success Stories"
          description="Anonymized case studies from our client partnerships. Full case studies with named clients available upon request."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              className="rounded-2xl bg-bg-secondary border border-border overflow-hidden hover:border-accent-blue/30 transition-colors"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="text-accent-gold font-heading text-lg">
                    {study.metric}
                  </span>
                </div>

                <h3 className="font-heading text-xl text-text-primary mb-3">
                  {study.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {study.description}
                </p>

                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-bg border border-border">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <p className="font-heading text-xl text-accent-blue">
                        {result.value}
                      </p>
                      <p className="text-text-muted text-xs mt-1">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-6">
            Want Results Like These?
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            Apply to become a Post2Profits partner and see how our system can
            transform your marketing.
          </p>
          <Button href="/apply" size="lg">
            Apply to Partner
          </Button>
        </div>
      </section>
    </>
  );
}
