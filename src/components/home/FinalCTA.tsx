import Button from "@/components/shared/Button";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-secondary to-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent-blue)_0%,_transparent_70%)] opacity-5" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
          Ready to Build a Marketing System That{" "}
          <span className="text-accent-blue">Compounds?</span>
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          We work with a limited number of partners to ensure every system we
          build gets the attention it deserves. Apply now to see if we&rsquo;re
          the right fit.
        </p>
        <Button href="/apply" size="lg">
          Apply to Partner
        </Button>
      </div>
    </section>
  );
}
