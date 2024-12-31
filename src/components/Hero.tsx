import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-foreground pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
          <h1 className="text-5xl md:text-7xl font-['Nohemi'] leading-tight animate-fade-up">
            Tamagotchi, but IRL
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 animate-fade-up font-['Nohemi']">
            Turn your pet's adventures into an engaging, interactive experience where you earn rewards and unlock new insights.
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button className="bg-secondary hover:bg-secondary/90 text-foreground px-8 py-6 text-lg rounded-full">
              Pre-order Now
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/471597b7-7b32-4b7a-8fff-cbf1eee93bca.png"
              alt="Petpin AI Display Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Smart Pin Display</p>
          </div>
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/2f09946c-0870-4129-8d82-b2b5b7a3ae55.png"
              alt="Petpin AI App Interface"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Mobile App</p>
          </div>
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/59112fed-848a-47f4-972c-512350365ecb.png"
              alt="Petpin AI Camera Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">Smart Pin Camera</p>
          </div>
        </div>
      </div>
    </div>
  );
};