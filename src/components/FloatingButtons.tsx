"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import type { SiteInfo } from "@/types/content";

interface FloatingButtonsProps {
  site: SiteInfo;
}

export default function FloatingButtons({ site }: FloatingButtonsProps) {
  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-24 right-5 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 text-white transition-colors"
      >
        <MessageCircle size={26} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </motion.a>

      {/* Call */}
      <motion.a
        href={`tel:+${site.phoneRaw}`}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#ffa800] hover:bg-[#e69500] rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/30 text-black transition-colors"
      >
        <Phone size={24} />
        <span className="absolute inset-0 rounded-full bg-[#ffa800] animate-ping opacity-25" />
      </motion.a>
    </>
  );
}
