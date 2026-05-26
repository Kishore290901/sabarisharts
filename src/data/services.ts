import type { LucideIcon } from "lucide-react";
import { Megaphone, Printer, Palette } from "lucide-react";

export type ServiceItem = {
  slug: string;
  name: string;
  /** Uses existing cover/gallery files for this slug until you add files named after `slug`. */
  imageSlug?: string;
};

export type ServiceCategory = {
  name: string;
  icon: LucideIcon;
  services: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Advertising",
    icon: Megaphone,
    services: [
      { slug: "flex-board", name: "Flex Board" },
      { slug: "led-board", name: "LED Board" },
      { slug: "neon-board", name: "Neon Board" },
      { slug: "bus-board", name: "Bus Board" },
      { slug: "railway-board", name: "Railway Board" },
      { slug: "hoarding", name: "Hoarding" },
      { slug: "mobile-auto", name: "Mobile Auto Ads" },
      { slug: "wall-painting", name: "Wall Painting" },
      { slug: "shelter-ads", name: "Shelter Ads", imageSlug: "newspaper-ads" },
      { slug: "pole-kiosk-ads", name: "Pole Kiosk Ads", imageSlug: "tv-media" },
      { slug: "press-ads", name: "Press Ads", imageSlug: "newspaper-ads" },
    ],
  },
  {
    name: "Printing",
    icon: Printer,
    services: [
      { slug: "visiting-card", name: "Visiting Card" },
      { slug: "letterhead", name: "Letterhead" },
      { slug: "id-card", name: "ID Card" },
      { slug: "invitation", name: "Invitation" },
      { slug: "posters", name: "Posters" },
      { slug: "envelopes", name: "Envelopes" },
      { slug: "catalogues", name: "Catalogues" },
      { slug: "book-work", name: "Book Work" },
    ],
  },
  {
    name: "Designing",
    icon: Palette,
    services: [
      { slug: "graphic-design", name: "Graphic Design" },
      { slug: "logo-design", name: "Logo Design" },
      { slug: "brochure", name: "Brochure" },
      { slug: "email-flyer", name: "Email Flyer" },
      { slug: "web-design", name: "Web Design" },
      { slug: "social-media", name: "Social Media Post" },
      { slug: "menu-card", name: "Menu Card" },
      { slug: "media-banner", name: "Media Banner" },
      { slug: "stationery-pkg", name: "Stationary Package" },
      { slug: "branding-pkg", name: "Branding Package" },
    ],
  },
];

export type SelectedService = ServiceItem & { category: string };
