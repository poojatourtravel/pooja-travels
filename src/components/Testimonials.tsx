"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/types/content";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="bg-[#2c2c2b] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-[#ffa800]/15 border border-[#ffa800]/30 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              What Our <span className="text-[#ffa800]">Customers Say</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We take pride in delivering exceptional service. Here&apos;s what our happy travellers say.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "4.9", label: "Average Rating" },
                { val: "500+", label: "Reviews" },
                { val: "10K+", label: "Happy Riders" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-2xl p-4 text-center border border-white/10">
                  <div className="text-[#ffa800] text-2xl font-extrabold">{s.val}</div>
                  <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-8">
              <button onClick={prev} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ffa800] hover:border-[#ffa800] hover:text-black transition-all" aria-label="Previous">
                <ChevronLeft size={20} />
              </button>
              <button onClick={next} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#ffa800] hover:border-[#ffa800] hover:text-black transition-all" aria-label="Next">
                <ChevronRight size={20} />
              </button>
              <div className="flex items-center gap-2 ml-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2 bg-[#ffa800]" : "w-2 h-2 bg-white/30"}`} aria-label={`Go to testimonial ${i + 1}`} />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-[#ffa800]/15 rounded-2xl flex items-center justify-center mb-6">
                  <Quote size={24} className="text-[#ffa800]" />
                </div>
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#ffa800] fill-[#ffa800]" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed text-base mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#ffa800] flex items-center justify-center text-black font-bold text-lg">
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonials[current].name}</div>
                    <div className="text-gray-400 text-sm">{testimonials[current].location}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
