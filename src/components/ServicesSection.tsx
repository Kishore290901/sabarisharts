import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Megaphone, Printer, Palette } from "lucide-react";

import svcFlexBoard from "@/assets/svc/flex-board.jpg";
import svcLedBoard from "@/assets/svc/led-board.jpg";
import svcNeonBoard from "@/assets/svc/neon-board.jpg";
import svcBusBoard from "@/assets/svc/bus-board.jpg";
import svcRailwayBoard from "@/assets/svc/railway-board.jpg";
import svcHoarding from "@/assets/svc/hoarding.jpg";
import svcMobileAuto from "@/assets/svc/mobile-auto.jpg";
import svcWallPainting from "@/assets/svc/wall-painting.jpg";
import svcNewspaperAds from "@/assets/svc/newspaper-ads.jpg";
import svcTvMedia from "@/assets/svc/tv-media.jpg";
import svcVisitingCard from "@/assets/svc/visiting-card.jpg";
import svcLetterhead from "@/assets/svc/letterhead.jpg";
import svcIdCard from "@/assets/svc/id-card.jpg";
import svcInvitation from "@/assets/svc/invitation.jpg";
import svcPosters from "@/assets/svc/posters.jpg";
import svcEnvelopes from "@/assets/svc/envelopes.jpg";
import svcCatalogues from "@/assets/svc/catalogues.jpg";
import svcBookWork from "@/assets/svc/book-work.jpg";
import svcGraphicDesign from "@/assets/svc/graphic-design.jpg";
import svcLogoDesign from "@/assets/svc/logo-design.jpg";
import svcBrochure from "@/assets/svc/brochure.jpg";
import svcEmailFlyer from "@/assets/svc/email-flyer.jpg";
import svcWebDesign from "@/assets/svc/web-design.jpg";
import svcSocialMedia from "@/assets/svc/social-media.jpg";
import svcMenuCard from "@/assets/svc/menu-card.jpg";
import svcMediaBanner from "@/assets/svc/media-banner.jpg";
import svcStationeryPkg from "@/assets/svc/stationery-pkg.jpg";
import svcBrandingPkg from "@/assets/svc/branding-pkg.jpg";

const categories = [
  {
    name: "Advertising",
    icon: Megaphone,
    services: [
      { name: "Flex Board", image: svcFlexBoard },
      { name: "LED Board", image: svcLedBoard },
      { name: "Neon Board", image: svcNeonBoard },
      { name: "Bus Board", image: svcBusBoard },
      { name: "Railway Board", image: svcRailwayBoard },
      { name: "Hoarding", image: svcHoarding },
      { name: "Mobile Auto Ads", image: svcMobileAuto },
      { name: "Wall Painting", image: svcWallPainting },
      { name: "Newspaper Ads", image: svcNewspaperAds },
      { name: "TV Media Ads", image: svcTvMedia },
    ],
  },
  {
    name: "Printing",
    icon: Printer,
    services: [
      { name: "Visiting Card", image: svcVisitingCard },
      { name: "Letterhead", image: svcLetterhead },
      { name: "ID Card", image: svcIdCard },
      { name: "Invitation", image: svcInvitation },
      { name: "Posters", image: svcPosters },
      { name: "Envelopes", image: svcEnvelopes },
      { name: "Catalogues", image: svcCatalogues },
      { name: "Book Work", image: svcBookWork },
    ],
  },
  {
    name: "Designing",
    icon: Palette,
    services: [
      { name: "Graphic Design", image: svcGraphicDesign },
      { name: "Logo Design", image: svcLogoDesign },
      { name: "Brochure", image: svcBrochure },
      { name: "Email Flyer", image: svcEmailFlyer },
      { name: "Web Design", image: svcWebDesign },
      { name: "Social Media Post", image: svcSocialMedia },
      { name: "Menu Card", image: svcMenuCard },
      { name: "Media Banner", image: svcMediaBanner },
      { name: "Stationary Package", image: svcStationeryPkg },
      { name: "Branding Package", image: svcBrandingPkg },
    ],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = categories[activeTab];

  return (
    <section id="services" className="section-padding relative">
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

        {/* Service grid with images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {active.services.map((svc, i) => (
            <AnimatedSection key={svc.name} delay={i * 50}>
              <div className="glass rounded-2xl overflow-hidden hover:neon-border hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 text-center">
                  <p className="text-sm font-medium text-foreground">{svc.name}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
