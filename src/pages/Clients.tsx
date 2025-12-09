// import { Navbar } from "@/components/layout/Navbar";
// import { Footer } from "@/components/layout/Footer";
// import { ScrollReveal } from "@/components/ui/scroll-reveal";
// import { GlassCard } from "@/components/ui/glass-card";
// import { useLanguage } from "@/contexts/LanguageContext";

// const clients = [
//   { name: "Saudi Aramco", short: "SA", gradient: "from-primary/20 via-primary/10 to-navy-medium/20" },
//   { name: "NEOM", short: "N", gradient: "from-sky-medium/20 via-navy-light/10 to-navy-medium/20" },
//   { name: "STC", short: "STC", gradient: "from-purple-500/20 via-primary/10 to-navy-dark/20" },
//   { name: "SABIC", short: "S", gradient: "from-amber-400/20 via-primary/10 to-navy-medium/20" },
//   { name: "Red Sea Global", short: "RSG", gradient: "from-red-500/20 via-sky-medium/10 to-navy-dark/20" },
//   { name: "Diriyah Gate", short: "DG", gradient: "from-emerald-500/20 via-primary/10 to-navy-medium/20" },
//   { name: "Ministry of Housing", short: "MOH", gradient: "from-blue-500/20 via-primary/10 to-navy-light/20" },
//   { name: "Royal Commission", short: "RC", gradient: "from-navy-light/20 via-primary/10 to-navy-dark/20" },
//   { name: "Red Sea Global", short: "RSG", gradient: "from-red-500/20 via-sky-medium/10 to-navy-dark/20" },
//   { name: "Diriyah Gate", short: "DG", gradient: "from-emerald-500/20 via-primary/10 to-navy-medium/20" },
//   { name: "Ministry of Housing", short: "MOH", gradient: "from-blue-500/20 via-primary/10 to-navy-light/20" },
//   { name: "Royal Commission", short: "RC", gradient: "from-navy-light/20 via-primary/10 to-navy-dark/20" },
// ];

// const Clients = () => {
//   const { t } = useLanguage();

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <main className="pt-20">
//         {/* Hero */}
//         <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
//           </div>

//           <div className="container mx-auto px-4 relative z-10">
//             <ScrollReveal>
//               <div className="text-center max-w-3xl mx-auto">
//                 <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Our Clients")}</span>
//                 <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
//                   {t("Trusted By Leading Brands")}
//                 </h1>
//                 <p className="text-muted-foreground text-lg">{t("Explore our client partnerships")}</p>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* Logo Grid */}
//         <section className="py-16 bg-background">
//           <div className="container mx-auto px-4">
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//               {clients.map((client, index) => (
//                 <ScrollReveal key={client.name} delay={index * 60}>
//                   <GlassCard className="p-6 h-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow">
//                     <div
//                       className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center text-2xl font-bold text-foreground mb-3 transition-transform duration-300 group-hover:scale-105 shadow-inner`}
//                     >
//                       {client.short}
//                     </div>
//                     <p className="font-display font-semibold text-sm text-foreground">{client.name}</p>
//                   </GlassCard>
//                 </ScrollReveal>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Text Block */}
//         <section className="pb-20">
//           <div className="container mx-auto px-4">
//             <ScrollReveal>
//               <GlassCard className="p-8 text-center max-w-4xl mx-auto">
//                 <p className="text-lg text-foreground font-display leading-relaxed">
//                   {t(
//                     "We are proud to have served leading companies across Saudi Arabia with high-quality contracting and manpower solutions.",
//                   )}
//                 </p>
//               </GlassCard>
//             </ScrollReveal>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Clients;


import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { useLanguage } from "@/contexts/LanguageContext";

// Make sure to replace logo URLs with your actual logo paths
const clients = [
  { name: "Saudi Aramco", logo: "/logos/1.png" },
  { name: "Dr Suliman Al Habib", logo: "/logos/2.png" },
  { name: "Hyundai", logo: "/logos/3.png" },
  { name: "Saudi Electric Service", logo: "/logos/4.png" },
  { name: "Shapoorji Pallonji", logo: "/logos/5.png" },
  { name: "Al Bawani Company", logo: "/logos/6.png" },
  { name: "Saudi Binladin Group", logo: "/logos/7.png" },
  { name: "Jotun Company", logo: "/logos/8.png" },
  { name: "Amazon Company", logo: "/logos/9.png" },
  { name: "Hempel", logo: "/logos/10.png" },
  { name: "Fonoon GRC & Aluminium", logo: "/logos/11.png" },
  { name: "Ambatt Company", logo: "/logos/12.png" },
  { name: "Al-Sharq Factory", logo: "/logos/13.png" },
  { name: "Aramex Group Company", logo: "/logos/14.png" },
  { name: "Al-Drees Company", logo: "/logos/15.png" },
  { name: "Modern Building Leaders Company", logo: "/logos/16.png" },
  { name: "Support Service Network Company", logo: "logos/ss.jpg" },
  { name: "Power Rack Company", logo: "logos/pro17.jpg" },
  { name: "Agility Warehouses", logo: "logos/pro18.jpg" },
  { name: "Low Current works", logo: "logos/snc.jpg" },
  { name: "Electro-mechanical works", logo: "logos/BABTAIN.jpg" },
  { name: "Electrical Construction", logo: "logos/pro19.png" },
  { name: "Setra Company works", logo: "logos/pro20.webp" },
  { name: "katerra Company works (2018-2023)", logo: "logos/Katerra.jpg" },
  { name: "Construction & Mechanical through MSQ Company(2020-2023)", logo: "logos/egng.png" },
  { name: "Al Mabani Company", logo: "logos/17.png" },
  { name: "We offered our services to Al Saad Company in Civil COnstruction and MEP works", logo: "logos/18.png" },
  { name: "HBR-World provides Manpower Contracting Services for major projects in Riyadh, including Misk City and the King Salman Park (KSP) Project.", logo: "logos/19.png" },
  { name: "Civil Construction Company", logo: "logos/20.png" },
  { name: "Heavy Welding for pipelines, 3G 4G 6G weldings and sand blaster", logo: "logos/21.png" },
];

const Clients = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-medium/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("Our Clients")}</span>
                <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
                  {t("Trusted By Leading Brands")}
                </h1>
                <p className="text-muted-foreground text-lg">{t("Explore our client partnerships")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Logo Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {clients.map((client, index) => (
                <ScrollReveal key={client.name} delay={index * 60}>
                  <GlassCard className="p-6 h-full flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <div className="w-32 h-32 flex items-center justify-center mb-3">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="font-display font-semibold text-sm text-foreground">{client.name}</p>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Text Block */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <GlassCard className="p-8 text-center max-w-4xl mx-auto">
                <p className="text-lg text-foreground font-display leading-relaxed">
                  {t(
                    "We are proud to have served leading companies across Saudi Arabia with high-quality contracting and manpower solutions."
                  )}
                </p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clients;
