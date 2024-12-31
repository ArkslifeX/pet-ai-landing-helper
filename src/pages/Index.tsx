import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Mission } from "@/components/Mission";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Mission />
      <Pricing />
    </div>
  );
};

export default Index;