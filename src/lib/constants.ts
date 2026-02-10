export const SITE_NAME = "Post2Profits";
export const SITE_DESCRIPTION =
  "We build relentlessly-optimized Meta advertising systems for businesses ready to scale beyond seven figures.";
export const SITE_URL = "https://post2profits.com";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The System", href: "/system" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/zackzitting/",
} as const;

export const METRICS = [
  { value: "10M+", label: "Client Revenue Generated", prefix: "$" },
  { value: "4,500+", label: "High-Ticket Leads Delivered" },
  { value: "35%", label: "Average CPA Reduction" },
] as const;

export const INDUSTRIES = [
  "Home Services",
  "B2B SaaS",
  "Coaching/Consulting",
  "E-commerce",
  "Other",
] as const;

export const REVENUE_RANGES = [
  "Less than $50K/mo",
  "$50K - $100K/mo",
  "$100K - $500K/mo",
  "$500K - $1M/mo",
  "$1M+/mo",
] as const;

export const AD_SPEND_RANGES = [
  "Not currently running ads",
  "Less than $5K/mo",
  "$5K - $15K/mo",
  "$15K - $50K/mo",
  "$50K+/mo",
] as const;
