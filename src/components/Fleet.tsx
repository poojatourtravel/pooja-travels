"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import type { FleetVehicle, SiteInfo } from "@/types/content";

interface FleetProps {
  fleet: FleetVehicle[];
  site: SiteInfo;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Fleet({ fleet, site }: FleetProps) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-[#ffa800]/10 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Ride</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A carefully maintained fleet of Sedans, SUVs, and Tempo Travellers to match every travel need.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {fleet.map((cab) => (
            <motion.div
              key={cab.id}
              variants={cardVariants}
              className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-[#ffa800]/50 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-3 right-3 z-10 bg-[#ffa800] text-black text-xs font-bold px-2.5 py-1 rounded-full">
                {cab.badge}
              </div>
              <div className="relative h-44 bg-gray-50 overflow-hidden">
                <Image
                  src={cab.image}
                  alt={cab.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-2">
                  <h3 className="text-gray-900 font-bold text-base leading-tight">{cab.name}</h3>
                  <p className="text-gray-400 text-xs mt-0.5">{cab.models}</p>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-[#ffa800] text-2xl font-extrabold">₹{cab.price}</span>
                  <span className="text-gray-400 text-xs">/ km</span>
                </div>
                <ul className="space-y-1.5 flex-1 mb-5">
                  {cab.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={13} className="text-[#ffa800] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`tel:+${site.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#ffa800] hover:bg-[#e69500] text-black font-bold py-2.5 rounded-xl transition-all duration-300 hover:shadow-md text-sm"
                >
                  <Phone size={14} />
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
