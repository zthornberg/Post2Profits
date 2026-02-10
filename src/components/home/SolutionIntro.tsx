import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export default function SolutionIntro() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-3">
          The Solution
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
          A System That <span className="text-accent-gold">Compounds</span>,
          Not a Campaign That Expires
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-4">
          The Post2Profits System is a proprietary, AI-enhanced Meta advertising
          methodology that transforms your ad spend from an unpredictable cost
          into a scalable, appreciating asset.
        </p>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          We don&rsquo;t just run ads. We build you a transparent system you
          understand, can measure, and own — engineered to compound results
          month over month.
        </p>
        <Button href="/system">Discover The 4-Phase System</Button>
      </div>
    </Section>
  );
}
