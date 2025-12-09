import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Building2, Users, Briefcase, Calendar, Smile, HardHat } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  {
    icon: Building2,
    value: 200,
    suffix: "+",
    label: "Projects Completed",
    color: "from-sky-medium to-sky-dark",
  },
  {
    icon: Users,
    value: 3000,
    suffix: "+",
    label: "Skilled Workers Provided",
    color: "from-primary to-navy-light",
  },
  {
    icon: Briefcase,
    value: 8,
    suffix: "",
    label: "Ongoing Projects",
    color: "from-sky-dark to-navy-medium",
  },
  {
    icon: Calendar,
    value: 13,
    suffix: "+",
    label: "Years of Experience",
    color: "from-navy-light to-navy-dark",
  },
  {
    icon: Smile,
    value: 200,
    suffix: "+",
    label: "Happy Clients",
    color: "from-sky-light to-sky-medium",
  },
  {
    icon: HardHat,
    value: 4000,
    suffix: "+",
    label: "Total Manpower Deployed",
    color: "from-primary to-sky-dark",
  },
];

export const StatsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-medium/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Our Achievements")}</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              {t("Numbers That Speak")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("A legacy of excellence, built one successful project at a time")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <GlassCard className="p-8 text-center group">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110`}
                >
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="font-display font-bold text-4xl md:text-5xl text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{t(stat.label)}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
