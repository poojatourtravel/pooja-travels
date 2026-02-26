"use client";

import { motion } from "framer-motion";
import type { ServiceItem } from "@/types/content";

interface ServicesProps {
  services: ServiceItem[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services({ services }: ServicesProps) {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "#ffa800" }}>
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-block bg-black/15 text-black px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight max-w-lg">
            We Make Better Travel For Everyone
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-[#1a1a19] h-36 flex items-center justify-center text-5xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[#ffa800]/10 group-hover:opacity-100 opacity-0 transition-opacity" />
                <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
                  {s.emoji}
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
