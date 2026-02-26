export interface SiteSocial {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsappText: string;
  email: string;
  address: string;
  mapLink: string;
  social: SiteSocial;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  titleLine1: string;
  titleAccent: string;
  titleLine2: string;
  description: string;
  callCTA: string;
  whatsappCTA: string;
  stats: HeroStat[];
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface FleetVehicle {
  id: string;
  name: string;
  models: string;
  price: string;
  badge: string;
  image: string;
  seats: string;
  bags: string;
  href: string;
  features: string[];
  description: string;
}

export interface Route {
  from: string;
  to: string;
  distance: string;
  duration: string;
  popular: boolean;
  vehicles: string[];
}

export interface ServiceItem {
  title: string;
  desc: string;
  emoji: string;
}

export interface Coverage {
  title: string;
  subtitle: string;
  regions: string[];
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface WhyChooseItem {
  title: string;
  desc: string;
}

export interface AboutContent {
  subtitle: string;
  title: string;
  description: string;
  story: string;
  stats: AboutStat[];
  whyChoose: WhyChooseItem[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  avatar: string;
  text: string;
}

export interface CTAContent {
  title: string;
  bookLabel: string;
  contactLabel: string;
}

export interface FooterContent {
  description: string;
  copyright: string;
}

export interface SiteContent {
  site: SiteInfo;
  hero: HeroContent;
  features: FeatureItem[];
  fleet: FleetVehicle[];
  routes: Route[];
  services: ServiceItem[];
  coverage: Coverage;
  about: AboutContent;
  testimonials: Testimonial[];
  cta: CTAContent;
  footer: FooterContent;
}
