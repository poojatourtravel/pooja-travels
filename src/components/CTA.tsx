"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CTAContent, SiteInfo } from "@/types/content";

interface CTAProps {
  cta: CTAContent;
  site: SiteInfo;
}

export default function CTA({ cta, site }: CTAProps) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#2c2c2b] rounded-3xl px-8 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#ffa800]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#ffa800]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 bg-[#ffa800]/15 border border-[#ffa800]/30 px-5 py-2.5 rounded-full mb-4">
              <div className="w-7 h-7 bg-[#ffa800]/20 rounded-full flex items-center justify-center">
                <Phone size={14} className="text-[#ffa800]" />
              </div>
              <span className="text-[#ffa800] font-semibold text-sm">{cta.bookLabel}</span>
              <a
                href={`tel:+${site.phoneRaw}`}
                className="text-white font-bold text-sm hover:text-[#ffa800] transition-colors"
              >
                {site.phone}
              </a>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-xl leading-tight">
              {cta.title.split("best cab service").map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}<span className="text-[#ffa800]">best cab service</span></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={`tel:+${site.phoneRaw}`}
              className="flex items-center gap-2 bg-[#ffa800] hover:bg-[#e69500] text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(255,168,0,0.3)] whitespace-nowrap"
            >
              <Phone size={18} />
              Call Us
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 whitespace-nowrap"
            >
              {cta.contactLabel}
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
