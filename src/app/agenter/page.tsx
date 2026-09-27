import Link from "next/link";
import { Container } from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "För agentbyråer — Lightsout",
  description:
    "Lightsout är specialisten som tar hand om allt det viktiga utöver kontraktet — mentalt, ekonomiskt, transition. Så att era spelare behåller er som agent hela vägen.",
};

export default function AgenterPage() {
  return (
    <>
      {/* Hero — affärsproposition */}
      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-3 py-1 text-xs font-medium text-foreground-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              För representanter som tar långsiktigt ansvar
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Ni har ansvar för era spelare.
              <br />
              <span className="text-accent-navy">Vi ser till att ni kan bära det hela vägen.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground-muted sm:text-xl">
              Ni signerar kontrakt, planerar transfers, förhandlar villkor. Men ansvaret för era spelare slutar inte vid slutsignalen. Lightsout är specialisten som hjälper er att hålla ihop helheten — mentalt, ekonomiskt och genom transitionen efter karriären.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/boka-samtal"
                className="inline-flex items-center justify-center rounded-full bg-accent-navy px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-5px_rgba(10,31,77,0.45)] transition-all hover:-translate-y-0.5 hover:bg-accent-navy-strong hover:shadow-[0_18px_45px_-5px_rgba(10,31,77,0.55)]"
              >
                Boka partnerskapssamtal
                <span className="ml-2 -mr-1">→</span>
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-background-elevated"
              >
                Se spelarsidan
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem — agentens perspektiv */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-warning">
                Det större uppdraget
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Karriären är 10–15 år.<br />Ert ansvar räcker längre.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-foreground-muted">
              <p>
                Era spelare anförtror er sin karriär. För många byråer slutar uppdraget vid slutsignalen — men det egentliga ansvaret räcker betydligt längre.
              </p>
              <p className="text-foreground">
                Många tidigare proffsidrottare hamnar i ekonomiska problem efter karriären. Det är inte en uppgift en enskild representant kan lösa ensam — men det är ett ansvar de bästa tar.
              </p>
              <p>
                Lightsout är resursen som gör det åt er. För era spelare. Hela vägen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Komplementär erfarenhet */}
      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Komplementär erfarenhet
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Ni känner toppligorna inifrån.<br />Vi känner livet efter dem.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-foreground-muted">
              <p>
                Era spelare har en representant med egen erfarenhet från världens bästa ligor. Det är ovärderligt för karriärens viktiga beslut.
              </p>
              <p className="text-foreground">
                Lightsout finns för det som kommer efter: livet bortom planen. Ekonomi som ska räcka i decennier. Identitet utan rampljuset. Familjen och kommande generationer.
              </p>
              <p>
                Tillsammans täcker vi hela spelarens resa — från första kontraktet till sista kapitlet.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vad vi täcker */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Vad vi gör för era spelare
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Vi håller ihop helheten åt era spelare.
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr] divide-y sm:divide-x sm:divide-y-0 divide-border">
              <div className="bg-accent-navy p-6 text-white">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Vad vi gör
                </p>
              </div>
              <div className="bg-background-card p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                  Vad det betyder för er
                </p>
              </div>
            </div>
            {COVERAGE.map((row, i) => (
              <div
                key={row.we}
                className={`grid grid-cols-1 sm:grid-cols-[1fr_1fr] divide-y sm:divide-x sm:divide-y-0 divide-border border-t border-border`}
              >
                <div className="bg-background-card p-6">
                  <h3 className="text-lg font-semibold tracking-tight">{row.we}</h3>
                  <p className="mt-1 text-sm text-foreground-muted">{row.weBody}</p>
                </div>
                <div className="bg-background-elevated p-6">
                  <p className="text-sm leading-relaxed text-foreground-muted">
                    {row.theyAvoid}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Varför det är bra för byrån */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              När ni tar fullt ansvar
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Nöjdare spelare. Långsiktiga relationer. Starkare varumärke.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {AGENCY_BENEFITS.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border bg-background-card p-7"
              >
                <p className="font-serif text-3xl font-semibold text-accent-navy">
                  {b.figure}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Oberoende-löftet */}
      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Vårt löfte till er
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Vi konkurrerar inte med er.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-foreground-muted">
              <p>
                Vi förhandlar inga kontrakt. Vi söker inga klubbar. Vi tar inte över relationen. Vår tjänst börjar där er expertis slutar — och vi har inget intresse av att gå över den linjen.
              </p>
              <p className="text-foreground">
                Spelaren har en relation till er och en separat till oss. Vi respekterar er roll, era beslut och era gränser.
              </p>
              <p>
                Vår expertis är livet bortom planen. Där håller vi oss — alltid.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Tre modeller */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-20 sm:py-28">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Så fungerar partnerskapet
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Tre nivåer av samarbete — välj det som passar.
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {PARTNERSHIP_MODELS.map((m, i) => (
              <div
                key={m.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  m.featured
                    ? "border-accent-navy bg-accent-navy text-white"
                    : "border-border bg-background-card"
                }`}
              >
                <p
                  className={`font-mono text-xs uppercase tracking-widest ${
                    m.featured ? "text-accent" : "text-foreground-subtle"
                  }`}
                >
                  Modell {i + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {m.name}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    m.featured ? "text-white/80" : "text-foreground-muted"
                  }`}
                >
                  {m.body}
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-2.5 text-sm ${
                    m.featured ? "text-white/80" : "text-foreground-muted"
                  }`}
                >
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
                      <span
                        className={`mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full ${
                          m.featured ? "bg-accent" : "bg-accent-navy"
                        }`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {m.featured && (
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-navy self-start">
                    Rekommenderas för start
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                Vanliga frågor
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Det ni undrar.
              </h2>
            </div>
            <dl className="divide-y divide-border border-y border-border">
              {FAQ.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="text-base font-semibold tracking-tight">
                    {f.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground-muted">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Slutgiltig CTA */}
      <section>
        <Container className="py-24 sm:py-32">
          <div className="mx-auto max-w-3xl rounded-3xl border border-accent-navy bg-accent-navy p-12 text-center text-white sm:p-16">
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              30 minuter. Inga åtaganden.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
              Vi visar vad vi gör. Ni berättar om era spelare. Vi ser om det finns något att bygga ihop.
            </p>
            <Link
              href="/boka-samtal"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-navy shadow-[0_10px_30px_-5px_rgba(184,144,44,0.5)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_18px_45px_-5px_rgba(184,144,44,0.65)]"
            >
              Boka partnerskapssamtal
              <span className="ml-2 -mr-1">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

const COVERAGE = [
  {
    we: "Mentalt & identitet",
    weBody: "Idrottspsykologer, identitetsarbete, övergångscoaching.",
    theyAvoid:
      "Era spelare får specialiststöd från dag ett — ni kan fokusera på kontrakt och karriärrepresentation.",
  },
  {
    we: "Ekonomi & internationell skatt",
    weBody:
      "Vi bygger ett nätverk av skattespecialister med erfarenhet av utländska proffsligor, bildrättigheter och pension.",
    theyAvoid:
      "Era spelare får djup skattekompetens i varje land där de spelar — utan att ni bygger global expertis själva.",
  },
  {
    we: "Karriärcoaching",
    weBody:
      "Karriärcoaching, branschnätverk och planering av nästa kapitel.",
    theyAvoid:
      "Vi tar hand om livet efter karriären — ni fokuserar på att maximera den medan den pågår.",
  },
  {
    we: "Försäkring & risk",
    weBody:
      "Skadeförsäkring, inkomstskydd, kropp och familj. Noga utvalt.",
    theyAvoid:
      "En oberoende försäkringsöversyn för varje spelare — så ni slipper hantera försäkringar i varje kontraktsfas.",
  },
  {
    we: "Personligt varumärke",
    weBody:
      "Mediastrategi, sponsoravtal utöver klubb, kommersiell utveckling.",
    theyAvoid:
      "Strategiskt varumärkesarbete för spelare som vill bygga mer än bara matcher — vid sidan av era befintliga avtal.",
  },
];

const AGENCY_BENEFITS = [
  {
    figure: "↑",
    title: "Bättre retention",
    body: "Spelare som mår bra och är ekonomiskt trygga stannar längre med sin agent — och rekommenderar er till andra.",
  },
  {
    figure: "↓",
    title: "Starkare anseende",
    body: "Spelare som är ekonomiskt och mentalt trygga blir era ambassadörer långt efter karriären — inte rubriker som skadar branschens rykte.",
  },
  {
    figure: "∞",
    title: "Skalbar service",
    body: "Ni kan erbjuda premiumservice till alla era spelare utan att bygga psykolog-, skatte- eller övergångsteam internt.",
  },
  {
    figure: "⏱",
    title: "Tid sparas",
    body: "Era spelare ringer oss om saker som ligger utanför ert kärnerbjudande. Ni kan fokusera på kontrakt och förhandling.",
  },
  {
    figure: "✦",
    title: "Differentiering",
    body: "I marknadsföring mot nya talanger: ni är representanten som tar helheten på allvar — inte bara nästa kontrakt.",
  },
  {
    figure: "♛",
    title: "Generationsbygge",
    body: "Junior + Familj-paket säkrar att nästa generation talanger känner att ni stöttar dem hela vägen från start.",
  },
];

const PARTNERSHIP_MODELS = [
  {
    name: "Vi tar emot, ni introducerar",
    body: "Ni rekommenderar Lightsout till era spelare. Spelaren tar kontakt med oss direkt — och ni behåller hela relationen med er klient.",
    bullets: [
      "Inget formellt avtal mellan oss krävs",
      "Spelaren väljer själv om hen vill engagera oss",
      "Spelaren behåller relation till båda parter",
      "Vi rapporterar inte detaljer utan spelarens medgivande",
    ],
    featured: false,
  },
  {
    name: "Pilot med 2–3 av era spelare",
    body: "Sex månader. Full transparens med er. Vi utvärderar tillsammans i slutet.",
    bullets: [
      "Lägsta möjliga åtagande",
      "Ni väljer spelarna själva",
      "Veckorapportering till er under pilotperioden",
      "Beslut om fortsättning tas tillsammans",
    ],
    featured: true,
  },
  {
    name: "Volympartnerskap över tid",
    body: "När pilot funkar — fler spelare introduceras successivt. Strategisk allians med delade event.",
    bullets: [
      "Långsiktig strategisk allians",
      "Co-branded events och content",
      "Delad learnings-portfölj",
      "Skalbar utrullning till hela klientstocken",
    ],
    featured: false,
  },
];

const FAQ = [
  {
    q: "Hur tjänar Lightsout pengar?",
    a: "Ni betalar en månadsavgift. Den modellen är grunden för vårt oberoende.",
  },
  {
    q: "Tar ni över vår roll som representant?",
    a: "Nej. Vi förhandlar inga kontrakt, söker inga klubbar och hanterar inga transfers. Vår expertis börjar där er slutar — mentalt, ekonomiskt och i övergången från karriären.",
  },
  {
    q: "Vad händer om ni råder vår spelare till något vi inte gillar?",
    a: "Vi har en tydlig avgränsning: vi rör inte kontrakt, klubbval eller transferbeslut. Tjänsten är designad för att undvika konflikter — och i pilotfas formaliserar vi gärna avgränsningarna skriftligt med er.",
  },
  {
    q: "Är Lightsout reglerat av Finansinspektionen?",
    a: "Nej. Vi kartlägger vilka frågor som finns, hjälper spelaren prioritera och samordnar kontakten med licensierade specialister där reglerad rådgivning krävs. Vi säljer inga finansiella produkter och lämnar inga individuella rekommendationer om placeringar, försäkringar, skatt eller juridik. Sådan rådgivning ges av rätt licensierad part.",
  },
  {
    q: "Hur många spelare har ni idag?",
    a: "Vi är i pilotfas under 2026 och söker våra första 5–10 spelare tillsammans med rätt partners. Vi är transparenta om var vi står — det är hela poängen med att vi samtalar nu, innan vi växt.",
  },
  {
    q: "Vad krävs för att starta en pilot?",
    a: "Ett första samtal på 30 minuter. Sedan, om det känns rätt, väljer ni 2–3 spelare som ni tror skulle få mest värde. Sex månaders pilot — inget bindande utöver det, och ni kan avsluta när som helst.",
  },
];
