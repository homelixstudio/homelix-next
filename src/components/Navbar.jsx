"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showSolidNavbar = pathname !== "/" || scrolled;
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showSolidNavbar
          ? "bg-[#2F241F]/80 backdrop-blur-xl border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-14">
        <div className="h-[86px] grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="justify-self-start">
            <Link href="/" className="flex items-center gap-3">
              <img
                src={logo.src}
                alt="Homelix Studio"
                className="w-8 h-8 object-contain"
              />

              <span className="text-[28px] md:text-[30px] font-bold text-[#D4A373] tracking-[-0.5px]">
                Homelix Studio
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-center gap-6 text-[15px] font-medium text-white">
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#D4A373] transition-all duration-300">
                Interiors
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-[44px] left-0 w-[250px] bg-[#FFFDF9] rounded-[24px] border border-[#E7DED5] shadow-2xl overflow-hidden transition-all duration-300 ${
                  dropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <Link
                  href="/living-room"
                  className="block px-6 py-4 text-[#2B2B2B] hover:bg-[#F8EFE5]"
                >
                  Living Room
                </Link>

                <Link
                  href="/bedroom"
                  className="block px-6 py-4 text-[#2B2B2B] hover:bg-[#F8EFE5]"
                >
                  Bedroom
                </Link>

                <Link
                  href="/kitchen"
                  className="block px-6 py-4 text-[#2B2B2B] hover:bg-[#F8EFE5]"
                >
                  Modular Kitchen
                </Link>

                <Link
                  href="/wardrobe"
                  className="block px-6 py-4 text-[#2B2B2B] hover:bg-[#F8EFE5]"
                >
                  Wardrobe
                </Link>

                <Link
                  href="/office"
                  className="block px-6 py-4 text-[#2B2B2B] hover:bg-[#F8EFE5]"
                >
                  Home Office
                </Link>

                <Link
                  href="/dining"
                  className="block px-6 py-4 text-[#2B2B2B] hover:bg-[#F8EFE5]"
                >
                  Dining Room
                </Link>
              </div>
            </li>

            <li>
              <Link
                href="/our-work"
                className="whitespace-nowrap hover:text-[#D4A373] transition-all duration-300"
              >
                Our Work
              </Link>
            </li>

            <li>
              <a
                href="/#process"
                className="hover:text-[#D4A373] transition-all duration-300"
              >
                Process
              </a>
            </li>

            <li>
              <a
                href="/#pricing"
                className="hover:text-[#D4A373] transition-all duration-300"
              >
                Pricing
              </a>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-[#D4A373] transition-all duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <a
                href="/#contact"
                className="hover:text-[#D4A373] transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden md:flex justify-self-end">
            <a
              href="/#contact"
              className="flex items-center justify-center bg-[#D4A373] hover:bg-[#BE8C5A] text-[#2F241F] px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden justify-self-end text-[#D4A373] text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFDF9] border-t border-[#E7DED5] shadow-xl">
          <div className="px-6 py-6">
            <div className="space-y-5 text-[#5E5A57] font-medium">
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between w-full"
                >
                  Interiors
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {dropdownOpen && (
                  <div className="flex flex-col gap-4 mt-4 ml-4 text-sm">
                    <Link href="/living-room">Living Room</Link>
                    <Link href="/bedroom">Bedroom</Link>
                    <Link href="/kitchen">Modular Kitchen</Link>
                    <Link href="/wardrobe">Wardrobe</Link>
                    <Link href="/office">Home Office</Link>
                    <Link href="/dining">Dining Room</Link>
                  </div>
                )}
              </div>

              <Link href="/our-work">Our Work</Link>
              <a href="/#process">Process</a>
              <a href="/#pricing">Pricing</a>
              <Link href="/about">About</Link>
              <a href="/#contact">Contact</a>

              <a
                href="/#contact"
                className="block text-center bg-[#D4A373] hover:bg-[#BE8C5A] text-[#2F241F] py-3 rounded-full font-semibold mt-4 transition-all duration-300"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
