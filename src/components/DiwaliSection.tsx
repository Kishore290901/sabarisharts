import { AnimatedSection } from "@/hooks/useScrollAnimation";
import diwaliDesktop from "@/assets/diwali-desktop.jpg";
import diwaliMobile from "@/assets/diwali-mobile.jpg";

export default function DiwaliSection() {
  return (
    <section
      id="diwali"
      className="section-padding bg-gradient-to-b from-slate-50 to-white"
    >
      <AnimatedSection className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
            Festival Greetings
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-3">
            Happy Diwali
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto px-2">
            Wishing you and your family a bright, prosperous and joyful Diwali from Sabharish Arts.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-slate-100 bg-white p-2 sm:p-3">
          <img
            src={diwaliDesktop}
            alt="Sabharish Arts Happy Diwali outdoor advertising poster"
            className="hidden md:block w-full h-auto object-contain rounded-xl sm:rounded-2xl"
            loading="lazy"
          />
          <img
            src={diwaliMobile}
            alt="Sabharish Arts Happy Diwali outdoor advertising poster"
            className="md:hidden w-full h-auto object-contain rounded-xl"
            loading="lazy"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-[0_10px_24px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5 hover:shadow-[0_16px_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
