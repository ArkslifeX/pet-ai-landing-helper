import { Button } from "@/components/ui/button";

export const ProductSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black py-24">
      <h1 className="text-6xl md:text-7xl font-serif mb-16">The product</h1>
      <div className="relative w-full max-w-4xl mx-auto mb-12 group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 group-hover:opacity-75 transition-opacity duration-500" />
        <img
          src="/lovable-uploads/71c10b4a-fd29-430b-8634-c0e302933174.png"
          alt="Petpin AI Device"
          className="w-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <Button 
        variant="outline" 
        className="text-lg px-8 py-6 rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
      >
        pre-order →
      </Button>
    </div>
  );
};