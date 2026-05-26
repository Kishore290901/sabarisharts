import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import { portfolioFilters, portfolioItems } from "@/data/portfolio";
import { getPortfolioImage } from "@/lib/portfolioImages";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof portfolioFilters)[number]>("All");
  const [lightboxSlug, setLightboxSlug] = useState<string | null>(null);

  const filtered =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((p) => p.category === activeFilter);

  const lightboxItem = lightboxSlug ? filtered.find((p) => p.slug === lightboxSlug) : null;
  const lightboxImage = lightboxItem
    ? getPortfolioImage(lightboxItem.slug, lightboxItem.imageSlug)
    : undefined;

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
            {portfolioFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all min-h-[44px] ${
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
          {filtered.map((item, i) => {
            const image = getPortfolioImage(item.slug, item.imageSlug);

            return (
              <AnimatedSection key={item.slug} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => setLightboxSlug(item.slug)}
                  className="w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 hover:neon-border transition-all duration-300 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`View ${item.title}`}
                >
                  {image ? (
                    <img
                      src={image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/40 flex items-center justify-center p-4">
                      <p className="text-xs text-muted-foreground text-center">Add portfolio/{item.slug}.jpg</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center px-2">
                      <p className="font-heading font-bold text-sm sm:text-base text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {lightboxItem && lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setLightboxSlug(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setLightboxSlug(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-2xl w-full rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt={lightboxItem.title}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="glass p-6 text-center">
              <h3 className="font-heading font-bold text-2xl mb-1">{lightboxItem.title}</h3>
              <p className="text-muted-foreground">{lightboxItem.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
