import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Clock, Award, BadgeDollarSign, ShieldCheck, Star, Headphones } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on completing projects within scheduled timelines without compromising quality.",
  },
  {
    icon: Award,
    title: "Certified Manpower",
    description: "All our workforce is professionally trained, certified, and experienced in their respective fields.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-Effective",
    description: "Competitive pricing with transparent billing and no hidden costs for all our services.",
  },
  {
    icon: ShieldCheck,
    title: "High Safety Standards",
    description: "Strict protocols and compliance with international safety regulations on all sites.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Using only the finest materials and latest techniques to ensure lasting excellence.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Round-the-clock assistance and rapid response for all your queries and concerns.",
  },
];

export const WhyChooseUsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-medium/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Why Choose Us")}</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              {t("The HBR-WORLD Advantage")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("Experience the difference that comes with working alongside industry leaders")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <GlassCard className="p-8 h-full group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-sky-medium/20 to-navy-light/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(feature.title)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{t(feature.description)}</p>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
