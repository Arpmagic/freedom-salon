const SCROLL_KEY = "freedom-return-scroll";
const RESTORE_KEY = "freedom-restore-scroll";

export function rememberHomeScroll() {
  sessionStorage.setItem(SCROLL_KEY, String(Math.round(window.scrollY)));
}

export function consumeReturnScroll(): number | null {
  const shouldRestore = sessionStorage.getItem(RESTORE_KEY) === "1";
  sessionStorage.removeItem(RESTORE_KEY);
  const raw = sessionStorage.getItem(SCROLL_KEY);
  sessionStorage.removeItem(SCROLL_KEY);
  if (!shouldRestore || raw == null) return null;
  const y = Number(raw);
  return Number.isFinite(y) ? y : null;
}

export function closeLegalPage(router: { push: (href: string, options?: { scroll?: boolean }) => void }) {
  const hasReturn = sessionStorage.getItem(SCROLL_KEY) != null;
  if (hasReturn) {
    sessionStorage.setItem(RESTORE_KEY, "1");
    router.push("/", { scroll: false });
    return;
  }
  router.push("/");
}
