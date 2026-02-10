"use client";

import { useState } from "react";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

const FAQS = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We specialize in two segments: established home service businesses (HVAC, roofing, plumbing, etc.) looking to own their customer acquisition, and B2B companies / high-ticket service providers ($1M+ ARR) who need a predictable lead generation system on Meta platforms.",
  },
  {
    question: "What is the minimum investment to work with Post2Profits?",
    answer:
      "We work with clients investing a minimum of $5,000/month in ad spend. Our partnerships are designed for businesses serious about scaling, not testing the waters. This ensures we can build a system with enough data to optimize effectively.",
  },
  {
    question: "How is Post2Profits different from other agencies?",
    answer:
      "We don't hold you hostage with retainers and black-box reporting. We build you a transparent, education-first marketing system that you understand and own. Our approach is AI-enhanced, data-driven, and specifically designed for high-ticket sales cycles — not cookie-cutter e-commerce strategies.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most clients see meaningful data within the first 30 days and significant pipeline growth within 60-90 days. However, our system is designed to compound over time — the real magic happens at the 90-180 day mark as the AI optimization and creative testing compound into a predictable growth engine.",
  },
  {
    question: "What does your reporting look like?",
    answer:
      "Full transparency. You get real-time access to every metric that matters — spend, CPL, ROAS, pipeline value, and more. No vanity metrics, no hidden data. We believe if you can't see it, you can't scale it.",
  },
  {
    question: "Do you lock clients into long-term contracts?",
    answer:
      "We don't need to. Our results speak for themselves. We offer flexible engagement terms because we're confident that once you see the system working, you won't want to leave. We build partnerships, not hostage situations.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section>
      <SectionHeading
        eyebrow="FAQ"
        title="Common Questions"
        description="Everything you need to know before applying."
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-bg-secondary overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="text-text-primary font-medium pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5">
                <p className="text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
