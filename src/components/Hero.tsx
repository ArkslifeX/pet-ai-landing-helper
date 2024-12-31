import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
          <h1 className="text-5xl md:text-7xl font-['Nohemi'] leading-tight animate-fade-up">
            Tamagotchi, but IRL
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 animate-fade-up font-['Nohemi']">
            Wearable AI for Pets: Decoding emotions, capturing adventures, and deepening bonds with your pet.
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button className="bg-white hover:bg-white/90 text-black px-8 py-6 text-lg rounded-full">
              Pre-order Now
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/8923752e-2a44-4cbc-a9eb-421b949f5e54.png"
              alt="Petpin AI Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/12fd1ef9-b9cf-4e65-a62d-cbc8e53775fa.png"
              alt="Petpin AI App Interface"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};