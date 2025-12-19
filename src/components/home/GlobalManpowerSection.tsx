// import { ScrollReveal } from "@/components/ui/scroll-reveal";
// import {
//   Globe2,
//   Users,
//   UserCheck,
//   MapPin,
// } from "lucide-react";
// import { useLanguage } from "@/contexts/LanguageContext";

// const manpowerCountries = [
//   { name: "Nepal", type: "Local Workforce" },
//   { name: "India", type: "Skilled & Semi-Skilled" },
//   { name: "Pakistan", type: "Technical & Labor" },
//   { name: "Bangladesh", type: "Construction Workforce" },
//   { name: "Philippines", type: "Professional Staff" },
// ];

// export const GlobalManpowerSection = () => {
//   const { t } = useLanguage();

//   return (
//     <section className="relative py-24 bg-gradient-to-b from-secondary via-background to-secondary overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl floating-animation" />
//         <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-medium/20 rounded-full blur-3xl floating-animation-delayed" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Heading */}
//         <ScrollReveal>
//           <div className="text-center mb-16">
//             <span className="text-primary font-semibold text-sm uppercase tracking-wider">
//               {t("Global Manpower")}
//             </span>
//             <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
//               {t("Local & International Workforce Solutions")}
//             </h2>
//             <p className="text-muted-foreground max-w-3xl mx-auto">
//               {t(
//                 "We supply reliable male and female manpower to Saudi Arabia, Malaysia , Qatar , Bahrain and Bangladesh, across multiple countries to meet your project requirements with speed, compliance, and quality."
//               )}
//             </p>
//           </div>
//         </ScrollReveal>

//         {/* Feature Highlights */}
//         <ScrollReveal delay={150}>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
//             {[
//               {
//                 icon: Globe2,
//                 title: "International Recruitment",
//                 desc: "Manpower sourced from multiple countries as per project needs",
//               },
//               {
//                 icon: Users,
//                 title: "Male & Female Workforce",
//                 desc: "Skilled, semi-skilled, and unskilled manpower availability",
//               },
//               {
//                 icon: UserCheck,
//                 title: "Verified & Compliant",
//                 desc: "Legally compliant, trained, and project-ready manpower",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="group bg-background/60 backdrop-blur-md border border-primary/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//                   <item.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="font-display font-semibold text-lg mb-2">
//                   {t(item.title)}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {t(item.desc)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </ScrollReveal>

//         {/* Countries Grid */}
//         <ScrollReveal delay={300}>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">

//             {manpowerCountries.map((country, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-primary-foreground/10 hover:-translate-y-2"
//               >
//                 <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-sky-medium to-primary flex items-center justify-center mb-4 shadow-glow">
//                   <MapPin className="w-6 h-6 text-background" />
//                 </div>
//                 <h4 className="font-semibold text-base mb-1">
//                   {t(country.name)}
//                 </h4>
//                 <p className="text-xs text-muted-foreground">
//                   {t(country.type)}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// };



import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Globe2,
  Users,
  UserCheck,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// const manpowerCountries = [
//   { key: "nepal" },
//   { key: "india" },
//   { key: "pakistan" },
//   { key: "bangladesh" },
//   { key: "philippines" },
// ];
const manpowerCountries = [
  { key: "nepal", code: "np" },
  { key: "india", code: "in" },
  { key: "pakistan", code: "pk" },
  { key: "bangladesh", code: "bd" },
  { key: "philippines", code: "ph" },
];


export const GlobalManpowerSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 bg-gradient-to-b from-secondary via-background to-secondary overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl floating-animation" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-medium/20 rounded-full blur-3xl floating-animation-delayed" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t("home.manpower.badge")}
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
              {t("home.manpower.title")}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("home.manpower.description")}
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Highlights */}
        <ScrollReveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {["international", "gender", "verified"].map((item, index) => {
              const icons = [Globe2, Users, UserCheck];
              const Icon = icons[index];

              return (
                <div
                  key={item}
                  className="group bg-background/60 backdrop-blur-md border border-primary/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {t(`home.manpower.features.${item}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(`home.manpower.features.${item}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Countries Grid */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {manpowerCountries.map((country) => (
              <div
                key={country.key}
                className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-primary-foreground/10 hover:-translate-y-2"
              >
                <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 shadow-glow overflow-hidden bg-transparent group-hover:scale-110 transition-transform">
                <img
  src={`https://flagcdn.com/w40/${country.code}.png`}
  alt={t(`home.manpower.countries.${country.key}.name`)}
  className="w-6 h-6 object-contain rounded-sm"
  loading="lazy"
/>

</div>

                <h4 className="font-semibold text-base mb-1">
                  {t(`home.manpower.countries.${country.key}.name`)}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {t(`home.manpower.countries.${country.key}.type`)}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
