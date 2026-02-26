"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Save,
  LogOut,
  Globe,
  Car,
  MapPin,
  Users,
  Star,
  Settings,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  Plus,
  Trash2,
  Code,
  ChevronDown,
  ChevronRight,
  Home,
} from "lucide-react";
import type { SiteContent, FleetVehicle, Route, Testimonial } from "@/types/content";
import Link from "next/link";

interface Props {
  initialContent: SiteContent;
}

type TabId = "site" | "hero" | "fleet" | "routes" | "services" | "testimonials" | "about" | "json";

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "site", label: "Site Info", icon: <Settings size={16} /> },
  { id: "hero", label: "Hero", icon: <Home size={16} /> },
  { id: "fleet", label: "Fleet", icon: <Car size={16} /> },
  { id: "routes", label: "Routes", icon: <MapPin size={16} /> },
  { id: "services", label: "Services", icon: <Globe size={16} /> },
  { id: "testimonials", label: "Reviews", icon: <Star size={16} /> },
  { id: "about", label: "About", icon: <Users size={16} /> },
  { id: "json", label: "JSON Editor", icon: <Code size={16} /> },
];

type SaveStatus = "idle" | "saving" | "success" | "error";

export default function AdminDashboard({ initialContent }: Props) {
  const [content, setContent] = useState<SiteContent>(
    JSON.parse(JSON.stringify(initialContent))
  );
  const [activeTab, setActiveTab] = useState<TabId>("site");
  const [saveStatus, setSaveStatus] = useState<SaveStatus>("idle");
  const [saveMessage, setSaveMessage] = useState("");
  const [jsonText, setJsonText] = useState(
    JSON.stringify(initialContent, null, 2)
  );
  const [jsonError, setJsonError] = useState("");

  // Sync JSON editor when switching to it
  const handleTabChange = (tab: TabId) => {
    if (tab === "json") {
      setJsonText(JSON.stringify(content, null, 2));
      setJsonError("");
    }
    setActiveTab(tab);
  };

  const update = useCallback(
    (path: string[], value: unknown) => {
      setContent((prev) => {
        const next = JSON.parse(JSON.stringify(prev));
        let obj: Record<string, unknown> = next;
        for (let i = 0; i < path.length - 1; i++) {
          obj = obj[path[i]] as Record<string, unknown>;
        }
        obj[path[path.length - 1]] = value;
        return next;
      });
    },
    []
  );

  async function handleSave() {
    setSaveStatus("saving");
    setSaveMessage("Saving to GitHub and local fallback...");

    // If on JSON tab, parse and apply
    if (activeTab === "json") {
      try {
        const parsed = JSON.parse(jsonText) as SiteContent;
        setContent(parsed);
      } catch {
        setSaveStatus("error");
        setSaveMessage("Invalid JSON. Please fix and try again.");
        return;
      }
    }

    const toSave = activeTab === "json" ? JSON.parse(jsonText) : content;

    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: toSave }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSaveStatus("error");
        setSaveMessage(data.error ?? "Save failed");
        return;
      }

      setSaveStatus("success");
      setSaveMessage(data.message ?? "Saved successfully.");
      setTimeout(() => setSaveStatus("idle"), 4000);
    } catch {
      setSaveStatus("error");
      setSaveMessage("Network error. Changes saved locally only on next attempt.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="min-h-screen bg-[#111] text-white">
      {/* Top Bar */}
      <header className="bg-[#2c2c2b] border-b border-white/10 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ffa800] rounded-lg flex items-center justify-center font-bold text-black text-sm">
            P
          </div>
          <div>
            <div className="text-white font-bold text-sm">Admin Dashboard</div>
            <div className="text-gray-400 text-xs">Pooja Tours and Travels</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <Globe size={14} />
            View Site
          </Link>

          <button
            onClick={handleSave}
            disabled={saveStatus === "saving"}
            className="flex items-center gap-2 bg-[#ffa800] hover:bg-[#e69500] disabled:opacity-70 text-black font-bold px-4 py-2 rounded-xl transition-all text-sm"
          >
            {saveStatus === "saving" ? (
              <RefreshCw size={15} className="animate-spin" />
            ) : (
              <Save size={15} />
            )}
            {saveStatus === "saving" ? "Saving…" : "Save Changes"}
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors p-2 rounded-lg hover:bg-white/5"
          >
            <LogOut size={16} />
          </button>
        </div>
      </header>

      {/* Save Status Banner */}
      <AnimatePresence>
        {saveStatus !== "idle" && saveStatus !== "saving" && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`px-4 sm:px-6 py-3 flex items-center gap-2 text-sm ${
              saveStatus === "success"
                ? "bg-green-500/15 border-b border-green-500/30 text-green-400"
                : "bg-red-500/15 border-b border-red-500/30 text-red-400"
            }`}
          >
            {saveStatus === "success" ? (
              <CheckCircle2 size={15} />
            ) : (
              <AlertCircle size={15} />
            )}
            {saveMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-52 bg-[#1a1a19] border-r border-white/5 min-h-[calc(100vh-64px)] sticky top-16 self-start">
          <nav className="p-3 space-y-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  activeTab === t.id
                    ? "bg-[#ffa800]/15 text-[#ffa800] font-semibold"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Tab Scroll */}
        <div className="md:hidden w-full overflow-x-auto border-b border-white/10 bg-[#1a1a19]">
          <div className="flex min-w-max px-4 py-2 gap-2">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs whitespace-nowrap transition-all ${
                  activeTab === t.id
                    ? "bg-[#ffa800]/15 text-[#ffa800] font-semibold"
                    : "text-gray-400"
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-8 max-w-4xl">
          {/* ── SITE INFO ───────────────────────────────────────── */}
          {activeTab === "site" && (
            <Section title="Site Information" desc="Core contact details displayed across the entire website.">
              <Grid>
                <Field label="Business Name">
                  <Input value={content.site.name} onChange={(v) => update(["site", "name"], v)} />
                </Field>
                <Field label="Tagline">
                  <Input value={content.site.tagline} onChange={(v) => update(["site", "tagline"], v)} />
                </Field>
                <Field label="Phone (display)">
                  <Input value={content.site.phone} onChange={(v) => update(["site", "phone"], v)} placeholder="+91 95791 11356" />
                </Field>
                <Field label="Phone (raw for tel: links)">
                  <Input value={content.site.phoneRaw} onChange={(v) => update(["site", "phoneRaw"], v)} placeholder="919579111356" />
                </Field>
                <Field label="Email">
                  <Input value={content.site.email} onChange={(v) => update(["site", "email"], v)} />
                </Field>
                <Field label="Address">
                  <Input value={content.site.address} onChange={(v) => update(["site", "address"], v)} />
                </Field>
              </Grid>
              <Field label="Google Maps Link" className="mt-4">
                <Input value={content.site.mapLink} onChange={(v) => update(["site", "mapLink"], v)} />
              </Field>
              <Field label="WhatsApp Pre-filled Text" className="mt-4">
                <Textarea value={content.site.whatsappText} onChange={(v) => update(["site", "whatsappText"], v)} rows={2} />
              </Field>
              <H3 className="mt-6">Social Links</H3>
              <Grid>
                <Field label="Facebook">
                  <Input value={content.site.social.facebook} onChange={(v) => update(["site", "social", "facebook"], v)} />
                </Field>
                <Field label="Instagram">
                  <Input value={content.site.social.instagram} onChange={(v) => update(["site", "social", "instagram"], v)} />
                </Field>
                <Field label="Twitter / X">
                  <Input value={content.site.social.twitter} onChange={(v) => update(["site", "social", "twitter"], v)} />
                </Field>
              </Grid>
            </Section>
          )}

          {/* ── HERO ───────────────────────────────────────────── */}
          {activeTab === "hero" && (
            <Section title="Hero Section" desc="The first section visitors see at the top of the homepage.">
              <Field label="Badge Text">
                <Input value={content.hero.badge} onChange={(v) => update(["hero", "badge"], v)} />
              </Field>
              <Grid className="mt-4">
                <Field label="Title Line 1">
                  <Input value={content.hero.titleLine1} onChange={(v) => update(["hero", "titleLine1"], v)} />
                </Field>
                <Field label="Title Accent (orange)">
                  <Input value={content.hero.titleAccent} onChange={(v) => update(["hero", "titleAccent"], v)} />
                </Field>
                <Field label="Title Line 2">
                  <Input value={content.hero.titleLine2} onChange={(v) => update(["hero", "titleLine2"], v)} />
                </Field>
              </Grid>
              <Field label="Description" className="mt-4">
                <Textarea value={content.hero.description} onChange={(v) => update(["hero", "description"], v)} rows={3} />
              </Field>
              <H3 className="mt-6">Stats Bar (3 items)</H3>
              <div className="space-y-3">
                {content.hero.stats.map((stat, i) => (
                  <div key={i} className="flex gap-3">
                    <Field label={`Stat ${i + 1} Value`} className="flex-1">
                      <Input value={stat.value} onChange={(v) => update(["hero", "stats", String(i), "value"], v)} />
                    </Field>
                    <Field label="Label" className="flex-1">
                      <Input value={stat.label} onChange={(v) => update(["hero", "stats", String(i), "label"], v)} />
                    </Field>
                  </div>
                ))}
              </div>
              <H3 className="mt-6">Feature Cards (3 items)</H3>
              {content.features.map((f, i) => (
                <div key={i} className="bg-[#1a1a19] rounded-2xl p-4 mb-3 space-y-3">
                  <Field label={`Feature ${i + 1} Title`}>
                    <Input value={f.title} onChange={(v) => update(["features", String(i), "title"], v)} />
                  </Field>
                  <Field label="Description">
                    <Textarea value={f.desc} onChange={(v) => update(["features", String(i), "desc"], v)} rows={2} />
                  </Field>
                </div>
              ))}
            </Section>
          )}

          {/* ── FLEET ──────────────────────────────────────────── */}
          {activeTab === "fleet" && (
            <Section title="Fleet / Vehicles" desc="Manage the vehicles shown on the homepage and fleet pages.">
              {content.fleet.map((vehicle, i) => (
                <CollapsibleCard
                  key={vehicle.id}
                  title={`${vehicle.name} — ₹${vehicle.price}/km`}
                  index={i}
                >
                  <Grid>
                    <Field label="Vehicle Name">
                      <Input value={vehicle.name} onChange={(v) => update(["fleet", String(i), "name"], v)} />
                    </Field>
                    <Field label="Models / Subtitle">
                      <Input value={vehicle.models} onChange={(v) => update(["fleet", String(i), "models"], v)} />
                    </Field>
                    <Field label="Price (₹/km)">
                      <Input value={vehicle.price} onChange={(v) => update(["fleet", String(i), "price"], v)} />
                    </Field>
                    <Field label="Badge">
                      <Input value={vehicle.badge} onChange={(v) => update(["fleet", String(i), "badge"], v)} />
                    </Field>
                    <Field label="Seats">
                      <Input value={vehicle.seats} onChange={(v) => update(["fleet", String(i), "seats"], v)} />
                    </Field>
                    <Field label="Bags">
                      <Input value={vehicle.bags} onChange={(v) => update(["fleet", String(i), "bags"], v)} />
                    </Field>
                  </Grid>
                  <Field label="Image Path (e.g. /images/ertiga.png)" className="mt-3">
                    <Input value={vehicle.image} onChange={(v) => update(["fleet", String(i), "image"], v)} />
                  </Field>
                  <Field label="Description" className="mt-3">
                    <Textarea value={vehicle.description} onChange={(v) => update(["fleet", String(i), "description"], v)} rows={2} />
                  </Field>
                  <Field label="Features (one per line)" className="mt-3">
                    <Textarea
                      value={vehicle.features.join("\n")}
                      onChange={(v) => update(["fleet", String(i), "features"], v.split("\n").filter(Boolean))}
                      rows={5}
                    />
                  </Field>
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={() => {
                        const next = [...content.fleet];
                        next.splice(i, 1);
                        update(["fleet"], next);
                      }}
                      className="flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </CollapsibleCard>
              ))}
              <button
                onClick={() => {
                  const newVehicle: FleetVehicle = {
                    id: `vehicle-${Date.now()}`,
                    name: "New Vehicle",
                    models: "Model Name",
                    price: "12",
                    badge: "New",
                    image: "/images/ertiga.png",
                    seats: "4 Passengers",
                    bags: "3 Bags",
                    href: "/fleet/new",
                    features: ["Feature 1", "Feature 2", "GPS Enabled"],
                    description: "Vehicle description here.",
                  };
                  update(["fleet"], [...content.fleet, newVehicle]);
                }}
                className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-white/10 hover:border-[#ffa800]/40 text-gray-400 hover:text-[#ffa800] py-4 rounded-2xl transition-all text-sm mt-3"
              >
                <Plus size={16} /> Add Vehicle
              </button>
            </Section>
          )}

          {/* ── ROUTES ─────────────────────────────────────────── */}
          {activeTab === "routes" && (
            <Section title="Outstation Routes" desc="Manage the routes displayed on the homepage.">
              {content.routes.map((route, i) => (
                <CollapsibleCard key={i} title={`${route.from} → ${route.to}`} index={i}>
                  <Grid>
                    <Field label="From City">
                      <Input value={route.from} onChange={(v) => update(["routes", String(i), "from"], v)} />
                    </Field>
                    <Field label="To City">
                      <Input value={route.to} onChange={(v) => update(["routes", String(i), "to"], v)} />
                    </Field>
                    <Field label="Distance">
                      <Input value={route.distance} onChange={(v) => update(["routes", String(i), "distance"], v)} />
                    </Field>
                    <Field label="Duration">
                      <Input value={route.duration} onChange={(v) => update(["routes", String(i), "duration"], v)} />
                    </Field>
                  </Grid>
                  <div className="flex items-center gap-3 mt-3">
                    <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={route.popular}
                        onChange={(e) => update(["routes", String(i), "popular"], e.target.checked)}
                        className="accent-[#ffa800] w-4 h-4"
                      />
                      Mark as Popular
                    </label>
                  </div>
                  <Field label="Available Vehicles (one per line)" className="mt-3">
                    <Textarea
                      value={route.vehicles.join("\n")}
                      onChange={(v) => update(["routes", String(i), "vehicles"], v.split("\n").filter(Boolean))}
                      rows={4}
                    />
                  </Field>
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={() => {
                        const next = [...content.routes];
                        next.splice(i, 1);
                        update(["routes"], next);
                      }}
                      className="flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </CollapsibleCard>
              ))}
              <button
                onClick={() => {
                  const newRoute: Route = {
                    from: "City A",
                    to: "City B",
                    distance: "~000 km",
                    duration: "0–0 hrs",
                    popular: false,
                    vehicles: ["Sedan", "Innova"],
                  };
                  update(["routes"], [...content.routes, newRoute]);
                }}
                className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-white/10 hover:border-[#ffa800]/40 text-gray-400 hover:text-[#ffa800] py-4 rounded-2xl transition-all text-sm mt-3"
              >
                <Plus size={16} /> Add Route
              </button>
            </Section>
          )}

          {/* ── SERVICES ───────────────────────────────────────── */}
          {activeTab === "services" && (
            <Section title="Services" desc="The 4 service cards shown on the homepage (amber background section).">
              {content.services.map((s, i) => (
                <div key={i} className="bg-[#1a1a19] rounded-2xl p-5 mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium text-sm">Service {i + 1}</span>
                    <button onClick={() => {
                      const next = [...content.services];
                      next.splice(i, 1);
                      update(["services"], next);
                    }} className="text-red-400 hover:text-red-300">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <Grid>
                    <Field label="Title">
                      <Input value={s.title} onChange={(v) => update(["services", String(i), "title"], v)} />
                    </Field>
                    <Field label="Emoji">
                      <Input value={s.emoji} onChange={(v) => update(["services", String(i), "emoji"], v)} />
                    </Field>
                  </Grid>
                  <Field label="Description">
                    <Textarea value={s.desc} onChange={(v) => update(["services", String(i), "desc"], v)} rows={2} />
                  </Field>
                </div>
              ))}
            </Section>
          )}

          {/* ── TESTIMONIALS ───────────────────────────────────── */}
          {activeTab === "testimonials" && (
            <Section title="Customer Reviews" desc="Testimonials shown in the reviews carousel section.">
              {content.testimonials.map((t, i) => (
                <CollapsibleCard key={i} title={`${t.name} — ${t.location}`} index={i}>
                  <Grid>
                    <Field label="Name">
                      <Input value={t.name} onChange={(v) => update(["testimonials", String(i), "name"], v)} />
                    </Field>
                    <Field label="Location">
                      <Input value={t.location} onChange={(v) => update(["testimonials", String(i), "location"], v)} />
                    </Field>
                    <Field label="Avatar Initials">
                      <Input value={t.avatar} onChange={(v) => update(["testimonials", String(i), "avatar"], v)} />
                    </Field>
                    <Field label="Rating (1–5)">
                      <Input value={String(t.rating)} onChange={(v) => update(["testimonials", String(i), "rating"], Number(v))} type="number" />
                    </Field>
                  </Grid>
                  <Field label="Review Text" className="mt-3">
                    <Textarea value={t.text} onChange={(v) => update(["testimonials", String(i), "text"], v)} rows={3} />
                  </Field>
                  <div className="flex justify-end mt-3">
                    <button
                      onClick={() => {
                        const next = [...content.testimonials];
                        next.splice(i, 1);
                        update(["testimonials"], next);
                      }}
                      className="flex items-center gap-1.5 text-red-400 hover:text-red-300 text-sm"
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>
                </CollapsibleCard>
              ))}
              <button
                onClick={() => {
                  const newT: Testimonial = {
                    name: "Customer Name",
                    location: "City",
                    rating: 5,
                    avatar: "CN",
                    text: "Write the review text here.",
                  };
                  update(["testimonials"], [...content.testimonials, newT]);
                }}
                className="w-full flex items-center justify-center gap-2 border-2 border-dashed border-white/10 hover:border-[#ffa800]/40 text-gray-400 hover:text-[#ffa800] py-4 rounded-2xl transition-all text-sm mt-3"
              >
                <Plus size={16} /> Add Review
              </button>
            </Section>
          )}

          {/* ── ABOUT ──────────────────────────────────────────── */}
          {activeTab === "about" && (
            <Section title="About Section" desc="Content for the About Us page and homepage about section.">
              <Grid>
                <Field label="Section Subtitle">
                  <Input value={content.about.subtitle} onChange={(v) => update(["about", "subtitle"], v)} />
                </Field>
                <Field label="Section Title">
                  <Input value={content.about.title} onChange={(v) => update(["about", "title"], v)} />
                </Field>
              </Grid>
              <Field label="Main Description" className="mt-4">
                <Textarea value={content.about.description} onChange={(v) => update(["about", "description"], v)} rows={3} />
              </Field>
              <Field label="Our Story" className="mt-4">
                <Textarea value={content.about.story} onChange={(v) => update(["about", "story"], v)} rows={3} />
              </Field>
              <H3 className="mt-6">Stats (4 boxes)</H3>
              {content.about.stats.map((s, i) => (
                <div key={i} className="flex gap-3 mb-3">
                  <Field label={`Value ${i + 1}`} className="flex-1">
                    <Input value={s.value} onChange={(v) => update(["about", "stats", String(i), "value"], v)} />
                  </Field>
                  <Field label="Label" className="flex-1">
                    <Input value={s.label} onChange={(v) => update(["about", "stats", String(i), "label"], v)} />
                  </Field>
                </div>
              ))}
              <H3 className="mt-6">Why Choose Us Points</H3>
              {content.about.whyChoose.map((w, i) => (
                <div key={i} className="bg-[#1a1a19] rounded-xl p-4 mb-3 space-y-2">
                  <Field label={`Point ${i + 1} Title`}>
                    <Input value={w.title} onChange={(v) => update(["about", "whyChoose", String(i), "title"], v)} />
                  </Field>
                  <Field label="Description">
                    <Textarea value={w.desc} onChange={(v) => update(["about", "whyChoose", String(i), "desc"], v)} rows={2} />
                  </Field>
                </div>
              ))}
              <H3 className="mt-6">Footer &amp; CTA</H3>
              <Field label="Footer Description">
                <Textarea value={content.footer.description} onChange={(v) => update(["footer", "description"], v)} rows={2} />
              </Field>
              <Field label="Copyright Text" className="mt-3">
                <Input value={content.footer.copyright} onChange={(v) => update(["footer", "copyright"], v)} />
              </Field>
              <Field label="CTA Section Title" className="mt-3">
                <Input value={content.cta.title} onChange={(v) => update(["cta", "title"], v)} />
              </Field>
            </Section>
          )}

          {/* ── JSON EDITOR ────────────────────────────────────── */}
          {activeTab === "json" && (
            <Section title="Raw JSON Editor" desc="Edit the full site content as JSON. Changes are applied when you Save.">
              {jsonError && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-4 py-3 mb-4 flex items-center gap-2">
                  <AlertCircle size={14} />
                  {jsonError}
                </div>
              )}
              <textarea
                value={jsonText}
                onChange={(e) => {
                  setJsonText(e.target.value);
                  try {
                    JSON.parse(e.target.value);
                    setJsonError("");
                  } catch {
                    setJsonError("Invalid JSON syntax");
                  }
                }}
                className="w-full h-[70vh] bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 text-green-400 text-xs font-mono focus:outline-none focus:border-[#ffa800]/50 resize-none"
                spellCheck={false}
              />
            </Section>
          )}
        </main>
      </div>
    </div>
  );
}

// ── Sub-components ───────────────────────────────────────

function Section({ title, desc, children }: { title: string; desc?: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        {desc && <p className="text-gray-400 text-sm mt-1">{desc}</p>}
      </div>
      {children}
    </div>
  );
}

function H3({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-gray-300 font-semibold text-sm uppercase tracking-wider mb-3 ${className}`}>
      {children}
    </h3>
  );
}

function Grid({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      {children}
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      {children}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-[#1a1a19] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#ffa800]/50 focus:ring-1 focus:ring-[#ffa800]/20 transition-all"
    />
  );
}

function Textarea({
  value,
  onChange,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="w-full bg-[#1a1a19] border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#ffa800]/50 focus:ring-1 focus:ring-[#ffa800]/20 transition-all resize-none"
    />
  );
}

function CollapsibleCard({
  title,
  index,
  children,
}: {
  title: string;
  index: number;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="bg-[#1a1a19] border border-white/5 rounded-2xl mb-4 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/3 transition-colors"
      >
        <span className="text-white font-medium text-sm">{title}</span>
        {open ? (
          <ChevronDown size={16} className="text-gray-400" />
        ) : (
          <ChevronRight size={16} className="text-gray-400" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-white/5 pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
