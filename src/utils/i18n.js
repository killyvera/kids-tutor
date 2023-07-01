import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

var langStorage = ""

if (typeof window !== "undefined") {
  // Perform localStorage action
  const lang = localStorage.getItem("i18nextLng");
  langStorage = lang
  console.log(langStorage)
}

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
    fallbackLng: langStorage ? langStorage : "en",
    detection: {
      order: ["localStorage", "navigator", "querystring", "cookie"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
