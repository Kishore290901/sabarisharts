import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Megaphone, Printer, Palette, MapPin } from "lucide-react";

const highlights = [
  { icon: Megaphone, title: "Advertising Solutions", desc: "Outdoor, indoor & digital advertising across Tamil Nadu" },
  { icon: Printer, title: "Printing Solutions", desc: "Premium quality offset & digital printing services" },
  { icon: Palette, title: "Creative Designing", desc: "Branding, logos, social media & web design" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Who We <span className="gradient-text">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Sabharish Arts is a full-service advertising & branding agency with years of
            experience delivering exceptional print, outdoor advertising, and creative design
            solutions. We serve businesses across{" "}
            <span className="text-foreground font-medium">Chennai</span> &{" "}
            <span className="text-foreground font-medium">Coimbatore</span>.
          </p>
        </AnimatedSection>

        <div className="flex items-center justify-center gap-6 mb-12">
          {["Chennai", "Coimbatore"].map((city) => (
            <AnimatedSection key={city} delay={200}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-accent" />
                <span className="text-sm font-medium">{city}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 150}>
              <div className="glass rounded-2xl p-8 text-center hover:neon-border transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
