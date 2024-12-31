import { Button } from "@/components/ui/button";

export const Mission = () => {
  return (
    <div id="mission" className="bg-gray-900 text-white py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">Bridging Two Worlds</h2>
            <p className="text-xl text-gray-300">
              We're creating a revolutionary bond between pets and their owners through cutting-edge AI technology. Our mission is to transform every moment with your pet into a magical digital experience, bringing the joy of Tamagotchi to real life.
            </p>
            <div className="pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-4 text-lg relative overflow-hidden group">
                <span className="relative z-10">Join the Revolution</span>
                <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform group-hover:translate-y-0" />
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up group">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/lovable-uploads/97092754-d85d-4334-8814-121730ff5cd7.png"
              alt="Petpin AI Device Display"
              className="w-full rounded-lg shadow-2xl transform transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};