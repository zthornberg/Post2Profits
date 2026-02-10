import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    title: `${name} Articles`,
    description: `Browse Post2Profits blog articles in the ${name} category.`,
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <section className="pt-32 pb-24 lg:pt-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/blog" className="hover:text-accent-blue transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-text-secondary">{name}</li>
          </ol>
        </nav>

        <h1 className="font-heading text-4xl sm:text-5xl text-text-primary mb-6">
          {name}
        </h1>
        <p className="text-text-secondary text-lg mb-12">
          Browse all articles in the {name} category. Posts will appear here once
          connected to Sanity.io CMS.
        </p>

        <div className="p-8 rounded-2xl bg-bg-secondary border border-border text-center">
          <p className="text-text-muted">
            Blog content coming soon. Connect Sanity.io to populate this page.
          </p>
          <Link
            href="/blog"
            className="text-accent-blue hover:underline text-sm mt-3 inline-block"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
