import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export const Mission = () => {
  const [petType, setPetType] = useState("dog");

  return (
    <div id="mission" className="bg-white text-black py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-['Nohemi']">Bridging Two Worlds</h2>
            <p className="text-xl text-gray-600 font-['Nohemi']">
              We're creating a revolutionary bond between pets and their owners through cutting-edge AI technology. Our mission is to transform every moment with your pet into a magical digital experience.
            </p>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-['Nohemi']">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="font-['Nohemi']" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="petName" className="font-['Nohemi']">Pet's Name</Label>
                <Input id="petName" type="text" placeholder="Enter your pet's name" className="font-['Nohemi']" />
              </div>
              <div className="space-y-2">
                <Label className="font-['Nohemi']">Pet Type</Label>
                <RadioGroup defaultValue="dog" onValueChange={setPetType} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dog" id="dog" />
                    <Label htmlFor="dog" className="font-['Nohemi']">Dog</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cat" id="cat" />
                    <Label htmlFor="cat" className="font-['Nohemi']">Cat</Label>
                  </div>
                </RadioGroup>
              </div>
              <Button className="w-full bg-black hover:bg-black/90 text-white px-8 py-6 text-lg rounded-full font-['Nohemi']">
                Join the Revolution
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/471597b7-7b32-4b7a-8fff-cbf1eee93bca.png"
              alt="Petpin AI Device"
              className="w-full rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};