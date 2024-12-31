import { Button } from "@/components/ui/button";

export const ProductSection = () => {
  return (
    <div id="product" className="min-h-screen flex flex-col items-center justify-center bg-white text-black py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-7xl font-['Nohemi'] mb-16 text-center">The product</h1>
        <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <img
              src="/lovable-uploads/471597b7-7b32-4b7a-8fff-cbf1eee93bca.png"
              alt="Petpin AI Display Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="text-center">
              <p className="text-xl text-gray-600 font-['Nohemi']">Smart Display</p>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="/lovable-uploads/59112fed-848a-47f4-972c-512350365ecb.png"
              alt="Petpin AI Camera Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="text-center">
              <p className="text-xl text-gray-600 font-['Nohemi']">AI Camera</p>
            </div>
          </div>
          <div className="space-y-6">
            <img
              src="/lovable-uploads/8923752e-2a44-4cbc-a9eb-421b949f5e54.png"
              alt="Petpin AI Band Device"
              className="w-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
            <div className="text-center">
              <p className="text-xl text-gray-600 font-['Nohemi']">Smart Band</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors font-['Nohemi']"
          >
            pre-order →
          </Button>
        </div>
      </div>
    </div>
  );
};