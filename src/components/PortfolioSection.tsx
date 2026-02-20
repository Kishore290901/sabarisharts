import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";

const filters = ["All", "Hoardings", "Flex Boards", "Branding", "Social Media", "Vehicle Ads"];

const portfolioItems = [
  { title: "City Hoarding Campaign", category: "Hoardings", color: "from-primary/30 to-accent/20" },
  { title: "Flex Board – Retail Store", category: "Flex Boards", color: "from-accent/30 to-primary/20" },
  { title: "Corporate Branding Package", category: "Branding", color: "from-brand-blue/30 to-primary/20" },
  { title: "Social Media Campaign", category: "Social Media", color: "from-primary/20 to-accent/30" },
  { title: "Bus Wrap Advertising", category: "Vehicle Ads", color: "from-accent/20 to-brand-blue/30" },
  { title: "Highway Hoarding", category: "Hoardings", color: "from-brand-blue/20 to-accent/30" },
  { title: "Restaurant Branding", category: "Branding", color: "from-primary/30 to-brand-blue/20" },
  { title: "Instagram Post Design", category: "Social Media", color: "from-accent/30 to-primary/30" },
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
                className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.color} glass cursor-pointer hover:scale-105 hover:neon-border transition-all duration-300 flex items-center justify-center p-4`}
              >
                <div className="text-center">
                  <p className="font-heading font-bold text-sm sm:text-base text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
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
          <div className={`max-w-lg w-full aspect-[4/3] rounded-3xl bg-gradient-to-br ${filtered[lightbox].color} glass flex items-center justify-center p-8`}>
            <div className="text-center">
              <h3 className="font-heading font-bold text-2xl mb-2">{filtered[lightbox].title}</h3>
              <p className="text-muted-foreground">{filtered[lightbox].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
