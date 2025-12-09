import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import { HardHat, Wrench, Hammer, User, Settings, Truck, Flame, Cog, Shield, Zap, Droplets, Building } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  {
    id: "skilled",
    name: "Skilled Workers",
    icon: HardHat,
    description: "Professionally trained and certified specialists",
    workers: ["Electricians", "Plumbers", "Carpenters", "Masons", "Painters", "Tile Setters", "Steel Fixers", "Scaffolders"],
  },
  {
    id: "semi-skilled",
    name: "Semi-Skilled Workers",
    icon: Wrench,
    description: "Trained workers with developing expertise",
    workers: [
      "Helper Electricians",
      "Helper Plumbers",
      "Assistant Masons",
      "Junior Carpenters",
      "Finishing Workers",
      "Installation Helpers",
    ],
  },
  {
    id: "general",
    name: "General Labor",
    icon: Hammer,
    description: "Reliable workforce for general construction tasks",
    workers: ["Construction Laborers", "Loading Workers", "Cleaning Staff", "Material Handlers", "Site Helpers", "General Assistants"],
  },
  {
    id: "engineers",
    name: "Engineers",
    icon: User,
    description: "Qualified engineering professionals",
    workers: ["Civil Engineers", "Mechanical Engineers", "Electrical Engineers", "HVAC Engineers", "Site Engineers", "Project Engineers"],
  },
  {
    id: "technicians",
    name: "Technicians",
    icon: Settings,
    description: "Technical experts for specialized tasks",
    workers: [
      "HVAC Technicians",
      "Electrical Technicians",
      "AC Technicians",
      "Elevator Technicians",
      "Fire Alarm Technicians",
      "BMS Technicians",
    ],
  },
  {
    id: "drivers",
    name: "Drivers",
    icon: Truck,
    description: "Licensed drivers for all vehicle types",
    workers: [
      "Heavy Vehicle Drivers",
      "Light Vehicle Drivers",
      "Forklift Operators",
      "Crane Operators",
      "Dump Truck Drivers",
      "Bus Drivers",
    ],
  },
  {
    id: "welders",
    name: "Welders",
    icon: Flame,
    description: "Certified welding professionals",
    workers: ["TIG Welders", "MIG Welders", "Arc Welders", "Pipe Welders", "Structural Welders", "Aluminum Welders"],
  },
  {
    id: "operators",
    name: "Operators",
    icon: Cog,
    description: "Skilled heavy equipment operators",
    workers: [
      "Excavator Operators",
      "Loader Operators",
      "Crane Operators",
      "Bulldozer Operators",
      "Grader Operators",
      "Concrete Pump Operators",
    ],
  },
  {
    id: "safety",
    name: "Safety Officers",
    icon: Shield,
    description: "HSE professionals for site safety",
    workers: [
      "HSE Officers",
      "Safety Supervisors",
      "Fire Safety Officers",
      "First Aid Officers",
      "Environmental Officers",
      "Safety Trainers",
    ],
  },
  {
    id: "mechanical-helpers",
    name: "Mechanical Helpers",
    icon: Zap,
    description: "Support staff for mechanical works",
    workers: ["Pipe Fitter Helpers", "HVAC Helpers", "Equipment Helpers", "Maintenance Helpers", "Installation Assistants"],
  },
  {
    id: "electrical-helpers",
    name: "Electrical Helpers",
    icon: Droplets,
    description: "Support staff for electrical works",
    workers: ["Cable Pullers", "Electrical Assistants", "Panel Helpers", "Lighting Helpers", "Conduit Helpers"],
  },
  {
    id: "construction-labor",
    name: "Construction Labor",
    icon: Building,
    description: "Specialized construction workforce",
    workers: ["Concrete Workers", "Block Layers", "Steel Workers", "Demolition Workers", "Formwork Laborers", "Plastering Workers"],
  },
];

const Manpower = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Manpower Supply")}</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">{t("Professional Workforce")}</h1>
                <p className="text-muted-foreground text-lg">
                  {t("Skilled, semi-skilled, and general workforce solutions tailored to your project requirements")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Category Tabs */}
              <div className="lg:col-span-1">
                <ScrollReveal>
                  <div className="sticky top-24 space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                          "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                          activeCategory.id === category.id
                            ? "bg-gradient-to-r from-sky-medium to-navy-light text-primary-foreground shadow-glow"
                            : "bg-card/50 hover:bg-card text-foreground hover:shadow-md",
                        )}
                      >
                        <category.icon className="w-5 h-5 shrink-0" />
                        <span className="font-medium text-sm">{t(category.name)}</span>
                      </button>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Category Details */}
              <div className="lg:col-span-2">
                <ScrollReveal key={activeCategory.id}>
                  <GlassCard className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-medium to-navy-light flex items-center justify-center">
                        <activeCategory.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-2xl text-foreground">{t(activeCategory.name)}</h2>
                        <p className="text-muted-foreground">{t(activeCategory.description)}</p>
                      </div>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-foreground mb-4">{t("Available Positions")}</h3>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {activeCategory.workers.map((worker) => (
                        <div
                          key={worker}
                          className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-foreground">{t(worker)}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <h4 className="font-display font-semibold text-foreground mb-3">{t("Why Choose Our Manpower?")}</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground text-sm">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {t("Verified backgrounds")}
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {t("Professional training")}
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {t("Valid certifications")}
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {t("Quick deployment")}
                        </li>
                      </ul>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Manpower;
