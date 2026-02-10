"use client";

import { useState } from "react";
import Section from "@/components/shared/Section";

export default function LeadMagnet() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to GoHighLevel webhook
    const webhookUrl = process.env.NEXT_PUBLIC_GHL_LEAD_MAGNET_WEBHOOK;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source: "lead_magnet" }),
      });
    }

    setSubmitted(true);
  };

  return (
    <Section className="bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-accent-blue/10 to-accent-gold/5 border border-accent-blue/20 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-accent-gold text-sm font-semibold uppercase tracking-widest mb-3">
                Free Playbook
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-4">
                The 7-Figure Meta Ads Playbook
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Get the exact framework we use to build predictable, scalable
                advertising systems on Meta. This isn&rsquo;t theory — it&rsquo;s
                the playbook behind millions in client revenue.
              </p>
            </div>

            <div>
              {submitted ? (
                <div className="text-center p-8">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-green-400"
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
                  </div>
                  <p className="text-text-primary font-semibold">
                    Check your inbox!
                  </p>
                  <p className="text-text-secondary text-sm mt-1">
                    Your playbook is on its way.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="lead-name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      placeholder="Your name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      placeholder="Your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-bg border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent-gold hover:bg-accent-gold-hover text-bg font-semibold py-3 rounded-lg transition-colors"
                  >
                    Download Free Playbook
                  </button>
                  <p className="text-text-muted text-xs text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
