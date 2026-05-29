const pricingPlans = [
  {
    name: "Essential",
    price: "₹3.5L",
    description:
      "Perfect for compact homes with elegant interiors and smart functionality.",

    features: [
      "Modular Kitchen",
      "2 Wardrobes",
      "TV Unit",
      "Basic Lighting",
      "Premium Finishes",
    ],

    popular: false,
  },

  {
    name: "Signature",
    price: "₹6L",
    description:
      "Luxury interiors crafted with premium materials and modern aesthetics.",

    features: [
      "Full Home Interiors",
      "Walk-In Wardrobe",
      "False Ceiling",
      "Designer Lighting",
      "Premium Hardware",
    ],

    popular: true,
  },

  {
    name: "Royal Luxe",
    price: "₹12L",
    description:
      "Ultra luxury bespoke interiors designed for premium modern lifestyles.",

    features: [
      "Luxury Design",
      "Italian Finishes",
      "Smart Home Setup",
      "Custom Furniture",
      "Priority Support",
    ],

    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="bg-[#FAF7F2] py-14 md:py-16 px-5 md:px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-xs md:text-sm mb-4 font-medium">
            Pricing Plans
          </p>

          <h2 className="text-3xl md:text-[42px] font-bold text-[#2B2B2B] leading-tight">
            Luxury Interiors
            <br />
            Designed For Every Budget
          </h2>

          <p className="text-[#5E5A57] text-[15px] leading-7 mt-5 max-w-2xl mx-auto">
            Transparent pricing with premium quality, modern design, and
            complete execution support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#FFFDF9] rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular ? "border-[#D4A373] shadow-md" : "border-[#E7DED5]"
              }`}
            >
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4A373] text-white px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-[24px] font-bold text-[#2B2B2B]">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-end gap-2">
                <span className="text-[42px] font-bold text-[#2B2B2B]">
                  {plan.price}
                </span>

                <span className="text-[#A89F98] text-sm mb-1">onwards</span>
              </div>

              {/* Description */}
              <p className="text-[#5E5A57] text-[15px] leading-7 mt-5 min-h-[84px]">
                {plan.description}
              </p>

              {/* Features */}
              <div className="mt-7 space-y-3">
                {plan.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-[#5E5A57] text-[15px]"
                  >
                    <span className="text-[#D4A373] font-bold">✓</span>

                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <a
                href="/#contact"
                className="block text-center mt-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-[#F07167] text-white hover:bg-[#E25C52] hover:shadow-lg"
              >
                Get Free Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
