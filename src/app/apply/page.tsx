import type { Metadata } from "next";
import ApplicationForm from "@/components/apply/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply to Partner",
  description:
    "Apply to become a Post2Profits partner. We work with select businesses ready to scale with Meta advertising systems.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Partner Application
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-text-primary leading-tight mb-6">
            Apply to Partner With Post2Profits
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            We work with a select number of businesses at any given time to
            ensure every partner gets the attention they deserve. Complete this
            short application to see if we&rsquo;re the right fit.
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
