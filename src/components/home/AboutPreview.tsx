import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

export default function AboutPreview() {
  return (
    <Section>
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative aspect-[4/5] rounded-2xl bg-bg-secondary border border-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-3xl text-accent-blue">
                    ZZ
                  </span>
                </div>
                <p className="text-text-muted text-sm">Photo coming soon</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-3">
              Meet the Architect
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-text-primary mb-6">
              Zack Zitting
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Zack Zitting is the founder of Post2Profits and the architect
              behind some of the most effective Meta advertising systems in the
              high-ticket space. With a philosophy rooted in transparency,
              education, and relentless optimization, Zack builds marketing
              systems that compound — not campaigns that expire.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              His approach is simple: give business owners a system they
              understand, can measure, and will appreciate in value. No
              black-box tactics. No hostage retainers. Just results.
            </p>
            <Button href="/about" variant="ghost">
              Read Full Story
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
