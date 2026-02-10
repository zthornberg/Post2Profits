"use client";

import { useState } from "react";
import { INDUSTRIES, REVENUE_RANGES, AD_SPEND_RANGES } from "@/lib/constants";

type Step = 1 | 2 | 3;

interface FormData {
  businessName: string;
  industry: string;
  revenueRange: string;
  adSpend: string;
  challenge: string;
  previousAgency: string;
  fullName: string;
  email: string;
  phone: string;
}

export default function ApplicationForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    industry: "",
    revenueRange: "",
    adSpend: "",
    challenge: "",
    previousAgency: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const webhookUrl = process.env.NEXT_PUBLIC_GHL_APPLICATION_WEBHOOK;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            source: "website_application",
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch {
        // Silently fail — redirect to Calendly regardless
      }
    }

    // Redirect to Calendly
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
    if (calendlyUrl) {
      window.location.href = calendlyUrl;
    } else {
      // Fallback: show success
      setStep(1);
      setSubmitting(false);
      alert("Application submitted! We'll be in touch soon.");
    }
  };

  const canProceedStep1 =
    formData.businessName && formData.industry && formData.revenueRange;
  const canProceedStep2 =
    formData.adSpend && formData.challenge && formData.previousAgency;

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center gap-2 mb-10" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={3}>
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div
              className={`flex-1 h-1.5 rounded-full transition-colors ${
                s <= step ? "bg-accent-blue" : "bg-border"
              }`}
            />
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Your Business */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-1">
                Step 1 of 3
              </p>
              <h2 className="font-heading text-2xl text-text-primary">
                Your Business
              </h2>
            </div>

            <div>
              <label
                htmlFor="businessName"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Business Name
              </label>
              <input
                id="businessName"
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => updateField("businessName", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Industry
              </label>
              <select
                id="industry"
                required
                value={formData.industry}
                onChange={(e) => updateField("industry", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
              >
                <option value="">Select your industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="revenueRange"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Monthly Revenue Range
              </label>
              <select
                id="revenueRange"
                required
                value={formData.revenueRange}
                onChange={(e) => updateField("revenueRange", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
              >
                <option value="">Select revenue range</option>
                {REVENUE_RANGES.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              disabled={!canProceedStep1}
              className="w-full bg-accent-blue hover:bg-accent-blue-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Your Marketing */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-1">
                Step 2 of 3
              </p>
              <h2 className="font-heading text-2xl text-text-primary">
                Your Marketing
              </h2>
            </div>

            <div>
              <label
                htmlFor="adSpend"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Current Monthly Ad Spend
              </label>
              <select
                id="adSpend"
                required
                value={formData.adSpend}
                onChange={(e) => updateField("adSpend", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
              >
                <option value="">Select ad spend range</option>
                {AD_SPEND_RANGES.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="challenge"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Biggest Marketing Challenge
              </label>
              <textarea
                id="challenge"
                required
                rows={3}
                value={formData.challenge}
                onChange={(e) => updateField("challenge", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors resize-none"
                placeholder="Describe your biggest marketing challenge in 2-3 sentences..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Have you worked with a marketing agency before?
              </label>
              <div className="flex gap-4">
                {["Yes", "No"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => updateField("previousAgency", option)}
                    className={`flex-1 py-3 rounded-lg border font-medium transition-colors ${
                      formData.previousAgency === option
                        ? "border-accent-blue bg-accent-blue/10 text-accent-blue"
                        : "border-border text-text-secondary hover:border-text-muted"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-3 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors font-medium"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!canProceedStep2}
                className="flex-1 bg-accent-blue hover:bg-accent-blue-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Your Contact */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="mb-8">
              <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-1">
                Step 3 of 3
              </p>
              <h2 className="font-heading text-2xl text-text-primary">
                Your Contact Information
              </h2>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="you@company.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-text-primary mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-bg-secondary border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 py-3 rounded-lg border border-border text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors font-medium"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-accent-blue hover:bg-accent-blue-hover disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>

            <p className="text-text-muted text-xs text-center">
              By submitting, you agree to our{" "}
              <a
                href="/privacy"
                className="text-accent-blue hover:underline"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms"
                className="text-accent-blue hover:underline"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
