import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";

export default function FeaturedCaseStudy() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Case Study"
        title="From Unpredictable to Unstoppable"
      />

      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-bg-secondary border border-border overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider">
                B2B SaaS
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl text-text-primary mb-4">
              A B2B SaaS Company Scaled to 8x ROAS in 90 Days
            </h3>

            <p className="text-text-secondary leading-relaxed mb-8">
              A mid-market SaaS company was struggling with inconsistent lead
              quality and rising acquisition costs. Their previous agency treated
              them like an e-commerce brand. We built a custom Meta advertising
              system designed for their 45-day sales cycle, resulting in a
              complete transformation of their pipeline.
            </p>

            {/* Key metric */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 rounded-xl bg-bg border border-border">
              <div className="text-center">
                <p className="font-heading text-2xl sm:text-3xl text-accent-blue">
                  8x
                </p>
                <p className="text-text-muted text-sm mt-1">ROAS</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl sm:text-3xl text-accent-gold">
                  +300%
                </p>
                <p className="text-text-muted text-sm mt-1">Qualified Leads</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl sm:text-3xl text-accent-blue">
                  -42%
                </p>
                <p className="text-text-muted text-sm mt-1">Cost Per Lead</p>
              </div>
            </div>

            <blockquote className="border-l-2 border-accent-gold pl-6 mb-8">
              <p className="text-text-primary italic leading-relaxed">
                &ldquo;Post2Profits didn&rsquo;t just run our ads — they built
                us a system that actually understands our sales cycle. The
                results speak for themselves.&rdquo;
              </p>
              <cite className="block mt-3 text-text-muted text-sm not-italic">
                — VP of Marketing, B2B SaaS Company
              </cite>
            </blockquote>

            <Button href="/results">View All Results</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
