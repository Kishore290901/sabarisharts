import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Megaphone, Printer, Palette, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          <p className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3">
            About Us
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Sabharish Arts
          </h2>
        </AnimatedSection>

        <AnimatedSection className="bg-white rounded-3xl shadow-sm px-4 sm:px-8 md:px-10 py-6 sm:py-8 border border-gray-100">
          <div className="text-justify text-xs sm:text-sm md:text-base leading-relaxed text-gray-700 space-y-4">
            <p>
              Welcome to Sabharish Arts, a pioneering name in outdoor advertising with a rich history dating back to
              1988. Originally established as Ilayanila Arts, our journey began with a focus on wall painting &amp;
              hoarding advertising services, setting the benchmark for creativity and impact in the industry. Over the
              years, we have evolved and expanded our offerings to become Sabharish Arts, synonymous with innovative
              outdoor advertising solutions. Our commitment to quality and customer satisfaction remains unwavering as
              we continue to push the boundaries of outdoor advertising.
            </p>
            <p>
              At Sabharish Arts, we specialize in a wide range of outdoor advertising services tailored to meet the
              diverse needs of our clients. Whether it&apos;s eye-catching billboards, dynamic digital displays,
              impactful transit advertising, or strategic location-based promotions, we have the expertise and
              experience to deliver results. Our team of dedicated professionals brings creativity, strategic thinking,
              and technical excellence to every project, ensuring that your brand receives maximum exposure and
              engagement. We believe in the power of outdoor advertising to captivate audiences and leave a lasting
              impression.
            </p>
            <p>
              Explore our website to discover more about our services, portfolio of successful campaigns, and how
              Sabharish Arts can help elevate your brand through effective outdoor advertising. Partner with us to make
              your mark in the world of outdoor advertising. Contact us today to discuss your advertising needs and let
              Sabharish Arts be your trusted partner in outdoor advertising excellence.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
