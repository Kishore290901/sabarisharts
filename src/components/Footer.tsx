import logo from "@/assets/logo.jpeg";
import logoText from "@/assets/logo-text.jpeg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const quickLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
const services = ["Advertising", "Printing", "Designing", "Branding"];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sabharish Arts" className="h-10 w-10 rounded-full" />
              <img src={logoText} alt="Sabharish Arts" className="h-7 object-contain" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium Advertising, Printing & Branding Agency serving Chennai & Coimbatore.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Contact</h4>
            <p className="text-sm text-muted-foreground mb-1">90806 83319 / 94890 56120</p>
            <p className="text-sm text-muted-foreground mb-4">sabharisharts2020@gmail.com</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sabharish Arts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
