import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OnboardingPreview from "@/components/OnboardingPreview";
import TechSection from "@/components/TechSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <OnboardingPreview />
      <TechSection />
    </div>
  );
};

export default Index;
