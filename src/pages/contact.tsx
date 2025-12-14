"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mdkyozvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ from_name: "", reply_to: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ An error occurred. Try again later.");
    }
  };

  return (
    <>
      <Navbar />

      {/* CONTACT PAGE HERO */}
      <section className="relative w-full h-screen md:h-[80vh] flex items-center justify-center text-white font-outfit overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/contact-hero.png"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70"></div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold z-10 drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h1>
      </section>

{/* CONTACT SECTION */}
<section className="bg-white px-4 md:px-20 py-20 font-outfit overflow-hidden">
  <motion.div
    className="flex flex-col md:flex-row gap-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Left: Contact Info */}
    <div className="md:w-1/2 space-y-6 text-gray-700">
      <h2 className="text-2xl font-semibold text-orange-500">Get In Touch</h2>
      <p>
        At <span className="font-bold text-gray-800">Washer Tech</span>, we specialize in repairing and maintaining all laundry equipment. 
        Reach out for repairs, maintenance, advice, or even just a consultation  we’re here to help!
      </p>

      <div className="space-y-4">
        <p>
          <span className="font-semibold">📞 Phone:</span> +263 78 987 4042
        </p>
        <p>
          <span className="font-semibold">📧 Email:</span> washertech830@gmail.com
        </p>
        <p>
          <span className="font-semibold">📍 Address:</span> Belvedere, Harare, Zimbabwe
        </p>
        <p>
          <span className="font-semibold">📘 Facebook:</span> Washer Tech
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 text-orange-500 text-2xl pt-4">
        <Link href="https://www.facebook.com/share/1BnxCjnrB9/">
          <FaFacebook className="hover:text-orange-600 transition-transform hover:scale-110" />
        </Link>
        <Link href="#">
          <FaInstagram className="hover:text-orange-600 transition-transform hover:scale-110" />
        </Link>
        <Link href="#">
          <FaWhatsapp className="hover:text-orange-600 transition-transform hover:scale-110" />
        </Link>
      </div>
    </div>

    {/* Right: Form */}
    <motion.div
      className="md:w-1/2 p-6 md:p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-orange-200 transition-all duration-300 bg-gradient-to-br from-white to-orange-50"
      whileHover={{ scale: 1.02 }}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-semibold text-center text-orange-500">
          Send Us a Message
        </h2>
        <p className="text-gray-500 text-center mb-4">
          We’d love to hear from you whether you need repairs, maintenance, or advice. 
          Fill in your details and we’ll get back to you promptly.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={(e) =>
              setFormData({ ...formData, from_name: e.target.value })
            }
            className="w-full p-3 placeholder-[#66666] border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 hover:shadow-sm"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="reply_to"
            value={formData.reply_to}
            onChange={(e) =>
              setFormData({ ...formData, reply_to: e.target.value })
            }
            className="w-full p-3 border placeholder-[#66666] border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 hover:shadow-sm"
            required
          />

          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 border placeholder-[#66666] border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-orange-500 focus:outline-none transition-all duration-300 resize-none hover:shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Send Message
        </button>

        <p className="text-sm text-center text-gray-500 mt-2 italic">
          {status || "We aim to reply within 24 hours."}
        </p>
      </form>
    </motion.div>
  </motion.div>
</section>


      {/* MAP SECTION */}
      <section className="w-full h-[400px] md:h-[500px] font-outfit">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.744657257856!2d30.9994076153949!3d-17.832845988037623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5bc9d1c2c9f%3A0x5f5d04f4c160b61!2sBelvedere%2C%20Harare!5e0!3m2!1sen!2szw!4v1697959999999!5m2!1sen!2szw"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}
