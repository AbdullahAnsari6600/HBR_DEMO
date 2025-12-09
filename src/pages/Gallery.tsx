import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const filters = ['All', 'Civil', 'MEP', 'Interior', 'Exterior', 'Manpower'];

const galleryItems = [
  { id: 1, category: 'Civil', gradient: 'from-sky-medium/40 to-navy-medium/60' },
  { id: 2, category: 'Interior', gradient: 'from-primary/40 to-sky-dark/60' },
  { id: 3, category: 'MEP', gradient: 'from-navy-light/40 to-primary/60' },
  { id: 4, category: 'Exterior', gradient: 'from-sky-dark/40 to-navy-dark/60' },
  { id: 5, category: 'Manpower', gradient: 'from-navy-medium/40 to-sky-medium/60' },
  { id: 6, category: 'Civil', gradient: 'from-primary/40 to-navy-light/60' },
  { id: 7, category: 'Interior', gradient: 'from-sky-light/40 to-navy-medium/60' },
  { id: 8, category: 'MEP', gradient: 'from-navy-dark/40 to-sky-dark/60' },
  { id: 9, category: 'Exterior', gradient: 'from-sky-medium/40 to-primary/60' },
  { id: 10, category: 'Manpower', gradient: 'from-navy-light/40 to-sky-medium/60' },
  { id: 11, category: 'Civil', gradient: 'from-primary/40 to-navy-dark/60' },
  { id: 12, category: 'Interior', gradient: 'from-sky-dark/40 to-navy-light/60' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex].id);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Gallery</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  Our <span className="bg-gradient-to-r from-sky-dark to-navy-medium bg-clip-text text-transparent">Work</span>
                </h1>
                <p className="text-muted-foreground text-lg">
                  Browse through our collection of completed projects and ongoing works
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-background sticky top-20 z-30 border-b border-border/50 backdrop-blur-xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'gradient' : 'glass'}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredItems.map((item, index) => (
                <ScrollReveal key={item.id} delay={index * 50}>
                  <div
                    onClick={() => openLightbox(item.id)}
                    className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden"
                  >
                    {/* Image Placeholder */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground">
                      {item.category}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/95">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Navigation */}
          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>
          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          {/* Image */}
          <div className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden animate-zoom-in">
            {(() => {
              const item = galleryItems.find(i => i.id === selectedImage);
              return item ? (
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
              ) : null;
            })()}
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
            {filteredItems.findIndex(i => i.id === selectedImage) + 1} / {filteredItems.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
