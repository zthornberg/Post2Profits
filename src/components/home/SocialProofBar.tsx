"use client";

const BADGES = [
  "Meta Business Partner",
  "Google Partner",
  "Certified Funnel Builder",
  "AI-Enhanced Marketing",
  "Data-Driven Strategy",
  "ROI Focused",
];

export default function SocialProofBar() {
  return (
    <section className="py-8 border-y border-border overflow-hidden bg-bg-secondary/50">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap">
        {[...BADGES, ...BADGES].map((badge, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-text-muted text-sm font-medium uppercase tracking-wider shrink-0"
          >
            <div className="w-2 h-2 rounded-full bg-accent-blue/50" />
            {badge}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
