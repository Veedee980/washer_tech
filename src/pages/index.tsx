"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    from_name: "",
    phone: "",
    appliance: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xovyqwza", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Request sent successfully!");
        setFormData({
          from_name: "",
          phone: "",
          appliance: "",
          email: "",
          message: "",
        });
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

      <main className="relative flex flex-col md:flex-row items-center justify-between bg-[url('/back-bg.jpg')] bg-cover bg-center text-white min-h-screen">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Left Section */}
        <div className="relative z-10 px-8 md:px-16 py-20 max-w-xl">
          <p className="text-gray-200 mb-3 text-sm md:text-base font-chilax">
            Fast, affordable, and reliable washer repair and maintenance for
            homes and laundromats across Zimbabwe.
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Trusted Specialists In <br />
            <span className="text-orange-400">
              Laundry Equipment Repairs
            </span>
          </h1>

          <div className="flex space-x-4">
            <Link href="/contact">
              <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-orange-600 transition">
                Contact
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-orange-400 text-orange-400 font-semibold px-6 py-2 rounded-md hover:bg-orange-400 hover:text-white transition">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>

        {/* Right Form */}
        <div className="relative z-10 bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-8 m-8 w-full md:w-96">
          <h2 className="text-lg font-bold text-orange-500 mb-4 text-center">
            Request A Technician
          </h2>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg p-5 space-y-4 text-black shadow-md"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Full Name........"
              value={formData.from_name}
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
              className="w-full p-3 rounded-md border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number........"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full p-3 rounded-md border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />

            <input
              type="text"
              name="appliance"
              placeholder="Appliance Type........"
              value={formData.appliance}
              onChange={(e) =>
                setFormData({ ...formData, appliance: e.target.value })
              }
              className="w-full p-3 rounded-md border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email........"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 rounded-md border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />

            <textarea
              name="message"
              placeholder="Problem Description........"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 rounded-md border border-gray-200 placeholder-gray-400 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              required
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md shadow-md transition"
            >
              Submit Request
            </button>

            <p className="text-sm mt-2 text-center text-gray-600 italic">
              {status}
            </p>
          </form>
        </div>
      </main>
{/* ABOUT COMPANY SECTION */}
<section className="max-w-6xl mx-auto mt-10 border-2 border-orange-400 rounded-lg p-6 md:p-8 bg-white">
  {/* Heading */}
  <h2 className="text-center text-orange-500 text-2xl md:text-3xl font-bold mb-6">
    About Our Company
  </h2>
{/* Tabs */}
<div className="flex justify-center mb-8 overflow-x-auto px-4">
  <div className="flex space-x-2 bg-gray-200 rounded-md px-2 py-2 min-w-max">
    <span className="bg-gray-600 text-white ml-7 px-4 py-1 rounded-md text-sm font-semibold whitespace-nowrap">
      Professional
    </span>
    <span className="bg-gray-600 text-white px-4 py-1 rounded-md text-sm font-semibold whitespace-nowrap">
      Affordable
    </span>
    <span className="bg-gray-600 text-white px-4 py-1 rounded-md text-sm font-semibold whitespace-nowrap">
      Efficient
    </span>
    <span className="bg-gray-600 text-white px-4 py-1 rounded-md text-sm font-semibold whitespace-nowrap">
      Trusted
    </span>
  </div>
</div>


  {/* Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left - Text */}
    <div>
      <h3 className="text-orange-500 text-xl md:text-2xl font-bold mb-3">
        Your Local Laundry Equipment Repair Experts
      </h3>
      <p className="text-gray-700 mb-6 leading-relaxed">
        At <span className="font-semibold">Washer Tech</span>, we specialize in repairing and maintaining all laundry equipment. 
        From washers and dryers to spin machines and ironers, we ensure your laundry runs smoothly with fast, reliable, and professional service across Zimbabwe.
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        <li className="flex items-center gap-2 text-gray-700">
          <span className="text-orange-500 text-lg">⚙️</span> Expert Technicians
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <span className="text-orange-500 text-lg">🧰</span> Quality Repairs
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <span className="text-orange-500 text-lg">💰</span> Transparent Pricing
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <span className="text-orange-500 text-lg">✅</span> Guaranteed Service
        </li>
      </ul>

      {/* Button */}
      <Link href="/about">
        <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Learn More
        </button>
      </Link>
    </div>

    {/* Right - Image */}
    <div className="flex justify-center md:justify-end">
      <Image
        width={400}
        height={300}
        src="/repair.png"
        alt="Technician repairing washing machine"
        className="rounded-md shadow-md max-w-full h-auto border-2 border-orange-400"
      />
    </div>
  </div>
</section>

{/* FEATURED SERVICES */}
<section className="max-w-6xl mx-auto mt-12 bg-white rounded-lg shadow-sm p-6 md:p-8">
  {/* Heading */}
  <h2 className="text-center text-orange-500 text-2xl md:text-3xl font-bold mb-8">
    Featured Services
  </h2>

{/* Service Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {/* Card 1 */}
  <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:shadow-lg transition">
    <div className="w-full h-48 flex items-center justify-center bg-white">
      <Image
        src="/dryer.png"
        width={300}
        height={150}
        alt="Dryer Repair"
        className="object-contain max-h-full"
      />
    </div>
    <div className="bg-white p-4 border-t-4 border-orange-400">
      <h3 className="text-orange-500 font-bold text-md mb-2">Dryer Repair</h3>
      <p className="text-gray-700 text-sm">
        We fix heating issues, drum problems, noise and power faults.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:shadow-lg transition">
    <div className="w-full h-48 flex items-center justify-center bg-white">
      <Image
        src="/dishwasher.jpg"
        width={300}
        height={150}
        alt="Dishwasher Repair"
        className="object-contain max-h-full"
      />
    </div>
    <div className="bg-white p-4 border-t-4 border-orange-400">
      <h3 className="text-orange-500 font-bold text-md mb-2">Dishwasher Repair</h3>
      <p className="text-gray-700 text-sm">
        Let us handle leaks, drainage issues, and power faults.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 hover:shadow-lg transition">
    <div className="w-full h-48 flex items-center justify-center bg-white">
      <Image
        src="/washer.jpeg"
        width={200}
        height={200}
        alt="Washing Machine Repair"
        className="object-contain max-h-full"
      />
    </div>
    <div className="bg-white p-4 border-t-4 border-orange-400">
      <h3 className="text-orange-500 font-bold text-md mb-2">Washing Machine Repair</h3>
      <p className="text-gray-700 text-sm">
        We fix leaks, spin issues, noise and power faults.
      </p>
    </div>
  </div>
</div>
</section>

<section className="max-w-6xl mx-auto mt-12 bg-white rounded-lg shadow-sm p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Left Side - Image */}
    <div>
      <Image
        src="/technician.png"
        width={300}
        height={500}
        alt="Technician fixing washing machine"
        className="rounded-lg shdadow-md w-full h-auto object-cover"
      />
    </div>

    {/* Right Side - Content */} 
    <div>
      <h2 className="text-orange-500 text-2xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        We are more than just repair technicians; we are your trusted laundry
        partners. Whether at home or in your business, our goal is to keep your
        washers, dryers, and laundry systems running at their best quickly,
        safely, and affordably.
      </p>

      {/* Feature Boxes */}
      <div className="space-y-3 mb-6">
        <div className="border border-gray-300 rounded-md p-3 hover:shadow-sm transition">
          <h3 className="text-orange-500 font-semibold text-md mb-1">
            We Come to You
          </h3>
          <p className="text-gray-700 text-sm">
            Enjoy the convenience of our mobile repair service. No need to carry
            heavy machines—our team brings your washer to us. Fast, flexible, and
            hassle free.
          </p>
        </div>

        <div className="border border-gray-300 rounded-md p-3 hover:shadow-sm transition">
          <h3 className="text-orange-500 font-semibold text-md mb-1">
            Skilled Technicians
          </h3>
          <p className="text-gray-700 text-sm">
            Our trained professionals are equipped with the highest tools and
            experience to handle any washer and dryer brands, ensuring precision
            and long lasting repairs.
          </p>
        </div>

        <div className="border border-gray-300 rounded-md p-3 hover:shadow-sm transition">
          <h3 className="text-orange-500 font-semibold text-md mb-1">
            Transparent Pricing
          </h3>
          <p className="text-gray-700 text-sm">
            No hidden costs, no surprises. Every job comes with a clear quote and
            detailed explanation from start to finish.
          </p>
        </div>

        <div className="border border-gray-300 rounded-md p-3 hover:shadow-sm transition">
          <h3 className="text-orange-500 font-semibold text-md mb-1">
            Guaranteed Workmanship
          </h3>
          <p className="text-gray-700 text-sm">
            We stand behind each repair with guaranteed quality and dependable
            after care support because your satisfaction means the most.
          </p>
        </div>
      </div>

      {/* Button */}
      <Link href="/contact"><button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-600 transition">
        Book With Washer Tech Today
      </button></Link>
    </div>
  </div>
</section>
<section
  className="relative bg-[url(/repair.png)] bg-cover bg-center text-white py-12"
  // replace with your actual background image
>
  {/* Overlay */}
 <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/60 to-black/80"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-8 px-6">
    {/* Stat 1 */}
    <div>
      <div className="flex justify-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L15 11.75M11.25 6.75l5.25 5.25m-8.25 5.25h3.75m1.5 0h3.75M12 3v1.5m0 15V21m9-9h-1.5m-15 0H3"
          />
        </svg>
      </div>
      <h3 className="text-orange-500 font-bold text-xl">300+</h3>
      <p className="text-gray-200 text-sm">Repairs Completed</p>
    </div>

    {/* Stat 2 */}
    <div>
      <div className="flex justify-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-orange-500 font-bold text-xl">10+</h3>
      <p className="text-gray-200 text-sm">Years Experience</p>
    </div>

    {/* Stat 3 */}
    <div>
      <div className="flex justify-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 9l-3 3m0 0l-3-3m3 3V4m0 8v8m0 0H6m6 0h6"
          />
        </svg>
      </div>
      <h3 className="text-orange-500 font-bold text-xl">95%</h3>
      <p className="text-gray-200 text-sm">Customer Satisfaction</p>
    </div>

    {/* Stat 4 */}
    <div>
      <div className="flex justify-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-orange-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.66-9a8.001 8.001 0 01-15.32 0M4.34 11a8.001 8.001 0 0115.32 0"
          />
        </svg>
      </div>
      <h3 className="text-orange-500 font-bold text-xl">24Hr</h3>
      <p className="text-gray-200 text-sm">Turnaround</p>
    </div>
  </div>
</section>
<section className="bg-white py-12 px-6 md:px-20">
  {/* Section Title */}
  <h2 className="text-center text-orange-500 font-bold text-xl mb-2">
    What Our Customers Say
  </h2>
  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
    We are proud to earn the trust of homeowners across Zimbabwe. Here’s what some of our happy customers have to say about their Washer Tech experience:
  </p>

  {/* Testimonials */}
  <div className="grid md:grid-cols-2 gap-8 mb-12">
    {/* Testimonial 1 */}
    <div className="bg-gray-100 shadow-md rounded-lg p-6">
      <p className="text-gray-700 mb-4">
        “Washer Tech saved me! My washing machine had stopped spinning and they diagnosed the problem quickly. The technician was professional, reliable, and courteous  truly five star service!”
      </p>
      <div className="flex items-center space-x-4">
        <Image
          width={50}
          height={50}
          src="/client.jpg"
          alt="Client 1"
          className="w-12 h-12 rounded-full border-2 border-orange-500"
        />
        <div>
          <h3 className="text-orange-500 font-semibold">Clients Testimonials</h3>
          <p className="text-sm text-gray-500">Client Testimonials</p>
          <div className="text-orange-500 text-sm mt-1">★★★★★</div>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-gray-100 shadow-md rounded-lg p-6">
      <p className="text-gray-700 mb-4">
        “Excellent service from start to finish! Washer Tech repaired my dryer faster than other companies tried to fix it. The technician was punctual, friendly, and made sure everything worked perfectly before leaving. I’ll definitely call them again!”
      </p>
      <div className="flex items-center space-x-4">
        < Image
          width={50}
          height={50}
          src="/client1.png"
          alt="Client 2"
          className="w-12 h-12 rounded-full border-2 border-orange-500"
        />
        <div>
          <h3 className="text-orange-500 font-semibold">Clients Testimonials</h3>
          <p className="text-sm text-gray-500">Client Testimonials</p>
          <div className="text-orange-500 text-sm mt-1">★★★★★</div>
        </div>
      </div>
    </div>
  </div>

  {/* Brands We Repair */}
  <h3 className="text-center text-orange-500 font-bold text-lg mb-6">
    Brands We Repair
  </h3>

<div className="overflow-hidden relative w-full py-6">
  <div className="flex animate-scroll space-x-16">
    <Image width={200} height={100} src="/smeg.png" alt="Smeg" className="h-10 object-contain" />
    <Image width={200} height={100} src="/electrolux.png" alt="Electrolux" className="h-10 object-contain" />
    <Image width={200} height={100} src="/panasonic.png" alt="Panasonic" className="h-10 object-contain" />
    <Image width={200} height={100} src="/bosch.png" alt="Bosch" className="h-10 object-contain" />
    <Image width={200} height={100} src="/samsung.png" alt="Samsung" className="h-10 object-contain" />
    <Image width={200} height={100} src="/whirlpool.png" alt="Whirlpool" className="h-10 object-contain" />
    {/* Duplicate for smooth infinite scroll */}
    <Image width={200} height={100} src="/smeg.png" alt="Smeg" className="h-10 object-contain" />
    <Image width={200} height={100} src="/electrolux.png" alt="Electrolux" className="h-10 object-contain" />
    <Image width={200} height={100} src="/panasonic.png" alt="Panasonic" className="h-10 object-contain" />
    <Image width={200} height={100} src="/bosch.png" alt="Bosch" className="h-10 object-contain" />
    <Image width={200} height={100} src="/samsung.png" alt="Samsung" className="h-10 object-contain" />
    <Image width={200} height={100} src="/whirlpool.png" alt="Whirlpool" className="h-10 object-contain" />
  </div>
</div>

</section>
<Footer />
    </>
  );
}
