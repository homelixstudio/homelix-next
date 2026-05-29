const styles = [
  {
    title: "Modern Luxury",
    desc: "Elegant interiors with premium finishes, warm lighting, and sophisticated detailing.",
  },

  {
    title: "Minimal Contemporary",
    desc: "Clean modern spaces designed with simplicity, functionality, and timeless aesthetics.",
  },

  {
    title: "Warm Elegant",
    desc: "Soft textures, warm tones, and cozy modern interiors crafted for comfort.",
  },

  {
    title: "Scandinavian",
    desc: "Bright, airy interiors focused on simplicity, natural textures, and functionality.",
  },
];

const DesignStyles = () => {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-22 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-sm mb-4 font-medium">
            Design Styles
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
            Interiors Designed
            <br />
            Around Your Style
          </h2>

          <p className="text-[#5E5A57] text-[15px] md:text-base leading-8 mt-6">
            Discover interior styles thoughtfully crafted to match your
            personality, lifestyle, and modern living preferences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {styles.map((style, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-[28px] p-7 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#F8EFE5] flex items-center justify-center text-2xl border border-[#E7DED5]">
                ✨
              </div>

              {/* Title */}
              <h3 className="text-[28px] leading-tight font-bold text-[#2B2B2B] mt-6">
                {style.title}
              </h3>

              {/* Description */}
              <p className="text-[#5E5A57] text-[15px] leading-8 mt-5">
                {style.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignStyles;
