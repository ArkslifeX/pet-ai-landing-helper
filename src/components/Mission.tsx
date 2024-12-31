export const Mission = () => {
  return (
    <div className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
            <p className="text-xl text-gray-300">
              To revolutionize the way pet owners connect with their pets by capturing every adventure, decoding emotions, and building an even deeper bond, all while ensuring complete privacy.
            </p>
          </div>
          <div className="relative animate-fade-up">
            <img
              src="/lovable-uploads/f7dceba9-6d9c-4ab5-8bd8-de54a6956b5e.png"
              alt="Petpin AI Mission"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};