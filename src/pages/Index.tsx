import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Mission } from "@/components/Mission";

const Index = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Mission />
    </div>
  );
};

export default Index;