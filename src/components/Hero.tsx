import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Wearable AI for Pets
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Decoding emotions, capturing adventures, and deepening bonds with your pet.
          </p>
          <div className="flex gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Pre-order Now
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <img
            src="/lovable-uploads/d57651ce-cf3f-45e8-b559-c0959ae10525.png"
            alt="Petpin AI Device"
            className="w-full object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};