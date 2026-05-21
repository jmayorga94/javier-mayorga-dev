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
      className="relative min-h-screen transition-colors duration-300"
      style={{
        color: "var(--text-primary)",
        backgroundColor: "var(--bg-from)",
        backgroundImage:
          "linear-gradient(to bottom, var(--bg-from) 0%, var(--bg-mid) 50%, var(--bg-to) 100%)",
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
