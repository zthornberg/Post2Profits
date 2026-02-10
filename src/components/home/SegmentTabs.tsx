"use client";

import { useState } from "react";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

const SEGMENTS = {
  homeServices: {
    label: "Home Services",
    headline: "Stop Renting Leads. Own Your Customer Acquisition.",
    painPoints: [
      "Paying premium prices for shared leads from Home Advisor and Angie's List",
      "Unpredictable lead quality that wastes your team's time",
      "Zero control over your pipeline — you're at the mercy of lead aggregators",
      "Competitors getting the same leads at the same time",
    ],
    solution:
      "Post2Profits builds you a proprietary Meta advertising system that delivers exclusive, high-intent leads directly to your business — no middleman, no shared leads, just qualified homeowners ready to buy.",
  },
  b2b: {
    label: "B2B & High-Ticket",
    headline: "Your Agency Doesn't Understand Your Sales Cycle.",
    painPoints: [
      "Agencies that treat your complex B2B sale like an e-commerce checkout",
      "Wasted ad spend on leads that will never convert at your price point",
      "Inability to scale predictably without blowing your CAC",
      "Black-box reporting that hides what's actually working",
    ],
    solution:
      "Post2Profits builds transparent, AI-enhanced Meta advertising systems designed specifically for high-ticket sales cycles. We give you full visibility, predictable pipeline, and a system that compounds over time.",
  },
} as const;

type SegmentKey = keyof typeof SEGMENTS;

export default function SegmentTabs() {
  const [activeTab, setActiveTab] = useState<SegmentKey>("homeServices");
  const segment = SEGMENTS[activeTab];

  return (
    <Section className="bg-bg">
      <SectionHeading
        eyebrow="The Problem"
        title="Sound Familiar?"
        description="Select your business type to see the challenges we solve."
      />

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-bg-secondary rounded-lg p-1">
          {(Object.keys(SEGMENTS) as SegmentKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${
                activeTab === key
                  ? "bg-accent-blue text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
              role="tab"
              aria-selected={activeTab === key}
            >
              {SEGMENTS[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto" role="tabpanel">
        <h3 className="font-heading text-2xl sm:text-3xl text-text-primary mb-8 text-center">
          {segment.headline}
        </h3>

        <div className="grid gap-4 mb-10">
          {segment.painPoints.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-lg bg-bg-secondary border border-border"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                <svg
                  className="w-4 h-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-text-secondary">{point}</p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-accent-blue/5 border border-accent-blue/20">
          <p className="text-text-primary leading-relaxed">{segment.solution}</p>
        </div>
      </div>
    </Section>
  );
}
