import en from "@assets/i18n/en";
import fr from "@assets/i18n/fr";
import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

const resources: Resource = {
  en: {
    translations: en,
  },
  fr: {
    translations: fr,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  // keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
