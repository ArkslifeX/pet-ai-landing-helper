import { Button } from "@/components/ui/button";

export const ProductSection = () => {
  return (
    <div id="product" className="min-h-screen flex flex-col items-center justify-center bg-white text-black py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-serif mb-16 text-center">The product</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <img
              src="/lovable-uploads/a8947a8d-9e20-4ad9-b9be-00d13ea496e7.png"
              alt="Petpin AI Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="text-center">
              <p className="text-xl text-gray-600">Smart Device</p>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="/lovable-uploads/1fe36346-a874-4d7e-b545-e7e631c7b831.png"
              alt="Petpin AI App Interface"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="text-center">
              <p className="text-xl text-gray-600">Companion App</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            pre-order →
          </Button>
        </div>
      </div>
    </div>
  );
};