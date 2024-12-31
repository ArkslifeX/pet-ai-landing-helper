export const Mission = () => {
  return (
    <div id="mission" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
            <p className="text-xl text-gray-300">
              We're revolutionizing the bond between pets and their owners through cutting-edge AI technology. Our mission is to create deeper understanding and connection, making every moment with your pet more meaningful.
            </p>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/97092754-d85d-4334-8814-121730ff5cd7.png"
              alt="Petpin AI Device Display"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};