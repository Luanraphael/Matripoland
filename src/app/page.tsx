import Image from "next/image";
import type { ReactNode } from "react";
import { Check, ChevronsDown, Gift, Minus, Plus, ShieldCheck, TriangleAlert } from "lucide-react";

const IMG = "/mesaposta";
const CHECKOUT_URL = "https://pay.hotmart.com/A108348175G?checkoutMode=10";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const KIT = "Kit Duszpasterski dla Chrześcijańskich Małżeństw";

const HERO_BULLETS = [
  "Dostęp na zawsze",
  "Natychmiastowa dostawa e-mailem",
  "Bezwarunkowa 7-dniowa gwarancja",
];

const INCLUDES_TOP = [
  "300 Dynamik na spotkania i randki dla małżeństw",
  "Aktywność z przewodnikiem: Uczymy się żyć w małżeństwie",
  "128 Wyzwań dla par",
  "85 Pomysłów na przełamanie lodów na spotkania i wyjazdy małżeńskie",
  "52 Spotkania Małżeńskie Gotowe do Prowadzenia",
  "150 Materiałów do Druku na Spotkania Małżeńskie",
  "38 Pomysłów na Romantyczne Spotkania dla Chrześcijańskich Par",
  "55 Strategii dla Liderów Służby Małżeństwom",
  "Jak Przygotować Temat, Który Odmienia Związki",
  "List do Mojego Współmałżonka (szablony do personalizacji)",
  "30 Tematów Inteligentnych dla Rozwoju w Małżeńskich Relacjach",
  "Przewodnik: Jak Organizować Spotkania z Celem",
];

const INCLUDES_BOTTOM = [
  "Szablony do druku i edycji na Twoje spotkania",
  "Materiały gotowe do użycia w formacie PDF i cyfrowym",
  "Natychmiastowy dostęp, bezpieczne pobieranie i nieograniczone użytkowanie",
];

const TRUST_BADGES = [
  { label: "7 dni gwarancji", icon: null },
  { label: "Natychmiastowy dostęp", icon: "icone-acesso.png" },
  { label: "Dedykowane wsparcie", icon: "icone-suporte.png" },
  { label: "Gwarancja satysfakcji", icon: "icone-satisfacao.png" },
  { label: "100% bezpieczny zakup", icon: "icone-compra-segura.png" },
];

// O 1º card mostra o título antes da imagem; os demais, a imagem antes do título.
const DELIVERABLES = [
  { title: "128 Wyzwań dla par", img: "128-wyzwan.webp", w: 1294, h: 1194, titleFirst: true },
  { title: "38 Pomysłów na Romantyczne Spotkania dla Chrześcijańskich Par", img: "38-pomyslow.webp", w: 1256, h: 1159 },
  { title: "55 Strategii dla Liderów Służby Małżeństwom", img: "55-strategii.webp", w: 1194, h: 1143 },
  { title: "300 Dynamik na spotkania i randki dla małżeństw", img: "300-dynamik.webp", w: 1105, h: 1124 },
  { title: "52 Spotkania Małżeńskie Gotowe do Prowadzenia", img: "52-spotkania.webp", w: 1201, h: 1127 },
];

const BONUSES = [
  { title: "85 Pomysłów na przełamanie lodów na spotkania i wyjazdy małżeńskie", img: "bonus-85-pomyslow.webp", w: 1065, h: 1122, price: "Wartość 29,90 €" },
  { title: "Spersonalizowane Listy do Mojego Współmałżonka", img: "bonus-listy.webp", w: 1280, h: 1095, price: "Wartość 37,90 €" },
  { title: "30 Tematów Inteligentnych dla Rozwoju w Małżeńskich Relacjach", img: "bonus-30-tematow.webp", w: 1149, h: 1073, price: "Wartość 37,90 €" },
  { title: "Jak Przygotować Temat, Który Odmienia Związki", img: "bonus-jak-przygotowac.webp", w: 1267, h: 1062, price: "Wartość 29,90 €" },
  { title: "150 Materiałów do Druku na Spotkania Małżeńskie", img: "bonus-150-materialow.webp", w: 1300, h: 1147, price: "Wartość 37,90 €" },
];

const FEATURES = [
  {
    img: "icone-imprime.jpg",
    title: "Łatwy wydruk",
    text: "Pobierz i wydrukuj wszystkie materiały w domu, w kościele lub gdziekolwiek chcesz. Przygotowane w wysokiej jakości, aby każda strona odzwierciedlała miłość i troskę, które wkładasz w swoją służbę.",
  },
  {
    img: "icone-acceso-seguro.png",
    title: "Bezpieczny i natychmiastowy dostęp",
    text: "Gdy tylko Twoje zamówienie zostanie przetworzone, otrzymasz e-mailem bezpośredni link do pobrania całego kitu. Od razu uzyskasz dostęp do wszystkich materiałów.",
  },
  {
    img: "icone-download.png",
    title: "Zapisuj i organizuj bez komplikacji",
    text: "Materiały są uporządkowane w folderach według kategorii. Pobierz je, zapisz, gdzie chcesz, i miej swoje zasoby do służby zawsze pod ręką.",
  },
];

const WHY = [
  "Każda dynamika, wyzwanie i przewodnik zostały stworzone, aby zbliżyć małżonków emocjonalnie i duchowo, wspierając wzrost i pojednanie.",
  "Cała treść jest uporządkowana, gotowa do użycia i zaprojektowana tak, by prowadzić Cię krok po kroku przez każdą aktywność.",
  "Komunikacja, przebaczenie, wiara, wierność i cel: każdy materiał zachęca do refleksji i praktycznego stosowania zasad biblijnych.",
  "Stworzone, by inspirować, poruszać i utrzymywać uwagę każdej pary przez całe spotkanie.",
  "Każdy materiał pomaga budować rodziny skupione na Chrystusie, pełne miłości i wiecznego celu.",
];

const FOR_WHOM = [
  "Dla kościołów, które chcą wzmocnić swoją służbę małżeństwom.",
  "Dla liderów i pastorów, którzy chcą służyć skutecznymi narzędziami.",
  "Dla osób prowadzących służbę rodzinom i małżeństwom.",
  "Dla par, które pragną służyć razem.",
  "Dla każdego, kto marzy o odbudowie i umacnianiu rodzin w wierze.",
];

const OFFER_ITEMS = [
  "Wszystkie materiały do druku i edycji.",
  "300 Dynamik na spotkania i randki dla małżeństw",
  "Aktywność z przewodnikiem: Uczymy się żyć w małżeństwie",
  "128 Wyzwań dla par",
  "85 Pomysłów na przełamanie lodów na spotkania i wyjazdy małżeńskie",
  "52 Spotkania Małżeńskie Gotowe do Prowadzenia",
  "150 Materiałów do Druku na Spotkania Małżeńskie",
  "38 Pomysłów na Romantyczne Spotkania dla Chrześcijańskich Par",
  "55 Strategii dla Liderów Służby Małżeństwom",
  "Jak Przygotować Temat, Który Odmienia Związki",
  "List do Mojego Współmałżonka (szablony do personalizacji)",
  "30 Tematów Inteligentnych dla Rozwoju w Małżeńskich Relacjach",
  "Przewodnik: Jak Organizować Spotkania z Celem",
  "Materiały gotowe do użycia w formacie PDF i cyfrowym",
  "Natychmiastowy dostęp, bezpieczne pobieranie i nieograniczone użytkowanie",
  "Dostęp na zawsze",
  "Natychmiastowa dostawa e-mailem",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "Jak otrzymam dostęp do Kitu?",
    a: (
      <>
        Gdy tylko płatność zostanie potwierdzona, <strong>automatycznie otrzymasz wszystkie materiały</strong> na swój
        adres e-mail.
        <br />
        Nie musisz wysyłać potwierdzeń ani wykonywać dodatkowych kroków: nasz system wysyła wszystko{" "}
        <strong>natychmiast i bezpiecznie</strong>.
        <br />
        Upewnij się tylko, że podczas zakupu poprawnie wpiszesz swój adres e-mail.
      </>
    ),
  },
  {
    q: "Czy materiał jest fizyczny czy cyfrowy?",
    a: (
      <>
        <strong>Materiał jest w pełni cyfrowy</strong>, ale <strong>gotowy do druku</strong> na dowolnej drukarce – w
        domu, w kościele lub w punkcie ksero.
        <br />
        Każdy plik jest w wysokiej jakości, uporządkowany w folderach i przygotowany tak, abyś mógł{" "}
        <strong>drukować tylko to, czego potrzebujesz</strong>, w praktyczny i ekonomiczny sposób.
      </>
    ),
  },
  {
    q: "Czy mam gwarancję?",
    a: (
      <>
        Tak, oczywiście! 💛
        <br />
        Oferujemy <strong>bezwarunkową 7-dniową gwarancję</strong>.
        <br />
        Oznacza to, że możesz uzyskać dostęp do materiałów, spokojnie je przejrzeć i jeśli z jakiegokolwiek powodu nie
        spełnią Twoich oczekiwań, poprosić o pełny zwrot pieniędzy. Bez komplikacji i bez pytań.
        <br />
        Chcemy, abyś mógł kupować w pełnym spokoju.
      </>
    ),
  },
  {
    q: "Czy otrzymam wsparcie, jeśli będę mieć pytania?",
    a: (
      <>
        Oczywiście!
        <br />
        Nasz zespół oferuje <strong>indywidualne wsparcie</strong> przez Instagram.
        <br />
        Jeśli masz pytania lub potrzebujesz pomocy z materiałami, napisz bezpośrednio do{" "}
        <strong>@laura.viscondi</strong>. Zawsze odpowiadamy z troską, pomagając każdemu bratu i siostrze w wierze,
        którzy są częścią tej społeczności.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

/** Sezione blu: equivale alle sezioni colorate della pagina originale. */
function BlueSlab({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`clay-red-slab relative w-full overflow-hidden py-14 text-white ${className}`}>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Sezione chiara: equivale alle sezioni bianche della pagina originale. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Evidenziazione dorata sul blu. */
function Mark({ children }: { children: ReactNode }) {
  return <span className="text-gold">{children}</span>;
}

function SoftMark({ children }: { children: ReactNode }) {
  return <span className="text-gold font-bold">{children}</span>;
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onBlue = false, className = "" }: { items: string[]; onBlue?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span className={`pt-0.5 text-base font-medium leading-relaxed ${onBlue ? "text-white" : "text-ink"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-16 w-full items-center justify-center rounded-[20px] px-6 py-3 text-center text-base font-black tracking-wide sm:text-lg sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "white" }) {
  const toneClass =
    tone === "blue"
      ? "bg-gradient-to-br from-[#1e5a9e] to-[#0d2f57] text-white"
      : "bg-gradient-to-br from-white to-[#e3ecf8] text-love-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionTitle({ children, onBlue = false, className = "" }: { children: ReactNode; onBlue?: boolean; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        onBlue ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Pagina                                                              */
/* ------------------------------------------------------------------ */

export default function MatrimoniPlPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Luce ambiente del canvas */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-[#0d2f57]/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[#1e5a9e]/10 blur-3xl" />
      </div>

      {/* Barra promozionale fissa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} clay-topbar flex h-11 w-full items-center justify-center gap-1.5 px-4 text-center text-[15px] font-extrabold tracking-wide text-white`}
        >
          Zniżka tylko
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-love-600 underline underline-offset-2">
            DZIŚ
          </span>
          na tej stronie!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO */}
        <BlueSlab className="pt-8! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} px-2 text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl`}>
              Bądź liderem, który <Mark>porusza serca</Mark> i umacnia małżeństwa <Mark>miłością i celem.</Mark>
            </h1>

            <Image
              src={`${IMG}/kit-completo-pl.webp`}
              alt={KIT}
              width={1400}
              height={1039}
              priority
              className="mx-auto mt-7 w-full"
            />

            <p className="mt-7 text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Poznaj <SoftMark>{KIT}</SoftMark> – kompletną kolekcję ponad{" "}
              <strong className="font-extrabold">840 materiałów</strong> gotowych do użycia:{" "}
              <SoftMark>dynamiki, wyzwania, przewodniki, listy, romantyczne pomysły i praktyczne zasoby</SoftMark>,
              stworzone, by inspirować, umacniać i jednoczyć pary w duchowym celu.
            </p>

            <CheckList items={HERO_BULLETS} onBlue className="mt-8 w-full text-left" />

            <CtaButton href="#offerta" className="mt-10">
              CHCĘ OTRZYMAĆ MATERIAŁY
            </CtaButton>
          </Container>
        </BlueSlab>

        {/* 2 · Cosa include */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
              Co zawiera <span className="text-love-500">{KIT}</span>?
            </h2>

            <CheckList items={INCLUDES_TOP} className="mt-10" />

            <Image
              src={`${IMG}/kit-completo-pl.webp`}
              alt={`Materiały – ${KIT}`}
              width={1400}
              height={1039}
              className="mt-8 w-full"
            />

            <CheckList items={INCLUDES_BOTTOM} className="mt-10" />
          </Container>
        </LightSection>

        {/* 3 · Sigilli di fiducia */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · Avrai accesso a + 5 · Date + 6 · Bonus */}
        <BlueSlab id="contenuto">
          <Container>
            <SectionTitle onBlue>
              Kupując <Mark>{KIT}</Mark>, otrzymasz dostęp do:
            </SectionTitle>

            <div className="mt-10 flex flex-col gap-8">
              {DELIVERABLES.map((d) => {
                const title = (
                  <h3 className={`${display} px-2 text-center text-2xl font-extrabold leading-tight text-white`}>{d.title}</h3>
                );
                return (
                  <article key={d.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 sm:p-8">
                    {d.titleFirst && title}
                    <Image src={`${IMG}/${d.img}`} alt={d.title} width={d.w} height={d.h} className="w-full" />
                    {!d.titleFirst && title}
                  </article>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offerta">CHCĘ OTRZYMAĆ MATERIAŁY</CtaButton>
            </div>
          </Container>

          {/* 5 · Date */}
          <Container className="mt-16">
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                KUPUJĄC <Mark>4, 5 I 6 LISTOPADA</Mark> OTRZYMUJESZ TAKŻE
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bonus */}
          <Container className="mt-16">
            <SectionTitle onBlue>
              <Mark>EKSKLUZYWNE BONUSY</Mark>, które dopełnią Twoje spotkania
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb tone="white">
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-white/95">
              Kupując teraz, zyskujesz nie tylko główne materiały: otrzymujesz także{" "}
              <SoftMark>ekskluzywne bonusy</SoftMark>, które jeszcze bardziej wzbogacą spotkania małżeńskie i wzmocnią
              Twoją służbę wyjątkowymi, praktycznymi narzędziami pełnymi duchowego celu.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bonus: layout proprio (titolo → immagine → sottotitolo → descrizione) */}
              <article className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-white`}>
                  Aktywność z przewodnikiem: Uczymy się żyć w małżeństwie
                </h3>
                <Image
                  src={`${IMG}/aktywnosc-malzenstwo.webp`}
                  alt="Aktywność z przewodnikiem: Uczymy się żyć w małżeństwie"
                  width={1252}
                  height={1024}
                  className="w-full"
                />
                <h4 className={`${display} text-xl font-extrabold text-white`}>Aktywność do przeprowadzenia z parami:</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">
                  Pogłębiona dynamika z przewodnikiem o małżeństwie, stworzona, aby pomóc każdej parze zrozumieć
                  prawdziwe znaczenie życia w małżeństwie, wzmocnić jedność, uzgodnić oczekiwania i wspólnie przejść
                  drogę wzrostu i dojrzałości, budując zdrową, trwałą i pełną celu relację.
                </p>
                <BonusPrice price="Wartość 49,90 €" />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image src={`${IMG}/${b.img}`} alt={b.title} width={b.w} height={b.h} className="mx-auto w-full" />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offerta">CHCĘ OTRZYMAĆ MATERIAŁY</CtaButton>
            </div>
          </Container>
        </BlueSlab>

        {/* 7 · Risorse pratiche */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              Razem przemieniamy służby!
            </h2>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="mx-auto mt-12 flex max-w-[480px] flex-col gap-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="clay-card flex flex-col items-center gap-4 rounded-[32px] p-8 text-center">
                  <Image
                    src={`${IMG}/${f.img}`}
                    alt=""
                    width={512}
                    height={512}
                    className="h-32 w-32 object-contain mix-blend-multiply"
                  />
                  <h3 className={`${display} text-2xl font-extrabold leading-tight text-ink`}>{f.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 8 · Perché + Per chi */}
        <BlueSlab>
          <Container>
            <SectionTitle onBlue>
              Dlaczego <Mark>{KIT}</Mark> odmieni Twoją służbę?
            </SectionTitle>

            <Image
              src={`${IMG}/kit-completo-pl.webp`}
              alt={`Materiały – ${KIT}`}
              width={1400}
              height={1039}
              className="mt-8 w-full"
            />

            <div className="clay-red-card mt-8 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onBlue />
            </div>

            <SectionTitle onBlue className="mt-14">
              Dla kogo te materiały są niezbędne?
            </SectionTitle>

            <div className="clay-red-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onBlue />
            </div>
          </Container>
        </BlueSlab>

        {/* 9 · Offerta */}
        <LightSection id="offerta" className="scroll-mt-20">
          <Container>
            <SectionTitle>MAMY DLA CIEBIE COŚ WYJĄTKOWEGO</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="relative mt-14">
              {/* Sigillo "Il più venduto" sopra il card */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <span
                  className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-[#e3ecf8] px-5 py-2.5 text-sm font-black tracking-wide text-love-600`}
                >
                  🌟 Bestseller
                </span>
              </div>

              <div className="clay-red-slab relative overflow-hidden rounded-[48px] px-5 pb-10 pt-14 text-white sm:px-10">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl`}>
                    {KIT}
                    <br />
                    <Mark>PREMIUM</Mark>
                  </h3>

                  <Image
                    src={`${IMG}/kit-completo-pl.webp`}
                    alt={KIT}
                    width={1400}
                    height={1039}
                    className="mt-8 w-full"
                  />

                  <div className="mt-8 w-full text-left">
                    <ul className="flex flex-col gap-3">
                      {OFFER_ITEMS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckOrb size="sm" />
                          <span className="pt-0.5 text-[15px] font-bold leading-snug text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>
                    ZAMIAST 127,00 €
                  </p>
                  <p className={`${display} mt-1 text-2xl font-black tracking-wide`}>TYLKO DZIŚ</p>
                  <p className={`${display} mt-1 text-8xl font-black leading-none tracking-tight`}>14,90 €</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-love-600 shadow-[var(--shadow-clay-orb)]">
                    <TriangleAlert className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.75} />
                    Możesz zapłacić w swojej lokalnej walucie.
                  </p>
                  <p className="mt-6 text-sm font-bold text-white/90">Płatność jednorazowa</p>

                  <CtaButton href={CHECKOUT_URL} className="mt-6 sm:min-w-[320px]">
                    Kup teraz
                  </CtaButton>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">100% bezpieczna płatność</p>
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 10 · Garanzia */}
        <BlueSlab>
          <Container>
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <span className="clay-orb inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-white to-[#e3ecf8] text-love-600">
                <ShieldCheck className="h-16 w-16" strokeWidth={2.25} />
              </span>
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl`}>7 DNI GWARANCJI</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Możesz kupować z pełnym spokojem. Po potwierdzeniu zakupu masz 7 dni, aby uzyskać dostęp do materiałów
                i dokładnie je poznać: jeśli nie spełnią Twoich oczekiwań, możesz poprosić o pełny zwrot pieniędzy, bez
                komplikacji.
              </p>
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Kup teraz
              </CtaButton>
            </div>
          </Container>
        </BlueSlab>

        {/* 11 · Chi siamo + FAQ */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              Kim jesteśmy?
            </h2>

            <div className="mt-10 flex justify-center">
              <Image
                src={`${IMG}/logo-ministerio-academy.png`}
                alt="Ministerio.Academy"
                width={1024}
                height={1024}
                className="h-[180px] w-[180px] rounded-full shadow-[0_10px_24px_rgba(20,40,80,0.18)]"
              />
            </div>

            <div className="clay-card mt-12 rounded-[32px] p-6 text-base font-medium leading-relaxed text-muted sm:p-8 sm:text-lg [&_strong]:font-bold [&_strong]:text-ink">
              Pokój Pański! 💗
              <br />
              <br />
              <strong>Ministerio.Academy powstało w 2020 roku, w środku pandemii</strong>, kiedy postanowiliśmy, że nasza
              służba nie może się zatrzymać.
              <br />
              <br />
              W czasie, gdy wiele spotkań nie mogło odbywać się na żywo, zaczęliśmy tworzyć{" "}
              <strong>małe zestawy, dynamiki i materiały do służby</strong>, aby nasze spotkania pozostały żywe,
              wyjątkowe i pełne celu.
              <br />
              <br />
              Najpierw przygotowaliśmy materiały dla naszej służby kobiet… potem dla młodzieży, małżeństw i mężczyzn.
              Dzieliliśmy się dynamikami w grupach, na spotkaniach i w grupach domowych, i stopniowo zaczęliśmy otrzymywać{" "}
              <strong>wiadomości, świadectwa i pochwały od liderów</strong>, którzy chcieli używać tych materiałów także
              w swoich kościołach.
              <br />
              <br />
              Wtedy zrozumieliśmy, że{" "}
              <strong>
                Bóg powołuje nas do pomagania nie tylko naszej lokalnej służbie, ale także innym służbom na całym
                świecie
              </strong>{" "}
              🌎✨
              <br />
              <br />
              Od tamtej pory <strong>Ministerio.Academy pomogło tysiącom chrześcijańskich liderów</strong> przemieniać
              zwykłe spotkania w bardziej przyjazne, kreatywne, poruszające i duchowo znaczące doświadczenia.
              <br />
              <br />
              Wierzymy, że{" "}
              <strong>każde spotkanie może stać się chwilą, która porusza serca i przybliża ludzi do Boga.</strong>
              <br />
              <br />
              Dlatego dziś dzielimy się <strong>pomysłami, dynamikami, narzędziami, zasobami i zestawami do służby</strong>
              , stworzonymi, by w praktyczny, piękny i znaczący sposób wzmacniać grupy domowe, spotkania i chrześcijańskie
              zgromadzenia.
              <br />
              <br />
              Wierzymy też, że Bóg przemawia w małych szczegółach: w dobrze przemyślanej dynamice, w szczerej rozmowie, w
              miejscu przygotowanym z miłością i w każdej chwili, która pomaga człowiekowi poczuć się wysłuchanym,
              przyjętym i bliżej Jego obecności ✨
              <br />
              <br />
              <strong>
                Dowiedz się więcej na Instagramie:{" "}
                <a
                  href="https://www.instagram.com/ministerio.academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-love-500 underline-offset-4 hover:underline"
                >
                  @ministerio.academy
                </a>
              </strong>
              <br />
              <br />
              Witamy! ❤️
            </div>

            <div className="mt-10 flex justify-center">
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Kup teraz
              </CtaButton>
            </div>

            {/* FAQ */}
            <div className="mt-20 text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide text-ink sm:text-3xl`}>NAJCZĘŚCIEJ ZADAWANE PYTANIA</h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1e5a9e] to-[#0d2f57] text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 12 · Footer */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Polityka prywatności
            </a>
            <span className="text-muted">|</span>
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Regulamin
            </a>
          </div>
          <p className="mt-4 text-muted">© 2026 Wszelkie prawa zastrzeżone.</p>
        </footer>
      </main>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#e3ecf8] text-love-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        GRATIS
      </span>
    </div>
  );
}
