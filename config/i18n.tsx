export type Lang = {
  name: string;
  locale: string;
  flag: React.ReactNode;
};

export const en: Lang = {
  name: "english",
  locale: "en",
  flag: <i className="fi text-xl fi-us cursor-pointer"></i>,
};

export const es: Lang = {
  name: "spanish",
  locale: "es",
  flag: <i className="fi text-xl fi-ar cursor-pointer"></i>,
};
