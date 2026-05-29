const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We understand your vision, lifestyle, and project requirements.",
    },

    {
      number: "02",
      title: "Design Planning",
      description:
        "Luxury concepts and smart layouts crafted specially for your space.",
    },

    {
      number: "03",
      title: "Execution",
      description:
        "Our experts bring your dream interiors to reality with perfection.",
    },

    {
      number: "04",
      title: "Final Delivery",
      description: "Premium finishing and complete handover with satisfaction.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#FAF7F2] py-14 md:py-16 px-5 md:px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-xs md:text-sm mb-4 font-medium">
            Our Process
          </p>

          <h2 className="text-3xl md:text-[42px] font-bold text-[#2B2B2B] leading-tight">
            Simple Process
            <br />
            Premium Results
          </h2>

          <p className="text-[#5E5A57] text-[15px] leading-7 mt-5 max-w-2xl mx-auto">
            From planning to execution, we ensure a smooth and seamless luxury
            interior experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] border border-[#E7DED5] rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Number */}
              <div className="text-[#D4A373] text-4xl font-bold">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-semibold text-[#2B2B2B] mt-5">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#5E5A57] text-[15px] leading-7 mt-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
