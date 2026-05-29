"use client";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-[#FAF7F2] flex items-center justify-center overflow-hidden"
    >
      {/* Glow 1 */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[260px] h-[260px] bg-[#F5C396] rounded-full blur-3xl"
      ></motion.div>

      {/* Glow 2 */}
      <motion.div
        animate={{
          scale: [1.05, 1.2, 1.05],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[420px] h-[420px] bg-[#F8EFE5] rounded-full blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative text-center px-6">
        {/* Brand */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 25,
            letterSpacing: "6px",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0px",
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="text-[#2B2B2B] text-[34px] md:text-[54px] font-bold"
        >
          Homelix Studio
        </motion.h1>

        {/* Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="h-[2px] bg-[#D4A373] rounded-full mx-auto mt-5"
        ></motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="mt-5 text-[#D4A373] text-[11px] md:text-xs tracking-[4px] uppercase"
        >
          Luxury Interior Studio
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
