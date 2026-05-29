import { CheckCircle, ArrowRight } from "lucide-react";

import bedroom1 from "../assets/bedroom-1.jpg";
import bedroom2 from "../assets/bedroom-2.jpg";
import bedroom3 from "../assets/bedroom-3.jpg";
import bedroom4 from "../assets/bedroom-4.jpg";

const features = [
  "Custom headboard designs",
  "Walk-in wardrobe integration",
  "Ambient & task lighting",
  "Space-saving solutions",
  "Premium upholstery options",
  "Luxury false ceiling concepts",
];

const gallery = [bedroom1, bedroom2, bedroom3, bedroom4];

const BedroomPage = () => {
  return (
    <div className="bg-[#FAF7F2] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[52vh] min-h-[420px] flex items-center">
        <img
          src={bedroom1.src}
          alt="Bedroom Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(25,18,14,0.45)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[5px] text-[#F5C396] text-sm mb-5">
              Bedroom Interiors
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Luxury Bedroom
              <br />
              Designed For Comfort
            </h1>

            <p className="text-[#EDE6DD] text-base md:text-lg leading-8 mt-6 max-w-2xl">
              Elegant bedroom interiors crafted to create peaceful, luxurious,
              and deeply personal spaces for modern living.
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#F07167] hover:bg-[#E25C52] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 md:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="uppercase tracking-[4px] text-[#D4A373] text-sm mb-4">
              About Bedroom Design
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
              Creating Bedrooms
              <br />
              That Feel Luxurious
            </h2>

            <p className="text-[#5E5A57] leading-8 text-[16px] mt-7">
              Your bedroom should feel calm, warm, and deeply comfortable. We
              combine elegant aesthetics, intelligent layouts, premium textures,
              and mood lighting to create a truly luxurious experience.
            </p>

            <p className="text-[#5E5A57] leading-8 text-[16px] mt-5">
              Every bedroom interior is personalized according to your
              lifestyle, storage needs, and comfort preferences while
              maintaining timeless modern elegance.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5 mt-9">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#D4A373] mt-1" />

                  <p className="text-[#5E5A57] leading-7 text-[15px]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={bedroom2.src}
              alt="Luxury Bedroom"
              className="rounded-[28px] w-full aspect-[4/5] object-cover shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-5 bg-[#FFFDF9] rounded-[22px] shadow-xl p-5 w-[220px] border border-[#E7DED5]">
              <h3 className="text-3xl font-bold text-[#2B2B2B]">Modern</h3>

              <p className="text-[#5E5A57] mt-2 leading-6 text-sm">
                Personalized luxury bedroom interiors designed for elegant
                living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-16 px-6 md:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[4px] text-[#D4A373] text-sm mb-4">
              Bedroom Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B]">
              Elegant Modern Spaces
            </h2>

            <p className="text-[#5E5A57] leading-8 text-[16px] mt-5">
              Explore premium bedroom concepts crafted with modern luxury,
              comfort, and timeless aesthetics.
            </p>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-7 mt-14">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[24px] shadow-lg"
              >
                <img
                  src={image.src}
                  alt="Bedroom"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 px-6 md:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto bg-[#2F241F] rounded-[32px] px-8 md:px-10 py-14 text-center relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#D4A373]/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <p className="uppercase tracking-[4px] text-[#F5C396] text-sm mb-4">
              Start Your Project
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Let’s Design Your
              <br />
              Dream Bedroom
            </h2>

            <p className="text-[#EDE6DD] text-[16px] leading-8 max-w-3xl mx-auto mt-6">
              Transform your bedroom into a premium modern retreat designed with
              comfort, elegance, and timeless luxury.
            </p>

            <a
              href="/#contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#F07167] hover:bg-[#E25C52] text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              Get Free Consultation
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BedroomPage;
