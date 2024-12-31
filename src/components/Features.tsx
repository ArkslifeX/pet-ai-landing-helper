export const Features = () => {
  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Advanced Features
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-up">
              <h3 className="text-2xl font-bold">Adventure Capture</h3>
              <p className="text-gray-300">
                From playtime with other pets to interactions with strangers, this device captures every moment of your pet's adventures.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up">
              <h3 className="text-2xl font-bold">Emotion Recognition</h3>
              <p className="text-gray-300">
                Decodes barks, meows, and body language to provide real-time understanding of your pet's emotions.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up">
              <h3 className="text-2xl font-bold">Real-Time Insights</h3>
              <p className="text-gray-300">
                Maps out your pet's journey with GPS, camera, and sensors, offering insights into their daily activities.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/647c5c55-c2a4-4dd0-b2f7-8aec13c857c6.png"
              alt="App Interface"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};