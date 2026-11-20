import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/en.json";
import ar from "./locales/ar/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
  lng: "ar",
  fallbackLng: "ar",
  supportedLngs: ["en", "ar"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
