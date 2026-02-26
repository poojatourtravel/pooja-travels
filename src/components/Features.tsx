"use client";

import { motion } from "framer-motion";
import { Clock, Smile, MousePointerClick } from "lucide-react";
import type { FeatureItem } from "@/types/content";

const ICONS = [
  <Clock size={32} className="text-[#ffa800]" key="clock" />,
  <Smile size={32} className="text-[#ffa800]" key="smile" />,
  <MousePointerClick size={32} className="text-[#ffa800]" key="click" />,
];

interface FeaturesProps {
  features: FeatureItem[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="bg-white py-16 relative -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={cardVariants}
              className="group flex items-start gap-5 p-7 rounded-2xl border border-gray-100 hover:border-[#ffa800]/40 hover:shadow-xl transition-all duration-300 bg-white hover:bg-[#ffa800]/5 cursor-default"
            >
              <div className="bg-[#ffa800]/10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {ICONS[i] ?? ICONS[0]}
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
