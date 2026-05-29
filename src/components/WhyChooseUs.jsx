const WhyChooseUs = () => {
  const features = [
    {
      title: "Affordable Pricing",
      desc: "Luxury interiors designed to fit your budget without compromising quality.",
      icon: "💰",
    },

    {
      title: "Modern Designs",
      desc: "Elegant and stylish interiors crafted with the latest design trends.",
      icon: "✨",
    },

    {
      title: "On-Time Delivery",
      desc: "We ensure smooth execution and timely project completion.",
      icon: "⏰",
    },

    {
      title: "End-to-End Service",
      desc: "From planning to execution, we handle everything for your dream home.",
      icon: "🏡",
    },
  ];

  return (
    <section id="services" className="bg-[#FAF7F2] py-14 md:py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-xs md:text-sm mb-4 font-medium">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-[42px] font-bold text-[#2B2B2B] leading-tight">
            Crafting Beautiful Spaces
            <br />
            With Passion
          </h2>

          <p className="text-[#5E5A57] text-[15px] leading-7 mt-5 max-w-2xl mx-auto">
            We design interiors that blend luxury, comfort, and functionality to
            create timeless modern living experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#F8EFE5] border border-[#E7DED5] flex items-center justify-center text-3xl mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[21px] font-semibold text-[#2B2B2B] mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#5E5A57] text-[15px] leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
