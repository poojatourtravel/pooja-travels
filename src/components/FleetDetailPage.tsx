"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle, Users, Briefcase } from "lucide-react";

interface VehicleFeature {
  label: string;
}

interface VehicleOption {
  name: string;
  price: string;
}

export interface FleetPageProps {
  name: string;
  tagline: string;
  emoji: string;
  priceFrom: string;
  seats: string;
  bags: string;
  features: VehicleFeature[];
  options?: VehicleOption[];
  description: string;
  phoneRaw: string;
  whatsappText: string;
}

export default function FleetDetailPage({
  name,
  tagline,
  emoji,
  priceFrom,
  seats,
  bags,
  features,
  options,
  description,
  phoneRaw,
  whatsappText,
}: FleetPageProps) {
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
              <span>Fleet</span>
              <span className="mx-2">/</span>
              <span className="text-[#ffa800]">{name}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              {name}
            </h1>
            <p className="text-gray-400 mt-2">{tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left – Vehicle Visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Car display */}
              <div className="bg-[#2c2c2b] rounded-3xl h-80 flex flex-col items-center justify-center relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffa800]/20 to-transparent" />
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-8xl mb-4 relative z-10"
                >
                  {emoji}
                </motion.div>
                <p className="text-white font-bold text-xl relative z-10">
                  {name}
                </p>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 bg-[#ffa800]/15 rounded-xl flex items-center justify-center">
                    <Users size={20} className="text-[#ffa800]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Capacity</div>
                    <div className="text-gray-900 font-bold">{seats}</div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 bg-[#ffa800]/15 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} className="text-[#ffa800]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs">Luggage</div>
                    <div className="text-gray-900 font-bold">{bags}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right – Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-[#ffa800]/10 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Pooja Tours Fleet
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                {name} Cab
              </h2>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-[#ffa800] text-5xl font-extrabold">
                  ₹{priceFrom}
                </span>
                <span className="text-gray-400">/ km onwards</span>
              </div>

              <p className="text-gray-500 leading-relaxed mb-7">{description}</p>

              {/* Price Options */}
              {options && options.length > 0 && (
                <div className="bg-gray-50 rounded-2xl p-5 mb-7 border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Available Options
                  </h4>
                  <div className="space-y-3">
                    {options.map((opt) => (
                      <div
                        key={opt.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-600 text-sm">{opt.name}</span>
                        <span className="font-bold text-[#ffa800]">
                          ₹{opt.price}/km
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#ffa800] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{f.label}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+${phoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#ffa800] hover:bg-[#e69500] text-black font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 hover:shadow-lg text-sm"
                >
                  <Phone size={18} />
                  Call to Book
                </a>
                <a
                  href={`https://wa.me/${phoneRaw}?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 text-sm"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
