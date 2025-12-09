import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Al Riyadh Commercial Complex',
    category: 'Civil Construction',
    description: 'A state-of-the-art commercial complex featuring modern architecture and sustainable design principles.',
    scope: ['Structural works', 'MEP installations', 'Interior fit-out', 'Landscaping'],
    image: 'bg-gradient-to-br from-sky-medium/30 to-navy-medium/50',
  },
  {
    id: 2,
    title: 'Jeddah Tower Interiors',
    category: 'Interior Fit-Out',
    description: 'Premium interior finishing for a 50-story residential tower with luxury apartments.',
    scope: ['Flooring', 'Wall finishes', 'Ceiling works', 'Lighting'],
    image: 'bg-gradient-to-br from-primary/30 to-navy-dark/50',
  },
  {
    id: 3,
    title: 'ARAMCO Industrial Facility',
    category: 'MEP Works',
    description: 'Complete MEP installation for a large-scale industrial facility in the Eastern Province.',
    scope: ['Electrical systems', 'Plumbing networks', 'HVAC installation', 'Fire safety'],
    image: 'bg-gradient-to-br from-navy-light/30 to-sky-dark/50',
  },
  {
    id: 4,
    title: 'King Abdullah Hospital',
    category: 'HVAC Services',
    description: 'Advanced HVAC system installation for a modern healthcare facility.',
    scope: ['Central cooling', 'Air handling units', 'Ductwork', 'Controls'],
    image: 'bg-gradient-to-br from-sky-dark/30 to-primary/50',
  },
  {
    id: 5,
    title: 'Makkah Hotel Renovation',
    category: 'Renovation Works',
    description: 'Complete renovation of a 5-star hotel near the Holy Mosque.',
    scope: ['Demolition', 'Structural upgrades', 'New interiors', 'MEP upgrades'],
    image: 'bg-gradient-to-br from-navy-medium/30 to-sky-medium/50',
  },
  {
    id: 6,
    title: 'Dammam Shopping Mall',
    category: 'Exterior Fit-Out',
    description: 'Modern facade cladding and exterior finishing for a major shopping destination.',
    scope: ['ACP cladding', 'Glass curtain walls', 'Signage', 'Lighting'],
    image: 'bg-gradient-to-br from-primary/30 to-sky-dark/50',
  },
  {
    id: 7,
    title: 'NEOM Infrastructure Project',
    category: 'Civil Construction',
    description: 'Large-scale infrastructure development for the NEOM smart city project.',
    scope: ['Roads', 'Utilities', 'Foundations', 'Landscaping'],
    image: 'bg-gradient-to-br from-sky-light/30 to-navy-light/50',
  },
  {
    id: 8,
    title: 'Red Sea Resort Complex',
    category: 'Interior Fit-Out',
    description: 'Luxury interior finishing for an exclusive beach resort development.',
    scope: ['Room finishes', 'Public areas', 'Restaurants', 'Spa facilities'],
    image: 'bg-gradient-to-br from-navy-dark/30 to-primary/50',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project: typeof projects[0], index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + projects.length) % projects.length
      : (currentIndex + 1) % projects.length;
    setCurrentIndex(newIndex);
    setSelectedProject(projects[newIndex]);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  Featured <span className="bg-gradient-to-r from-sky-dark to-navy-medium bg-clip-text text-transparent">Projects</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Explore our portfolio of successful projects across Saudi Arabia
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 50}>
                  <div
                    onClick={() => openModal(project, index)}
                    className="group cursor-pointer"
                  >
                    <GlassCard className="overflow-hidden">
                      {/* Image Placeholder */}
                      <div className={`aspect-[4/3] ${project.image} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-primary-foreground text-sm font-medium">View Details</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-5">
                        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="font-display font-semibold text-lg text-foreground mt-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </GlassCard>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-zoom-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateProject('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center z-10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateProject('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-muted/80 hover:bg-muted flex items-center justify-center z-10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className={`aspect-video ${selectedProject.image}`} />

            {/* Content */}
            <div className="p-8">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">
                {selectedProject.category}
              </span>
              <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mt-2 mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {selectedProject.description}
              </p>

              <h4 className="font-display font-semibold text-foreground mb-3">Scope of Work</h4>
              <ul className="grid grid-cols-2 gap-2">
                {selectedProject.scope.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Projects;
