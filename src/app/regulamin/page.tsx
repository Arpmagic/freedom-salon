import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Regulamin salonu",
  description:
    "Regulamin świadczenia usług w salonie FREEDOM Barber & Fryzjer w Poznaniu. Rezerwacje, spóźnienia, płatności i reklamacje.",
  alternates: {
    canonical: "/regulamin",
  },
};

export default function RegulationsPage() {
  return (
    <LegalPage title='Regulamin świadczenia usług w salonie "FREEDOM Barber & Fryzjer"'>
      <h2>1. Postanowienia ogólne</h2>
      <p>
        1.1. Regulamin określa zasady korzystania z usług salonu FREEDOM Barber
        &amp; Fryzjer, prowadzonego przez Freedom Anna Kuzminets, os. Stare
        Żegrze 142, 61-249 Poznań, NIP: 7831906014.
      </p>
      <p>
        1.2. Skorzystanie z usług salonu oznacza akceptację niniejszego
        regulaminu.
      </p>

      <h2>2. Rezerwacja wizyt</h2>
      <p>
        2.1. Rezerwacji wizyt można dokonywać telefonicznie, osobiście w salonie
        lub za pośrednictwem systemu rezerwacji online (Booksy).
      </p>
      <p>
        2.2. Salon zastrzega sobie prawo do anulowania rezerwacji lub pobrania
        zadatku w przypadku usług wymagających dłuższego czasu pracy (np.
        zaawansowana koloryzacja).
      </p>

      <h2>3. Spóźnienia i odwoływanie wizyt</h2>
      <p>
        3.1. Prosimy o informowanie o chęci odwołania lub zmiany terminu wizyty
        z co najmniej 24-godzinnym wyprzedzeniem.
      </p>
      <p>
        3.2. W przypadku spóźnienia Klienta przekraczającego 15 minut, salon
        zastrzega sobie prawo do odmowy wykonania usługi (jeśli wpłynie to na
        czas innych wizyt) lub skrócenia czasu usługi, przy czym jej cena nie
        ulega zmianie.
      </p>

      <h2>4. Realizacja usług</h2>
      <p>
        4.1. Przed przystąpieniem do zabiegów fryzjerskich, pracownik
        przeprowadza konsultację z Klientem w celu określenia jego oczekiwań.
      </p>
      <p>
        4.2. Klient zobowiązany jest do poinformowania pracownika o wszelkich
        przeciwwskazaniach do zabiegów (np. alergie, choroby skóry głowy,
        wrażliwość na preparaty chemiczne, wcześniejsze nieudane zabiegi
        rozjaśniania itp.). Zatajenie tych informacji zwalnia salon z
        odpowiedzialności za ewentualne reakcje niepożądane.
      </p>

      <h2>5. Płatności i reklamacje</h2>
      <p>
        5.1. W salonie akceptowane są płatności gotówką oraz kartami
        płatniczymi. Ceny podane w cenniku są cenami brutto.
      </p>
      <p>
        5.2. Klient ma prawo do złożenia reklamacji, jeśli efekt usługi
        znacząco odbiega od ustaleń podczas konsultacji. Reklamacje należy
        zgłaszać niezwłocznie – najlepiej w salonie po wykonanej usłudze, lub w
        terminie do 3 dni od dnia jej wykonania.
      </p>
      <p>
        5.3. Reklamacja nie obejmuje sytuacji, w której Klient zmienił zdanie co
        do koloru lub cięcia po prawidłowo wykonanej usłudze, zgodnie z
        pierwotnymi ustaleniami.
      </p>

      <h2>6. Postanowienia końcowe</h2>
      <p>
        6.1. W sprawach nieuregulowanych niniejszym regulaminem zastosowanie
        mają przepisy Kodeksu cywilnego.
      </p>
      <p>
        6.2. Salon zastrzega sobie prawo do zmiany niniejszego regulaminu.
      </p>
    </LegalPage>
  );
}
