export const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white text-black py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-7xl font-serif text-center mb-24">How it works</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              title: "Connect",
              description: "Attach the Petpin AI device to your pet's collar and connect it to your phone.",
              image: "/lovable-uploads/4517490d-074e-4d1c-98c2-2c772aab6d90.png"
            },
            {
              title: "Bond",
              description: "Your pet's emotions and activities are translated into a digital companion experience.",
              image: "/lovable-uploads/1fe36346-a874-4d7e-b545-e7e631c7b831.png"
            },
            {
              title: "Play",
              description: "Interact with your pet through the app, receiving real-time updates and emotional insights.",
              image: "/lovable-uploads/a8947a8d-9e20-4ad9-b9be-00d13ea496e7.png"
            }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="relative mb-8 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-square object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};