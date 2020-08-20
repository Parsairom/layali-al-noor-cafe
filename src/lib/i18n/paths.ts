import type { Locale } from "./config";

export const routes = {
  home: "",
  menu: "menu",
  about: "about",
  gallery: "gallery",
  reservation: "reservation",
  contact: "contact",
} as const;

export type RouteKey = keyof typeof routes;

export function path(locale: Locale, route: RouteKey = "home"): string {
  const segment = routes[route];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}
