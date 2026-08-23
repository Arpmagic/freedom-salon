"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { i18n, type Dictionary, type Lang } from "./content";

const LANG_KEY = "freedom-lang";
const supported: Lang[] = ["pl", "uk", "en"];

type LangContextValue = {
  lang: Lang;
  dict: Dictionary;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextValue | null>(null);

function detectLang(): Lang {
  if (typeof window === "undefined") return "pl";
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && supported.includes(stored as Lang)) return stored as Lang;
  const nav = (navigator.language || "pl").slice(0, 2).toLowerCase();
  if (nav === "uk" || nav === "ru") return "uk";
  if (nav === "en") return "en";
  return "pl";
}

function applyDocumentMeta(lang: Lang) {
  document.documentElement.lang = lang === "uk" ? "uk" : lang;
  const dict = i18n[lang];
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const suffix = "FREEDOM Barber & Fryzjer";
  if (path === "/polityka-prywatnosci") {
    document.title = `${dict.legal.privacyLink} | ${suffix}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dict.meta.description);
    return;
  }
  if (path === "/regulamin") {
    document.title = `${dict.legal.regulationsLink} | ${suffix}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", dict.meta.description);
    return;
  }
  document.title = dict.meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", dict.meta.description);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Reading localStorage synchronously (client only) avoids a visible flash to
  // the wrong language on first paint. SSR always renders "pl" as a fallback;
  // the lazy initializer re-runs during client hydration and already picks up
  // the stored/detected language, so no extra effect is needed to sync it.
  const [lang, setLangState] = useState<Lang>(() =>
    typeof window === "undefined" ? "pl" : detectLang(),
  );

  useEffect(() => {
    applyDocumentMeta(lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(LANG_KEY, next);
    applyDocumentMeta(next);
  }, []);

  const value = useMemo(
    () => ({
      lang,
      dict: i18n[lang],
      setLang,
    }),
    [lang, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
