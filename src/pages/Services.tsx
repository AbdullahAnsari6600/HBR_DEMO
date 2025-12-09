import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { services } from '@/components/home/ServicesSection';

const Services = () => {
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
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  Comprehensive <span className="bg-gradient-to-r from-sky-dark to-navy-medium bg-clip-text text-transparent">Solutions</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  From construction to manpower, we deliver end-to-end services tailored to your project needs
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 50}>
                  <GlassCard className="p-8 h-full group">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow`}>
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Video Placeholder */}
                    <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-muted to-secondary mb-6 group/video cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-navy-medium/20 to-navy-dark/40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover/video:scale-110 transition-transform">
                          <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Professional execution
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Quality materials
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Timely delivery
                      </li>
                    </ul>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-navy-medium to-navy-dark">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
                  Ready to Start Your <span className="text-sky-light">Project?</span>
                </h2>
                <p className="text-primary-foreground/70 mb-8">
                  Contact us today for a free consultation and quotation
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get in Touch
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
