import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#FAF7F2] py-14 md:py-16 px-5 md:px-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-xs md:text-sm mb-4 font-medium">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-[42px] font-bold text-[#2B2B2B] leading-tight">
            Let’s Design Your
            <br />
            Dream Space
          </h2>

          <p className="text-[#5E5A57] text-[15px] leading-7 mt-5 max-w-2xl mx-auto">
            Connect with Homelix Studio for elegant interiors crafted with
            comfort, functionality, and timeless modern luxury.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {/* Left Box */}
          <div className="bg-[#F8EFE5] rounded-2xl p-7 md:p-8 shadow-sm border border-[#E7DED5]">
            <h3 className="text-[30px] font-bold text-[#2B2B2B]">
              Get In Touch
            </h3>

            <p className="text-[#5E5A57] leading-7 text-[15px] mt-5 max-w-lg">
              We would love to hear about your project and help you transform
              your space into something elegant, functional, and truly premium.
            </p>

            <div className="space-y-6 mt-9">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFFDF9] flex items-center justify-center shadow-sm border border-[#E7DED5]">
                  <FaPhoneAlt className="text-[#D4A373] text-[15px]" />
                </div>

                <div>
                  <p className="text-xs text-[#A89F98] mb-1">Phone Number</p>

                  <a
                    href="tel:+919370082830"
                    className="text-[16px] font-semibold text-[#2B2B2B] hover:text-[#D4A373] transition-all duration-300"
                  >
                    +91 9370082830
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFFDF9] flex items-center justify-center shadow-sm border border-[#E7DED5]">
                  <FaEnvelope className="text-[#D4A373] text-[15px]" />
                </div>

                <div>
                  <p className="text-xs text-[#A89F98] mb-1">Email Address</p>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=homelixstudio@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-semibold text-[#2B2B2B] hover:text-[#D4A373] transition-all duration-300"
                  >
                    homelixstudio@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FFFDF9] flex items-center justify-center shadow-sm border border-[#E7DED5]">
                  <FaMapMarkerAlt className="text-[#D4A373] text-[15px]" />
                </div>

                <div>
                  <p className="text-xs text-[#A89F98] mb-1">Location</p>

                  <a
                    href="https://www.google.com/maps/place/Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-semibold text-[#2B2B2B] hover:text-[#D4A373] transition-all duration-300"
                  >
                    Mumbai, India
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#FFFDF9] rounded-2xl p-7 md:p-8 border border-[#E7DED5] shadow-sm">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              {/* Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="45dc8de6-b347-4441-9b9d-f53c52bc5397"
              />

              {/* Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Contact From Homelix Studio"
              />

              {/* Redirect */}
              <input
                type="hidden"
                name="redirect"
                value="https://homelixstudio.in"
              />

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-[#DDD2C7] rounded-xl px-4 py-3.5 outline-none focus:border-[#D4A373] bg-white text-[15px] text-[#2B2B2B] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-[#DDD2C7] rounded-xl px-4 py-3.5 outline-none focus:border-[#D4A373] bg-white text-[15px] text-[#2B2B2B] transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                  Phone Number
                </label>

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full border border-[#DDD2C7] rounded-xl px-4 py-3.5 outline-none focus:border-[#D4A373] bg-white text-[15px] text-[#2B2B2B] transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#2B2B2B] mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Tell us about your project"
                  className="w-full border border-[#DDD2C7] rounded-xl px-4 py-3.5 outline-none focus:border-[#D4A373] bg-white resize-none text-[15px] text-[#2B2B2B] transition-all duration-300"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#F07167] hover:bg-[#E25C52] transition-all duration-300 text-white py-3.5 rounded-xl font-medium text-[15px] shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
