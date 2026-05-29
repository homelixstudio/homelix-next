const PrivacyPolicy = () => {
  return (
    <section className="bg-[#FAF7F2] min-h-screen pt-24 pb-16 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="uppercase tracking-[4px] text-[#D4A373] text-xs md:text-sm mb-4 font-medium">
            Legal
          </p>

          <h1 className="text-3xl md:text-[42px] font-bold text-[#2B2B2B] leading-tight">
            Privacy Policy
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[#5E5A57] leading-7 text-[15px]">
          {/* 1 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              1. Introduction
            </h2>

            <p>
              Homelix Studio values your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, store, and safeguard your information when you visit
              our website or use our services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              2. Information We Collect
            </h2>

            <p>We may collect the following information:</p>

            <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-[#D4A373]">
              <li>Full name</li>

              <li>Phone number</li>

              <li>Email address</li>

              <li>Location details</li>

              <li>Project requirements</li>

              <li>Communication preferences</li>

              <li>Website usage data</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              3. How We Use Your Information
            </h2>

            <p>Your information may be used to:</p>

            <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-[#D4A373]">
              <li>Provide interior design consultations</li>

              <li>Share quotations and project updates</li>

              <li>Improve customer experience</li>

              <li>Respond to inquiries and support requests</li>

              <li>Enhance website functionality</li>

              <li>Communicate offers or service updates</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              4. Data Protection
            </h2>

            <p>
              We take reasonable technical and organizational measures to
              protect your information against unauthorized access, misuse,
              loss, disclosure, or alteration.
            </p>

            <p className="mt-4">
              However, no online platform or internet transmission can be
              guaranteed completely secure.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              5. Third-Party Sharing
            </h2>

            <p>
              Homelix Studio does not sell, rent, or trade your personal
              information.
            </p>

            <p className="mt-4">
              Information may only be shared when necessary with:
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-[#D4A373]">
              <li>Project vendors or contractors</li>

              <li>Payment providers</li>

              <li>Legal authorities when required by law</li>

              <li>Website or analytics service providers</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              6. Cookies & Analytics
            </h2>

            <p>
              Our website may use cookies, analytics tools, and tracking
              technologies to improve website performance, analyze traffic, and
              enhance user experience.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              7. External Links
            </h2>

            <p>
              Our website may contain links to external websites, social media
              platforms, or third-party services. Homelix Studio is not
              responsible for the privacy practices or content of such
              third-party websites.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              8. User Rights
            </h2>

            <p>
              You may request access, correction, or deletion of your personal
              information by contacting us directly.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              9. Policy Updates
            </h2>

            <p>
              Homelix Studio reserves the right to update or modify this Privacy
              Policy at any time without prior notice.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              10. Limitation of Liability
            </h2>

            <p>
              Homelix Studio shall not be liable for damages, data breaches,
              unauthorized access, or losses caused by:
            </p>

            <ul className="list-disc pl-5 mt-3 space-y-2 marker:text-[#D4A373]">
              <li>Cyber attacks</li>

              <li>Third-party platforms</li>

              <li>Technical failures</li>

              <li>Internet disruptions</li>

              <li>Unauthorized external access</li>
            </ul>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              11. Jurisdiction
            </h2>

            <p>
              This Privacy Policy shall be governed under the laws of India. Any
              disputes shall be subject to the jurisdiction of Mumbai courts.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-[24px] font-semibold text-[#2B2B2B] mb-3">
              12. Contact Information
            </h2>

            <div className="space-y-2">
              <p>📞 +91 9370082830</p>

              <p>✉️ homelixstudio@gmail.com</p>

              <p>📍 Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
