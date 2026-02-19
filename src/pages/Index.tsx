import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import MechanismSection from "@/components/MechanismSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <HeroSection />
      <MechanismSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
