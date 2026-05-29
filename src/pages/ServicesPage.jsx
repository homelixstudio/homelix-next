import bedroom from "../assets/bedroom.jpg";
import kitchen from "../assets/kitchen.jpg";
import office from "../assets/office.jpg";
import livingroom from "../assets/livingroom.jpg";

const services = [
  {
    title: "Living Room Interior",
    image: livingroom,
    description:
      "Elegant living spaces designed with comfort, luxury, and modern aesthetics.",
  },

  {
    title: "Bedroom Design",
    image: bedroom,
    description:
      "Peaceful and stylish bedroom interiors tailored to your lifestyle.",
  },

  {
    title: "Modular Kitchen",
    image: kitchen,
    description:
      "Smart modular kitchens crafted for functionality and premium looks.",
  },

  {
    title: "Office Interior",
    image: office,
    description:
      "Professional and modern office interiors designed for productivity.",
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-[#FAF7F2] min-h-screen pt-24 pb-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-xs md:text-sm mb-4 font-medium">
            Our Services
          </p>

          <h1 className="text-3xl md:text-[42px] font-bold text-[#2B2B2B] leading-tight">
            Premium Interior
            <br />
            Design Services
          </h1>

          <p className="text-[#5E5A57] text-[15px] leading-7 mt-5 max-w-2xl mx-auto">
            We create elegant interiors that combine luxury, functionality, and
            timeless modern design.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#E7DED5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-[26px] font-bold text-[#2B2B2B] leading-snug">
                  {service.title}
                </h2>

                <p className="text-[#5E5A57] text-[15px] leading-7 mt-4">
                  {service.description}
                </p>

                {/* Button */}
                <a
                  href="/#contact"
                  className="inline-block mt-6 bg-[#F07167] hover:bg-[#E25C52] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md"
                >
                  Get Consultation
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
