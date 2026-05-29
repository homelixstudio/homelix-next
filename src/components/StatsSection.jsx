const stats = [
  {
    number: "100%",
    label: "Personalized Designs",
  },

  {
    number: "Modern",
    label: "Luxury Concepts",
  },

  {
    number: "Smart",
    label: "Space Planning",
  },

  {
    number: "Premium",
    label: "Material Selection",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#2F241F] py-20 md:py-22 px-5 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-sm mb-4 font-medium">
            Why Homelix Studio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Interiors Crafted
            <br />
            With Modern Luxury
          </h2>

          <p className="text-[#EDE6DD]/80 text-[15px] md:text-base leading-8 mt-6">
            Thoughtfully designed interiors focused on elegance, functionality,
            comfort, and timeless aesthetics.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-[#5A4A42] backdrop-blur-md rounded-[28px] p-8 text-center hover:-translate-y-2 hover:border-[#D4A373]/40 transition-all duration-500"
            >
              <h3 className="text-5xl font-bold text-[#D4A373]">
                {item.number}
              </h3>

              <p className="text-[#EDE6DD] text-lg mt-5 leading-8">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
