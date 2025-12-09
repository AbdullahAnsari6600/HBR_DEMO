import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { useLanguage } from '@/contexts/LanguageContext';

const clients = [
  { id: 1, name: 'Saudi Aramco', gradient: 'from-green-500/20 to-green-700/30' },
  { id: 2, name: 'SABIC', gradient: 'from-blue-500/20 to-blue-700/30' },
  { id: 3, name: 'Saudi Electricity', gradient: 'from-yellow-500/20 to-yellow-700/30' },
  { id: 4, name: 'NEOM', gradient: 'from-purple-500/20 to-purple-700/30' },
  { id: 5, name: 'Red Sea Global', gradient: 'from-cyan-500/20 to-cyan-700/30' },
  { id: 6, name: 'Qiddiya', gradient: 'from-orange-500/20 to-orange-700/30' },
  { id: 7, name: 'ROSHN', gradient: 'from-pink-500/20 to-pink-700/30' },
  { id: 8, name: 'Saudi Binladin', gradient: 'from-sky-500/20 to-sky-700/30' },
  { id: 9, name: 'Al Rajhi', gradient: 'from-emerald-500/20 to-emerald-700/30' },
  { id: 10, name: 'STC', gradient: 'from-violet-500/20 to-violet-700/30' },
  { id: 11, name: 'Mobily', gradient: 'from-teal-500/20 to-teal-700/30' },
  { id: 12, name: 'ACWA Power', gradient: 'from-indigo-500/20 to-indigo-700/30' },
];

const Clients = () => {
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
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.clients.sectionLabel}</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  {t.clients.title} <span className="bg-gradient-to-r from-sky-dark to-navy-medium bg-clip-text text-transparent">{t.clients.titleHighlight}</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t.clients.subtitle}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <ScrollReveal key={client.id} delay={index * 50}>
                  <GlassCard className="p-8 h-full group cursor-pointer">
                    <div className={`aspect-square rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow`}>
                      <span className="font-display font-bold text-lg md:text-xl text-foreground text-center px-4">
                        {client.name}
                      </span>
                    </div>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>

            {/* Proud Text */}
            <ScrollReveal delay={300}>
              <div className="mt-20 max-w-3xl mx-auto">
                <GlassCard className="p-8 text-center">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                    "{t.clients.proudText}"
                  </p>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
