"use client";
import React, { useState } from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  // ---- Handle Formspree Submission ----
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData();
    formData.append("email", email);

    try {
      const response = await fetch("https://formspree.io/f/xovyqwza", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Successfully subscribed! Check your inbox.");
        setEmail("");
        form.reset();
      } else {
        setStatus("❌ Subscription failed. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* --- Background Image --- */}
      <div className="absolute inset-0">
        <Image
          src="/footer-bg.png"
          alt="Footer Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      {/* --- Main Footer Content --- */}
      <div className="relative z-10 px-6 md:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* --- Logo Section --- */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/logo.png" alt="Washer Tech Logo" width={45} height={45} />
            <h3 className="text-orange-500 font-bold text-xl">Washer Tech</h3>
          </div>

          <p className="text-gray-200 text-sm mb-4 leading-relaxed">
            Your trusted partner in professional laundry appliance care 
            repairing, maintaining, and extending the life of your washers and dryers.
          </p>

          <p className="text-sm">📍 Belvedere, Harare, Zimbabwe</p>
          <p className="text-sm">📞 078 987 4042</p>
          <p className="text-sm">✉️ washertech830@gmail.com</p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* --- Services --- */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-4 text-lg">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Washer Repair</li>
            <li>Tumble Dryer Repair</li>
            <li>Installation & Maintenance</li>
            <li>Same Day Service</li>
          </ul>
        </div>

        {/* --- Customer Support --- */}
        <div>
          <h4 className="text-orange-500 font-semibold mb-4 text-lg">Customer Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Warranty Info</li>
            <li>Troubleshooting Tips</li>
            <li>Service Areas</li>
            <li>Privacy Policy</li>
          </ul>

          <div className="mt-5">
            <h4 className="text-orange-500 font-semibold mb-2 text-lg">
              Opening Hours
            </h4>

            <p className="text-sm">Mon – Thu: 24 Hours</p>
            <p className="text-sm">Friday: Closed</p>
            <p className="text-sm">Sat – Sun: 24 Hours</p>
          </div>
        </div>
      </div>

      {/* --- Subscribe Section --- */}
      <div className="relative z-10 bg-white mx-4 md:mx-32 rounded-lg shadow-lg px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between -mt-8">

        <p className="text-gray-800 text-sm md:text-base mb-4 md:mb-0 font-medium">
          Subscribe to get updates or repair tips
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md outline-none text-gray-700 focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-2 rounded-md font-semibold shadow-md"
          >
            Subscribe
          </button>
        </form>

        {status && (
          <p className="text-sm mt-3 md:mt-0 md:ml-4 text-gray-800">{status}</p>
        )}
      </div>

      {/* --- Bottom Bar --- */}
      <div className="relative z-10 bg-orange-500 text-center py-3 mt-12 text-sm">
        © 2025 Washer Tech. All Rights Reserved. Website by{" "}
        <span className="font-semibold">IDEANOLOGY</span>
      </div>
    </footer>
  );
};

export default Footer;
