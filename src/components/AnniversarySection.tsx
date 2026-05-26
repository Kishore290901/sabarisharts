import { AnimatedSection } from "@/hooks/useScrollAnimation";
import anniversaryImage from "@/assets/anniversary-38.png";

export default function AnniversarySection() {
  return (
    <section
      id="anniversary"
      className="section-padding bg-gradient-to-b from-white to-slate-50"
    >
      <AnimatedSection className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-slate-100 p-4 sm:p-6 lg:p-8">
          <div className="group overflow-hidden rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
            <img
              src={anniversaryImage}
              alt="Sabharish Arts 38th anniversary celebration"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          <div className="text-left">
            <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
              Achievement
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Celebrating 38 Years of Excellence
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed mb-8">
              For over three decades, Sabharish Arts has been delivering impactful
              outdoor advertising solutions, building trusted partnerships, and
              creating memorable brand experiences across industries. Our journey
              reflects creativity, innovation, and measurable success.
            </p>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-[0_10px_24px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5 hover:shadow-[0_16px_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              Explore Our Journey
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
