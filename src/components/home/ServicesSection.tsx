import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Building2,
  PaintBucket,
  Palette,
  Zap,
  Droplets,
  Wrench,
  Wind,
  Settings,
  Hammer,
  Users,
  ShieldCheck,
  Factory,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const services = [
  {
    icon: Building2,
    title: "Civil Construction",
    description: "Complete structural and civil engineering solutions for commercial and residential projects.",
    color: "from-sky-medium to-sky-dark",
  },
  {
    icon: PaintBucket,
    title: "Interior Fit-Out",
    description: "Premium interior finishing and fit-out services for modern spaces.",
    color: "from-primary to-navy-light",
  },
  {
    icon: Factory,
    title: "Exterior Glass Fitting",
    description: "Stunning exterior cladding, facades, and finishing solutions.",
    color: "from-sky-dark to-navy-medium",
  },
  {
    icon: Zap,
    title: "Electrical Works",
    description: "Complete electrical installations, maintenance, and smart systems.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Plumbing Works",
    description: "Professional plumbing installations and water management systems.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Wrench,
    title: "Mechanical Works",
    description: "Advanced mechanical engineering and equipment installation services.",
    color: "from-gray-400 to-gray-600",
  },
  {
    icon: Wind,
    title: "HVAC Services",
    description: "Climate control solutions for optimal comfort and energy efficiency.",
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: Settings,
    title: "Facility Maintenance",
    description: "Comprehensive facility management and maintenance services.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Hammer,
    title: "Renovation Works",
    description: "Complete renovation and refurbishment of existing structures.",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Users,
    title: "Manpower Supply",
    description: "Skilled, semi-skilled, and general workforce solutions.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description: "HSE management and regulatory compliance services.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: Factory,
    title: "Industrial Support",
    description: "Industrial facility support and operational assistance.",
    color: "from-navy-light to-navy-dark",
  },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("What We Offer")}</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              {t("Comprehensive Services")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("From construction to manpower, we provide end-to-end solutions for all your project needs")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 50}>
              <GlassCard className="p-6 h-full group cursor-pointer">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow`}
                >
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(service.title)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(service.description)}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center mt-12">
            <Button variant="gradient" size="lg" asChild>
              <Link to="/services">
                {t("View All Services")}
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
