export const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-secondary/20 text-foreground py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-7xl font-['Nohemi'] text-center mb-24">How it works</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="group">
              <h3 className="text-2xl font-['Nohemi'] mb-4">Adventure Capture</h3>
              <p className="text-gray-600 font-['Nohemi']">
                From playtime with other pets to interactions with strangers, this device captures every moment of your pet's adventures, ensuring no moment goes unnoticed.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-['Nohemi'] mb-4">Emotion Recognition</h3>
              <p className="text-gray-600 font-['Nohemi']">
                Decodes barks, meows, and body language to provide real-time understanding of your pet's emotions.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-['Nohemi'] mb-4">Real-Time Insights</h3>
              <p className="text-gray-600 font-['Nohemi']">
                Maps out your pet's journey with the help of GPS, camera, and sensors, offering insights into their daily activities and behavioral tracking.
              </p>
            </div>
            <div className="group">
              <h3 className="text-2xl font-['Nohemi'] mb-4">Interactive, Gamified Experience</h3>
              <p className="text-gray-600 font-['Nohemi']">
                Like Tamagotchi, but in real life: turning your pet's adventures into an engaging, interactive experience where owners earn rewards and unlock new insights as they track their pet's journey.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/2f09946c-0870-4129-8d82-b2b5b7a3ae55.png"
              alt="Petpin AI Interface"
              className="w-full rounded-2xl transform transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};