import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export default function Home() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundColor: "#0f1117",
        backgroundImage: "linear-gradient(to bottom, #0f1117 0%, #0d1015 50%, #0a0d13 100%)",
      }}
    >
      <GrainOverlay />
      <HeroSection />
      <FeaturedWorkSection />
      <HowIWorkSection />
      <InsightsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
