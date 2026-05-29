import livingroom from "../assets/livingroom.jpg";
import bedroom from "../assets/bedroom.jpg";
import office from "../assets/office.jpg";
import wardrobe from "../assets/wardrobe.jpg";
import kitchen from "../assets/kitchen.jpg";
import dining from "../assets/dining.jpg";

const projects = [
  {
    title: "Luxury Living Room",
    image: livingroom,
    desc: "Elegant living spaces designed with warmth and timeless aesthetics.",
  },

  {
    title: "Modern Bedroom",
    image: bedroom,
    desc: "Comfortable and stylish bedrooms crafted for peaceful living.",
  },

  {
    title: "Office Interior",
    image: office,
    desc: "Professional interiors designed for productivity and elegance.",
  },

  {
    title: "Luxury Wardrobe",
    image: wardrobe,
    desc: "Premium wardrobe spaces with modern storage solutions.",
  },

  {
    title: "Modern Kitchen",
    image: kitchen,
    desc: "Functional modular kitchens with premium modern finishes.",
  },

  {
    title: "Dining Space",
    image: dining,
    desc: "Beautiful dining interiors designed for comfort and gatherings.",
  },
];

const OurWork = () => {
  return (
    <section className="bg-[#FAF7F2] py-24 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-sm font-medium mb-4">
            Our Work
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
            Spaces Crafted
            <br />
            With Modern Luxury
          </h2>

          <p className="text-[#5E5A57] text-[15px] md:text-base leading-8 mt-6">
            Explore premium interiors thoughtfully designed to blend elegance,
            comfort, and functionality for modern living.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group bg-[#FFFDF9] rounded-[32px] overflow-hidden border border-[#E7DED5] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-7 md:p-8 min-h-[170px] flex flex-col">
                <h3 className="text-[28px] leading-tight font-bold text-[#2B2B2B]">
                  {item.title}
                </h3>

                <p className="text-[#5E5A57] text-[15px] leading-7 mt-4">
                  {item.desc}
                </p>

                {/* Button */}
                <a
                  href="/#contact"
                  className="mt-6 inline-flex items-center justify-center bg-[#F07167] hover:bg-[#E25C52] text-white px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 w-fit"
                >
                  View Design
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
