import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <HowIWorkSection />
      <InsightsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
