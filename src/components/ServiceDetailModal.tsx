import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ServiceGalleryCarousel from "@/components/ServiceGalleryCarousel";
import type { SelectedService } from "@/data/services";
import { getServiceImages } from "@/lib/serviceImages";
import { buildWhatsAppUrl, serviceEnquiryMessage } from "@/lib/whatsapp";

type ServiceDetailModalProps = {
  service: SelectedService | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ServiceDetailModal({ service, open, onOpenChange }: ServiceDetailModalProps) {
  const images = service ? getServiceImages(service.slug, service.imageSlug) : [];
  const whatsappHref = service
    ? buildWhatsAppUrl(serviceEnquiryMessage(service.name, service.category))
    : "#";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {service && (
      <DialogContent
        className="flex max-h-[min(92dvh,900px)] w-[calc(100%-1rem)] max-w-2xl flex-col gap-0 overflow-hidden border-border/50 bg-background p-0 sm:w-full sm:rounded-2xl
          max-sm:!bottom-0 max-sm:!left-1/2 max-sm:!top-auto max-sm:!translate-x-[-50%] max-sm:!translate-y-0 max-sm:rounded-b-none max-sm:rounded-t-2xl
          data-[state=open]:max-sm:slide-in-from-bottom-[48%] data-[state=closed]:max-sm:slide-out-to-bottom-[48%]"
      >
        <div className="overflow-y-auto overscroll-contain">
          <ServiceGalleryCarousel images={images} alt={service.name} />

          <DialogHeader className="space-y-2 px-4 pb-4 pt-4 text-left sm:px-6 sm:pb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              {service.category}
            </p>
            <DialogTitle className="font-heading text-xl sm:text-2xl">{service.name}</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed">
              {images.length > 1
                ? "Swipe or use the arrows to browse sample work. Tap below to enquire on WhatsApp."
                : "Tap below to enquire about this service on WhatsApp."}
            </DialogDescription>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-semibold text-white transition-transform active:scale-[0.98] sm:w-auto sm:min-w-[220px]"
            >
              <MessageCircle size={18} aria-hidden />
              Enquire on WhatsApp
            </a>
          </DialogHeader>
        </div>
      </DialogContent>
      )}
    </Dialog>
  );
}
