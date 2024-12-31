import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-up">
            Understand Your Pet Like Never Before
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fade-up">
            AI-powered wearable that translates your pet's emotions and activities in real-time
          </p>
          <div className="flex gap-4 justify-center animate-fade-up">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Pre-order Now
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/71c10b4a-fd29-430b-8634-c0e302933174.png"
              alt="Petpin AI Device"
              className="w-full object-cover rounded-lg shadow-2xl"
            />
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/f03d160a-5912-4bfa-88d6-6dc28eaf7b73.png"
              alt="Petpin AI App Interface"
              className="w-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};