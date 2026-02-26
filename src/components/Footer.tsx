"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import type { SiteContent } from "@/types/content";

interface FooterProps {
  site: SiteContent["site"];
  footer: SiteContent["footer"];
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const fleetLinks = [
  { label: "Sedan Cab", href: "/fleet/sedan" },
  { label: "Ertiga", href: "/fleet/ertiga" },
  { label: "Innova", href: "/fleet/innova" },
  { label: "Innova Crysta", href: "/fleet/innova-crysta" },
  { label: "Tempo Traveller", href: "/fleet/tempo" },
];

export default function Footer({ site, footer }: FooterProps) {
  return (
    <footer className="bg-[#1a1a19] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2 mb-4 group">
            <div className="w-10 h-10 bg-[#ffa800] rounded-full flex items-center justify-center font-bold text-black text-lg">P</div>
            <div>
              <div className="text-white font-bold text-lg leading-tight">{site.name.split(" ").slice(0, 2).join(" ")}</div>
              <div className="text-[#ffa800] text-xs font-medium tracking-wider uppercase">&amp; Travels</div>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-gray-400">{footer.description}</p>
          <div className="flex items-center gap-3 mt-5">
            {site.social.facebook !== "#" && (
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffa800] hover:text-black text-gray-400 transition-all" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            )}
            <a href={site.social.instagram} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffa800] hover:text-black text-gray-400 transition-all" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href={site.social.twitter} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ffa800] hover:text-black text-gray-400 transition-all" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-400 hover:text-[#ffa800] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#ffa800]/50 rounded-full group-hover:bg-[#ffa800] transition-colors" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-5">Our Fleet</h4>
          <ul className="space-y-3">
            {fleetLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-400 hover:text-[#ffa800] transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-[#ffa800]/50 rounded-full group-hover:bg-[#ffa800] transition-colors" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-base mb-5">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#ffa800]/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={15} className="text-[#ffa800]" />
              </div>
              <a href={site.mapLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ffa800] transition-colors text-sm leading-relaxed">
                {site.address}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ffa800]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={15} className="text-[#ffa800]" />
              </div>
              <a href={`tel:+${site.phoneRaw}`} className="text-gray-400 hover:text-[#ffa800] transition-colors text-sm">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ffa800]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={15} className="text-[#ffa800]" />
              </div>
              <a href={`mailto:${site.email}`} className="text-gray-400 hover:text-[#ffa800] transition-colors text-sm break-all">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">{footer.copyright}</p>
          <p className="text-gray-600 text-sm">Made with ❤️ in Pune</p>
        </div>
      </div>
    </footer>
  );
}
