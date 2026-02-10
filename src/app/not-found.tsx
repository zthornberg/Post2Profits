import Button from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 text-center">
        <p className="font-heading text-8xl sm:text-9xl text-accent-blue/20 mb-4">
          404
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl text-text-primary mb-4">
          Looks Like This Funnel Needs Fixing
        </h1>
        <p className="text-text-secondary mb-10 leading-relaxed">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved. Let&rsquo;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/apply" variant="ghost">
            Apply to Partner
          </Button>
        </div>
      </div>
    </section>
  );
}
