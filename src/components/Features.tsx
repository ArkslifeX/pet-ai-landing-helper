export const Features = () => {
  return (
    <div id="features" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Advanced Features
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-up">
              <h3 className="text-2xl font-bold">Real-time Emotion Translation</h3>
              <p className="text-gray-300">
                Advanced AI algorithms decode your pet's barks, meows, and body language to understand their emotional state.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up">
              <h3 className="text-2xl font-bold">Activity Monitoring</h3>
              <p className="text-gray-300">
                Track your pet's activity levels, location, and daily routines with precise sensors and GPS tracking.
              </p>
            </div>
            <div className="space-y-4 animate-fade-up">
              <h3 className="text-2xl font-bold">Health Insights</h3>
              <p className="text-gray-300">
                Get real-time alerts about your pet's well-being and detailed health analytics through our smart app.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/bad8a7aa-d06b-4ec9-839d-d2540d308630.png"
              alt="Petpin AI Camera"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};