import Link from "next/link";

export const metadata = {
  title: "Strona nie znaleziona",
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100svh",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "2.5rem 0",
      }}
    >
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="section-title" style={{ margin: "0 auto 1rem", maxWidth: "20ch" }}>
          Nie znaleziono strony
        </h1>
        <p
          className="section-sub"
          style={{ margin: "0 auto 2rem" }}
        >
          Strona, której szukasz, nie istnieje lub została przeniesiona. Wróć na
          stronę główną, aby zobaczyć naszą ofertę i umówić wizytę.
        </p>
        <Link href="/" className="btn btn--gold">
          <span className="btn__label">Wróć na stronę główną</span>
        </Link>
      </div>
    </main>
  );
}
