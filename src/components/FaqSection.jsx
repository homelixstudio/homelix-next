"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do you provide customized interior designs?",
    answer:
      "Yes, every interior is designed according to your lifestyle, preferences, space requirements, and modern aesthetic goals.",
  },

  {
    question: "Do you work with small apartment spaces?",
    answer:
      "Absolutely. We create smart layouts and luxury interiors optimized for both compact and spacious homes.",
  },

  {
    question: "Can I choose materials and finishes?",
    answer:
      "Yes, we help you select premium materials, laminates, textures, lighting, and finishes that match your vision.",
  },

  {
    question: "Do you provide modular kitchen designs?",
    answer:
      "Yes, we design modern modular kitchens focused on functionality, storage optimization, and elegant aesthetics.",
  },

  {
    question: "How does the design process work?",
    answer:
      "Our process includes consultation, space planning, concept development, material selection, and final execution guidance.",
  },
];

const FaqSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#FAF7F2] py-20 md:py-22 px-5 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-sm mb-4 font-medium">
            FAQs
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] leading-tight">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="text-[#5E5A57] text-[15px] md:text-base leading-8 mt-6 max-w-3xl mx-auto">
            Everything you need to know about our modern luxury interior
            services, process, and design approach.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Question */}
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full flex items-center justify-between text-left py-5 px-6"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#2B2B2B] pr-5">
                  {faq.question}
                </h3>

                <div className="text-[#D4A373] text-2xl font-light">
                  {active === index ? "−" : "+"}
                </div>
              </button>

              {/* Answer */}
              {active === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#5E5A57] leading-8 text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
