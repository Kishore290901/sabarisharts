import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Megaphone, Printer, Palette, RectangleHorizontal, Lightbulb, Zap,
  Bus, Train, Eye, Car, PaintBucket, Newspaper, Tv, CreditCard,
  FileText, BadgeCheck, Mail, Image, Package, BookOpen,
  PenTool, Figma, BookMarked, Globe, Share2, UtensilsCrossed,
  Monitor, LayoutGrid, Award
} from "lucide-react";

const categories = [
  {
    name: "Advertising",
    icon: Megaphone,
    color: "primary",
    services: [
      { name: "Flex Board", icon: RectangleHorizontal },
      { name: "LED Board", icon: Lightbulb },
      { name: "Neon Board", icon: Zap },
      { name: "Bus Board", icon: Bus },
      { name: "Railway Board", icon: Train },
      { name: "Hoarding", icon: Eye },
      { name: "Mobile Auto Ads", icon: Car },
      { name: "Wall Painting", icon: PaintBucket },
      { name: "Newspaper Ads", icon: Newspaper },
      { name: "TV Media Ads", icon: Tv },
    ],
  },
  {
    name: "Printing",
    icon: Printer,
    color: "accent",
    services: [
      { name: "Visiting Card", icon: CreditCard },
      { name: "Letterhead", icon: FileText },
      { name: "ID Card", icon: BadgeCheck },
      { name: "Invitation", icon: Mail },
      { name: "Posters", icon: Image },
      { name: "Envelopes", icon: Mail },
      { name: "Catalogues", icon: BookMarked },
      { name: "Book Work", icon: BookOpen },
    ],
  },
  {
    name: "Designing",
    icon: Palette,
    color: "brand",
    services: [
      { name: "Graphic Design", icon: PenTool },
      { name: "Logo Design", icon: Figma },
      { name: "Brochure", icon: BookMarked },
      { name: "Email Flyer", icon: Mail },
      { name: "Web Design", icon: Globe },
      { name: "Social Media Post", icon: Share2 },
      { name: "Menu Card", icon: UtensilsCrossed },
      { name: "Media Banner", icon: Monitor },
      { name: "Stationary Package", icon: LayoutGrid },
      { name: "Branding Package", icon: Award },
    ],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section id="services" className="section-padding relative">
      {/* Subtle neon line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={100}>
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                <cat.icon size={18} />
                {cat.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Service grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {active.services.map((svc, i) => (
            <AnimatedSection key={svc.name} delay={i * 50}>
              <div className="glass rounded-2xl p-5 text-center hover:neon-border hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <svc.icon size={22} className="text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{svc.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
