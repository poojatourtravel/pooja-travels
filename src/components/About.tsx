"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { AboutContent } from "@/types/content";

interface AboutProps {
  about: AboutContent;
}

export default function About({ about }: AboutProps) {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 h-56 sm:h-72 bg-[#2c2c2b] rounded-3xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ffa800]/20 to-transparent" />
                <div className="text-center p-6 relative z-10">
                  <div className="text-5xl mb-3">🚖</div>
                  <p className="text-white font-semibold text-lg">{about.title}</p>
                  <p className="text-[#ffa800] text-sm mt-1">Pune · Mumbai · Gujarat · Rajasthan</p>
                </div>
              </div>
              {about.stats.slice(0, 2).map((s) => (
                <div
                  key={s.label}
                  className={`h-36 rounded-2xl flex items-center justify-center ${
                    s === about.stats[0] ? "bg-[#ffa800]" : "bg-[#2c2c2b]"
                  }`}
                >
                  <div className="text-center">
                    <div className={`text-3xl font-extrabold ${s === about.stats[0] ? "text-black" : "text-[#ffa800]"}`}>
                      {s.value}
                    </div>
                    <div className={`text-xs font-medium mt-1 ${s === about.stats[0] ? "text-black/80" : "text-gray-300"}`}>
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#ffa800 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#ffa800]/10 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide">
              {about.subtitle}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              {about.title}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">{about.description}</p>

            <div className="space-y-5">
              {about.whyChoose.slice(0, 4).map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 size={22} className="text-[#ffa800] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{r.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
