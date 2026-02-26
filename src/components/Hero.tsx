"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Star } from "lucide-react";
import type { HeroContent, SiteInfo } from "@/types/content";

interface HeroProps {
  hero: HeroContent;
  site: SiteInfo;
}

export default function Hero({ hero, site }: HeroProps) {
  const waLink = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.whatsappText)}`;

  return (
    <section className="relative min-h-screen bg-[#2c2c2b] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ffa800]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#ffa800]/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#ffa800 1px, transparent 1px), linear-gradient(90deg, #ffa800 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-[#ffa800]/15 border border-[#ffa800]/30 px-4 py-2 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-[#ffa800] rounded-full animate-pulse" />
              <span className="text-[#ffa800] text-sm font-medium">{hero.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              {hero.titleLine1}{" "}
              <span className="text-[#ffa800] relative">
                {hero.titleAccent}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10 Q75 2 150 8 Q225 14 298 4" stroke="#ffa800" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
                </svg>
              </span>
              <br />
              {hero.titleLine2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#ffa800] fill-[#ffa800]" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-gray-400 text-sm">based on 500+ reviews</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={`tel:+${site.phoneRaw}`}
                className="flex items-center gap-3 bg-[#ffa800] hover:bg-[#e69500] text-black font-bold px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,168,0,0.4)] text-base"
              >
                <Phone size={20} />
                {hero.callCTA}
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-105 text-base"
              >
                <MessageCircle size={20} />
                {hero.whatsappCTA}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10"
            >
              {hero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[#ffa800] text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Car Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-[#ffa800]/10 blur-3xl scale-110" />
              <div className="relative w-80 h-64 sm:w-96 sm:h-72 lg:w-[440px] lg:h-80">
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <svg viewBox="0 0 600 300" className="w-full h-full drop-shadow-2xl" fill="none">
                    <rect x="60" y="150" width="480" height="100" rx="16" fill="#1a1a19" />
                    <path d="M160 150 L200 80 L400 80 L440 150 Z" fill="#ffa800" />
                    <path d="M210 145 L235 95 L295 95 L295 145 Z" fill="#2c2c2b" opacity="0.8" />
                    <path d="M305 145 L305 95 L375 95 L400 145 Z" fill="#2c2c2b" opacity="0.8" />
                    <line x1="300" y1="94" x2="300" y2="145" stroke="#ffa800" strokeWidth="4" />
                    <rect x="68" y="170" width="40" height="20" rx="5" fill="#ffa800" opacity="0.9" />
                    <rect x="490" y="170" width="40" height="20" rx="5" fill="#ffa800" opacity="0.7" />
                    <line x1="260" y1="155" x2="250" y2="248" stroke="#ffa800" strokeWidth="2" opacity="0.5" />
                    <line x1="340" y1="155" x2="350" y2="248" stroke="#ffa800" strokeWidth="2" opacity="0.5" />
                    <circle cx="170" cy="248" r="42" fill="#111" />
                    <circle cx="170" cy="248" r="30" fill="#333" />
                    <circle cx="170" cy="248" r="12" fill="#ffa800" />
                    <circle cx="430" cy="248" r="42" fill="#111" />
                    <circle cx="430" cy="248" r="30" fill="#333" />
                    <circle cx="430" cy="248" r="12" fill="#ffa800" />
                    <rect x="60" y="205" width="480" height="8" fill="#ffa800" opacity="0.25" />
                    <text x="260" y="195" fill="#ffa800" fontSize="22" fontWeight="bold" opacity="0.7">PTT</text>
                  </svg>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -top-4 -right-4 bg-[#ffa800] text-black px-4 py-2 rounded-2xl font-bold text-sm shadow-lg"
              >
                GPS Enabled
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-[#1a1a19] border border-white/10 p-3 rounded-xl flex items-center gap-2 shadow-xl"
              >
                <div className="w-8 h-8 bg-[#ffa800]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-[#ffa800]" />
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">Serving Pune &amp; Mumbai</div>
                  <div className="text-gray-400 text-xs">All over MH · GJ · RJ</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-[#ffa800] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
