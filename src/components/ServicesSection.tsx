import { useMemo, useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Images } from "lucide-react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { serviceCategories, type SelectedService } from "@/data/services";
import { getServiceCover, getServiceImages } from "@/lib/serviceImages";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedService, setSelectedService] = useState<SelectedService | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const active = serviceCategories[activeTab];

  const imageCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const category of serviceCategories) {
      for (const svc of category.services) {
        counts.set(svc.slug, getServiceImages(svc.slug, svc.imageSlug).length);
      }
    }
    return counts;
  }, []);

  const openService = (svc: (typeof active.services)[0]) => {
    setSelectedService({
      ...svc,
      category: active.name,
    });
    setModalOpen(true);
  };

  const handleModalOpenChange = (open: boolean) => {
    setModalOpen(open);
    if (!open) {
      window.setTimeout(() => setSelectedService(null), 250);
    }
  };

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-lg mx-auto px-4">
            Tap any service to view photos and enquire on WhatsApp
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {serviceCategories.map((cat, i) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 min-h-[44px] ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground neon-glow"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                <cat.icon size={18} aria-hidden />
                {cat.name}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {active.services.map((svc, i) => {
            const imageCount = imageCounts.get(svc.slug) ?? 1;
            const cover = getServiceCover(svc.slug, svc.imageSlug);

            return (
              <AnimatedSection key={svc.slug} delay={i * 50}>
                <button
                  type="button"
                  onClick={() => openService(svc)}
                  className="w-full text-left glass rounded-2xl overflow-hidden hover:neon-border active:scale-[0.98] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`View ${svc.name} gallery`}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={cover}
                      alt={svc.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-1">
                      <span className="inline-flex items-center gap-1 rounded-md bg-background/85 px-2 py-1 text-[10px] font-medium text-foreground backdrop-blur-sm sm:text-xs">
                        <Images size={12} aria-hidden />
                        {imageCount > 1 ? `${imageCount} photos` : "View"}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-3 text-center">
                    <p className="text-xs sm:text-sm font-medium text-foreground leading-snug">{svc.name}</p>
                  </div>
                </button>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <ServiceDetailModal
        service={selectedService}
        open={modalOpen}
        onOpenChange={handleModalOpenChange}
      />
    </section>
  );
}
