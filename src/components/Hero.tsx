import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif leading-tight animate-fade-up">
            Your Pet's Digital Soul
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 animate-fade-up">
            Experience a new dimension of pet companionship with our AI-powered wearable
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-full">
              Pre-order Now
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/4517490d-074e-4d1c-98c2-2c772aab6d90.png"
              alt="Petpin AI Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          <div className="relative animate-fade-up group">
            <img
              src="/lovable-uploads/1fe36346-a874-4d7e-b545-e7e631c7b831.png"
              alt="Petpin AI App Interface"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};