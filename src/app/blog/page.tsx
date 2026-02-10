import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on Meta advertising, marketing strategy, and scaling your business with proven systems.",
};

// Placeholder seed posts — will be replaced by Sanity.io data
const SEED_POSTS = [
  {
    slug: "why-most-agencies-fail-their-clients",
    title: "Why Most Agencies Fail Their Clients",
    excerpt:
      "The agency model is broken. Here's why most agencies deliver diminishing returns and how a systems-based approach changes everything.",
    category: "Industry Insights",
    date: "2026-02-10",
  },
  {
    slug: "meta-ads-playbook-home-services",
    title: "The Meta Ads Playbook for Home Service Businesses",
    excerpt:
      "Stop renting leads from aggregators. Learn the framework for building a direct-to-consumer advertising system on Meta platforms.",
    category: "Home Services",
    date: "2026-02-08",
  },
  {
    slug: "b2b-lead-generation-systems-vs-campaigns",
    title: "B2B Lead Generation: Systems vs. Campaigns",
    excerpt:
      "Why the best B2B companies are shifting from campaign-based thinking to systems-based marketing — and how to make the transition.",
    category: "B2B Strategy",
    date: "2026-02-05",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-blue text-sm font-semibold uppercase tracking-widest mb-4">
            Blog
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
            Insights & Strategy
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Practical insights on Meta advertising, marketing systems, and
            scaling your business.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SEED_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl bg-bg-secondary border border-border overflow-hidden hover:border-accent-blue/30 transition-colors"
              >
                {/* Placeholder image */}
                <div className="aspect-[16/9] bg-bg-tertiary flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>

                  <h2 className="font-heading text-lg text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
