"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Zap, Phone } from "lucide-react";
import type { Route } from "@/types/content";

interface RoutesProps {
  routes: Route[];
  phoneRaw: string;
  phone: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Routes({ routes, phoneRaw, phone }: RoutesProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-[#ffa800]/10 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Popular Routes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Outstation Routes We Cover
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Comfortable, safe, and on-time journeys across Maharashtra, Gujarat,
            Rajasthan, MP, Hyderabad, and Bangalore.
          </p>
        </motion.div>

        {/* Route cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {routes.map((route, i) => (
            <motion.a
              key={i}
              variants={cardVariants}
              href={`tel:+${phoneRaw}`}
              className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#ffa800]/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {route.popular && (
                <div className="absolute -top-2.5 left-4 bg-[#ffa800] text-black text-xs font-bold px-3 py-0.5 rounded-full">
                  Popular
                </div>
              )}

              {/* Route visual */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#ffa800]" />
                  <span className="font-bold text-gray-900 text-sm">
                    {route.from}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-gray-300 flex-shrink-0 group-hover:text-[#ffa800] transition-colors"
                />
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-gray-400" />
                  <span className="font-semibold text-gray-700 text-sm">
                    {route.to}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Zap size={12} className="text-[#ffa800]" />
                  {route.distance}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={12} className="text-[#ffa800]" />
                  {route.duration}
                </div>
              </div>

              {/* Vehicles */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {route.vehicles.slice(0, 3).map((v) => (
                  <span
                    key={v}
                    className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"
                  >
                    {v}
                  </span>
                ))}
                {route.vehicles.length > 3 && (
                  <span className="bg-[#ffa800]/10 text-[#ffa800] text-xs px-2 py-0.5 rounded-full">
                    +{route.vehicles.length - 3}
                  </span>
                )}
              </div>

              {/* CTA row */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="text-gray-400 text-xs">Tap to book</span>
                <div className="w-7 h-7 bg-[#ffa800]/10 rounded-full flex items-center justify-center group-hover:bg-[#ffa800] transition-colors">
                  <Phone
                    size={12}
                    className="text-[#ffa800] group-hover:text-black transition-colors"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Coverage bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#2c2c2b] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-gray-300 text-sm font-medium">
              Don&apos;t see your route?
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              We cover all of MH · GJ · RJ · MP · Hyderabad · Bangalore &amp;
              more
            </p>
          </div>
          <a
            href={`tel:+${phoneRaw}`}
            className="flex items-center gap-2 bg-[#ffa800] hover:bg-[#e69500] text-black font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 text-sm whitespace-nowrap"
          >
            <Phone size={16} />
            Call {phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
