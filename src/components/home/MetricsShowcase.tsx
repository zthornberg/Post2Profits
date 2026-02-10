"use client";

import { useCountUp } from "@/lib/useGsapScrollTrigger";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

interface MetricCardProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function MetricCard({ value, prefix = "", suffix = "", label }: MetricCardProps) {
  const ref = useCountUp(value, prefix, suffix);

  return (
    <div className="text-center p-8">
      <span
        ref={ref}
        className="font-heading text-4xl sm:text-5xl lg:text-6xl text-accent-blue"
      >
        {prefix}0{suffix}
      </span>
      <p className="mt-3 text-text-secondary text-sm sm:text-base font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
}

export default function MetricsShowcase() {
  return (
    <Section className="bg-bg-secondary">
      <SectionHeading
        eyebrow="Proven Results"
        title="Numbers Don't Lie"
        description="Verified, aggregated results from our client partnerships."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-border">
        <MetricCard
          value={10}
          prefix="$"
          suffix="M+"
          label="Client Revenue Generated"
        />
        <MetricCard
          value={4500}
          suffix="+"
          label="High-Ticket Leads Delivered"
        />
        <MetricCard value={35} suffix="%" label="Average CPA Reduction" />
      </div>
    </Section>
  );
}
