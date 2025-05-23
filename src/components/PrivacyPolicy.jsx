import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white font-serif px-6 pt-20 md:pt-24 pb-16 md:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] mb-10 leading-snug">
          Privacy Policy
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">1. Introduction</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Amartarangini Hotel is committed to protecting your personal data and privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website, services, and facilities.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">2. Information We Collect</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We may collect the following personal information:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300 space-y-1">
            <li>Name, phone number, and email address</li>
            <li>Booking and stay information</li>
            <li>Payment details (processed securely via third-party gateway)</li>
            <li>IP address and browsing behavior on our site</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            The information we collect is used to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300 space-y-1">
            <li>Confirm and manage your reservations</li>
            <li>Send booking-related notifications and service updates</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Comply with legal obligations and protect our property</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">4. Data Security</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We implement reasonable administrative and technical safeguards to protect your data from unauthorized access, loss, or misuse. Sensitive information like payment details is encrypted and handled through secure gateways.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">5. Data Sharing</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We do not sell, rent, or trade your personal information. Data may only be shared with trusted third-party service providers involved in delivering our services (e.g., payment processors), and only to the extent necessary.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">6. Cookies & Tracking</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We use cookies to personalize your experience, analyze traffic, and improve performance. You may disable cookies in your browser settings, but this may limit functionality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">7. Your Rights</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-300 space-y-1">
            <li>Request access to your data</li>
            <li>Ask for corrections or deletions</li>
            <li>Withdraw consent at any time</li>
            <li>Opt-out of non-essential communications</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">8. Changes to This Policy</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We reserve the right to update this Privacy Policy at any time. The updated version will be posted on our website with the revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-[#FBD3AF] mb-4">9. Contact Us</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            If you have any questions regarding this policy, please contact us at:
            <br />
            <span className="text-[#FBD3AF]">amtg@gmail.com</span> or call <span className="text-[#FBD3AF]">+91 1234567890</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
