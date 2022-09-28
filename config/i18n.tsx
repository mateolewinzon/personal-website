export type Lang = {
  name: string,
  locale: string,
  flag: React.ReactNode
}

export const langs: Lang[] = [
  {
    name: "english",
    locale: "en",
    flag: <span className="fi text-xl fi-us"></span>,
  },
  {
    name: "spanish",
    locale: "es",
    flag: <span className="fi text-xl fi-ar"></span>,
  },
];
