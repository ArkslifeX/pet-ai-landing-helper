import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Mission } from "@/components/Mission";

const Index = () => {
  return (
    <div className="bg-primary/5">
      <Navbar />
      <Hero />
      <ProductSection />
      <HowItWorks />
      <Mission />
      <footer className="py-8 text-center text-gray-600 font-['Nohemi']">
        <p>© 2024 Petpin AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;