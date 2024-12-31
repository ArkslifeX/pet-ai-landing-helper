import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-['Nohemi'] text-foreground">petpin</div>
          <div className="flex items-center gap-8">
            <Button 
              variant="ghost"
              className="text-base font-normal text-foreground hover:bg-secondary/20"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            >
              product
            </Button>
            <Button 
              variant="outline"
              className="rounded-full border-2 border-foreground text-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              pre-order →
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};