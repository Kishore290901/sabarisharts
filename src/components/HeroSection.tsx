import heroBg from "@/assets/hero-bg.jpg";
import logoText from "@/assets/logo-text.jpeg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Neon lines */}
      <div className="absolute top-1/4 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 animate-glow-pulse" />
      <div className="absolute bottom-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-accent to-transparent opacity-30 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
        <motion.img
          src={logoText}
          alt="Sabharish Arts"
          className="h-10 sm:h-14 mx-auto mb-6 object-contain"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        />

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Igniting <span className="gradient-text">Brands</span>,
          <br />
          Inspiring <span className="gradient-text">Minds</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Premium Advertising, Printing & Branding solutions that elevate your
          business presence across Chennai & Coimbatore.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm neon-glow hover:scale-105 transition-transform"
          >
            Get Quote
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-xl neon-border text-foreground font-bold text-sm hover:bg-primary/10 transition-colors"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}
