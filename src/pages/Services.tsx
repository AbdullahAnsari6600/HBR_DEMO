import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

const services = [
  {
    icon: Building2,
    title: "Civil Construction",
    description: "Complete structural and civil engineering solutions for commercial and residential projects.",
    color: "from-sky-medium to-sky-dark",
    videoFile: "excavation.mp4",
    features: [
      "Structural precision work",
      "Experienced civil engineers",
      "Industrial, Commercial and residentials works"
    ]
  },
  {
    icon: PaintBucket,
    title: "Manpower Supply",
    description: "Skilled, semi-skilled, and general workforce solutions.",
    color: "from-primary to-navy-light",
    videoFile: "manpower.mp4",
    features: [
      "Certified skilled workers",
      "Indoor , Outdoor & Garden Cleaning",
      "Semi-skilled workers"
    ]
  },
  {
    icon: Factory,
    title: "Exterior Glass Fitting",
    description: "Stunning exterior cladding, facades, and finishing solutions.",
    color: "from-sky-dark to-navy-medium",
    videoFile: "glass.mp4",
    features: [
      "High-quality glass installation",
      "Aluminum glass frames",
      "Advanced safety compliance"
    ]
  },
  {
    icon: Zap,
    title: "Electrical Works",
    description: "Complete electrical installations, maintenance, and smart systems.",
    color: "from-yellow-400 to-orange-500",
    videoFile: "electrical.mp4",
    features: [
      "Wiring & panel installation",
      "Smart automation systems",
      "24/7 emergency repair"
    ]
  },
  {
    icon: Droplets,
    title: "Plumbing Works",
    description: "Professional plumbing installations and water management systems.",
    color: "from-blue-400 to-blue-600",
    videoFile: "plumbing.mp4",
    features: [
      "Leak detection & repair",
      "Water tank & pipeline setup",
      "Heavy equipments with drivers"
    ]
  },
  {
    icon: Wrench,
    title: "Mechanical Works",
    description: "Advanced mechanical engineering and equipment installation services.",
    color: "from-gray-400 to-gray-600",
    videoFile: "construction.mp4",
    features: [
      "Heavy equipment setup",
      "Industrial mechanical support",
      "Preventive maintenance"
    ]
  },
  {
    icon: Wind,
    title: "HVAC Services",
    description: "Climate control solutions for optimal comfort and energy efficiency.",
    color: "from-teal-400 to-teal-600",
    videoFile: "hvac.mp4",
    features: [
      "Ducting installation",
      "Chiller & split unit service",
      "Energy-efficient systems"
    ]
  },
  {
    icon: Settings,
    title: "Facility Maintenance",
    description: "Comprehensive facility management and maintenance services.",
    color: "from-purple-400 to-purple-600",
    videoFile: "cleaning.mp4",
    features: [
      "Daily & periodic maintenance",
      "Indoor & Outdoor cleaning",
      "Male and female cleaners"
    ]
  },
  {
    icon: Hammer,
    title: "Renovation Works",
    description: "Complete renovation and refurbishment of existing structures.",
    color: "from-amber-400 to-amber-600",
    videoFile: "maintenance.mp4",
    features: [
      "Modern design upgrades",
      "Structure remodelling",
      "Cost-efficient refurbishment"
    ]
  },
  {
    icon: Users,
    title: "Networking & IT Services",
    description: "Data operators with efficient file handling",
    color: "from-green-400 to-green-600",
    videoFile: "networking.mp4",
    features: [
      "Data Entry",
      "Network Setup & Configuration",
      "System Troubleshooting & Support"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Fitout Works",
    description: "High-quality interior and exterior fitout services.",
    color: "from-red-400 to-red-600",
    videoFile: "fitout.mp4",
    features: [
      "Premium finishing",
      "Custom carpentry",
      "Turnkey fitout solutions"
    ]
  },
  {
    icon: Factory,
    title: "Industrial Support",
    description: "Industrial facility support and operational assistance.",
    color: "from-navy-light to-navy-dark",
    videoFile: "constructionn.mp4",
    features: [
      "Industrial manpower",
      "Process optimization",
      "Factory maintenance"
    ]
  }
];



const Services = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Our Services")}</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">{t("Comprehensive Solutions")}</h1>
                <p className="text-muted-foreground text-lg">{t("From construction to manpower, we deliver end-to-end services tailored to your project needs")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <ScrollReveal key={service.title} delay={index * 50}>
                    <GlassCard className="p-8 h-full group">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow`}>
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">{t(service.title)}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.description)}</p>

                      {/* Video */}
                      <video className="w-full rounded-xl aspect-video mb-6 object-cover" src={`/videos/${service.videoFile}`} autoPlay muted loop playsInline />

                      {/* Features List */}
                      <ul className="space-y-2 text-sm text-muted-foreground">
  {service.features.map((feature, i) => (
    <li key={i} className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      {t(feature)}
    </li>
  ))}
</ul>

                    </GlassCard>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-medium to-navy-dark">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">{t("Ready to Start Your Project?")}</h2>
                <p className="text-primary-foreground/70 mb-8">{t("Contact us today for a free consultation and quotation")}</p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    {t("Get in Touch")}
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
