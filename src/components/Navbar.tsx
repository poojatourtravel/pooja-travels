"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { SiteInfo } from "@/types/content";

interface NavbarProps {
  site: SiteInfo;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Fleet",
    href: "#",
    children: [
      { label: "Sedan Cab", href: "/fleet/sedan" },
      { label: "Ertiga", href: "/fleet/ertiga" },
      { label: "Innova", href: "/fleet/innova" },
      { label: "Innova Crysta", href: "/fleet/innova-crysta" },
      { label: "Tempo Traveller", href: "/fleet/tempo" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ site }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileFleetOpen, setMobileFleetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2c2c2b] shadow-lg py-3"
          : "bg-[#2c2c2b]/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Pooja Tours Logo"
                fill
                className="object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight">
                Pooja Tours
              </div>
              <div className="text-[#ffa800] text-xs font-medium tracking-wider uppercase">
                &amp; Travels
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 text-gray-300 hover:text-[#ffa800] transition-colors font-medium py-2">
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-[#2c2c2b] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-3 text-gray-300 hover:text-[#ffa800] hover:bg-white/5 transition-colors text-sm"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-[#ffa800] transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffa800] group-hover:w-full transition-all duration-300" />
                </Link>
              )
            )}
          </nav>

          {/* Phone CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-px h-8 bg-white/20" />
            <a
              href={`tel:+${site.phoneRaw}`}
              className="flex items-center gap-2 text-[#ffa800] font-semibold hover:text-white transition-colors"
            >
              <div className="w-8 h-8 bg-[#ffa800]/20 rounded-full flex items-center justify-center">
                <Phone size={16} className="text-[#ffa800]" />
              </div>
              {site.phone}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1 bg-[#1a1a19]">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-[#ffa800] hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => setMobileFleetOpen(!mobileFleetOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileFleetOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileFleetOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 pl-4 border-l border-[#ffa800]/30"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-gray-400 hover:text-[#ffa800] transition-colors text-sm"
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="px-4 py-3 text-gray-300 hover:text-[#ffa800] hover:bg-white/5 rounded-lg transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="mt-3 pt-3 border-t border-white/10">
                <a
                  href={`tel:+${site.phoneRaw}`}
                  className="flex items-center gap-3 px-4 py-3 bg-[#ffa800] text-black font-semibold rounded-xl"
                  onClick={() => setMenuOpen(false)}
                >
                  <Phone size={18} />
                  {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
