import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/919370082830"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-[54px] h-[54px] rounded-full bg-[#25D366] flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
    >
      {/* Pulse */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>

      {/* Glow */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 blur-md"></span>

      {/* Icon */}
      <FaWhatsapp className="relative text-white text-[28px]" />
    </a>
  );
};

export default WhatsappButton;
