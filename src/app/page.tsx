import HeroSection from "@/components/sections/HeroSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import InsightsSection from "@/components/sections/InsightsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ArchitectureSection />
      <CaseStudiesSection />
      <InsightsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
