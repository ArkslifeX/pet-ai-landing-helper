import { Button } from "@/components/ui/button";

export const Mission = () => {
  return (
    <div id="mission" className="bg-white text-black py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-serif">Bridging Two Worlds</h2>
            <p className="text-xl text-gray-600">
              We're creating a revolutionary bond between pets and their owners through cutting-edge AI technology. Our mission is to transform every moment with your pet into a magical digital experience.
            </p>
            <div className="pt-4">
              <Button className="bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-full">
                Join the Revolution
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/1fe36346-a874-4d7e-b545-e7e631c7b831.png"
              alt="Petpin AI App Interface"
              className="w-full rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};