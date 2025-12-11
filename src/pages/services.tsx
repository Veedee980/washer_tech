"use client";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link"

export default function Services() {
  return (
    <>
      <Navbar />

{/* HERO SECTION */}
<section className="relative w-full h-screen md:h-screen flex items-center justify-center text-center text-white font-outfit overflow-hidden">
  {/* Background Image */}
  <motion.div
    className="absolute inset-0"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  >
    <Image
      src="/services.jpg"
      alt="Laundry Machine"
      fill
      className="object-cover"
      priority
    />
  </motion.div>

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60"></div>

  {/* Hero Text */}
  <motion.div
    className="z-10"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
      Services
    </h1>
    <p className="text-lg md:text-xl font-light drop-shadow-md">
      Complete Laundry Equipment Solutions for Every Home and Business
    </p>
  </motion.div>
</section>


      {/* SERVICES LIST SECTION */}
      <section className="py-20 px-6 md:px-20 bg-white font-outfit space-y-16">
        {[
          {
            title: "Washing Machine Repairs",
            desc: "We repair all makes and models of washing machines using high-quality parts and precise diagnostics to restore efficiency.",
            img: "/service1.jpg",
            reverse: false,
          },
          {
            title: "Tumble Dryer Repairs",
            desc: "Our team ensures your dryers perform efficiently — fast, reliable repairs to get your laundry running smoothly again.",
            img: "/service2.jpg",
            reverse: true,
          },
          {
            title: "Dishwasher Repairs",
            desc: "From water leaks to faulty cycles, we handle all dishwasher issues quickly and professionally.",
            img: "/service1.jpg",
            reverse: false,
          },
          {
            title: "Iron & Small Appliance Repairs",
            desc: "We fix irons, kettles, and other small appliances with precision and reliability.",
            img: "/service3.png",
            reverse: true,
          },
          {
            title: "Installation & Maintenance",
            desc: "From setup to regular servicing, we keep your laundry equipment performing at its best.",
            img: "/service4.jpg",
            reverse: false,
          },
          {
            title: "Mobile Repair Service",
            desc: "We offer mobile repair services to bring expert solutions directly to your doorstep — anywhere in Zimbabwe.",
            img: "/service5.jpg",
            reverse: true,
          },
          {
            title: "Tools and Spare Parts",
            desc: "We stock a wide selection of high-quality spare parts and tools for your equipment.",
            img: "/service6.jpg",
            reverse: false,
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              service.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Container with Orange Border Glow */}
            <motion.div
              className="relative w-[400px] h-[300px] shrink-0 overflow-hidden rounded-lg shadow-lg border-4 border-orange-500/70 hover:border-orange-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Text */}
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold text-gray-900 hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FINAL SECTION WITH GALLERY */}
      <section className="relative bg-white text-center py-16 px-6 md:px-20 font-outfit overflow-hidden">
        {/* Floating Orange Glow Background */}
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-orange-50 via-transparent to-white opacity-70"
          animate={{ opacity: [0.6, 0.8, 0.6] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-orange-500 mb-2 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Keep your laundry running smoothly with our trusted repair and maintenance services.
        </motion.p>

        {/* Horizontal Scroll Gallery */}
        <motion.div
          className="relative w-full overflow-x-auto scrollbar-hide pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-6 w-max">
            {[
              "/repair1.jpg",
              "/repair2.jpg",
              "/repair3.jpg",
              "/repair4.jpg",
              "/repair5.jpg",
              "/repair6.jpg",
              "/repair7.png",
              "/repair8.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                className="relative w-72 h-72 shrink-0 overflow-hidden rounded-lg shadow-md border-4 border-orange-400/60 hover:border-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={src}
                  alt={`Repair ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Button with Bounce */}
        <motion.div
          className="pt-10 relative z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/"><button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold shadow-md transition">
            Schedule a Repair Now
          </button></Link>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
