import { HeroSection } from "@/components/sections/HeroSection";
import { ArchShowcase } from "@/components/sections/ArchShowcase";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <ArchShowcase />
      <SectionDivider />
      <CaseStudiesSection />
      <SectionDivider />
      <InsightsSection />
      <SectionDivider />
      <ServicesSection />
    </>
  );
}
