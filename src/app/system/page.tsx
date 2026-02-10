import type { Metadata } from "next";
import SystemPhases from "@/components/system/SystemPhases";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "The Post2Profits System",
  description:
    "Discover our proprietary 4-phase Meta advertising methodology that transforms ad spend into a scalable, appreciating asset.",
};

export default function SystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Our Methodology
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
            The Post2Profits System
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            A proven 4-phase methodology that transforms your Meta advertising
            from an unpredictable expense into a compounding growth engine.
          </p>
        </div>
      </section>

      <SystemPhases />

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-6">
            Ready to Deploy the System?
          </h2>
          <p className="text-text-secondary text-lg mb-10 leading-relaxed">
            Apply to become a Post2Profits partner and get a custom
            implementation of our 4-phase system built for your business.
          </p>
          <Button href="/apply" size="lg">
            Apply to Partner
          </Button>
        </div>
      </section>
    </>
  );
}
