"use client";

import type { ReactNode } from "react";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/lib/language";
import { consumeReturnScroll } from "@/lib/legalReturn";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileDock } from "./MobileDock";

function RestoreHomeScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (pathname !== "/") return;
    const y = consumeReturnScroll();
    if (y == null) return;
    const apply = () => {
      const html = document.documentElement;
      const previous = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      html.style.scrollBehavior = previous;
    };
    apply();
    const frame = requestAnimationFrame(apply);
    const t1 = window.setTimeout(apply, 0);
    const t2 = window.setTimeout(apply, 120);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <RestoreHomeScroll />
      <Header />
      {children}
      <Footer />
      <MobileDock />
    </LanguageProvider>
  );
}
