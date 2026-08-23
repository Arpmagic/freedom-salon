import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Polityka prywatności i cookies",
  description:
    "Polityka prywatności i plików cookies salonu FREEDOM Barber & Fryzjer w Poznaniu. Administrator: Freedom Anna Kuzminets.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Polityka prywatności i plików cookies">
      <h2>1. Administrator Danych Osobowych</h2>
      <p>
        Administratorem Twoich danych osobowych jest firma Freedom Anna Kuzminets
        z siedzibą: os. Stare Żegrze 142, 61-249 Poznań, NIP: 7831906014, REGON:
        528880417 (dalej: „Administrator”). Kontakt z Administratorem możliwy
        jest pod adresem e-mail:{" "}
        <a href="mailto:anna.kira85@ukr.net">anna.kira85@ukr.net</a> lub
        telefonicznie: <a href="tel:+48571488281">571 488 281</a>.
      </p>

      <h2>2. Cel i podstawa przetwarzania danych</h2>
      <p>
        Twoje dane osobowe (imię, nazwisko, numer telefonu, adres e-mail)
        przetwarzane są w celu:
      </p>
      <ul>
        <li>
          Umawiania i realizacji wizyt w salonie fryzjerskim (art. 6 ust. 1 lit.
          b RODO – wykonanie umowy).
        </li>
        <li>
          Komunikacji z Tobą w sprawach związanych z usługami (art. 6 ust. 1
          lit. f RODO – uzasadniony interes).
        </li>
        <li>
          Ewentualnego dochodzenia roszczeń lub obrony przed roszczeniami (art.
          6 ust. 1 lit. f RODO).
        </li>
      </ul>

      <h2>3. Odbiorcy danych</h2>
      <p>
        Odbiorcami Twoich danych osobowych mogą być podmioty współpracujące z
        Administratorem, w szczególności: platforma do rezerwacji wizyt (np.
        Booksy), biuro rachunkowe, dostawca usług IT oraz hostingu strony
        internetowej.
      </p>

      <h2>4. Czas przechowywania danych</h2>
      <p>
        Dane będą przechowywane przez okres niezbędny do realizacji usługi oraz
        przez czas wymagany przepisami prawa (np. prawa podatkowego) lub do
        momentu przedawnienia roszczeń.
      </p>

      <h2>5. Twoje prawa</h2>
      <p>
        Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia,
        ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu
        wobec przetwarzania oraz wniesienia skargi do Prezesa Urzędu Ochrony
        Danych Osobowych (PUODO).
      </p>

      <h2>6. Polityka Cookies</h2>
      <p>
        Nasza strona internetowa używa plików cookies w celu zapewnienia jej
        prawidłowego działania oraz w celach analitycznych. Korzystając ze
        strony, wyrażasz zgodę na używanie cookies zgodnie z ustawieniami Twojej
        przeglądarki. Możesz w każdej chwili zmienić ustawienia dotyczące
        cookies w swojej przeglądarce internetowej.
      </p>
    </LegalPage>
  );
}
