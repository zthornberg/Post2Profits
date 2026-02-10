import type { Metadata } from "next";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About Zack Zitting",
  description:
    "Meet Zack Zitting, founder of Post2Profits and architect of high-ticket Meta advertising systems for scaling businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary to-bg" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="relative aspect-[3/4] rounded-2xl bg-bg-secondary border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-4xl text-accent-blue">
                      ZZ
                    </span>
                  </div>
                  <p className="text-text-muted text-sm">Photo coming soon</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-4">
                Founder & Architect
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-6">
                Zack Zitting
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                The architect behind Post2Profits and some of the most effective
                Meta advertising systems in the high-ticket space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">
                The Origin Story
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Like most marketing journeys, mine didn&rsquo;t start with a
                master plan. It started with frustration. I watched talented
                business owners — people building incredible companies — get
                crushed by agencies that treated them like another number on a
                spreadsheet.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Cookie-cutter campaigns. Black-box reporting. Month-to-month
                retainers that locked them in while delivering diminishing
                returns. I knew there had to be a better way.
              </p>
            </div>

            <blockquote className="border-l-2 border-accent-gold pl-6 py-2">
              <p className="text-text-primary text-lg italic leading-relaxed">
                &ldquo;I don&rsquo;t build campaigns that expire. I build
                systems that compound.&rdquo;
              </p>
            </blockquote>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">
                The Philosophy
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Post2Profits was founded on a simple but radical idea in the
                agency world: <strong className="text-text-primary">transparency</strong>. I believe that
                if you can&rsquo;t explain to a client exactly what you&rsquo;re
                doing and why, you probably shouldn&rsquo;t be doing it.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Every system we build is designed to be understood by the
                business owner. We don&rsquo;t hold you hostage with complexity.
                We empower you with clarity. And we build marketing assets that
                appreciate over time — not campaigns that need constant
                life support.
              </p>
              <p className="text-text-secondary leading-relaxed">
                This education-first, system-based approach is why our clients
                stay. Not because they&rsquo;re locked in — because
                they&rsquo;re getting results they can see, measure, and
                understand.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-text-primary mb-4">
                What Makes Post2Profits Different
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Transparency Over Tactics",
                    description:
                      "Full visibility into every dollar spent, every lead generated, and every decision made.",
                  },
                  {
                    title: "Systems Over Campaigns",
                    description:
                      "We build appreciating marketing assets, not expiring ad campaigns.",
                  },
                  {
                    title: "AI-Enhanced Execution",
                    description:
                      "Leveraging machine learning for targeting, bidding, and optimization that compounds over time.",
                  },
                  {
                    title: "Education-First Partnership",
                    description:
                      "You'll understand your marketing system as well as we do. That's the point.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl bg-bg-secondary border border-border"
                  >
                    <h3 className="text-text-primary font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-6">
            Let&rsquo;s Build Your System
          </h2>
          <p className="text-text-secondary text-lg mb-10">
            Ready to work with someone who believes in transparency, data, and
            systems that compound? Let&rsquo;s talk.
          </p>
          <Button href="/apply" size="lg">
            Apply to Partner
          </Button>
        </div>
      </section>
    </>
  );
}
