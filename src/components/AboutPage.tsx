"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, MapPin, Clock } from "lucide-react";
import type { SiteInfo } from "@/types/content";

interface AboutContentProps {
  site: SiteInfo;
}

const whyChoose = [
  {
    title: "Local Expertise",
    desc: "Our drivers are not just professionals — they are local experts with a deep understanding of Pune's roads, highways, and traffic patterns, ensuring you reach your destination efficiently.",
  },
  {
    title: "Safety First",
    desc: "Your safety is our top priority. We maintain a fleet of well-maintained vehicles and ensure our drivers undergo regular training to adhere to the highest safety standards.",
  },
  {
    title: "Comfortable Fleet",
    desc: "Whether you need a compact sedan for a quick airport transfer or a spacious Innova Crysta for a family outing, Pooja Tours offers a diverse fleet to cater to your specific requirements.",
  },
  {
    title: "24/7 Availability",
    desc: "We understand that travel needs can arise at any time. With Pooja Tours, you have the convenience of booking a cab 24 hours a day, 7 days a week. We are always ready to serve you.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs or surprises. We believe in transparent pricing, ensuring you know the cost of your journey upfront. Enjoy affordable rates without compromising on quality.",
  },
];

const stats = [
  { icon: <Clock size={24} className="text-[#ffa800]" />, val: "9+", label: "Years Serving" },
  { icon: <Users size={24} className="text-[#ffa800]" />, val: "10K+", label: "Happy Customers" },
  { icon: <Award size={24} className="text-[#ffa800]" />, val: "4.9★", label: "Average Rating" },
  { icon: <MapPin size={24} className="text-[#ffa800]" />, val: "50+", label: "Destinations" },
];

export default function AboutContent({ site }: AboutContentProps) {
  return (
    <main className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-[#2c2c2b] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-gray-400 text-sm mb-2">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-[#ffa800]">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              About Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main About */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#ffa800]/10 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Your Best Cab Service in Pune &amp; Mumbai
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Welcome to Pooja Tours and Travels, where your journey becomes
                our priority! We take pride in being a trusted cab service based
                in Pune, dedicated to providing unparalleled comfort,
                reliability, and convenience for all your transportation needs.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Pooja Tours and Travels was born out of a passion for providing
                seamless transportation solutions across Maharashtra, Gujarat,
                Rajasthan, and beyond. With a deep understanding of intercity
                highways and local routes, we embarked on a journey to create a
                cab service that goes beyond mere transportation — we aim to make
                every ride an enjoyable experience.
              </p>

              <div className="bg-[#ffa800]/10 border border-[#ffa800]/30 rounded-2xl p-6">
                <h4 className="text-gray-900 font-bold text-lg mb-2">
                  Our Commitment
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  At Pooja Tours and Travels, our commitment is simple — to
                  redefine your travel experience. We understand the importance
                  of a smooth and comfortable journey, and we strive to exceed
                  your expectations with every ride.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-[#2c2c2b] rounded-3xl h-72 sm:h-96 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffa800]/20 to-transparent" />
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="text-7xl mb-4 relative z-10">🚕</div>
                <p className="text-white font-bold text-xl relative z-10">
                  Pooja Tours & Travels
                </p>
                <p className="text-[#ffa800] text-sm mt-2 relative z-10">
                  Serving Pune &amp; Mumbai since 2015
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:border-[#ffa800]/40 hover:shadow-lg transition-all"
              >
                <div className="flex justify-center mb-3">{s.icon}</div>
                <div className="text-2xl font-extrabold text-gray-900">
                  {s.val}
                </div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose */}
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#ffa800]/10 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                Why Choose Pooja Tours?
              </h2>
              <p className="text-gray-400 mb-8">
                Here are the reasons why thousands of travellers trust
                us for their outstation, airport, and city travel needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all"
                >
                  <CheckCircle2 size={22} className="text-[#ffa800] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
