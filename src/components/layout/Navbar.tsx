import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Manpower", path: "/manpower" },
  { name: "Gallery", path: "/gallery" },
  { name: "Our Clients", path: "/clients" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-white shadow-sm lg:bg-transparent lg:shadow-none",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <img
  src="/logo.png"
  alt="Logo"
  className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
/>

            <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl bg-gradient-to-r from-sky-medium to-navy-medium bg-clip-text text-transparent">
  HBR-WORLD
</span>



              <span className="text-xs text-muted-foreground">{t("Contracting & Manpower")}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5",
                )}
              >
                {t(item.name)}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="font-semibold">
              {language === "en" ? "العربية" : "English"}
            </Button>
            <Button variant="gradient" asChild>
              <Link to="/contact">{t("Get a Quote")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[520px] pb-6" : "max-h-0",
          )}
        >
          <div className="flex flex-col gap-2 pt-4 rounded-2xl bg-white shadow-lg border border-border/70">
            <div className="flex items-center justify-end px-4">
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="font-semibold">
                {language === "en" ? "العربية" : "English"}
              </Button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:text-primary hover:bg-primary/5",
                )}
              >
                {t(item.name)}
              </Link>
            ))}
            {/* <Button variant="gradient" className="mt-2 mx-4" asChild>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                {t("Get a Quote")}
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
