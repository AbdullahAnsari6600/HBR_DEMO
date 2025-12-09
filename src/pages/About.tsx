import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { 
  Target, 
  Eye, 
  Heart, 
  Award, 
  Shield, 
  Lightbulb, 
  Users, 
  CheckCircle,
  Play
} from 'lucide-react';
import { useState } from 'react';

const coreValues = [
  { icon: Heart, title: 'Integrity', description: 'Honest and transparent in all dealings' },
  { icon: Award, title: 'Quality', description: 'Uncompromising standards in every project' },
  { icon: Shield, title: 'Safety', description: 'Zero tolerance for safety compromises' },
  { icon: Lightbulb, title: 'Innovation', description: 'Embracing new technologies and methods' },
  { icon: Users, title: 'Professionalism', description: 'Expert teams with professional conduct' },
  { icon: CheckCircle, title: 'Commitment', description: 'Dedicated to client satisfaction' },
];

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  Building <span className="bg-gradient-to-r from-sky-dark to-navy-medium bg-clip-text text-transparent">Excellence</span> Since 2009
                </h1>
                <p className="text-muted-foreground text-lg">
                  HBR-WORLD is a leading contracting and manpower supply company, delivering world-class solutions across Saudi Arabia.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-medium to-navy-dark p-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-navy-dark flex items-center justify-center">
                    {/* Video Placeholder with Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-dark/20 to-navy-dark/80" />
                    
                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-sky-medium to-navy-light flex items-center justify-center shadow-glow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </button>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 left-4 text-primary-foreground/50 font-display text-sm">
                      Company Overview
                    </div>
                    <div className="absolute bottom-4 right-4 text-primary-foreground/50 text-sm">
                      03:45
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</span>
                  <h2 className="font-display font-bold text-3xl md:text-4xl mt-4 mb-6">
                    Who We <span className="bg-gradient-to-r from-sky-dark to-navy-medium bg-clip-text text-transparent">Are</span>
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Founded in 2009, HBR-WORLD has grown from a small contracting firm to become one of Saudi Arabia's most trusted names in construction and manpower supply.
                    </p>
                    <p>
                      Our journey began with a simple vision: to deliver excellence in every project we undertake. Today, with over 15 years of experience, we've successfully completed 850+ projects and deployed more than 12,000 skilled professionals across the Kingdom.
                    </p>
                    <p>
                      We take pride in our ability to understand client needs, deliver on-time results, and maintain the highest standards of quality and safety in all our operations.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-medium/20 to-navy-light/20 rounded-3xl transform rotate-3" />
                  <GlassCard className="p-8 relative">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="font-display font-bold text-4xl text-primary">15+</div>
                        <div className="text-muted-foreground text-sm mt-1">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="font-display font-bold text-4xl text-primary">850+</div>
                        <div className="text-muted-foreground text-sm mt-1">Projects Done</div>
                      </div>
                      <div className="text-center">
                        <div className="font-display font-bold text-4xl text-primary">200+</div>
                        <div className="text-muted-foreground text-sm mt-1">Happy Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="font-display font-bold text-4xl text-primary">12K+</div>
                        <div className="text-muted-foreground text-sm mt-1">Workers Deployed</div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ScrollReveal delay={0}>
                <GlassCard className="p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-medium to-sky-dark flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and preferred contracting and manpower solutions partner in the Middle East, recognized for innovation, quality, and reliability in every project we undertake.
                  </p>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <GlassCard className="p-8 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-light to-navy-dark flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To deliver exceptional construction and manpower services that exceed client expectations, while maintaining the highest standards of safety, quality, and professionalism in all our operations.
                  </p>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
                  Our Core <span className="bg-gradient-to-r from-sky-dark to-navy-medium bg-clip-text text-transparent">Values</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 100}>
                  <GlassCard className="p-6 text-center group">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-sky-medium/20 to-navy-light/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* QR Code Section */}
        <section className="py-20 bg-gradient-to-br from-navy-medium to-navy-dark">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="max-w-xl mx-auto text-center">
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
                  Download Our <span className="text-sky-light">Company Profile</span>
                </h2>
                <p className="text-primary-foreground/70 mb-8">
                  Scan the QR code below to view and download our detailed company profile
                </p>
                
                <div className="inline-block p-6 bg-primary-foreground rounded-2xl shadow-glow-lg">
                  <div className="w-48 h-48 bg-gradient-to-br from-navy-medium to-navy-dark rounded-xl flex items-center justify-center">
                    {/* QR Code Placeholder */}
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-7 h-7 rounded-sm ${
                            Math.random() > 0.5 ? 'bg-navy-dark' : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-primary-foreground/50 text-sm mt-6">
                  Or visit: hbr-world.com/profile
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
