import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-black text-white font-serif px-6 pt-20 md:pt-24 pb-16 md:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-[#FBD3AF] mb-10 leading-snug">
          Terms & Conditions
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">1. Introduction</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Welcome to Amartarangini Hotel. These Terms and Conditions govern your use of our website,
            services, and facilities. By accessing or using our services, you agree to comply with and
            be bound by these terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">2. Booking Policy</h2>
          <p className="text-gray-300 text-sm leading-relaxed mb-2">
            All bookings are subject to availability. A valid identification document is required
            at the time of check-in. Reservations may require advance payment or credit card guarantee.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            Cancellations made within 48 hours of check-in may be subject to cancellation charges.
            Please refer to your booking confirmation for exact details.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">3. Check-In / Check-Out</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Standard check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late
            check-out requests are subject to availability and may incur additional charges.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">4. Guest Conduct</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Guests are expected to behave respectfully and responsibly. Any actions that cause
            disturbance, damage, or endangerment to others may result in removal from the premises
            without refund and legal consequences if necessary.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">5. Liability Disclaimer</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            The hotel is not responsible for any loss or damage to guests’ belongings unless
            secured in the hotel-provided safe deposit facilities. We are also not liable
            for any accidents, injuries, or loss incurred during your stay unless caused by
            our proven negligence.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">6. Privacy Policy</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We are committed to protecting your privacy. Any personal data collected during your
            booking or stay is stored securely and used only to improve our services.
            We do not share your information with third parties without consent.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl text-[#FBD3AF] mb-4">7. Changes to Terms</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We reserve the right to modify or update these terms at any time. Continued use of our
            website or services after changes indicates your acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-[#FBD3AF] mb-4">8. Contact Us</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            For any queries or concerns regarding these terms, please reach out to us at:
            <br />
            <span className="text-[#FBD3AF]">amtg@gmail.com</span> or call us at <span className="text-[#FBD3AF]">+91 1234567890</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
