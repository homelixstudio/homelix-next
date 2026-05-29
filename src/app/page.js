import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Spaces from "@/components/Spaces";
import Pricing from "@/components/Pricing";
import MaterialsSection from "@/components/MaterialsSection";
import DesignStyles from "@/components/DesignStyles";
import FaqSection from "@/components/FaqSection";
import Contact from "@/components/Contact";
import StatsSection from "@/components/StatsSection";
import FadeUp from "@/components/FadeUp";

export default function HomePage() {
  return (
    <main className="bg-[#FAF7F2] text-[#2B2B2B]">
      <Hero />

      <FadeUp>
        <WhyChooseUs />
      </FadeUp>

      <FadeUp delay={0.1}>
        <Process />
      </FadeUp>

      <FadeUp delay={0.15}>
        <Spaces />
      </FadeUp>

      <FadeUp delay={0.2}>
        <Pricing />
      </FadeUp>

      <FadeUp delay={0.25}>
        <MaterialsSection />
      </FadeUp>

      <FadeUp delay={0.3}>
        <DesignStyles />
      </FadeUp>

      <FadeUp delay={0.35}>
        <StatsSection />
      </FadeUp>

      <FadeUp delay={0.4}>
        <FaqSection />
      </FadeUp>

      <FadeUp delay={0.45}>
        <Contact />
      </FadeUp>
    </main>
  );
}
