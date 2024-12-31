export const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white text-black py-24">
      <h2 className="text-6xl md:text-7xl font-serif text-center mb-24">How it works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {[
          {
            title: "Connect",
            description: "Attach the Petpin AI device to your pet's collar and connect it to your phone.",
            image: "/lovable-uploads/71c10b4a-fd29-430b-8634-c0e302933174.png"
          },
          {
            title: "Bond",
            description: "Your pet's emotions and activities are translated into a digital companion experience.",
            image: "/lovable-uploads/f03d160a-5912-4bfa-88d6-6dc28eaf7b73.png"
          },
          {
            title: "Play",
            description: "Interact with your pet through the app, receiving real-time updates and emotional insights.",
            image: "/lovable-uploads/97092754-d85d-4334-8814-121730ff5cd7.png"
          }
        ].map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[4/3] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};