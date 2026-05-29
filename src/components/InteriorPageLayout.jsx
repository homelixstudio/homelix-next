const InteriorPageLayout = ({
  heroImage,
  image,
  title,
  subtitle,
  description,
}) => {
  return (
    <div className="bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src={heroImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(25,18,14,0.45)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[4px] text-[#F5C396] text-sm mb-5 font-medium">
              Homelix Studio
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>

            <p className="text-[#EDE6DD] text-lg md:text-xl leading-9 mt-8 max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-22 px-5 md:px-8 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="uppercase tracking-[4px] text-[#D4A373] text-sm font-medium mb-4">
                Interior Details
              </p>

              <h2 className="text-4xl md:text-[52px] font-bold text-[#2B2B2B] leading-tight">
                Designed With
                <br />
                Modern Luxury
              </h2>

              <p className="text-[#5E5A57] text-[16px] leading-9 mt-8">
                {description}
              </p>

              {/* Features */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F8EFE5] border border-[#E7DED5] flex items-center justify-center text-[#D4A373] text-sm font-bold">
                    ✓
                  </div>

                  <p className="text-[#5E5A57]">Premium Material Finishes</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F8EFE5] border border-[#E7DED5] flex items-center justify-center text-[#D4A373] text-sm font-bold">
                    ✓
                  </div>

                  <p className="text-[#5E5A57]">Modern Luxury Design</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F8EFE5] border border-[#E7DED5] flex items-center justify-center text-[#D4A373] text-sm font-bold">
                    ✓
                  </div>

                  <p className="text-[#5E5A57]">Smart Space Planning</p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F8EFE5] border border-[#E7DED5] flex items-center justify-center text-[#D4A373] text-sm font-bold">
                    ✓
                  </div>

                  <p className="text-[#5E5A57]">Elegant Lighting Concepts</p>
                </div>
              </div>

              {/* Button */}
              <a
                href="/#contact"
                className="inline-flex items-center justify-center mt-12 bg-[#F07167] hover:bg-[#E25C52] text-white px-8 py-4 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
              </a>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={image}
                alt={title}
                className="w-full aspect-[4/5] object-cover rounded-[28px] shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-[#FFFDF9]/90 backdrop-blur-lg rounded-[24px] px-6 py-5 shadow-xl border border-[#E7DED5]">
                <p className="text-[#2B2B2B] text-lg font-bold">
                  Premium Interiors
                </p>

                <p className="text-[#5E5A57] text-sm mt-1">
                  Modern • Elegant • Timeless
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorPageLayout;
