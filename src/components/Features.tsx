export const Features = () => {
  return (
    <div id="features" className="bg-gray-900 text-white py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-up">
          A New Era of Pet Care
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-up group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Real-time Emotion Translation</h3>
              <p className="text-gray-300">
                Watch your pet's emotions come to life through our advanced AI algorithms that decode barks, meows, and body language in real-time.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Digital Pet Companion</h3>
              <p className="text-gray-300">
                Experience a Tamagotchi-like interface that brings your pet's digital avatar to life, complete with moods, needs, and daily activities.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up group cursor-pointer p-6 rounded-lg hover:bg-white/5 transition-colors">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Health Insights</h3>
              <p className="text-gray-300">
                Get predictive health analytics and real-time alerts about your pet's well-being through our intelligent monitoring system.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-up group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            <img
              src="/lovable-uploads/bad8a7aa-d06b-4ec9-839d-d2540d308630.png"
              alt="Petpin AI Camera"
              className="w-full rounded-lg shadow-2xl transform transition-transform group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};