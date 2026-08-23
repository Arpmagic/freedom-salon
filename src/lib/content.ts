export type Lang = "pl" | "uk" | "en";

type LocalizedText = { pl: string; uk: string; en: string };

export const i18n = {
  pl: {
    meta: {
      title: "FREEDOM Barber & Fryzjer | Poznań",
      description:
        "Premium barber i fryzjer w Poznaniu. Fade, koloryzacja Airtouch, total blond, strzyżenia damskie i męskie. Umów wizytę online.",
    },
    nav: {
      about: "O nas",
      services: "Usługi",
      portfolio: "Portfolio",
      reviews: "Opinie",
      contact: "Kontakt",
      book: "Umów wizytę",
    },
    a11y: {
      skip: "Przejdź do treści",
      menu: "Menu",
      mainNav: "Nawigacja główna",
      language: "Język",
      close: "Zamknij",
      openGallery: "Podgląd zdjęcia w powiększeniu",
      serviceCategories: "Kategorie usług",
      call: "Zadzwoń",
      quickActions: "Szybkie akcje",
    },
    hero: {
      brand: "FREEDOM",
      tagline: "Barber & Fryzjer",
      headline: "Twój styl. Twoja wolność.",
      sub: "Precyzyjne strzyżenia, koloryzacja premium i pielęgnacja — w atmosferze, która daje spokój i pewność siebie.",
      cta: "Umów wizytę",
      secondary: "Zobacz portfolio",
      rating: "4,9 · 218 opinii",
      location: "Poznań · Stare Żegrze",
    },
    about: {
      eyebrow: "O salonie",
      title: "Miejsce, gdzie styl jest w centrum uwagi",
      p1: "FREEDOM Barber & Fryzjer to miejsce, gdzie Twoje włosy i styl są w pełni w centrum uwagi. Niezależnie od tego, czy marzysz o klasycznym strzyżeniu, odświeżeniu koloru, czy potrzebujesz rekonstrukcji włosów — zapewniamy pełne wsparcie na każdym kroku.",
      p2: "Z pasją podchodzimy do technik koloryzacji, takich jak Airtouch, total blond czy tonowanie, aby stworzyć wygląd idealnie dopasowany do Twojego stylu. Specjalizujemy się również w trymowaniu brody i pielęgnacji męskiego zarostu.",
      p3: "Profesjonalna rekonstrukcja włosów wzmacnia pasma, przywracając im zdrowy, naturalny blask. Zaopiekujemy się Twoim stylem i wprowadzimy odświeżenie, które wyrazi Twoją osobowość.",
      name: "Anna Freedom",
      role: "Barberka & Fryzjerka",
      badge1: "218+ opinii",
      badge2: "4,9 / 5",
      badge3: "Parking",
    },
    services: {
      eyebrow: "Cennik",
      title: "Usługi dopasowane do Ciebie",
      sub: "Przejrzyste ceny. Profesjonalny efekt. Rezerwacja w kilka kliknięć.",
      book: "Umów",
      from: "od",
      free: "Darmowa",
      tabs: {
        barber: "Barber",
        women: "Fryzjer",
        color: "Koloryzacja",
        care: "Pielęgnacja",
      },
      note: "Ceny oznaczone „+” zależą od długości i stanu włosów. Dokładną wycenę ustalimy na konsultacji.",
    },
    portfolio: {
      eyebrow: "Prace",
      title: "Portfolio",
      sub: "Prawdziwe efekty — fade, koloryzacja i precyzyjne strzyżenia.",
      open: "Powiększ",
    },
    reviews: {
      eyebrow: "Opinie klientów",
      title: "Zaufanie, które widać",
      sub: "Ocena 4,9 na podstawie 218 opinii na Booksy.",
      verified: "Potwierdzony klient",
      ratingLabel: "średnia ocena",
      countLabel: "opinii",
      viewAll: "Zobacz więcej opinii na Booksy",
    },
    cta: {
      title: "Czas na metamorfozę?",
      sub: "Zarezerwuj wizytę online w dogodnym terminie — szybko, wygodnie i bez telefonowania.",
      button: "Umów wizytę na Booksy",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Odwiedź nas w Poznaniu",
      addressLabel: "Adres",
      address: "osiedle Stare Żegrze 142",
      city: "61-249 Poznań, Nowe Miasto",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      hoursLabel: "Godziny otwarcia",
      socialLabel: "Media społecznościowe",
      mapLabel: "Zobacz na mapie",
      days: {
        mon: "Poniedziałek",
        tue: "Wtorek",
        wed: "Środa",
        thu: "Czwartek",
        fri: "Piątek",
        sat: "Sobota",
        sun: "Niedziela",
      },
      closed: "Zamknięte",
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      book: "Umów wizytę",
    },
    legal: {
      backHome: "Wróć na stronę główną",
      privacyLink: "Polityka prywatności i cookies",
      regulationsLink: "Regulamin salonu",
      officialNote: "",
      notFoundTitle: "Nie znaleziono strony",
      notFoundBody:
        "Strona, której szukasz, nie istnieje lub została przeniesiona. Wróć na stronę główną, aby zobaczyć naszą ofertę i umówić wizytę.",
    },
  },

  uk: {
    meta: {
      title: "FREEDOM Barber & Fryzjer | Познань",
      description:
        "Преміальний барбер і перукар у Познані. Fade, колорування Airtouch, total blond, жіночі та чоловічі стрижки. Запишіться онлайн.",
    },
    nav: {
      about: "Про нас",
      services: "Послуги",
      portfolio: "Портфоліо",
      reviews: "Відгуки",
      contact: "Контакти",
      book: "Записатися",
    },
    a11y: {
      skip: "Перейти до вмісту",
      menu: "Меню",
      mainNav: "Головна навігація",
      language: "Мова",
      close: "Закрити",
      openGallery: "Перегляд фото у збільшеному вигляді",
      serviceCategories: "Категорії послуг",
      call: "Зателефонувати",
      quickActions: "Швидкі дії",
    },
    hero: {
      brand: "FREEDOM",
      tagline: "Barber & Fryzjer",
      headline: "Твій стиль. Твоя свобода.",
      sub: "Точні стрижки, преміальне колорування та догляд — в атмосфері, яка дає спокій і впевненість.",
      cta: "Записатися",
      secondary: "Дивитись портфоліо",
      rating: "4,9 · 218 відгуків",
      location: "Познань · Stare Żegrze",
    },
    about: {
      eyebrow: "Про салон",
      title: "Місце, де стиль у центрі уваги",
      p1: "FREEDOM Barber & Fryzjer — місце, де ваше волосся і стиль повністю в центрі уваги. Класична стрижка, оновлення кольору чи реконструкція волосся — ми підтримуємо вас на кожному кроці.",
      p2: "З пристрастю працюємо з техніками колорування: Airtouch, total blond, тонування — щоб створити образ під ваш стиль. Також спеціалізуємось на стрижці бороди та чоловічому грумінгу.",
      p3: "Професійна реконструкція зміцнює пасма й повертає здорове, природне сяйво. Подбаємо про ваш стиль і додамо свіжість, яка підкреслить вашу індивідуальність.",
      name: "Anna Freedom",
      role: "Барберка & Перукарка",
      badge1: "218+ відгуків",
      badge2: "4,9 / 5",
      badge3: "Парковка",
    },
    services: {
      eyebrow: "Прайс",
      title: "Послуги саме для вас",
      sub: "Прозорі ціни. Професійний результат. Запис за кілька кліків.",
      book: "Запис",
      from: "від",
      free: "Безкоштовно",
      tabs: {
        barber: "Барбер",
        women: "Перукар",
        color: "Кольорування",
        care: "Догляд",
      },
      note: "Ціни з «+» залежать від довжини та стану волосся. Точну вартість узгодимо на консультації.",
    },
    portfolio: {
      eyebrow: "Роботи",
      title: "Портфоліо",
      sub: "Реальні результати — fade, колорування та точні стрижки.",
      open: "Збільшити",
    },
    reviews: {
      eyebrow: "Відгуки клієнтів",
      title: "Довіра, яку видно",
      sub: "Оцінка 4,9 на основі 218 відгуків на Booksy.",
      verified: "Підтверджений клієнт",
      ratingLabel: "середня оцінка",
      countLabel: "відгуків",
      viewAll: "Більше відгуків на Booksy",
    },
    cta: {
      title: "Готові до змін?",
      sub: "Забронюйте візит онлайн у зручний час — швидко, зручно і без дзвінків.",
      button: "Записатися на Booksy",
    },
    contact: {
      eyebrow: "Контакти",
      title: "Завітайте до нас у Познані",
      addressLabel: "Адреса",
      address: "osiedle Stare Żegrze 142",
      city: "61-249 Poznań, Nowe Miasto",
      phoneLabel: "Телефон",
      emailLabel: "E-mail",
      hoursLabel: "Години роботи",
      socialLabel: "Соцмережі",
      mapLabel: "Дивитись на карті",
      days: {
        mon: "Понеділок",
        tue: "Вівторок",
        wed: "Середа",
        thu: "Четвер",
        fri: "П’ятниця",
        sat: "Субота",
        sun: "Неділя",
      },
      closed: "Зачинено",
    },
    footer: {
      rights: "Усі права захищено.",
      book: "Записатися",
    },
    legal: {
      backHome: "Повернутися на головну",
      privacyLink: "Політика конфіденційності та cookies",
      regulationsLink: "Правила салону",
      officialNote: "Офіційна версія документа — польською мовою.",
      notFoundTitle: "Сторінку не знайдено",
      notFoundBody:
        "Сторінки, яку ви шукаєте, не існує або її перенесено. Поверніться на головну, щоб переглянути послуги та записатися.",
    },
  },

  en: {
    meta: {
      title: "FREEDOM Barber & Fryzjer | Poznań",
      description:
        "Premium barber and hair salon in Poznań. Fades, Airtouch coloring, total blond, men's and women's cuts. Book online.",
    },
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      reviews: "Reviews",
      contact: "Contact",
      book: "Book now",
    },
    a11y: {
      skip: "Skip to content",
      menu: "Menu",
      mainNav: "Main navigation",
      language: "Language",
      close: "Close",
      openGallery: "Enlarged photo preview",
      serviceCategories: "Service categories",
      call: "Call",
      quickActions: "Quick actions",
    },
    hero: {
      brand: "FREEDOM",
      tagline: "Barber & Fryzjer",
      headline: "Your style. Your freedom.",
      sub: "Precise cuts, premium color, and care — in an atmosphere that feels calm, confident, and elevated.",
      cta: "Book appointment",
      secondary: "View portfolio",
      rating: "4.9 · 218 reviews",
      location: "Poznań · Stare Żegrze",
    },
    about: {
      eyebrow: "About the salon",
      title: "Where your style takes center stage",
      p1: "FREEDOM Barber & Fryzjer is a place where your hair and style are fully in focus. Whether you want a classic cut, a color refresh, or hair reconstruction — we support you at every step.",
      p2: "We approach coloring techniques like Airtouch, total blond, and toning with passion, creating a look tailored to your style. We also specialize in beard trimming and men's grooming.",
      p3: "Professional hair reconstruction strengthens strands and restores a healthy, natural shine. We'll take care of your style and bring a refresh that expresses your personality.",
      name: "Anna Freedom",
      role: "Barber & Hair Stylist",
      badge1: "218+ reviews",
      badge2: "4.9 / 5",
      badge3: "Parking",
    },
    services: {
      eyebrow: "Pricing",
      title: "Services tailored to you",
      sub: "Clear prices. Professional results. Booking in a few clicks.",
      book: "Book",
      from: "from",
      free: "Free",
      tabs: {
        barber: "Barber",
        women: "Haircut",
        color: "Color",
        care: "Care",
      },
      note: "Prices marked “+” depend on hair length and condition. Final pricing is confirmed during consultation.",
    },
    portfolio: {
      eyebrow: "Work",
      title: "Portfolio",
      sub: "Real results — fades, coloring, and precise cuts.",
      open: "Enlarge",
    },
    reviews: {
      eyebrow: "Client reviews",
      title: "Trust you can see",
      sub: "Rated 4.9 based on 218 Booksy reviews.",
      verified: "Verified client",
      ratingLabel: "average rating",
      countLabel: "reviews",
      viewAll: "See more reviews on Booksy",
    },
    cta: {
      title: "Ready for a refresh?",
      sub: "Book online at a time that suits you — fast, easy, no phone calls needed.",
      button: "Book on Booksy",
    },
    contact: {
      eyebrow: "Contact",
      title: "Visit us in Poznań",
      addressLabel: "Address",
      address: "osiedle Stare Żegrze 142",
      city: "61-249 Poznań, Nowe Miasto",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Opening hours",
      socialLabel: "Social media",
      mapLabel: "View on map",
      days: {
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday",
        sun: "Sunday",
      },
      closed: "Closed",
    },
    footer: {
      rights: "All rights reserved.",
      book: "Book now",
    },
    legal: {
      backHome: "Back to home page",
      privacyLink: "Privacy and cookie policy",
      regulationsLink: "Salon terms",
      officialNote: "The legally binding version of this document is the Polish text.",
      notFoundTitle: "Page not found",
      notFoundBody:
        "The page you are looking for does not exist or has been moved. Return to the home page to see our services and book a visit.",
    },
  },
} as const;

export type Dictionary = (typeof i18n)[Lang];

export const RATING = { value: 4.9, count: 218 } as const;

type ServiceItem = {
  name: LocalizedText;
  desc?: LocalizedText;
  price: string;
  duration: string;
  free?: boolean;
};

function svc(item: ServiceItem): ServiceItem {
  return item;
}

export const services = {
  barber: [
    svc({
      name: { pl: "Strzyżenie męskie Fade", uk: "Чоловіча стрижка Fade", en: "Men's Fade Haircut" },
      price: "70 zł",
      duration: "45 min",
    }),
    svc({
      name: {
        pl: "Strzyżenie maszynką (Bez Fade)",
        uk: "Стрижка машинкою (без Fade)",
        en: "Clipper Cut (No Fade)",
      },
      price: "60 zł",
      duration: "30 min",
    }),
    svc({
      name: { pl: "Strzyżenie nożyczkami", uk: "Стрижка ножицями", en: "Scissor Haircut" },
      price: "80 zł",
      duration: "45 min",
    }),
    svc({
      name: { pl: "Combo 1", uk: "Комбо 1", en: "Combo 1" },
      desc: { pl: "Cieniowanie brody + nadanie konturu", uk: "Тінь бороди + контур", en: "Beard shading + contour" },
      price: "100 zł",
      duration: "1 h",
    }),
    svc({
      name: { pl: "Combo 2", uk: "Комбо 2", en: "Combo 2" },
      desc: {
        pl: "Cieniowanie policzków + kontur + golenie do 0",
        uk: "Тінь щік + контур + гоління до 0",
        en: "Cheek shading + contour + zero shave",
      },
      price: "110 zł",
      duration: "1 h 30 min",
    }),
    svc({
      name: { pl: "Farbowanie brody", uk: "Фарбування бороди", en: "Beard Coloring" },
      price: "50 zł",
      duration: "30 min",
    }),
    svc({
      name: {
        pl: "Strzyżenie brody + kontur golarką",
        uk: "Стрижка бороди + контур машинкою",
        en: "Beard Trim + Razor Contour",
      },
      price: "50 zł",
      duration: "25 min",
    }),
  ],
  women: [
    svc({
      name: {
        pl: "Strzyżenie damskie krótkie",
        uk: "Жіноча стрижка — коротке волосся",
        en: "Women's Haircut — Short",
      },
      price: "70 zł+",
      duration: "45 min",
    }),
    svc({
      name: {
        pl: "Strzyżenie damskie średnie",
        uk: "Жіноча стрижка — середнє волосся",
        en: "Women's Haircut — Medium",
      },
      price: "80 zł+",
      duration: "1 h",
    }),
    svc({
      name: {
        pl: "Strzyżenie damskie długie",
        uk: "Жіноча стрижка — довге волосся",
        en: "Women's Haircut — Long",
      },
      price: "100 zł+",
      duration: "1 h",
    }),
    svc({
      name: { pl: "Strzyżenie grzywki", uk: "Стрижка чубчика", en: "Fringe Trim" },
      price: "20 zł",
      duration: "20 min",
    }),
    svc({
      name: { pl: "Trwała", uk: "Хімічна завивка", en: "Perm" },
      price: "200 zł",
      duration: "2 h",
    }),
  ],
  color: [
    svc({
      name: { pl: "Konsultacja do koloryzacji", uk: "Консультація перед фарбуванням", en: "Coloring Consultation" },
      price: "0 zł",
      duration: "15 min",
      free: true,
    }),
    svc({
      name: {
        pl: "Farbowanie odrostu — krótkie",
        uk: "Фарбування відростання — коротке",
        en: "Root Touch-up — Short",
      },
      price: "200 zł+",
      duration: "2 h",
    }),
    svc({
      name: {
        pl: "Farbowanie odrostu — średnie",
        uk: "Фарбування відростання — середнє",
        en: "Root Touch-up — Medium",
      },
      price: "250 zł+",
      duration: "2 h 30 min",
    }),
    svc({
      name: {
        pl: "Farbowanie odrostu — długie",
        uk: "Фарбування відростання — довге",
        en: "Root Touch-up — Long",
      },
      price: "300 zł+",
      duration: "3 h 30 min",
    }),
    svc({
      name: { pl: "Airtouch", uk: "Airtouch", en: "Airtouch" },
      price: "400 zł+",
      duration: "6 h",
    }),
    svc({
      name: {
        pl: "Balayage / Szatush / Pasemka",
        uk: "Балаяж / Шатуш / Мелірування",
        en: "Balayage / Shatush / Highlights",
      },
      price: "350 zł+",
      duration: "4 h",
    }),
    svc({
      name: { pl: "Contouring", uk: "Контурінг", en: "Contouring" },
      price: "250 zł+",
      duration: "3 h",
    }),
    svc({
      name: { pl: "Top zona", uk: "Топ-зона", en: "Top Zone" },
      price: "350 zł+",
      duration: "4 h",
    }),
    svc({
      name: { pl: "Tonowanie — krótkie", uk: "Тонування — коротке", en: "Toning — Short" },
      price: "110 zł+",
      duration: "1 h 30 min",
    }),
    svc({
      name: { pl: "Tonowanie — średnie", uk: "Тонування — середнє", en: "Toning — Medium" },
      price: "150 zł+",
      duration: "1 h 30 min",
    }),
    svc({
      name: { pl: "Tonowanie — długie", uk: "Тонування — довге", en: "Toning — Long" },
      price: "200 zł+",
      duration: "2 h",
    }),
    svc({
      name: {
        pl: "Farbowanie całości — krótkie",
        uk: "Повне фарбування — коротке",
        en: "Full Color — Short",
      },
      price: "200 zł",
      duration: "2 h",
    }),
    svc({
      name: {
        pl: "Farbowanie całości — średnie",
        uk: "Повне фарбування — середнє",
        en: "Full Color — Medium",
      },
      price: "280 zł",
      duration: "2 h",
    }),
    svc({
      name: {
        pl: "TOTAL BLOND + tonowanie + rekonstr.",
        uk: "TOTAL BLOND + тонування + реконструкція",
        en: "TOTAL BLOND + Toning + Reconstruction",
      },
      desc: {
        pl: "Konsultacja przed koloryzacją · pielęgnacja wliczona",
        uk: "Консультація перед фарбуванням · догляд включено",
        en: "Pre-color consultation · care included",
      },
      price: "350 zł+",
      duration: "5 h 30 min+",
    }),
  ],
  care: [
    svc({
      name: { pl: "Mycie głowy", uk: "Миття голови", en: "Hair Wash" },
      price: "10 zł",
      duration: "10 min",
    }),
    svc({
      name: { pl: "Peeling głowy", uk: "Пілінг голови", en: "Scalp Peeling" },
      price: "20 zł",
      duration: "10 min",
    }),
    svc({
      name: { pl: "Depilacja nosa i uszu", uk: "Депіляція носа та вух", en: "Nose & Ear Waxing" },
      price: "20 zł",
      duration: "10 min",
    }),
    svc({
      name: {
        pl: "Odbudowa włosów — średnie",
        uk: "Відновлення волосся — середнє",
        en: "Hair Reconstruction — Medium",
      },
      price: "150 zł",
      duration: "2 h",
    }),
    svc({
      name: {
        pl: "Odbudowa włosów — długie",
        uk: "Відновлення волосся — довге",
        en: "Hair Reconstruction — Long",
      },
      price: "200 zł",
      duration: "2 h 30 min",
    }),
  ],
} as const;

export type ServiceTab = keyof typeof services;

export const reviews = [
  {
    name: "Kyrylo",
    stars: 5,
    service: { pl: "Strzyżenie męskie Fade", uk: "Чоловіча стрижка Fade", en: "Men's Fade Haircut" },
    text: {
      pl: "Świetna fryzura, sympatyczny i profesjonalny fryzjer oraz przytulne studio. Jestem bardzo zadowolony z efektu.",
      uk: "Чудова зачіска, приємний і професійний перукар та затишне студіо. Дуже задоволений результатом.",
      en: "Great haircut, friendly and professional stylist, and a cozy studio. I'm very happy with the result.",
    },
  },
  {
    name: "Yevheniia",
    stars: 5,
    service: { pl: "Strzyżenie męskie Fade", uk: "Чоловіча стрижка Fade", en: "Men's Fade Haircut" },
    text: {
      pl: "Jesteśmy bardzo zadowoleni z tego salonu! Mąż od dawna strzyże się właśnie tutaj i za każdym razem jest zachwycony efektem. Anna to prawdziwa profesjonalistka.",
      uk: "Дуже задоволені цією перукарнею! Чоловік уже давно підстригається саме тут і щоразу залишається в захваті від результату. Перукар Анна — справжній професіонал.",
      en: "We're very happy with this salon! My husband has been getting his hair cut here for a long time and is delighted every time. Anna is a true professional.",
    },
  },
  {
    name: "Yurik",
    stars: 5,
    service: { pl: "Strzyżenie męskie Fade", uk: "Чоловіча стрижка Fade", en: "Men's Fade Haircut" },
    text: {
      pl: "Jak zawsze wszystko na najwyższym poziomie. Od razu widać, że to prawdziwy mistrz w swoim fachu! Od dawna korzystam z usług tego salonu.",
      uk: "Як завжди все на найвищому рівні. Одразу видно, що це справжній майстер своєї справи! Давно користуюсь послугами цього салону.",
      en: "As always, everything at the highest level. You can see right away she's a true master of her craft! I've been a client for a long time.",
    },
  },
  {
    name: "Елизавета",
    stars: 5,
    service: {
      pl: "Strzyżenie damskie krótkie",
      uk: "Жіноча стрижка — коротке волосся",
      en: "Women's Haircut — Short",
    },
    text: {
      pl: "Aniu, bardzo Ci dziękuję — to po prostu wspaniałe, emocje mnie rozpierają!",
      uk: "Анечко, дякую тобі величезне — це просто чудово, емоції переповнюють!",
      en: "Anna, thank you so much — it's simply magnificent, I'm overwhelmed with emotion!",
    },
  },
  {
    name: "Olga",
    stars: 5,
    service: {
      pl: "Strzyżenie damskie średnie",
      uk: "Жіноча стрижка — середнє волосся",
      en: "Women's Haircut — Medium",
    },
    text: {
      pl: "To już moja kolejna wizyta u pani Anny i po raz kolejny jestem zachwycona! To prawdziwa profesjonalistka, która doskonale zna się na swojej pracy.",
      uk: "Це вже мій черговий візит до пані Анни — і знову я в захваті! Справжня професіоналка, яка чудово знає свою справу.",
      en: "This is another visit with Anna and once again I'm delighted! A true professional who knows her craft perfectly.",
    },
  },
  {
    name: "Ania",
    stars: 5,
    service: { pl: "Strzyżenie nożyczkami", uk: "Стрижка ножицями", en: "Scissor Haircut" },
    text: {
      pl: "Jestem zadowolony. Pani Ania bardzo się stara, aby klient był usatysfakcjonowany.",
      uk: "Задоволений. Пані Анна дуже старається, щоб клієнт був задоволений.",
      en: "I'm satisfied. Anna really tries to make sure the client is happy.",
    },
  },
] as const;

export const hours = {
  mon: "09:00 – 20:30",
  tue: "08:00 – 20:30",
  wed: "11:00 – 20:30",
  thu: "11:00 – 20:30",
  fri: "08:00 – 20:30",
  sat: "08:00 – 20:15",
  sun: null,
};

export const links = {
  booksy:
    "https://booksy.com/pl-pl/266319_freedom-barber-fryzjer_fryzjer_15608_poznan",
  instagram: "https://www.instagram.com/freedom__anna/",
  facebook: "https://www.facebook.com/people/Anna-Freedom/100011637162515/",
  maps: "https://www.google.com/maps/search/?api=1&query=osiedle+Stare+%C5%BBegrze+142,+61-249+Pozna%C5%84",
  phone: "+48571488281",
  phoneDisplay: "571 488 281",
  email: "anna.kira85@ukr.net",
} as const;

export const portfolioImages = [
  "/assets/portfolio/work-02.jpg",
  "/assets/portfolio/work-04.jpg",
  "/assets/portfolio/work-05.jpg",
  "/assets/portfolio/work-07.jpg",
  "/assets/portfolio/work-08.jpg",
  "/assets/portfolio/work-09.jpg",
  "/assets/portfolio/work-10.jpg",
  "/assets/portfolio/work-11.jpg",
  "/assets/portfolio/work-14.jpg",
  "/assets/portfolio/work-16.jpg",
  "/assets/portfolio/work-18.jpg",
  "/assets/portfolio/work-20.jpg",
] as const;
