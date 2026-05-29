import { CheckCircle, ArrowRight } from "lucide-react";

import kitchen1 from "../assets/kitchen-1.jpg";
import kitchen2 from "../assets/kitchen-2.jpg";
import kitchen3 from "../assets/kitchen-3.jpg";
import kitchen4 from "../assets/kitchen-4.jpg";

const features = [
  "Smart modular storage solutions",
  "Soft-close premium cabinets",
  "Quartz & granite countertops",
  "Built-in appliance integration",
  "Premium lighting concepts",
  "Luxury modern finishes",
];

const gallery = [kitchen1, kitchen2, kitchen3, kitchen4];

const KitchenPage = () => {
  return (
    <div className="bg-[#FAF7F2] overflow-hidden">
      {/* HERO */}
      <section className="relative h-[52vh] min-h-[420px] flex items-center">
        <img
          src={kitchen1.src}
          alt="Kitchen Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(25,18,14,0.45)]"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[5px] text-[#F5C396] text-sm mb-5">
              Modular Kitchen
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Modern Kitchens
              <br />
              Built For Luxury
            </h1>

            <p className="text-[#EDE6DD] text-base md:text-lg leading-8 mt-6 max-w-2xl">
              Premium modular kitchens designed with smart functionality,
              elegant aesthetics, and modern storage solutions for everyday
              living.
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
              About Kitchen Design
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
              Elegant Kitchens
              <br />
              Designed To Perform
            </h2>

            <p className="text-[#5E5A57] leading-8 text-[16px] mt-7">
              Our modular kitchens combine intelligent planning, premium
              finishes, modern storage systems, and elegant aesthetics to create
              beautiful functional spaces.
            </p>

            <p className="text-[#5E5A57] leading-8 text-[16px] mt-5">
              Every kitchen is customized according to your cooking habits,
              storage needs, and lifestyle while maintaining timeless luxury
              design.
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
              src={kitchen2.src}
              alt="Luxury Kitchen"
              className="rounded-[28px] w-full aspect-[4/5] object-cover shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-5 -left-5 bg-[#FFFDF9] rounded-[22px] shadow-xl p-5 w-[220px] border border-[#E7DED5]">
              <h3 className="text-3xl font-bold text-[#2B2B2B]">Smart</h3>

              <p className="text-[#5E5A57] mt-2 leading-6 text-sm">
                Modern modular kitchens designed for stylish everyday living.
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
              Kitchen Gallery
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B]">
              Luxury Modular Concepts
            </h2>

            <p className="text-[#5E5A57] leading-8 text-[16px] mt-5">
              Explore modern kitchen interiors designed with premium finishes,
              elegant aesthetics, and smart functionality.
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
                  alt="Kitchen"
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
              Build Your Dream
              <br />
              Modular Kitchen
            </h2>

            <p className="text-[#EDE6DD] text-[16px] leading-8 max-w-3xl mx-auto mt-6">
              Transform your kitchen into a premium modern space designed with
              elegance, smart storage, and timeless luxury.
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

export default KitchenPage;
