import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.projects, path: '/projects' },
    { name: t.nav.manpower, path: '/manpower' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.clients, path: '/clients' },
    { name: t.nav.contact, path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-medium to-navy-medium flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110">
              <span className="text-primary-foreground font-display font-bold text-xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-foreground">HBR-WORLD</span>
              <span className="text-xs text-muted-foreground">Contracting & Manpower</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm',
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-lg font-medium text-sm border border-border bg-card/50 hover:bg-primary/10 transition-all duration-300"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <Button variant="gradient" asChild>
              <Link to="/contact">{t.nav.getQuote}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1.5 rounded-lg font-medium text-xs border border-border bg-card/50 hover:bg-primary/10 transition-all"
            >
              {language === 'en' ? 'ع' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Fixed solid background */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isOpen ? 'max-h-[600px] pb-6' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-2 pt-4 bg-card rounded-xl p-4 border border-border/50 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg font-medium transition-all duration-300',
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="gradient" className="mt-4" asChild>
              <Link to="/contact">{t.nav.getQuote}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
