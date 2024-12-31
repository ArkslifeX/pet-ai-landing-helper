import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Mission } from "@/components/Mission";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSection />
      <HowItWorks />
      <Mission />
      <Pricing />
    </div>
  );
};

export default Index;