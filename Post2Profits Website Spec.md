# Post2Profits Website Specification

**Project:** A best-in-class marketing website for Post2Profits

**Author:** Zack Zitting / Manus AI (original draft), refined via stakeholder interview

**Date:** February 10, 2026

**Version:** 3.0

---

## 1. Executive Summary

This document provides a comprehensive technical and design specification for the marketing website for Post2Profits, a marketing agency founded by Zack Zitting. The primary objective is to elevate the brand to a **$100K+ premium appearance**, positioning it alongside industry leaders like Russell Brunson, Alex Hormozi, and Jeremy Haynes [1][2][3]. The website will serve as the primary tool for attracting and converting high-ticket B2B clients and home service businesses by showcasing expertise in building scalable, profitable marketing funnels, with a specific focus on Meta (Facebook and Instagram) advertising.

This specification has been refined through a detailed stakeholder interview covering technical implementation, UX tradeoffs, content strategy, and business requirements. All decisions documented below reflect explicit stakeholder choices.

---

## 2. Core Strategy & Positioning

The core strategy is built on three pillars: **Authority, Exclusivity, and Results**.

| Strategic Pillar | Implementation Tactics |
| :--- | :--- |
| **Authority** | Establish Zack Zitting and Post2Profits as the definitive experts in high-ticket Meta advertising through a strong personal brand, educational content (blog + lead magnet), and sophisticated design. |
| **Exclusivity** | Position Post2Profits as a selective partner, not a commodity service. This will be achieved through an application-only client intake process, minimum investment thresholds communicated via FAQ, and messaging that speaks to a discerning clientele. |
| **Results** | Provide undeniable, metric-driven proof of success. The website will prominently feature verified aggregate metrics, anonymized case studies at launch, and data visualizations that showcase tangible ROI. |

### 2.1. Target Audience

The website serves **two primary audience segments equally** and must resonate with both without feeling generic:

1. **Home Service Businesses:** Established companies (HVAC, roofing, plumbing, etc.) with existing revenue seeking to scale beyond lead aggregator platforms and own their customer acquisition.
2. **B2B Companies & High-Ticket Service Providers:** Businesses with existing revenue streams ($1M+ ARR), consultants, coaches, and agencies selling premium services who need a predictable lead generation system.

> **Implementation Note:** The homepage will feature a tabbed Problem/Agitation section that allows visitors to self-select their segment (Home Services vs. B2B/SaaS) for tailored messaging. See Section 6.1 for details.

### 2.2. Core Message & USP

> **Core Message:** Post2Profits builds predictable, AI-enhanced marketing systems on Meta platforms that turn ad spend into a scalable, appreciating asset.

> **Unique Selling Proposition (USP):** We provide a transparent, education-first partnership that empowers you with a proven marketing system. We don't hold you hostage with retainers; we build you an asset you understand.

---

## 3. Design Language & Visual Identity

The visual identity conveys a premium, dark luxury aesthetic. The site is **dark mode only** — no light mode toggle.

| Design Element | Specification |
| :--- | :--- |
| **Aesthetic** | Sophisticated, modern, authoritative, luxurious, and data-driven. |
| **Theme** | **Dark Mode Only.** A deep charcoal (`#111111`) or near-black background. No light mode toggle — the dark aesthetic is a core brand statement. |
| **Accent Colors** | - **Primary:** An AA-compliant electric blue (`#3399FF` or similar, ≥4.5:1 contrast ratio against `#111111`) for primary CTAs, links, and key data highlights. Original `#007CF0` adjusted to meet WCAG AA requirements. <br>- **Secondary:** A subtle gold/bronze (`#E7AF3E`) for secondary highlights, borders, or icons. |
| **Typography** | - **Headlines:** **Archivo Black** — high-impact, bold sans-serif for authority. <br>- **Body Text:** **Geist** by Vercel — a modern, highly readable sans-serif with native Next.js/Vercel optimization. Self-hosted via `next/font`. |
| **Imagery** | - **Photography:** Sourced from Zack's Instagram content at launch. Professional photoshoot planned for V2. <br>- **Graphics:** Abstract 3D graphics, glowing data visualizations, and minimalist icons. <br>- **Animation:** GSAP for scroll-triggered animations across the site. Three.js for the desktop hero only. |
| **Logo** | A rough logo/wordmark exists and needs to be polished for the website. Required for: navigation, preloader, favicon, OG images. |

---

## 4. Technical Stack

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend Framework** | Next.js 15 (App Router) | SSR for SEO, SSG for fast page loads, React Server Components for performance. |
| **Styling** | Tailwind CSS | Utility-first CSS for rapid, consistent, and maintainable styling. |
| **Animation** | GSAP + Three.js | GSAP for scroll-triggered animations (all pages). Three.js for the 3D hero (desktop only). |
| **CMS** | Sanity.io (blog only) | Headless CMS for blog posts. Core pages (Home, System, Results, About, Apply) are built in code/MDX. |
| **Deployment** | Vercel | Native Next.js integration, continuous deployment, global CDN. |
| **Analytics** | Plausible Analytics | Privacy-focused analytics for traffic/behavior tracking. |
| **Tracking** | Meta Pixel + Conversions API | Retargeting and conversion tracking for Meta advertising. |
| **Tag Management** | Google Tag Manager | Container for Meta Pixel, Plausible, and future tags. Single script, managed via GTM UI. |
| **Form Backend** | GoHighLevel (API/Webhook) | Application form submissions push directly to GHL pipeline. |
| **Scheduling** | Calendly | Post-application redirect to book a discovery call. |
| **Fonts** | `next/font` (self-hosted) | Archivo Black + Geist, self-hosted for performance (no external font requests). |
| **OG Images** | Next.js OG Image Generation (Satori) | Auto-generated Open Graph images per page. Zero maintenance. |

### 4.1. Cookie Consent

**No cookie consent banner at launch.** The site targets US-only clients. Revisit if expanding to EU markets or if US federal privacy law changes require it.

> **Risk Acknowledgment:** Some US states (California CCPA, Virginia VCDPA) have privacy requirements. The Privacy Policy page will disclose tracking practices to maintain compliance.

---

## 5. Website Sitemap

| Route | Page | Content Source |
| :--- | :--- | :--- |
| `/` | Home | Code (MDX) |
| `/system` | The Post2Profits System | Code (MDX) |
| `/results` | Case Studies / Results | Code (MDX) |
| `/about` | About Zack Zitting | Code (MDX) |
| `/apply` | Apply to Partner | Code (form component) |
| `/blog` | Blog Index | Sanity.io |
| `/blog/[slug]` | Individual Blog Post | Sanity.io |
| `/blog/category/[slug]` | Blog Category Archive | Sanity.io |
| `/privacy` | Privacy Policy | Code (MDX) |
| `/terms` | Terms of Service | Code (MDX) |

### 5.1. Navigation Structure

**Behavior:** Transparent overlay on the hero section, transitions to a solid dark background (`#111111`) with subtle backdrop blur on scroll. Logo on the left, navigation links on the right.

**Primary Nav Links:** Home | The System | Results | About | Blog | Apply (CTA button style)

**Mobile:** Hamburger icon opening a full-screen dark overlay menu with centered links and the Apply CTA prominently placed.

**Social:** Instagram icon in the nav (links to Zack's Instagram profile). Instagram only at launch — no dead social profiles.

---

## 6. Page-by-Page Specification

### 6.1. Home Page (`/`)

The homepage makes a powerful first impression, establishes credibility, and guides visitors toward the core offering. It features two conversion paths: the Apply CTA (high intent) and a lead magnet capture (lower intent).

#### Hero Section

- **Headline:** A bold, benefit-driven headline. Example: **"Your Ads Are Costing You. Our Systems Compound You."**
- **Sub-headline:** "We build relentlessly-optimized Meta advertising systems for businesses ready to scale beyond seven figures."
- **Visual:**
  - **Desktop:** A Three.js particle system animation — abstract, flowing particles transition from chaotic, scattered points into a structured, glowing funnel. Represents the transformation from messy ad spend to a profitable system.
  - **Mobile:** A static or pre-rendered image/video fallback. No WebGL on mobile devices to preserve the <2.5s LCP target and stay within the 1.5MB page budget.
- **Loading Strategy:** A branded preloader (logo + subtle animation) displays on the homepage only until Three.js assets are loaded, then crossfades to the live animation. Preloader does NOT show on subsequent page navigations.
- **CTAs:** Primary button: **"Explore The System"** → `/system`. Secondary ghost button: **"Apply To Partner"** → `/apply`.

#### Social Proof Bar

A seamlessly scrolling horizontal bar of client/partner logos. **Launch strategy:** If insufficient client logos are available at launch, use industry certifications, platform badges (Meta Business Partner, etc.), or "As featured in" media logos instead. Do not launch with an empty or sparse logo bar.

#### Segment-Specific Problem/Agitation Section

A tabbed section allowing visitors to self-select their segment:

- **Tab 1: "Home Services"** — Copy addresses pain points specific to home service businesses: reliance on Home Advisor / Angie's List, unpredictable lead quality, paying for shared leads, no control over customer acquisition.
- **Tab 2: "B2B & High-Ticket"** — Copy addresses B2B/SaaS pain points: agencies that don't understand complex sales cycles, wasted ad spend on unqualified leads, inability to scale predictably, black-box reporting.

Each tab reveals tailored copy and potentially different supporting visuals. The tab selection is persistent for the session but defaults to Tab 1.

#### Solution Introduction

A clear, concise introduction to the Post2Profits System as the definitive answer to the previously stated problems. Bridges from the problem section to the system overview with a CTA linking to `/system`.

#### Key Metrics Showcase

Animated counters displaying verified, aggregated client results. These are **real, verifiable numbers** (e.g., "$10M+ Client Revenue Generated," "4,500+ High-Ticket Leads Delivered," "35% Average CPA Reduction"). Numbers animate in when the section enters the viewport via GSAP scroll trigger.

#### Featured Case Study

A single, visually compelling feature of the top anonymized case study (see Section 6.3 for launch strategy). Includes: industry context, key metric, a testimonial quote, and a CTA to `/results`.

#### FAQ Section

An accordion-style FAQ section placed on the homepage, above the final CTA. Addresses common objections and includes a **minimum investment threshold** to pre-qualify on budget (e.g., "We work with clients investing a minimum of $X,XXX/month in ad spend"). Additional FAQ topics: timeline, reporting, contract terms, what makes P2P different.

#### Lead Magnet Section

A section promoting a free PDF guide/playbook (e.g., **"The 7-Figure Meta Ads Playbook"**) with a name + email capture form. Submissions go to GoHighLevel to trigger an automated email sequence delivering the lead magnet. This is the secondary conversion path for visitors not ready to apply.

#### About Zack Zitting Section

A brief, authoritative bio introducing Zack as the architect behind the system, with a photo sourced from Instagram content and a link to the full `/about` page.

#### Final CTA Section

A full-width section with a compelling final call to action to apply for a partnership. Dark gradient background with the primary CTA button.

---

### 6.2. The System Page (`/system`)

This page demystifies the proprietary Post2Profits methodology through a visual journey.

#### Structure

The page is divided into 4 phase sections. **No scroll-locking.** Sections scroll naturally, with GSAP scroll-triggered entrance animations firing as each section enters the viewport. Each phase occupies a full viewport height on desktop.

1. **Phase 1: Deep Dive & Offer Architecture** — Focus on client collaboration to refine the core offer.
2. **Phase 2: The Creative & Content Engine** — Detail the process for producing high-converting ad creatives.
3. **Phase 3: AI-Powered Ad Deployment & Targeting** — Explain how AI is used to optimize targeting and ad delivery on Meta platforms [6].
4. **Phase 4: Systematic Optimization & Scale** — Showcase the iterative process of testing, learning, and scaling winning campaigns.

#### Visuals

Each phase features **abstract, data-driven animated graphics** — glowing geometric shapes, particle systems, and data flow visualizations built with GSAP + Canvas/SVG. These maintain the sci-fi dashboard aesthetic established by the Three.js hero. No video embeds at launch.

#### Phase Navigation

A sticky side indicator (desktop) or top progress bar (mobile) shows which phase the user is viewing, allowing quick jumps between phases.

---

### 6.3. Results Page (`/results`)

This page serves as the portfolio and proof of performance.

#### Launch Strategy

**At launch, the page will feature 1-2 anonymized case studies** (e.g., "A B2B SaaS Company," "A Regional Home Services Firm") built from real client results with anonymized business names. The filterable grid UI is designed but launches with minimal content. Filters activate once 5+ case studies are available.

#### Layout

A clean grid of case study cards. Each card displays: anonymized client descriptor or logo, a key metric (e.g., "8x ROAS," "+300% Qualified Leads"), and the industry tag.

**Future:** Filterable by industry (Home Services, B2B SaaS, Coaching, etc.) once sufficient case studies exist.

#### Individual Case Study Pages (`/results/[slug]`)

Each case study follows a consistent narrative structure:

1. **The Challenge:** A clear description of the client's problem.
2. **The Solution:** An overview of the strategy implemented by Post2Profits.
3. **The Process:** A step-by-step look at the execution.
4. **The Results:** Visually rich section with charts, animated data visualizations, and hard numbers. A strong client testimonial featured here.

---

### 6.4. About Page (`/about`)

Designed to build a personal connection and establish Zack Zitting's authority through a **personal narrative story**.

#### Content

A longer-form narrative telling Zack's story — his origin, how he got into marketing, pivotal moments in his career, his philosophy on marketing, and his vision for Post2Profits. The tone is authentic, personal, and aligned with the brand voice from his Instagram content [4].

#### Photography

Photos sourced from Zack's Instagram content at launch. Styled with monochrome or dark-themed treatments to match the site aesthetic. A professional photoshoot is planned for a future update.

#### Structure

- Hero: Full-width photo with Zack's name and title overlaid
- Story: Narrative sections with pull quotes and inline photos
- Philosophy: A section on Zack's marketing philosophy and what makes Post2Profits different
- CTA: Link to Apply page

---

### 6.5. Apply Page (`/apply`)

The primary conversion endpoint. This is an **application to partner**, not a contact form. The language throughout reinforces selectivity and high-value positioning.

#### Multi-Step Application Form

**3 steps, designed to complete in under 60 seconds.** A progress indicator shows which step the user is on.

**Step 1 — Your Business:**
- Business name (text)
- Industry (dropdown: Home Services, B2B SaaS, Coaching/Consulting, E-commerce, Other)
- Monthly revenue range (dropdown: <$50K, $50K-$100K, $100K-$500K, $500K-$1M, $1M+)

**Step 2 — Your Marketing:**
- Current monthly ad spend (dropdown: Not running ads, <$5K, $5K-$15K, $15K-$50K, $50K+)
- Biggest marketing challenge (text area, 2-3 sentences)
- Have you worked with an agency before? (Yes/No)

**Step 3 — Your Contact:**
- Full name (text)
- Email address (email)
- Phone number (tel)

#### Post-Submission Flow

1. Form data is sent to **GoHighLevel** via API/webhook into a designated pipeline.
2. User is immediately **redirected to a Calendly booking page** to schedule a discovery call.
3. GHL triggers any configured automations (email confirmation, internal notification, etc.).

---

### 6.6. Blog (`/blog`)

Powered by **Sanity.io** as a headless CMS. The blog serves as a content marketing engine for SEO and authority, and as a top-of-funnel entry point for the lead magnet.

#### Content Strategy

Launch with **3-5 seed posts** on foundational topics (e.g., "Why Most Agencies Fail Their Clients," "The Meta Ads Playbook for Home Service Businesses," "B2B Lead Generation: Systems vs. Campaigns"). Ongoing target: 2-4 posts per month.

#### Sanity Schema

- **Post:** title, slug, excerpt, body (portable text), featured image, author, category (reference), tags (array), published date, SEO fields (meta title, meta description)
- **Category:** name, slug, description
- **Tag:** name, slug

#### Blog Index Page (`/blog`)

A grid of post cards showing: featured image, title, excerpt, category badge, published date. Filterable by category. Paginated or infinite scroll.

#### Individual Post Page (`/blog/[slug]`)

- Article content rendered from Sanity Portable Text
- Author byline with photo
- Category and tags displayed
- **End-of-post CTA block:** A prominent call-to-action at the bottom of every blog post prompting readers to either Apply or download the lead magnet
- Social sharing links (copy link, share to Instagram story, share to LinkedIn)
- No related posts at launch

#### Blog Category Pages (`/blog/category/[slug]`)

Archive pages showing all posts in a given category. Same card layout as the blog index.

---

### 6.7. Lead Magnet

A **free PDF guide/playbook** (e.g., "The 7-Figure Meta Ads Playbook") offered in exchange for name + email.

#### Capture Points

1. **Homepage:** Dedicated section with name + email form
2. **Blog posts:** End-of-post CTA block with inline form or modal
3. **Blog sidebar (desktop):** Sticky lead magnet banner

#### Integration

- Form submission sends name + email to **GoHighLevel** via API/webhook
- GHL automation triggers email delivery of the PDF
- Contacts are tagged appropriately in GHL for segmentation

> **Prerequisite:** The PDF guide must be created before launch.

---

### 6.8. Privacy Policy (`/privacy`) & Terms of Service (`/terms`)

Static legal pages required for compliance. Content will be provided by the client or generated using a legal document generator as a starting point, then reviewed.

**Privacy Policy must disclose:**
- Data collection via application form
- Meta Pixel and Conversions API tracking
- Plausible Analytics usage
- GoHighLevel as a data processor
- Google Tag Manager usage

---

### 6.9. 404 Page

A **custom, creative 404 page** that maintains the dark luxury aesthetic. Example copy: *"Looks like this funnel needs fixing."* Includes a subtle GSAP animation (e.g., scattered particles that never form a funnel), a link to the homepage, and a link to Apply.

---

### 6.10. Footer

A **standard footer** present on all pages:

| Section | Content |
| :--- | :--- |
| **Logo** | Post2Profits wordmark/logo |
| **Navigation** | Links to all primary pages: Home, The System, Results, About, Blog, Apply |
| **Contact** | Business email address (e.g., zack@post2profits.com or contact@post2profits.com) |
| **Social** | Instagram icon/link |
| **Legal** | Privacy Policy, Terms of Service |
| **Copyright** | © 2026 Post2Profits. All rights reserved. |

---

## 7. Animation & Interaction Specification

### 7.1. Global Animations (GSAP)

- **Scroll-triggered entrance animations** on all pages: elements fade in, slide up, or scale in as they enter the viewport
- **No page transition animations** — navigation between pages is instant via Next.js client-side routing; content on the new page enters with its own scroll-triggered animations
- **Animated counters** for the metrics showcase (count up when in viewport)
- **Hover states** on buttons, cards, and links with subtle GSAP transitions

### 7.2. Homepage Hero (Three.js — Desktop Only)

- Particle system: abstract, flowing particles that transition from chaotic scatter into a structured, glowing funnel shape
- Color palette: electric blue particles with gold/bronze accent particles
- Subtle mouse-follow interaction: particles gently respond to cursor position
- **Desktop only.** Mobile serves a static hero image or pre-rendered video of the animation.

### 7.3. System Page Phase Animations (GSAP + Canvas/SVG)

- Abstract, data-driven visualizations for each of the 4 phases
- Glowing geometric shapes, flowing data lines, particle effects
- Built entirely with GSAP + Canvas or SVG (no Three.js) for performance
- Each phase animates in as it enters the viewport via scroll trigger

### 7.4. Branded Preloader (Homepage Only)

- Displays the Post2Profits logo with a subtle animation (e.g., logo draws on, particles form the logo)
- Shows on the initial homepage load only
- Crossfades to the live Three.js animation once WebGL assets are ready
- Does NOT show on subsequent page navigations or non-homepage routes

---

## 8. SEO & Performance

### 8.1. On-Page SEO Strategy

| Page | Primary Keywords | Secondary Keywords |
| :--- | :--- | :--- |
| Home | high-ticket marketing agency, meta advertising agency | b2b funnel design, home service marketing |
| /system | marketing funnel system, meta ads strategy | paid advertising funnel, facebook ads agency |
| /results | marketing agency case studies, meta ads results | facebook advertising ROI, lead generation results |
| /about | Zack Zitting, Post2Profits founder | marketing expert, meta ads specialist |
| /blog | meta advertising tips, marketing strategy blog | facebook ads blog, b2b marketing insights |

- **Meta Titles & Descriptions:** Each page has a unique, compelling meta title (<60 chars) and description (<160 chars) optimized for CTR.
- **Schema Markup:** `Organization`, `Person` (Zack Zitting), `Service`, `BlogPosting`, `FAQPage` (homepage FAQ), and `BreadcrumbList`.
- **Open Graph:** Auto-generated OG images via Next.js `ImageResponse` (Satori). Dynamic per page — includes page title, Post2Profits branding, and dark theme styling.

### 8.2. Performance Budget

| Metric | Target |
| :--- | :--- |
| First Contentful Paint (FCP) | < 1.8 seconds |
| Largest Contentful Paint (LCP) | < 2.5 seconds |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Interaction to Next Paint (INP) | < 200ms |
| Page Size (initial load) | < 1.5 MB |
| Three.js Bundle | Lazy-loaded, code-split, desktop only |

### 8.3. Performance Strategy

- Three.js is **code-split and lazy-loaded** — not included in the initial bundle. Loaded only on desktop homepage.
- Images optimized via Next.js `<Image>` component with automatic WebP/AVIF conversion.
- Fonts self-hosted via `next/font` — zero external font requests.
- GTM, Meta Pixel, and Plausible loaded asynchronously and deferred.

---

## 9. Responsive Design

**Design philosophy: parity with desktop enhancement.** Both mobile and desktop experiences must be polished and complete. Desktop gets enhanced features (Three.js hero, hover effects, sidebar elements).

### 9.1. Breakpoints

| Breakpoint | Target |
| :--- | :--- |
| Mobile | 320px - 767px |
| Tablet | 768px - 1023px |
| Desktop | 1024px - 1439px |
| Large Desktop | 1440px+ |

### 9.2. Key Responsive Differences

| Feature | Mobile | Desktop |
| :--- | :--- | :--- |
| Hero Animation | Static image / pre-rendered video | Three.js particle system |
| Navigation | Hamburger → full-screen overlay | Horizontal nav bar |
| System Page Phases | Stacked sections, animations trigger on scroll | Full-viewport sections, sticky phase indicator |
| Blog Sidebar | Hidden (lead magnet CTA appears at end of post) | Sticky sidebar with lead magnet banner |
| Segment Tabs | Full-width tabs | Inline centered tabs |
| Case Study Grid | Single column | 2-3 column grid |

---

## 10. Accessibility

The website must comply with **WCAG 2.1 AA**:

- **Keyboard Navigation:** The entire site must be navigable using only a keyboard, including the multi-step form, tabbed sections, FAQ accordion, and navigation menu.
- **Screen Reader Compatibility:** All content properly structured with semantic HTML. ARIA labels on interactive elements (tabs, accordion, form steps). Three.js canvas has an `aria-hidden="true"` with alternative text content available.
- **Color Contrast:** All text has a minimum contrast ratio of 4.5:1 against its background. The primary blue has been adjusted to `#3399FF` (or tested equivalent) to meet this requirement on `#111111` backgrounds.
- **Motion:** Respect `prefers-reduced-motion` — disable GSAP animations and Three.js particle movement for users who prefer reduced motion.
- **Focus Indicators:** Visible, high-contrast focus rings on all interactive elements.
- **Form Accessibility:** Labels associated with all form inputs, error messages announced to screen readers, progress indicator for multi-step form is announced on step change.

---

## 11. Third-Party Integrations Summary

| Service | Purpose | Integration Method |
| :--- | :--- | :--- |
| **GoHighLevel** | CRM, application form submissions, lead magnet delivery, email automation | API / Webhook |
| **Calendly** | Discovery call booking (post-application redirect) | URL redirect |
| **Sanity.io** | Blog content management | Next.js Sanity client (`@sanity/client` + `next-sanity`) |
| **Google Tag Manager** | Tag container for all tracking scripts | `<Script>` tag in layout |
| **Meta Pixel + CAPI** | Retargeting, conversion tracking | Loaded via GTM |
| **Plausible Analytics** | Privacy-focused site analytics | Loaded via GTM |
| **Instagram** | Social link, photo content source | External link |
| **Vercel** | Hosting, deployment, CDN | Git-based continuous deployment |

---

## 12. Launch Prerequisites

Before the site can go live, the following must be completed:

| Item | Status | Owner |
| :--- | :--- | :--- |
| Domain name selected and registered | Not started | Zack |
| Logo/wordmark polished for web (SVG) | Needs work (rough version exists) | Designer |
| Professional photos or curated Instagram photos | Use Instagram content | Zack |
| 1-2 anonymized case studies written | Not started | Zack + Developer |
| 3-5 seed blog posts created in Sanity | Not started | Zack |
| PDF lead magnet (playbook/guide) created | Not started | Zack |
| GoHighLevel pipeline + automations configured | Not started | Zack |
| Calendly booking page set up | Not started | Zack |
| Privacy Policy and Terms of Service drafted | Not started | Zack / Legal |
| FAQ content finalized (including minimum investment) | Not started | Zack |
| Meta Pixel ID and GTM container ID created | Not started | Zack |
| Plausible Analytics account created | Not started | Zack |
| Sanity.io project created | Not started | Developer |
| Vercel project connected to repository | Not started | Developer |

---

## 13. Future Enhancements (V2+)

Items explicitly deferred from the initial launch:

- **Professional photoshoot** for Zack (replace Instagram content)
- **Full case study portfolio** with filterable grid (once 5+ studies exist)
- **Related posts** on blog post pages
- **Newsletter signup** as an additional lead capture mechanism
- **Cookie consent banner** if expanding to EU markets
- **Light mode toggle** (currently dark mode only)
- **Additional social platforms** (YouTube, LinkedIn, TikTok) once accounts are active
- **Industry-specific landing pages** (`/industries/home-services`, `/industries/b2b-saas`) for targeted ad campaigns
- **Interactive audit / calculator** as an advanced lead magnet
- **Video content** on the System page (replace animated graphics with Zack explaining each phase)

---

## 14. References

[1] [Russell Brunson's Website](https://www.russellbrunson.com/)

[2] [Acquisition.com (Alex Hormozi)](https://www.acquisition.com/)

[3] [Megalodon Marketing (Jeremy Haynes)](https://megalodonmarketing.agency/)

[4] [Zack Zitting on Instagram: Differentiators](https://www.instagram.com/reel/DHuC12exnvU/?hl=en)

[5] [Zack Zitting on Instagram: Post 2 Profits Strategy](https://www.instagram.com/reel/DCP-6thMZg9/)

[6] [Zack Zitting on Instagram: AI in Marketing](https://www.instagram.com/p/DUeT9n_EYP8/)
