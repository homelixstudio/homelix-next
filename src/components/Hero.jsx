import Link from "next/link";
import Image from "next/image";
import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src={heroImage}
        alt="Luxury Interior"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-5 md:px-8 w-full">
          <div className="max-w-2xl pt-20 md:pt-14">
            {/* Small Text */}
            <p className="text-[#D4A373] uppercase tracking-[4px] text-[11px] md:text-xs mb-5 font-medium">
              Luxury Interior Studio
            </p>

            {/* Heading */}
            <h1 className="text-[34px] sm:text-[46px] md:text-[58px] leading-[1.05] font-bold text-white">
              Designing Spaces
              <br />
              That Feel Like Home
            </h1>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-gray-200 leading-7 mt-6 max-w-xl">
              We create elegant, functional, and modern interiors tailored to
              your lifestyle, comfort, and personality with timeless luxury and
              smart modern design.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              {/* Consultation */}
              <a
                href="/#contact"
                className="bg-[#D4A373] hover:bg-[#BE8C5A] text-[#2F241F] px-6 py-3 rounded-full text-sm font-semibold shadow-lg transition-all duration-300 text-center"
              >
                Get Free Consultation
              </a>

              {/* Explore */}
              <Link
                href="/our-work"
                className="border border-white/40 hover:bg-white hover:text-[#2F241F] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 text-center"
              >
                Explore Designs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
