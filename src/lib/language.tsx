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
  document.title = i18n[lang].meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", i18n[lang].meta.description);
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
