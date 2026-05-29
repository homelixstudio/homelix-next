"use client";
import { motion } from "framer-motion";

import aboutHero from "../assets/about-hero.jpg";
import aboutImage from "../assets/about-story.jpg";

const AboutPage = () => {
  return (
    <div className="bg-[#FAF7F2] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[85vh] min-h-[650px] w-full">
        {/* Background Image */}
        <img
          src={aboutHero.src}
          alt="About Homelix Studio"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(25,18,14,0.55)]"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <p className="uppercase tracking-[6px] text-[#F5C396] text-sm font-medium mb-6">
                About Us
              </p>

              <h1 className="text-white text-[46px] md:text-[78px] leading-[1.05] font-bold">
                Designing Spaces
                <br />
                That Feel Premium
              </h1>

              <p className="text-[#EDE6DD] text-[16px] md:text-[18px] leading-9 mt-8 max-w-2xl">
                Homelix Studio creates elegant interiors crafted with modern
                luxury, comfort, and timeless aesthetics for homes that truly
                reflect your lifestyle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-[#D4A373] text-sm font-medium mb-5">
              Our Story
            </p>

            <h2 className="text-[42px] md:text-[58px] leading-[1.1] font-bold text-[#2B2B2B]">
              Designing Homes
              <br />
              With Purpose & Passion
            </h2>

            <p className="text-[#5E5A57] text-[17px] leading-9 mt-8">
              Homelix Studio was built with a vision to transform ordinary
              spaces into timeless luxury interiors crafted for modern living.
            </p>

            <p className="text-[#5E5A57] text-[17px] leading-9 mt-8">
              We focus on creating elegant, functional, and personalized spaces
              that reflect comfort, style, and individuality.
            </p>

            <p className="text-[#5E5A57] text-[17px] leading-9 mt-8">
              From concept planning to final execution, every detail is designed
              with precision, premium aesthetics, and long-lasting quality.
            </p>

            {/* CTA */}
            <a
              href="/#contact"
              className="inline-block mt-10 bg-[#F07167] hover:bg-[#E25C52] text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              Get Free Consultation
            </a>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#E7DED5] rounded-[40px]"></div>

            <img
              src={aboutImage.src}
              alt="Interior Design"
              className="relative rounded-[40px] w-full h-[720px] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="pb-24 md:pb-32 px-6 md:px-10 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="uppercase tracking-[5px] text-[#D4A373] text-sm font-medium mb-5">
              Our Values
            </p>

            <h2 className="text-[42px] md:text-[58px] font-bold text-[#2B2B2B] leading-tight">
              What Makes Us Different
            </h2>

            <p className="text-[#5E5A57] text-[17px] leading-9 mt-8">
              We combine modern luxury aesthetics with thoughtful functionality
              to create interiors that feel timeless, elegant, and deeply
              personal.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-[32px] p-10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="text-5xl mb-7">✨</div>

              <h3 className="text-3xl font-bold text-[#2B2B2B]">
                Modern Luxury
              </h3>

              <p className="text-[#5E5A57] text-[16px] leading-8 mt-6">
                Elegant interiors crafted with premium aesthetics and timeless
                modern design principles.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-[32px] p-10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="text-5xl mb-7">🤝</div>

              <h3 className="text-3xl font-bold text-[#2B2B2B]">
                Client Focused
              </h3>

              <p className="text-[#5E5A57] text-[16px] leading-8 mt-6">
                Every design is personalized according to your lifestyle,
                comfort, vision, and requirements.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-[32px] p-10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="text-5xl mb-7">🏡</div>

              <h3 className="text-3xl font-bold text-[#2B2B2B]">
                End-To-End Service
              </h3>

              <p className="text-[#5E5A57] text-[16px] leading-8 mt-6">
                From concept planning to final execution, we manage every detail
                with precision and care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 md:px-10 pb-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto bg-[#2F241F] rounded-[40px] py-20 px-8 md:px-16 text-center overflow-hidden relative">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4A373]/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-white text-[40px] md:text-[64px] leading-[1.1] font-bold">
              Let’s Create Your
              <br />
              Dream Interior
            </h2>

            <p className="text-[#EDE6DD] text-[17px] leading-9 mt-8 max-w-3xl mx-auto">
              Transform your home into a premium modern space designed for
              luxury, comfort, and timeless living.
            </p>

            <a
              href="/#contact"
              className="inline-block mt-10 bg-[#F07167] hover:bg-[#E25C52] text-white px-10 py-4 rounded-full text-base font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
