import { useEffect, useState, useRef } from "react";
import { AnimatedSection, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, Zap, Award, HeartHandshake } from "lucide-react";

const stats = [
  { icon: CheckCircle, value: 100, suffix: "+", label: "Projects Completed" },
  { icon: Zap, value: 24, suffix: "hr", label: "Fast Turnaround" },
  { icon: Award, value: 100, suffix: "%", label: "Premium Quality" },
  { icon: HeartHandshake, value: 50, suffix: "+", label: "Happy Clients" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref} className="font-heading text-3xl sm:text-4xl font-black gradient-text">
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="section-padding relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Trusted <span className="gradient-text">Excellence</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <div className="glass rounded-2xl p-6 text-center hover:neon-border transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <CountUp target={s.value} suffix={s.suffix} />
                <p className="text-muted-foreground text-xs sm:text-sm mt-2">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
