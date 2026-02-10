import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";

// Placeholder blog post — will be replaced with Sanity.io data
const PLACEHOLDER_POST = {
  title: "Blog Post",
  category: "Strategy",
  date: "2026-02-10",
  author: "Zack Zitting",
  content: `
    <p>This is a placeholder blog post. Once Sanity.io is connected, blog posts will be dynamically loaded from the CMS.</p>
    <h2>What You'll Learn</h2>
    <p>Each blog post will be rendered from Sanity.io's Portable Text format, supporting rich content including headings, lists, images, code blocks, and embedded media.</p>
    <h2>Content Strategy</h2>
    <p>The Post2Profits blog serves as a content marketing engine for SEO and authority, providing practical insights on Meta advertising, marketing systems, and business scaling strategies.</p>
  `,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    description: "Read this article on the Post2Profits blog.",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <>
      <article className="pt-32 pb-16 lg:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-text-muted">
              <li>
                <Link href="/blog" className="hover:text-accent-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-secondary truncate">{title}</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase">
              {PLACEHOLDER_POST.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight mt-4 mb-4">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-text-muted text-sm">
              <span>{PLACEHOLDER_POST.author}</span>
              <span>&middot;</span>
              <time>
                {new Date(PLACEHOLDER_POST.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </header>

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-text-primary
              prose-p:text-text-secondary prose-p:leading-relaxed
              prose-a:text-accent-blue prose-a:no-underline hover:prose-a:underline
              prose-strong:text-text-primary
              prose-blockquote:border-accent-gold prose-blockquote:text-text-secondary"
            dangerouslySetInnerHTML={{ __html: PLACEHOLDER_POST.content }}
          />
        </div>
      </article>

      {/* End-of-post CTA */}
      <Section className="bg-bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl sm:text-3xl text-text-primary mb-4">
            Ready to Stop Guessing and Start Scaling?
          </h2>
          <p className="text-text-secondary mb-8">
            Apply to partner with Post2Profits and get a Meta advertising system
            built specifically for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/apply">Apply to Partner</Button>
            <Button href="/system" variant="ghost">
              Learn About The System
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
