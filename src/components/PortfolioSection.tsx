import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import portHoarding from "@/assets/port-hoarding.jpg";
import portFlex from "@/assets/port-flex.jpg";
import portBranding from "@/assets/port-branding.jpg";
import portSocial from "@/assets/port-social.jpg";
import portVehicle from "@/assets/port-vehicle.jpg";

const filters = ["All", "Hoardings", "Flex Boards", "Branding", "Social Media", "Vehicle Ads"];

const portfolioItems = [
  { title: "City Hoarding Campaign", category: "Hoardings", image: portHoarding },
  { title: "Flex Board – Retail Store", category: "Flex Boards", image: portFlex },
  { title: "Corporate Branding Package", category: "Branding", image: portBranding },
  { title: "Social Media Campaign", category: "Social Media", image: portSocial },
  { title: "Bus Wrap Advertising", category: "Vehicle Ads", image: portVehicle },
  { title: "Highway Hoarding", category: "Hoardings", image: portHoarding },
  { title: "Restaurant Branding", category: "Branding", image: portBranding },
  { title: "Instagram Post Design", category: "Social Media", image: portSocial },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeFilter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Creative <span className="gradient-text">Portfolio</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.title + i} delay={i * 80}>
              <div
                onClick={() => setLightbox(i)}
                className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:neon-border transition-all duration-300 relative group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-heading font-bold text-sm sm:text-base text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-foreground" onClick={() => setLightbox(null)}>
            <X size={28} />
          </button>
          <div className="max-w-2xl w-full rounded-3xl overflow-hidden">
            <img
              src={filtered[lightbox].image}
              alt={filtered[lightbox].title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="glass p-6 text-center">
              <h3 className="font-heading font-bold text-2xl mb-1">{filtered[lightbox].title}</h3>
              <p className="text-muted-foreground">{filtered[lightbox].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
