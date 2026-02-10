import Hero from "@/components/home/Hero";
import SocialProofBar from "@/components/home/SocialProofBar";
import SegmentTabs from "@/components/home/SegmentTabs";
import SolutionIntro from "@/components/home/SolutionIntro";
import MetricsShowcase from "@/components/home/MetricsShowcase";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import FAQ from "@/components/home/FAQ";
import LeadMagnet from "@/components/home/LeadMagnet";
import AboutPreview from "@/components/home/AboutPreview";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProofBar />
      <SegmentTabs />
      <SolutionIntro />
      <MetricsShowcase />
      <FeaturedCaseStudy />
      <FAQ />
      <LeadMagnet />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
