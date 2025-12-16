// import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import en from "@/locales/en.json";
// import ar from "@/locales/ar.json";

// type Language = "en" | "ar";

// type LanguageContextValue = {
//   language: Language;
//   isRTL: boolean;
//   setLanguage: (lang: Language) => void;
//   toggleLanguage: () => void;
//   t: (key: string) => string;
// };

// const translations: Record<Language, Record<string, string>> = {
//   en,
//   ar,
// };

// const LanguageContext = createContext<LanguageContextValue | null>(null);

// const getInitialLanguage = (): Language => {
//   if (typeof window === "undefined") return "en";
//   const stored = window.localStorage.getItem("hbr-language");
//   return stored === "ar" || stored === "en" ? stored : "en";
// };

// export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
//   const [language, setLanguage] = useState<Language>(getInitialLanguage);
//   const isRTL = language === "ar";

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     window.localStorage.setItem("hbr-language", language);
//     document.documentElement.lang = language;
//     document.documentElement.dir = isRTL ? "rtl" : "ltr";
//     document.body.dir = isRTL ? "rtl" : "ltr";
//     document.body.classList.toggle("rtl", isRTL);
//   }, [language, isRTL]);

//   const toggleLanguage = useCallback(() => {
//     setLanguage((prev) => (prev === "en" ? "ar" : "en"));
//   }, []);

//   const t = useCallback(
//     (key: string) => {
//       const dictionary = translations[language];
//       return dictionary?.[key] ?? key;
//     },
//     [language],
//   );

//   const value = useMemo(
//     () => ({
//       language,
//       isRTL,
//       setLanguage,
//       toggleLanguage,
//       t,
//     }),
//     [language, isRTL, toggleLanguage, t],
//   );

//   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };


// import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import en from "@/locales/en.json";
// import ar from "@/locales/ar.json";

// type Language = "en" | "ar";

// type LanguageContextValue = {
//   language: Language;
//   isRTL: boolean;
//   setLanguage: (lang: Language) => void;
//   toggleLanguage: () => void;
//   t: (key: string) => string;
// };

// const translations: Record<Language, Record<string, any>> = {
//   en,
//   ar,
// };

// const LanguageContext = createContext<LanguageContextValue | null>(null);

// const getInitialLanguage = (): Language => {
//   if (typeof window === "undefined") return "en";
//   const stored = window.localStorage.getItem("hbr-language");
//   return stored === "ar" || stored === "en" ? stored : "en";
// };

// export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
//   const [language, setLanguage] = useState<Language>(getInitialLanguage);
//   const isRTL = language === "ar";

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     window.localStorage.setItem("hbr-language", language);
//     document.documentElement.lang = language;
//     document.documentElement.dir = isRTL ? "rtl" : "ltr";
//     document.body.dir = isRTL ? "rtl" : "ltr";
//     document.body.classList.toggle("rtl", isRTL);
//   }, [language, isRTL]);

//   const toggleLanguage = useCallback(() => {
//     setLanguage((prev) => (prev === "en" ? "ar" : "en"));
//   }, []);

//   const t = useCallback(
//     (key: string) => {
//       const dictionary = translations[language];

//       // support nested keys like "about.hero.title"
//       return key
//         .split(".")
//         .reduce((acc: any, part: string) => acc?.[part], dictionary) ?? key;
//     },
//     [language]
//   );

//   const value = useMemo(
//     () => ({
//       language,
//       isRTL,
//       setLanguage,
//       toggleLanguage,
//       t,
//     }),
//     [language, isRTL, toggleLanguage, t]
//   );

//   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };


// import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import en from "@/locales/en.json";
// import ar from "@/locales/ar.json";

// type Language = "en" | "ar";

// type LanguageContextValue = {
//   language: Language;
//   isRTL: boolean;
//   setLanguage: (lang: Language) => void;
//   toggleLanguage: () => void;
//   t: (key: string) => any; // can return string, array, or object
// };

// const translations: Record<Language, Record<string, any>> = {
//   en,
//   ar,
// };

// const LanguageContext = createContext<LanguageContextValue | null>(null);

// const getInitialLanguage = (): Language => {
//   if (typeof window === "undefined") return "en";
//   const stored = window.localStorage.getItem("hbr-language");
//   return stored === "ar" || stored === "en" ? stored : "en";
// };

// export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
//   const [language, setLanguage] = useState<Language>(getInitialLanguage);
//   const isRTL = language === "ar";

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     window.localStorage.setItem("hbr-language", language);
//     document.documentElement.lang = language;
//     document.documentElement.dir = isRTL ? "rtl" : "ltr";
//     document.body.dir = isRTL ? "rtl" : "ltr";
//     document.body.classList.toggle("rtl", isRTL);
//   }, [language, isRTL]);

//   const toggleLanguage = useCallback(() => {
//     setLanguage((prev) => (prev === "en" ? "ar" : "en"));
//   }, []);

//   const t = useCallback(
//     (key: string) => {
//       const dictionary = translations[language];
//       return key
//         .split(".")
//         .reduce((acc: any, part: string) => acc?.[part], dictionary) ?? key;
//     },
//     [language]
//   );

//   const value = useMemo(
//     () => ({
//       language,
//       isRTL,
//       setLanguage,
//       toggleLanguage,
//       t,
//     }),
//     [language, isRTL, toggleLanguage, t]
//   );

//   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };




// import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
// import en from "@/locales/en.json";
// import ar from "@/locales/ar.json";

// type Language = "en" | "ar";

// type LanguageContextValue = {
//   language: Language;
//   isRTL: boolean;
//   setLanguage: (lang: Language) => void;
//   toggleLanguage: () => void;
//   t: (key: string, fallback?: string) => any; // fallback optional
// };

// const translations: Record<Language, Record<string, any>> = {
//   en,
//   ar,
// };

// const getInitialLanguage = (): Language => {
//   if (typeof window === "undefined") return "en";
//   const stored = window.localStorage.getItem("hbr-language");
//   return stored === "ar" || stored === "en" ? stored : "en";
// };

// export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
//   const [language, setLanguage] = useState<Language>(getInitialLanguage);
//   const isRTL = language === "ar";

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     window.localStorage.setItem("hbr-language", language);
//     document.documentElement.lang = language;
//     document.documentElement.dir = isRTL ? "rtl" : "ltr";
//     document.body.dir = isRTL ? "rtl" : "ltr";
//     document.body.classList.toggle("rtl", isRTL);
//   }, [language, isRTL]);

//   const toggleLanguage = useCallback(() => {
//     setLanguage((prev) => (prev === "en" ? "ar" : "en"));
//   }, []);

//   const t = useCallback(
//     (key: string, fallback?: string) => {
//       const dictionary = translations[language];
//       const value = key
//         .split(".")
//         .reduce((acc: any, part: string) => acc?.[part], dictionary);
//       // If value is undefined, return fallback or the key itself
//       if (value === undefined) return fallback ?? key;
//       // If value is an object or array, return it as is
//       return value;
//     },
//     [language]
//   );

//   const value = useMemo(
//     () => ({
//       language,
//       isRTL,
//       setLanguage,
//       toggleLanguage,
//       t,
//     }),
//     [language, isRTL, toggleLanguage, t]
//   );

//   return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };


import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import en from "@/locales/en.json";
import ar from "@/locales/ar.json";

type Language = "en" | "ar";

type LanguageContextValue = {
  language: Language;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => any; // fallback optional
};

const translations: Record<Language, Record<string, any>> = {
  en,
  ar,
};

// ✅ Add this line
const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem("hbr-language");
  return stored === "ar" || stored === "en" ? stored : "en";
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const isRTL = language === "ar";

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("hbr-language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.dir = isRTL ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isRTL);
  }, [language, isRTL]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = (key: string, fallback?: string) => {
    const dictionary = translations[language]; // ✅ THIS IS THE FIX
    const value = key
      .split(".")
      .reduce((acc: any, part: string) => acc?.[part], dictionary);
  
    if (value === undefined) return fallback ?? key;
    return value;
  };
  
  

  const value = useMemo(
    () => ({
      language,
      isRTL,
      setLanguage,
      toggleLanguage,
      t,
    }),
    [language, isRTL, toggleLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
