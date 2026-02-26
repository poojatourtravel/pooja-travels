"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import type { SiteInfo } from "@/types/content";

interface ContactContentProps {
  site: SiteInfo;
}

export default function ContactContent({ site }: ContactContentProps) {
  const contactInfo = [
    {
      icon: <Phone size={22} className="text-[#ffa800]" />,
      title: "Phone",
      lines: [site.phone],
      action: `tel:+${site.phoneRaw}`,
      actionLabel: "Call Now",
    },
    {
      icon: <MessageCircle size={22} className="text-[#ffa800]" />,
      title: "WhatsApp",
      lines: [site.phone],
      action: `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.whatsappText)}`,
      actionLabel: "Message Us",
    },
    {
      icon: <Mail size={22} className="text-[#ffa800]" />,
      title: "Email",
      lines: [site.email],
      action: `mailto:${site.email}`,
      actionLabel: "Send Email",
    },
    {
      icon: <MapPin size={22} className="text-[#ffa800]" />,
      title: "Location",
      lines: [site.address],
      action: site.mapLink,
      actionLabel: "Directions",
    },
  ];

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
              <span className="text-[#ffa800]">Contact Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Contact Us
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left – Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="inline-block bg-[#ffa800]/10 text-[#ffa800] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                  Get in Touch
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  We&apos;re Ready to Serve You
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  Have a question or want to book a ride? Reach out to us
                  through any of the channels below. Our team is available 24/7
                  to assist you.
                </p>
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-5">
                {contactInfo.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#ffa800]/40 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#ffa800]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#ffa800]/20 transition-colors">
                      {c.icon}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{c.title}</h4>
                    {c.lines.map((line) => (
                      <p key={line} className="text-gray-500 text-sm break-all">
                        {line}
                      </p>
                    ))}
                    <a
                      href={c.action}
                      target={c.action.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.action.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="inline-flex items-center gap-1 text-[#ffa800] font-medium text-sm mt-3 hover:gap-2 transition-all"
                    >
                      {c.actionLabel} →
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-6 bg-[#2c2c2b] rounded-2xl p-6 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-[#ffa800]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-[#ffa800]" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Available 24 Hours, 7 Days a Week
                  </h4>
                  <p className="text-gray-400 text-sm">
                    We never close — your ride is always just a call away.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right – Quick Book Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Quick Booking Enquiry
                </h3>

                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const nameEl = document.getElementById("name") as HTMLInputElement;
                    const msgEl = document.getElementById("message") as HTMLTextAreaElement;
                    const name = nameEl?.value || "";
                    const msg = msgEl?.value || "";
                    const text = `Hi, I'm ${name}. ${msg}`;
                    window.open(`https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`, "_blank");
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Riya Patel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ffa800] focus:ring-2 focus:ring-[#ffa800]/20 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ffa800] focus:ring-2 focus:ring-[#ffa800]/20 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 focus:outline-none focus:border-[#ffa800] focus:ring-2 focus:ring-[#ffa800]/20 transition-all text-sm bg-white"
                    >
                      <option>City Transfer</option>
                      <option>Airport Transfer</option>
                      <option>Outstation Trip</option>
                      <option>Special Occasion</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Tell us more about your trip..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ffa800] focus:ring-2 focus:ring-[#ffa800]/20 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#ffa800] hover:bg-[#e69500] text-black font-bold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 text-sm"
                  >
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    Or call us directly at{" "}
                    <a
                      href={`tel:+${site.phoneRaw}`}
                      className="text-[#ffa800] font-semibold hover:underline"
                    >
                      {site.phone}
                    </a>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
