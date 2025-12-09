import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/50 to-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-medium/30 rounded-full blur-3xl floating-animation" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation-delayed" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-navy-light/20 rounded-full blur-3xl floating-animation-slow" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-sky-medium rounded-full floating-animation opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary rounded-lg rotate-45 floating-animation-delayed opacity-40" />
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-navy-light rounded-full floating-animation-slow opacity-50" />
        <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-sky-dark rounded-full floating-animation opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-zoom-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t("Trusted Partner in Saudi Arabia")}</span>
          </div>

          {/* Company Name */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-6 animate-slide-in-left">
            <span className="bg-gradient-to-r from-sky-dark via-primary to-navy-medium bg-clip-text text-transparent">HBR-WORLD</span>
          </h1>

          {/* Main Title */}
          <h2
            className="font-display font-semibold text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 animate-slide-in-right"
            style={{ animationDelay: "0.1s" }}
          >
            {t("Trusted Contracting & Manpower Solutions")}
            <span className="block text-primary">{t("Across Saudi Arabia")}</span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-zoom-in"
            style={{ animationDelay: "0.2s" }}
          >
            {t("Delivering Excellence in Civil Construction & Professional Manpower Supply.")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-zoom-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                {t("Explore Services")}
                <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/contact">{t("Contact Us")}</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-zoom-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">{t("Quality Certified")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">{t("Trusted & Approved")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">{t("24/7 Support")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
