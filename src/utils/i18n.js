import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Función para obtener el idioma del almacenamiento local o un idioma predeterminado
const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    const lang = localStorage.getItem("i18nextLng");
    return lang || "en";
  }
  return "en";
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("../locales/en.json"),
      },
      es: {
        translation: require("../locales/es.json"),
      },
    },
    fallbackLng: "en", // Establecer un idioma predeterminado
    detection: {
      order: ["localStorage", "navigator", "querystring", "cookie"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    lng: getInitialLanguage(), // Establecer el idioma inicial
  });

export default i18n;
