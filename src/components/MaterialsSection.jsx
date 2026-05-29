const materials = [
  {
    title: "Premium Laminates",
    desc: "Elegant finishes with durability, modern textures, and premium aesthetics.",
  },

  {
    title: "Soft-Close Hardware",
    desc: "Smooth premium fittings designed for comfort, functionality, and long-term performance.",
  },

  {
    title: "Quartz & Marble",
    desc: "Luxury countertop and surface materials crafted for timeless elegance.",
  },

  {
    title: "Ambient Lighting",
    desc: "Warm modern lighting concepts designed to enhance mood and interiors.",
  },
];

const MaterialsSection = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-22 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-sm mb-4 font-medium">
            Materials & Finishes
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
            Premium Materials
            <br />
            Crafted For Luxury
          </h2>

          <p className="text-[#5E5A57] text-[15px] md:text-base leading-8 mt-6">
            We use carefully selected materials and premium finishes to create
            interiors that feel elegant, durable, and timeless.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {materials.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-[28px] p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#F8EFE5] border border-[#E7DED5] flex items-center justify-center text-2xl">
                ✨
              </div>

              {/* Title */}
              <h3 className="text-[28px] leading-tight font-bold text-[#2B2B2B] mt-6">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#5E5A57] text-[15px] leading-8 mt-5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
