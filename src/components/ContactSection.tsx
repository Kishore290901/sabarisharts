import { useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi Sabharish Arts!\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.open(`https://wa.me/919080683319?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Contact <span className="gradient-text">Us</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <AnimatedSection>
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", lines: ["90806 83319", "94890 56120"] },
                { icon: Mail, label: "Email", lines: ["sabharisharts2020@gmail.com"] },
                { icon: MapPin, label: "Chennai", lines: ["Chennai"] },
                { icon: MapPin, label: "Coimbatore", lines: ["Coimbatore"] },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm mb-1">{item.label}</p>
                    {item.lines.map((l) => (
                      <p key={l} className="text-muted-foreground text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={200}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="font-heading font-bold text-xl mb-2">Send us a message</h3>
              {[
                { key: "name", label: "Your Name", type: "text" },
                { key: "email", label: "Email Address", type: "email" },
                { key: "phone", label: "Phone Number", type: "tel" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="text-sm text-muted-foreground mb-1.5 block">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
                  />
                </div>
              ))}
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition neon-glow"
              >
                <Send size={16} /> Send via WhatsApp
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
