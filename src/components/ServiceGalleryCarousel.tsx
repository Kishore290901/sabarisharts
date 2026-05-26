import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type ServiceGalleryCarouselProps = {
  images: string[];
  alt: string;
  className?: string;
};

export default function ServiceGalleryCarousel({ images, alt, className }: ServiceGalleryCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const hasMultiple = images.length > 1;

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    setCurrent(carouselApi.selectedScrollSnap());
    setSnapCount(carouselApi.scrollSnapList().length);
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    api?.scrollTo(0, true);
  }, [api, images]);

  return (
    <div className={cn("relative w-full", className)}>
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: hasMultiple }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {images.map((src, index) => (
            <CarouselItem key={`${src}-${index}`} className="pl-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-muted/30">
                <img
                  src={src}
                  alt={`${alt} – image ${index + 1} of ${images.length}`}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-opacity hover:bg-background active:scale-95 sm:left-3"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur-sm transition-opacity hover:bg-background active:scale-95 sm:right-3"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </Carousel>

      {hasMultiple && (
        <div className="absolute bottom-3 left-0 right-0 z-10 flex flex-col items-center gap-2 px-4">
          <div className="flex items-center justify-center gap-1.5">
            {Array.from({ length: snapCount }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  current === index ? "w-6 bg-primary" : "w-2 bg-foreground/40",
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <p className="rounded-full bg-background/70 px-2.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
            {current + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}
