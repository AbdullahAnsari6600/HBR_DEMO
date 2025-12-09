// import { useState } from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { ScrollReveal } from "@/components/ui/scroll-reveal";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// const filters = ["All", "Civil", "MEP", "Interior", "Exterior", "Manpower"];

// const galleryItems = [
//   { id: 1, category: "Civil", gradient: "from-sky-medium/40 to-navy-medium/60" },
//   { id: 2, category: "Interior", gradient: "from-primary/40 to-sky-dark/60" },
//   { id: 3, category: "MEP", gradient: "from-navy-light/40 to-primary/60" },
//   { id: 4, category: "Exterior", gradient: "from-sky-dark/40 to-navy-dark/60" },
//   { id: 5, category: "Manpower", gradient: "from-navy-medium/40 to-sky-medium/60" },
//   { id: 6, category: "Civil", gradient: "from-primary/40 to-navy-light/60" },
//   { id: 7, category: "Interior", gradient: "from-sky-light/40 to-navy-medium/60" },
//   { id: 8, category: "MEP", gradient: "from-navy-dark/40 to-sky-dark/60" },
//   { id: 9, category: "Exterior", gradient: "from-sky-medium/40 to-primary/60" },
//   { id: 10, category: "Manpower", gradient: "from-navy-light/40 to-sky-medium/60" },
//   { id: 11, category: "Civil", gradient: "from-primary/40 to-navy-dark/60" },
//   { id: 12, category: "Interior", gradient: "from-sky-dark/40 to-navy-light/60" },
// ];

// const Gallery = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const { t } = useLanguage();

//   const filteredItems = activeFilter === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

//   const openLightbox = (id: number) => {
//     setSelectedImage(id);
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };

//   const navigateImage = (direction: "prev" | "next") => {
//     if (selectedImage === null) return;

//     const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
//     const newIndex = direction === "prev" ? (currentIndex - 1 + filteredItems.length) % filteredItems.length : (currentIndex + 1) % filteredItems.length;
//     setSelectedImage(filteredItems[newIndex].id);
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//           </div>

//           <div className="container mx-auto px-4 relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-3xl mx-auto">
//                 <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Gallery")}</span>
//                 <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">{t("Our Work")}</h1>
//                 <p className="text-muted-foreground text-lg">{t("Browse through our collection of completed projects and ongoing works")}</p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* Filter Buttons */}
//         <section className="py-8 bg-background sticky top-20 z-30 border-b border-border/50 backdrop-blur-xl">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap items-center justify-center gap-2">
//               {filters.map((filter) => (
//                 <Button
//                   key={filter}
//                   variant={activeFilter === filter ? "gradient" : "glass"}
//                   size="sm"
//                   onClick={() => setActiveFilter(filter)}
//                 >
//                   {t(filter)}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Gallery Grid */}
//         <section className="py-12 bg-background">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//               {filteredItems.map((item, index) => (
//                 <ScrollReveal key={item.id} delay={index * 50}>
//                   <div onClick={() => openLightbox(item.id)} className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden">
//                     {/* Image Placeholder */}
//                     <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground">
//                       {t(item.category)}
//                     </div>

//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                       <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
//                         <ZoomIn className="w-6 h-6 text-primary-foreground" />
//                       </div>
//                     </div>
//                   </div>
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Lightbox */}
//       {selectedImage !== null && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/95">
//           {/* Close Button */}
//           <button
//             onClick={closeLightbox}
//             className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
//           >
//             <X className="w-6 h-6 text-primary-foreground" />
//           </button>

//           {/* Navigation */}
//           <button
//             onClick={() => navigateImage("prev")}
//             className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6 text-primary-foreground" />
//           </button>
//           <button
//             onClick={() => navigateImage("next")}
//             className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
//           >
//             <ChevronRight className="w-6 h-6 text-primary-foreground" />
//           </button>

//           {/* Image */}
//           <div className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden animate-zoom-in">
//             {(() => {
//               const item = galleryItems.find((i) => i.id === selectedImage);
//               return item ? <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} /> : null;
//             })()}
//           </div>

//           {/* Counter */}
//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
//             {filteredItems.findIndex((i) => i.id === selectedImage) + 1} / {filteredItems.length}
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default Gallery;



// import { useState } from "react";
// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { ScrollReveal } from "@/components/ui/scroll-reveal";
// import { Button } from "@/components/ui/button";
// import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// const filters = ["All", "Civil", "MEP", "Interior", "Exterior", "Manpower"];

// const galleryItems = [
//   { id: 1, category: "Civil", image: "/images/1.jpeg" },
//   { id: 2, category: "Interior", image: "/images/2.jpeg" },
//   { id: 3, category: "MEP", image: "/images/3.jpeg" },
//   { id: 4, category: "Exterior", image: "/images/4.jpeg" },
//   { id: 5, category: "Manpower", image: "/images/5.jpeg" },
//   { id: 6, category: "Civil", image: "/images/6.jpeg" },
//   { id: 7, category: "Interior", image: "/images/7.jpeg" },
//   { id: 8, category: "MEP", image: "/images/8.jpeg" },
//   { id: 9, category: "Exterior", image: "/images/9.jpeg" },
//   { id: 10, category: "Manpower", image: "/images/10.jpeg" },
//   { id: 11, category: "Civil", image: "/images/11.jpeg" },
//   { id: 12, category: "Interior", image: "/images/12.jpeg" },
// ];

// const Gallery = () => {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const { t } = useLanguage();

//   const filteredItems =
//     activeFilter === "All"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === activeFilter);

//   const openLightbox = (id: number) => setSelectedImage(id);
//   const closeLightbox = () => setSelectedImage(null);

//   const navigateImage = (direction: "prev" | "next") => {
//     if (selectedImage === null) return;
//     const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
//     const newIndex =
//       direction === "prev"
//         ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
//         : (currentIndex + 1) % filteredItems.length;
//     setSelectedImage(filteredItems[newIndex].id);
//   };

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <main className="pt-20">
//         {/* Hero Section */}
//         <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//           </div>
//           <div className="container mx-auto px-4 relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-3xl mx-auto">
//                 <span className="text-primary font-semibold text-sm uppercase tracking-wider">
//                   {t("Gallery")}
//                 </span>
//                 <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
//                   {t("Our Work")}
//                 </h1>
//                 <p className="text-muted-foreground text-lg">
//                   {t("Browse through our collection of completed projects and ongoing works")}
//                 </p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* Filter Buttons */}
//         {/* Gallery Collage */}
// <section className="py-12 bg-background">
//   <div className="container mx-auto px-4">
//     <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
//       {filteredItems.map((item, index) => (
//         <div
//           key={item.id}
//           className="break-inside-avoid mb-4 cursor-pointer relative rounded-2xl overflow-hidden group"
//           onClick={() => openLightbox(item.id)}
//         >
//           <img
//             src={item.image}
//             alt={item.category}
//             className="w-full h-auto object-cover rounded-2xl"
//           />

//           {/* Category Badge */}
//           <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground">
//             {t(item.category)}
//           </div>

//           {/* Hover Overlay */}
//           <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//             <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
//               <ZoomIn className="w-6 h-6 text-primary-foreground" />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


//       </main>

//       {/* Lightbox */}
//       {selectedImage !== null && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/95">
//           <button
//             onClick={closeLightbox}
//             className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
//           >
//             <X className="w-6 h-6 text-primary-foreground" />
//           </button>

//           <button
//             onClick={() => navigateImage("prev")}
//             className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
//           >
//             <ChevronLeft className="w-6 h-6 text-primary-foreground" />
//           </button>
//           <button
//             onClick={() => navigateImage("next")}
//             className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
//           >
//             <ChevronRight className="w-6 h-6 text-primary-foreground" />
//           </button>

//           <div className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden animate-zoom-in">
//             {(() => {
//               const item = galleryItems.find((i) => i.id === selectedImage);
//               return item ? (
//                 <img src={item.image} alt={item.category} className="w-full h-full object-cover rounded-2xl" />
//               ) : null;
//             })()}
//           </div>

//           <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
//             {filteredItems.findIndex((i) => i.id === selectedImage) + 1} / {filteredItems.length}
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default Gallery;


import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const filters = ["All", "Civil", "MEP", "Interior", "Exterior", "Manpower"];

const galleryItems = [
  { id: 1, category: "Civil", image: "/images/1.jpeg" },
  { id: 2, category: "Interior", image: "/images/2.jpeg" },
  { id: 3, category: "MEP", image: "/images/3.jpeg" },
  { id: 4, category: "Exterior", image: "/images/4.jpeg" },
  { id: 5, category: "Manpower", image: "/images/5.jpeg" },
  { id: 6, category: "Civil", image: "/images/6.jpeg" },
  { id: 7, category: "Interior", image: "/images/7.jpeg" },
  { id: 8, category: "MEP", image: "/images/8.jpeg" },
  { id: 9, category: "Exterior", image: "/images/9.jpeg" },
  { id: 10, category: "Manpower", image: "/images/10.jpeg" },
  { id: 11, category: "Civil", image: "/images/11.jpeg" },
  { id: 12, category: "Interior", image: "/images/12.jpeg" },
  { id: 13, category: "Civil", image: "/images/13.jpeg" },
  { id:14, category: "Interior", image: "/images/14.jpeg" },
  { id: 15, category: "MEP", image: "/images/15.jpeg" },
  { id: 16, category: "Exterior", image: "/images/16.jpeg" },
  { id: 17, category: "Manpower", image: "/images/17.jpeg" },
  { id: 18, category: "Civil", image: "/images/18.jpeg" },
  { id: 19, category: "Interior", image: "/images/19.jpeg" },
  { id: 20, category: "MEP", image: "/images/20.jpeg" },
  { id: 21, category: "Exterior", image: "/images/21.jpeg" },
  { id: 22, category: "Manpower", image: "/images/22.jpeg" },
  { id: 23, category: "Civil", image: "/images/23.jpeg" },
  { id: 24, category: "Interior", image: "/images/24.jpeg" },
  { id: 24, category: "Manpower Supply", image: "/images/41.jpeg" },
  { id: 24, category: "Manpower Supply", image: "/images/42.jpeg" },
  { id: 24, category: "Manpower Supply", image: "/images/43.jpeg" },
  { id: 24, category: "Construction", image: "/images/44.jpeg" },
  { id: 24, category: "Construction", image: "/images/45.jpeg" },
  { id: 24, category: "KAFD", image: "/images/46.jpeg" },
  { id: 24, category: "Asphalt", image: "/images/47.jpeg" },
  { id: 24, category: "Construction", image: "/images/48.jpeg" },
  { id: 24, category: "5 Star Hotel", image: "/images/49.jpeg" },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage);
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex].id);
  };

  // ⭐ Random collage heights
  const getRandomImageHeight = () => {
    const sizes = ["h-40", "h-52", "h-64", "h-80"];
    return sizes[Math.floor(Math.random() * sizes.length)];
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
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  {t("Gallery")}
                </span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  {t("Our Work")}
                </h1>
                <p className="text-muted-foreground text-lg">
                  {t("Browse through our collection of completed projects and ongoing works")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Gallery Collage */}
        {/* Gallery Collage */}
<section className="py-12 bg-background">
  <div className="container mx-auto px-4">
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
      {filteredItems.map((item) => {
        // random vertical sizes
        const randomHeight = [
          "h-48",  // small vertical
          "h-64",  // medium vertical
          "h-80",  // tall vertical
          "h-96"   // extra tall vertical
        ][Math.floor(Math.random() * 4)];

        return (
          <div
            key={item.id}
            className="break-inside-avoid mb-4 cursor-pointer relative rounded-2xl overflow-hidden group"
            onClick={() => openLightbox(item.id)}
          >
            <div className={`w-full ${randomHeight} overflow-hidden rounded-2xl`}>
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground">
              {t(item.category)}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-navy-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <ZoomIn className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      </main>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/95">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-primary-foreground" />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-primary-foreground" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary-foreground" />
          </button>

          <div className="max-w-4xl w-full aspect-video rounded-2xl overflow-hidden animate-zoom-in">
            {(() => {
              const item = galleryItems.find((i) => i.id === selectedImage);
              return item ? (
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : null;
            })()}
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/70 text-sm">
            {filteredItems.findIndex((i) => i.id === selectedImage) + 1} / {filteredItems.length}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
