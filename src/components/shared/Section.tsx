"use client";

import { useScrollFadeIn } from "@/lib/useGsapScrollTrigger";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  const ref = useScrollFadeIn<HTMLElement>();

  return (
    <section ref={ref} id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
