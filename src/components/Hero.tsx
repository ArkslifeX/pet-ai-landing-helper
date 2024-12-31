import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-up">
            Your Pet's Digital Soul
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-up">
            Experience a new dimension of pet companionship with our AI-powered wearable
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg relative overflow-hidden group">
              <span className="relative z-10">Pre-order Now</span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform group-hover:translate-y-0" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg border-white/20 hover:bg-white/10 transition-colors"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          <div className="relative animate-fade-up group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/lovable-uploads/71c10b4a-fd29-430b-8634-c0e302933174.png"
              alt="Petpin AI Device"
              className="w-full object-cover rounded-lg shadow-2xl transform transition-transform group-hover:scale-105"
            />
          </div>
          <div className="relative animate-fade-up group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/lovable-uploads/f03d160a-5912-4bfa-88d6-6dc28eaf7b73.png"
              alt="Petpin AI App Interface"
              className="w-full object-cover rounded-lg shadow-2xl transform transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};