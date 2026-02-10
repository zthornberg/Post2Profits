"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PHASES = [
  {
    number: "01",
    title: "Deep Dive & Offer Architecture",
    subtitle: "Foundation",
    description:
      "We start by understanding your business at a cellular level. Your market, your customers, your unique value proposition. Then we architect an offer and funnel strategy specifically designed for Meta platforms — not a template, but a custom system built on proven frameworks.",
    details: [
      "Comprehensive business & market analysis",
      "Customer avatar deep-dive and segmentation",
      "Offer positioning and value ladder design",
      "Funnel architecture and conversion mapping",
    ],
    color: "accent-blue",
  },
  {
    number: "02",
    title: "The Creative & Content Engine",
    subtitle: "Production",
    description:
      "High-converting Meta ads require scroll-stopping creative. We build a creative engine that systematically produces and tests ad variations across formats — static, video, carousel — all calibrated to your audience segments and sales cycle.",
    details: [
      "Ad creative strategy and production framework",
      "Hook, story, and offer copywriting systems",
      "Multi-format creative testing (static, video, carousel)",
      "Audience-specific messaging and creative mapping",
    ],
    color: "accent-gold",
  },
  {
    number: "03",
    title: "AI-Powered Ad Deployment & Targeting",
    subtitle: "Launch",
    description:
      "We deploy your campaigns using AI-enhanced targeting and bidding strategies that go beyond standard Meta targeting. Our systems leverage machine learning to find and convert your ideal customers at scale while maintaining tight cost controls.",
    details: [
      "AI-optimized audience targeting and lookalikes",
      "Smart bidding and budget allocation algorithms",
      "Retargeting and full-funnel campaign structure",
      "Cross-platform tracking and attribution setup",
    ],
    color: "accent-blue",
  },
  {
    number: "04",
    title: "Systematic Optimization & Scale",
    subtitle: "Compound",
    description:
      "This is where the system compounds. We continuously test, learn, and optimize every variable — creative, audience, bidding, landing pages — using data-driven decision-making. The result is a marketing system that gets stronger and more efficient every month.",
    details: [
      "Continuous A/B and multivariate testing",
      "Weekly optimization cycles with transparent reporting",
      "Scaling playbooks: vertical, horizontal, and diagonal",
      "Performance compounding through systematic iteration",
    ],
    color: "accent-gold",
  },
];

export default function SystemPhases() {
  const [activePhase, setActivePhase] = useState(0);
  const phasesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll(".phase-section");
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActivePhase(i),
        onEnterBack: () => setActivePhase(i),
      });

      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Sticky phase indicator (desktop) */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col gap-3">
          {PHASES.map((phase, i) => (
            <button
              key={i}
              onClick={() => {
                document
                  .getElementById(`phase-${i}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center gap-3 transition-all duration-300 ${
                activePhase === i
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
              aria-label={`Go to Phase ${phase.number}`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activePhase === i ? `bg-${phase.color} scale-125` : "bg-border"
                }`}
              />
              <span
                className={`text-xs font-medium uppercase tracking-wider transition-colors ${
                  activePhase === i ? "text-text-primary" : "text-text-muted"
                }`}
              >
                Phase {phase.number}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile progress bar */}
      <div className="lg:hidden sticky top-16 z-30 bg-bg/95 backdrop-blur-md border-b border-border">
        <div className="flex">
          {PHASES.map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 transition-colors duration-300 ${
                i <= activePhase ? "bg-accent-blue" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Phase sections */}
      <div ref={phasesRef}>
        {PHASES.map((phase, i) => (
          <section
            key={i}
            id={`phase-${i}`}
            className="phase-section min-h-screen flex items-center py-24"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pl-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-${phase.color} font-heading text-6xl lg:text-8xl opacity-20`}
                    >
                      {phase.number}
                    </span>
                  </div>
                  <p
                    className={`text-${phase.color} text-sm font-semibold uppercase tracking-widest mb-2`}
                  >
                    {phase.subtitle}
                  </p>
                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-text-primary mb-6">
                    {phase.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-8">
                    {phase.description}
                  </p>
                  <ul className="space-y-3">
                    {phase.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 text-${phase.color} flex-shrink-0 mt-0.5`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual placeholder */}
                <div className="relative aspect-square rounded-2xl bg-bg-secondary border border-border overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`w-32 h-32 rounded-full bg-${phase.color}/10 flex items-center justify-center`}
                    >
                      <span
                        className={`font-heading text-5xl text-${phase.color}/30`}
                      >
                        {phase.number}
                      </span>
                    </div>
                  </div>
                  {/* Decorative grid lines */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--color-border)_1px,_transparent_1px),_linear-gradient(to_bottom,_var(--color-border)_1px,_transparent_1px)] bg-[size:40px_40px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
