import type { Lang } from "./content";

export type LegalKind = "privacy" | "regulations";

type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

type LegalDoc = {
  title: string;
  blocks: LegalBlock[];
};

export const legalDocs: Record<Lang, Record<LegalKind, LegalDoc>> = {
  pl: {
    privacy: {
      title: "Polityka prywatności i plików cookies",
      blocks: [
        { type: "h2", text: "1. Administrator Danych Osobowych" },
        {
          type: "p",
          text: "Administratorem Twoich danych osobowych jest firma Freedom Anna Kuzminets z siedzibą: os. Stare Żegrze 142, 61-249 Poznań, NIP: 7831906014, REGON: 528880417 (dalej: „Administrator”). Kontakt z Administratorem możliwy jest pod adresem e-mail: {email} lub telefonicznie: {phone}.",
        },
        { type: "h2", text: "2. Cel i podstawa przetwarzania danych" },
        {
          type: "p",
          text: "Twoje dane osobowe (imię, nazwisko, numer telefonu, adres e-mail) przetwarzane są w celu:",
        },
        {
          type: "ul",
          items: [
            "Umawiania i realizacji wizyt w salonie fryzjerskim (art. 6 ust. 1 lit. b RODO – wykonanie umowy).",
            "Komunikacji z Tobą w sprawach związanych z usługami (art. 6 ust. 1 lit. f RODO – uzasadniony interes).",
            "Ewentualnego dochodzenia roszczeń lub obrony przed roszczeniami (art. 6 ust. 1 lit. f RODO).",
          ],
        },
        { type: "h2", text: "3. Odbiorcy danych" },
        {
          type: "p",
          text: "Odbiorcami Twoich danych osobowych mogą być podmioty współpracujące z Administratorem, w szczególności: platforma do rezerwacji wizyt (np. Booksy), biuro rachunkowe, dostawca usług IT oraz hostingu strony internetowej.",
        },
        { type: "h2", text: "4. Czas przechowywania danych" },
        {
          type: "p",
          text: "Dane będą przechowywane przez okres niezbędny do realizacji usługi oraz przez czas wymagany przepisami prawa (np. prawa podatkowego) lub do momentu przedawnienia roszczeń.",
        },
        { type: "h2", text: "5. Twoje prawa" },
        {
          type: "p",
          text: "Masz prawo do: dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania oraz wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).",
        },
        { type: "h2", text: "6. Polityka Cookies" },
        {
          type: "p",
          text: "Nasza strona internetowa używa plików cookies w celu zapewnienia jej prawidłowego działania oraz w celach analitycznych. Korzystając ze strony, wyrażasz zgodę na używanie cookies zgodnie z ustawieniami Twojej przeglądarki. Możesz w każdej chwili zmienić ustawienia dotyczące cookies w swojej przeglądarce internetowej.",
        },
      ],
    },
    regulations: {
      title: 'Regulamin świadczenia usług w salonie "FREEDOM Barber & Fryzjer"',
      blocks: [
        { type: "h2", text: "1. Postanowienia ogólne" },
        {
          type: "p",
          text: "1.1. Regulamin określa zasady korzystania z usług salonu FREEDOM Barber & Fryzjer, prowadzonego przez Freedom Anna Kuzminets, os. Stare Żegrze 142, 61-249 Poznań, NIP: 7831906014.",
        },
        {
          type: "p",
          text: "1.2. Skorzystanie z usług salonu oznacza akceptację niniejszego regulaminu.",
        },
        { type: "h2", text: "2. Rezerwacja wizyt" },
        {
          type: "p",
          text: "2.1. Rezerwacji wizyt można dokonywać telefonicznie, osobiście w salonie lub za pośrednictwem systemu rezerwacji online (Booksy).",
        },
        {
          type: "p",
          text: "2.2. Salon zastrzega sobie prawo do anulowania rezerwacji lub pobrania zadatku w przypadku usług wymagających dłuższego czasu pracy (np. zaawansowana koloryzacja).",
        },
        { type: "h2", text: "3. Spóźnienia i odwoływanie wizyt" },
        {
          type: "p",
          text: "3.1. Prosimy o informowanie o chęci odwołania lub zmiany terminu wizyty z co najmniej 24-godzinnym wyprzedzeniem.",
        },
        {
          type: "p",
          text: "3.2. W przypadku spóźnienia Klienta przekraczającego 15 minut, salon zastrzega sobie prawo do odmowy wykonania usługi (jeśli wpłynie to na czas innych wizyt) lub skrócenia czasu usługi, przy czym jej cena nie ulega zmianie.",
        },
        { type: "h2", text: "4. Realizacja usług" },
        {
          type: "p",
          text: "4.1. Przed przystąpieniem do zabiegów fryzjerskich, pracownik przeprowadza konsultację z Klientem w celu określenia jego oczekiwań.",
        },
        {
          type: "p",
          text: "4.2. Klient zobowiązany jest do poinformowania pracownika o wszelkich przeciwwskazaniach do zabiegów (np. alergie, choroby skóry głowy, wrażliwość na preparaty chemiczne, wcześniejsze nieudane zabiegi rozjaśniania itp.). Zatajenie tych informacji zwalnia salon z odpowiedzialności za ewentualne reakcje niepożądane.",
        },
        { type: "h2", text: "5. Płatności i reklamacje" },
        {
          type: "p",
          text: "5.1. W salonie akceptowane są płatności gotówką oraz kartami płatniczymi. Ceny podane w cenniku są cenami brutto.",
        },
        {
          type: "p",
          text: "5.2. Klient ma prawo do złożenia reklamacji, jeśli efekt usługi znacząco odbiega od ustaleń podczas konsultacji. Reklamacje należy zgłaszać niezwłocznie – najlepiej w salonie po wykonanej usłudze, lub w terminie do 3 dni od dnia jej wykonania.",
        },
        {
          type: "p",
          text: "5.3. Reklamacja nie obejmuje sytuacji, w której Klient zmienił zdanie co do koloru lub cięcia po prawidłowo wykonanej usłudze, zgodnie z pierwotnymi ustaleniami.",
        },
        { type: "h2", text: "6. Postanowienia końcowe" },
        {
          type: "p",
          text: "6.1. W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy Kodeksu cywilnego.",
        },
        {
          type: "p",
          text: "6.2. Salon zastrzega sobie prawo do zmiany niniejszego regulaminu.",
        },
      ],
    },
  },
  uk: {
    privacy: {
      title: "Політика конфіденційності та файлів cookies",
      blocks: [
        { type: "h2", text: "1. Адміністратор персональних даних" },
        {
          type: "p",
          text: "Адміністратором ваших персональних даних є фірма Freedom Anna Kuzminets з адресою: os. Stare Żegrze 142, 61-249 Poznań, NIP: 7831906014, REGON: 528880417 (далі: «Адміністратор»). Зв’язатися з Адміністратором можна електронною поштою: {email} або телефоном: {phone}.",
        },
        { type: "h2", text: "2. Мета і правова підстава обробки даних" },
        {
          type: "p",
          text: "Ваші персональні дані (ім’я, прізвище, номер телефону, адреса e-mail) обробляються з метою:",
        },
        {
          type: "ul",
          items: [
            "Запису та надання послуг у салоні (ст. 6 ч. 1 літ. b GDPR — виконання договору).",
            "Комунікації з вами щодо послуг (ст. 6 ч. 1 літ. f GDPR — законний інтерес).",
            "Можливого захисту або пред’явлення претензій (ст. 6 ч. 1 літ. f GDPR).",
          ],
        },
        { type: "h2", text: "3. Одержувачі даних" },
        {
          type: "p",
          text: "Одержувачами ваших персональних даних можуть бути партнери Адміністратора, зокрема: платформа онлайн-запису (наприклад, Booksy), бухгалтерська фірма, постачальник IT-послуг та хостингу сайту.",
        },
        { type: "h2", text: "4. Термін зберігання даних" },
        {
          type: "p",
          text: "Дані зберігаються протягом часу, необхідного для надання послуги, а також протягом строків, передбачених законом (наприклад, податковим), або до спливу строку позовної давності.",
        },
        { type: "h2", text: "5. Ваші права" },
        {
          type: "p",
          text: "Ви маєте право на: доступ до своїх даних, їх виправлення, видалення, обмеження обробки, перенесення даних, заперечення проти обробки, а також подання скарги до Голови Управління з охорони персональних даних Польщі (PUODO).",
        },
        { type: "h2", text: "6. Політика cookies" },
        {
          type: "p",
          text: "Наш сайт використовує файли cookies для коректної роботи та з аналітичною метою. Користуючись сайтом, ви погоджуєтесь на cookies згідно з налаштуваннями вашого браузера. Налаштування cookies можна змінити в будь-який момент у браузері.",
        },
      ],
    },
    regulations: {
      title: "Правила надання послуг у салоні «FREEDOM Barber & Fryzjer»",
      blocks: [
        { type: "h2", text: "1. Загальні положення" },
        {
          type: "p",
          text: "1.1. Ці правила визначають умови користування послугами салону FREEDOM Barber & Fryzjer, який веде Freedom Anna Kuzminets, os. Stare Żegrze 142, 61-249 Poznań, NIP: 7831906014.",
        },
        {
          type: "p",
          text: "1.2. Користування послугами салону означає прийняття цих правил.",
        },
        { type: "h2", text: "2. Запис на візит" },
        {
          type: "p",
          text: "2.1. Записатися можна телефоном, особисто в салоні або через систему онлайн-запису (Booksy).",
        },
        {
          type: "p",
          text: "2.2. Салон залишає за собою право скасувати запис або взяти завдаток у разі послуг, що потребують більше часу (наприклад, складне фарбування).",
        },
        { type: "h2", text: "3. Запізнення та скасування візитів" },
        {
          type: "p",
          text: "3.1. Просимо повідомляти про скасування або зміну візиту щонайменше за 24 години.",
        },
        {
          type: "p",
          text: "3.2. У разі запізнення клієнта більш ніж на 15 хвилин салон має право відмовити в послузі (якщо це вплине на інші візити) або скоротити час послуги, при цьому ціна не змінюється.",
        },
        { type: "h2", text: "4. Надання послуг" },
        {
          type: "p",
          text: "4.1. Перед початком процедур майстер проводить консультацію з клієнтом, щоб узгодити очікування.",
        },
        {
          type: "p",
          text: "4.2. Клієнт зобов’язаний повідомити майстра про всі протипоказання (наприклад, алергії, захворювання шкіри голови, чутливість до хімічних препаратів, попередні невдалі процедури освітлення тощо). Приховування цієї інформації звільняє салон від відповідальності за можливі небажані реакції.",
        },
        { type: "h2", text: "5. Оплата та рекламації" },
        {
          type: "p",
          text: "5.1. У салоні приймають оплату готівкою та карткою. Ціни в прайсі — брутто.",
        },
        {
          type: "p",
          text: "5.2. Клієнт має право подати рекламацію, якщо результат суттєво відрізняється від домовленостей на консультації. Рекламацію слід подавати одразу — найкраще в салоні після послуги, або протягом 3 днів від дня її виконання.",
        },
        {
          type: "p",
          text: "5.3. Рекламація не поширюється на ситуацію, коли клієнт змінив думку щодо кольору чи стрижки після правильно виконаної послуги згідно з початковими домовленостями.",
        },
        { type: "h2", text: "6. Прикінцеві положення" },
        {
          type: "p",
          text: "6.1. У питаннях, не врегульованих цими правилами, застосовується Цивільний кодекс Польщі.",
        },
        {
          type: "p",
          text: "6.2. Салон залишає за собою право змінювати ці правила.",
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy and cookie policy",
      blocks: [
        { type: "h2", text: "1. Personal data controller" },
        {
          type: "p",
          text: "The controller of your personal data is Freedom Anna Kuzminets, os. Stare Żegrze 142, 61-249 Poznań, NIP: 7831906014, REGON: 528880417 (the “Controller”). You can contact the Controller at {email} or by phone: {phone}.",
        },
        { type: "h2", text: "2. Purpose and legal basis" },
        {
          type: "p",
          text: "Your personal data (first name, last name, phone number, email address) is processed in order to:",
        },
        {
          type: "ul",
          items: [
            "Book and provide salon services (Art. 6(1)(b) GDPR — performance of a contract).",
            "Communicate with you about the services (Art. 6(1)(f) GDPR — legitimate interest).",
            "Establish, exercise or defend legal claims if needed (Art. 6(1)(f) GDPR).",
          ],
        },
        { type: "h2", text: "3. Recipients" },
        {
          type: "p",
          text: "Recipients of your data may include parties working with the Controller, in particular: an online booking platform (e.g. Booksy), an accounting office, and IT / website hosting providers.",
        },
        { type: "h2", text: "4. Retention period" },
        {
          type: "p",
          text: "Data is stored for as long as needed to provide the service, for periods required by law (e.g. tax law), or until claims become time-barred.",
        },
        { type: "h2", text: "5. Your rights" },
        {
          type: "p",
          text: "You have the right to access, rectify, erase, restrict or port your data, to object to processing, and to lodge a complaint with the President of the Personal Data Protection Office in Poland (PUODO).",
        },
        { type: "h2", text: "6. Cookie policy" },
        {
          type: "p",
          text: "This website uses cookies for proper operation and analytics. By using the site, you accept cookies according to your browser settings. You can change cookie settings in your browser at any time.",
        },
      ],
    },
    regulations: {
      title: 'Salon terms of service — "FREEDOM Barber & Fryzjer"',
      blocks: [
        { type: "h2", text: "1. General provisions" },
        {
          type: "p",
          text: "1.1. These terms set out the rules for using the services of FREEDOM Barber & Fryzjer, operated by Freedom Anna Kuzminets, os. Stare Żegrze 142, 61-249 Poznań, NIP: 7831906014.",
        },
        {
          type: "p",
          text: "1.2. Using the salon’s services means you accept these terms.",
        },
        { type: "h2", text: "2. Booking appointments" },
        {
          type: "p",
          text: "2.1. Appointments can be booked by phone, in person at the salon, or through the online booking system (Booksy).",
        },
        {
          type: "p",
          text: "2.2. The salon reserves the right to cancel a booking or take a deposit for services that require more time (e.g. advanced colouring).",
        },
        { type: "h2", text: "3. Lateness and cancellations" },
        {
          type: "p",
          text: "3.1. Please let us know if you want to cancel or change an appointment at least 24 hours in advance.",
        },
        {
          type: "p",
          text: "3.2. If a client is more than 15 minutes late, the salon may refuse the service (if it would affect other appointments) or shorten the service. The price remains the same.",
        },
        { type: "h2", text: "4. Providing services" },
        {
          type: "p",
          text: "4.1. Before hair treatments, the stylist consults with the client to confirm expectations.",
        },
        {
          type: "p",
          text: "4.2. The client must inform the stylist of any contraindications (e.g. allergies, scalp conditions, sensitivity to chemical products, previous unsuccessful bleaching, etc.). Withholding this information releases the salon from liability for possible adverse reactions.",
        },
        { type: "h2", text: "5. Payments and complaints" },
        {
          type: "p",
          text: "5.1. The salon accepts cash and card payments. Prices in the menu are gross prices.",
        },
        {
          type: "p",
          text: "5.2. The client may file a complaint if the result differs significantly from what was agreed at consultation. Please raise it immediately — ideally at the salon after the service, or within 3 days of the appointment.",
        },
        {
          type: "p",
          text: "5.3. A complaint does not apply if the client changes their mind about colour or cut after a service that was carried out as originally agreed.",
        },
        { type: "h2", text: "6. Final provisions" },
        {
          type: "p",
          text: "6.1. Matters not covered by these terms are governed by the Polish Civil Code.",
        },
        {
          type: "p",
          text: "6.2. The salon reserves the right to change these terms.",
        },
      ],
    },
  },
};
