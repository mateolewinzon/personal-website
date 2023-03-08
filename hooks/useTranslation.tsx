import { useTranslation as next_i18n_next } from "next-i18next";

export default function useTranslation() {
  const {
    t,
    i18n: { language },
  } = next_i18n_next();
  
  return {t, locale: language}
}
