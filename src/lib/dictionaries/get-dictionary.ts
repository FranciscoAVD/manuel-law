import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((mod) => mod.default),
  es: () => import("./es.json").then((mod) => mod.default),
};

export const getDictionay = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
