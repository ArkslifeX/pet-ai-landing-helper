export const Features = () => {
  return (
    <div id="features" className="bg-black text-white py-24 relative">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-['Nohemi'] text-center mb-16 animate-fade-up">
          Spotify Wrapped but for your pet's adventures, every day!
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-up group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-['Nohemi'] group-hover:text-white transition-colors">Adventure Capture</h3>
              <p className="text-gray-400">
                From playtime with other pets to interactions with strangers, this device captures every moment of your pet's adventures, ensuring no moment goes unnoticed.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-['Nohemi'] group-hover:text-white transition-colors">Emotion Recognition</h3>
              <p className="text-gray-400">
                Decodes barks, meows, and body language to provide real-time understanding of your pet's emotions.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-['Nohemi'] group-hover:text-white transition-colors">Real-Time Insights</h3>
              <p className="text-gray-400">
                Maps out your pet's journey with the help of GPS, camera, and sensors, offering insights into their daily activities and behavioral tracking.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-up group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/lovable-uploads/a905103a-d2b2-471a-ab11-25510cf0e415.png"
              alt="Petpin AI Features"
              className="w-full rounded-lg shadow-2xl transform transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};