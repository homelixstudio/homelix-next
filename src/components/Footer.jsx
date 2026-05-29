import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Link from "next/link";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2F241F] text-white pt-14 pb-5 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo.src}
                alt="Homelix Studio"
                className="w-[48px] h-[48px] object-contain"
              />

              <h2 className="text-[28px] md:text-[34px] font-bold text-[#D4A373] leading-none">
                Homelix Studio
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-[#EDE6DD] leading-7 mt-5 text-[15px] max-w-[300px]">
              Transforming ordinary spaces into timeless luxury interiors
              crafted for comfort, elegance, and modern living.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-7">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#5A4A42] flex items-center justify-center text-[#D4A373] hover:bg-[#D4A373] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={14} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919370082830"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#5A4A42] flex items-center justify-center text-[#D4A373] hover:bg-[#D4A373] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp size={14} />
              </a>

              {/* Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=homelixstudio@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#5A4A42] flex items-center justify-center text-[#D4A373] hover:bg-[#D4A373] hover:text-white transition-all duration-300"
              >
                <FaEnvelope size={14} />
              </a>
            </div>
          </div>

          {/* Interiors */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#D4A373] mb-6">
              Interiors
            </h3>

            <ul className="space-y-3 text-[#EDE6DD] text-[15px]">
              <li>
                <a
                  href="/kitchen"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Modular Kitchen
                </a>
              </li>

              <li>
                <a
                  href="/bedroom"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Bedroom Design
                </a>
              </li>

              <li>
                <a
                  href="/living-room"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Living Room
                </a>
              </li>

              <li>
                <a
                  href="/office"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Office Interior
                </a>
              </li>

              <li>
                <a
                  href="/wardrobe"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Luxury Wardrobe
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#D4A373] mb-6">
              Company
            </h3>

            <ul className="space-y-3 text-[#EDE6DD] text-[15px]">
              <li>
                <a
                  href="/about"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/services"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/our-work"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Our Work
                </a>
              </li>

              <li>
                <a
                  href="/#pricing"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="/#contact"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-[18px] font-semibold text-[#D4A373] mb-6">
              Get in Touch
            </h3>

            <div className="space-y-4 text-[#EDE6DD] text-[15px]">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-[#D4A373] text-[13px]" />

                <a
                  href="tel:+919370082830"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  +91 9370082830
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[#D4A373] text-[13px]" />

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=homelixstudio@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5C396] transition-all duration-300 break-all"
                >
                  homelixstudio@gmail.com
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#D4A373] text-[13px]" />

                <a
                  href="https://www.google.com/maps/place/Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F5C396] transition-all duration-300"
                >
                  Mumbai, Maharashtra, India
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#5A4A42] mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A89F98] text-[13px]">
            © 2026 Homelix Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[13px] text-[#A89F98]">
            <Link
              href="/privacy-policy"
              className="hover:text-[#F5C396] transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-condition"
              className="hover:text-[#F5C396] transition-all duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
