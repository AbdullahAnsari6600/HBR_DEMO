import { useRef, useEffect } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ClipboardList, Pencil, Hammer, TestTube2, Package, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const timelineSteps = [
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Strategic project planning & requirement analysis",
  },
  {
    icon: Pencil,
    title: "Designing",
    description: "Creative design solutions & technical drawings",
  },
  {
    icon: Hammer,
    title: "Execution",
    description: "Professional implementation with quality control",
  },
  {
    icon: TestTube2,
    title: "Testing",
    description: "Rigorous quality assurance & testing protocols",
  },
  {
    icon: Package,
    title: "Delivery",
    description: "On-time project delivery & handover",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance & 24/7 support",
  },
];

export const TimelineSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      if (!scrollContainer) return;

      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer?.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-navy-medium to-navy-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sky-light font-semibold text-sm uppercase tracking-wider">{t("Our Process")}</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 text-primary-foreground">
              {t("From Vision to Reality")}
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              {t("A streamlined approach that ensures project excellence at every stage")}
            </p>
          </div>
        </ScrollReveal>

        {/* Horizontal Scroll Timeline */}
        <div
  ref={scrollRef}
  dir="ltr"
  className="overflow-x-auto scrollbar-hide pb-8 -mx-4 px-4"

          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-6 min-w-max py-4">
            {/* Duplicate for infinite scroll effect */}
            {[...timelineSteps, ...timelineSteps].map((step, index) => (
              <div key={`${step.title}-${index}`} className="group relative flex-shrink-0 w-72">
                {/* Card */}
                <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 transition-all duration-300 hover:bg-primary-foreground/20 hover:scale-105 hover:shadow-glow">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-sky-light to-sky-dark flex items-center justify-center text-navy-dark font-bold text-sm shadow-glow">
                    {(index % 6) + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-medium/30 to-navy-light/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7 text-sky-light" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-primary-foreground mb-2">
  {step.title}
</h3>

<p className="text-primary-foreground/70 text-sm">
  {step.description}
</p>

                </div>

                {/* Connector Line */}
                {index < timelineSteps.length * 2 - 1 && (
                  <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-sky-light/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <ScrollReveal delay={200}>
          <div className="text-center mt-12">
            <p className="text-2xl md:text-3xl font-display font-semibold text-primary-foreground/90">
              <span className="text-sky-light">"</span>
              {t("Building Tomorrow, Delivering Today")}
              <span className="text-sky-light">"</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
