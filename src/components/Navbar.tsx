import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-serif text-black">petpin</div>
          <div className="flex items-center gap-8">
            <a href="#blog" className="text-gray-600 hover:text-black transition-colors">blog</a>
            <a href="#product" className="text-gray-600 hover:text-black transition-colors">product</a>
            <Button 
              variant="outline"
              className="rounded-full border-2 border-black hover:bg-black hover:text-white transition-colors"
            >
              pre-order →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};