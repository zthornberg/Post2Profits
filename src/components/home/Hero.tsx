"use client";

import { Suspense, lazy } from "react";
import Button from "@/components/shared/Button";

const HeroParticles = lazy(() => import("./HeroParticles"));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background (desktop only, lazy-loaded) */}
      <Suspense fallback={null}>
        <HeroParticles />
      </Suspense>

      {/* Static gradient fallback for mobile */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-bg via-bg-secondary to-bg" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-text-primary leading-[1.1] mb-6">
          Your Ads Are Costing You.{" "}
          <span className="text-accent-blue">Our Systems Compound You.</span>
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          We build relentlessly-optimized Meta advertising systems for businesses
          ready to scale beyond seven figures.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/system" size="lg">
            Explore The System
          </Button>
          <Button href="/apply" variant="ghost" size="lg">
            Apply To Partner
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-text-muted rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-text-muted rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
