import Link from "next/link";
import { Container } from "@/components/Container";

export default function Home() {
  return (
    <>
      {/* Cinematic intro — match → lights out → tystnad */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative aspect-[21/9] w-full sm:aspect-[24/9] lg:aspect-[28/9]">
          {/* Cinematic hero-video — fotbollsplan som lever, sen släcks lamporna */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden
          >
            <source src="/lightsout-hero.mp4" type="video/mp4" />
          </video>

          {/* Subtil mörk vinjettering för bättre textläsbarhet */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-black/25" />

          {/* Mörk fade-out underst för smidig övergång till hero-text */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

          {/* Tagline-overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#e0bd6a] sm:text-xs"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              Lightsout
            </p>
            <p
              className="mt-3 max-w-2xl text-balance text-2xl font-semibold leading-tight tracking-tight text-[#e0bd6a] sm:text-3xl md:text-4xl lg:text-5xl"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.65)" }}
            >
              En karriär. En slutsignal.
              <br />
              Sen börjar resten av livet.
            </p>
          </div>
        </div>
      </section>

      {/* Hero — asymmetrisk, vänsterställd */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <Container className="relative pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-3 py-1 text-xs font-medium text-foreground-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                För elitidrottare · Fotboll · Ishockey · Tennis · Golf
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Mer än en karriär.
                <br />
                <span className="text-accent">Ett helt liv.</span>
              </h1>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/boka-samtal"
                  className="inline-flex items-center justify-center rounded-full bg-accent-navy px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-5px_rgba(10,31,77,0.45)] transition-all hover:-translate-y-0.5 hover:bg-accent-navy-strong hover:shadow-[0_18px_45px_-5px_rgba(10,31,77,0.55)]"
                >
                  Boka första samtalet
                  <span className="ml-2 -mr-1">→</span>
                </Link>
                <Link
                  href="/sa-funkar-lightsout"
                  className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-background-elevated"
                >
                  Så funkar Lightsout
                </Link>
              </div>
            </div>
            <div className="lg:pb-3">
              <p className="max-w-md text-lg leading-relaxed text-foreground-muted">
                Det viktigaste arbetet sker innan slutsignalen. <em className="not-italic font-medium text-foreground">Lightsout är ditt team för det — mentalt, ekonomiskt, praktiskt.</em>
              </p>
            </div>
          </div>
        </Container>

        {/* Logos / social proof strip */}
        <div className="border-t border-border bg-background-elevated/50">
          <Container className="py-6">
            <p className="text-center font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              För elitidrottare · Fotboll · Ishockey · Tennis · Golf
            </p>
          </Container>
        </div>
      </section>

      {/* Detta är Lightsout — kort definition */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <p className="mb-10 text-center font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Detta är Lightsout
            </p>
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              <div>
                <p className="font-serif text-3xl font-medium tracking-tight text-accent-navy sm:text-4xl">
                  En navigator.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Innan rampljuset släcks. Och långt efter.
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium tracking-tight text-accent-navy sm:text-4xl">
                  En plattform.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Placering, skatt och juridik — under ett tak.
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-medium tracking-tight text-accent-navy sm:text-4xl">
                  Helt oberoende.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                  Inga produkter att sälja. Bara din framtid att skydda.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pelare — bento grid */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-24 sm:py-32">
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Fem ben. En helhet.
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Mentalt, ekonomiskt, praktiskt — på ett ställe.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Stort kort — övergripande transition */}
            <Link
              href="/sa-funkar-lightsout"
              className="group rounded-3xl border border-border bg-background-card p-8 md:col-span-2 md:row-span-2 md:p-10 transition-all hover:border-accent-navy hover:shadow-lg"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-[#e0bd6a]">
                Hela övergången
              </div>
              <h3 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Den största matchen kommer efter slutsignalen.
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground-muted">
                Den dagen ljuset släcks är inte slutet. Det är starten på 50 år av liv som ska planeras lika omsorgsfullt som karriären. Lightsout är coachen för den matchen — mentalt, ekonomiskt och praktiskt — och vi börjar långt innan slutsignalen.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border">
                {[
                  ["50+", "år av liv efter karriär"],
                  ["1 av 3", "upplever psykisk ohälsa i karriären"],
                  ["10–15", "år är karriären"],
                ].map(([fig, label]) => (
                  <div key={label} className="bg-background-card p-5">
                    <p className="text-3xl font-semibold tracking-tight text-foreground">
                      {fig}
                    </p>
                    <p className="mt-1 text-xs text-foreground-muted">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Link>

            {PILLARS.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group flex flex-col rounded-3xl border border-border bg-background-card p-7 transition-all hover:border-accent-navy hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-accent-navy text-white transition-transform group-hover:scale-110">
                  <p.Icon />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {p.body}
                </p>
                <span className="mt-4 inline-flex items-center text-xs font-medium text-accent-navy opacity-0 transition-opacity group-hover:opacity-100">
                  Läs mer →
                </span>
              </Link>
            ))}

            {/* Wide Pension/Framtidssäkring — anchor card */}
            <Link
              href="/ben/ekonomi"
              className="group rounded-3xl border border-accent-navy bg-accent-navy p-8 text-white md:col-span-3 md:p-10 transition-all hover:bg-accent-navy-strong"
            >
              <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
                <div className="max-w-2xl">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    Hela poängen
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    En pelare räcker inte.
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    Ekonomi utan mental hälsa håller inte. Karriärplan utan försäkring vacklar. Ett varumärke utan juridisk grund kollapsar. Lightsout är alla fem benen — sammanhållna av en navigator som ser helheten.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {[
                    ["Mentalt", "identitet, coaching, motståndskraft"],
                    ["Karriär", "coaching och nästa kapitel"],
                    ["Ekonomi", "placering, skatt, pension"],
                    ["Försäkring", "risk, skada, familj"],
                    ["Varumärke", "media, sponsring, plattform"],
                  ].map(([title, body]) => (
                    <div
                      key={title}
                      className="flex items-baseline gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3"
                    >
                      <p className="text-sm font-semibold tracking-tight text-accent">
                        {title}
                      </p>
                      <p className="text-xs leading-tight text-white/60">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Differentiator */}
      <section className="border-b border-border">
        <Container className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Det som gör oss annorlunda
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                Du äger din ekonomi <span className="text-foreground-muted">—</span> vi tryggar den.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-foreground-muted">
                Lightsout är{" "}
                <em className="not-italic font-medium text-foreground">
                  ett ställe
                </em>
                . Här samlar vi allt som rör din ekonomi, din transition och din framtid — och kopplar in helt oberoende specialister inom skatt, juridik, försäkring, förvaltning och mental hälsa. Din idrottskarriär hanterar din agent. Inga egna produkter. Därför kan vi alltid säga vad som faktiskt är bäst för dig — även när svaret är att inte göra något alls.
              </p>
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
                {DIFFERENTIATORS.map((d) => (
                  <div key={d.title} className="bg-background-card p-6">
                    <p className="text-4xl font-semibold tracking-tight text-accent">
                      {d.figure}
                    </p>
                    <h3 className="mt-3 text-sm font-semibold">{d.title}</h3>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tjänstepaket */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-24 sm:py-32">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                Tre nivåer
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Ett medlemskap som växer med din karriär.
              </h2>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  t.featured
                    ? "border-accent-navy bg-accent-navy text-white"
                    : "border-border bg-background-card"
                }`}
              >
                <h3 className="text-2xl font-semibold tracking-tight">
                  {t.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    t.featured ? "text-white/70" : "text-foreground-muted"
                  }`}
                >
                  {t.who}
                </p>
                <ul
                  className={`mt-8 flex-1 space-y-3 text-sm ${
                    t.featured ? "text-white/80" : "text-foreground-muted"
                  }`}
                >
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3">
                      <span
                        className={`mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full ${
                          t.featured ? "bg-accent" : "bg-accent-navy"
                        }`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={t.href}
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-opacity ${
                    t.featured
                      ? "bg-accent text-foreground hover:opacity-90"
                      : "border border-border-strong text-foreground hover:bg-background-elevated"
                  }`}
                >
                  Välj {t.name}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-foreground-muted">
            Spelar du i klubb eller representerar förbund?{" "}
            <Link
              href="/boka-samtal"
              className="text-foreground underline-offset-4 hover:underline"
            >
              Vi gör B2B-paket också →
            </Link>
          </p>
        </Container>
      </section>

      {/* Junior + Familj — egen avdelning */}
      <section className="border-b border-border">
        <Container className="py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Junior + Familj
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                För unga spelare. Med hela familjen.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground-muted">
                Det första kontraktet, första utlandsflytten, första lönen som faktiskt betyder något. Vi vägleder dig — och vi gör det med hela familjen i rummet. För 15-18-åringar är det här inte en privatsak.
              </p>
              <Link
                href="/vad-du-far/junior"
                className="mt-8 inline-flex items-center text-sm font-medium text-accent-navy underline-offset-4 hover:underline"
              >
                Läs mer om Junior + Familj
                <span className="ml-1.5">→</span>
              </Link>
            </div>

            <div className="rounded-3xl border border-accent-navy bg-accent-navy p-8 text-white sm:p-10">
              <h3 className="text-2xl font-semibold tracking-tight">
                Junior + Familj
              </h3>
              <p className="mt-1 text-sm text-white/70">
                För 15-18-åriga spelare och deras familj
              </p>

              <div className="my-8 h-px bg-white/10" />

              <ul className="space-y-3 text-sm text-white/85">
                {[
                  ["Kvartalsmöten", "4 strukturerade genomgångar per år för att följa upp placeringar och planering"],
                  ["Hela familjen inbjuden", "Föräldrar, syskon och partner deltar i möten — beslut tas tillsammans"],
                  ["Skydd mot dåliga råd", "Vi granskar förslag från agenter, släkt och vänner innan du säger ja"],
                  ["Specifik utbildning", "Anpassad för unga: första kontraktet, utlandsflytt, agentförhandling"],
                  ["Mental coaching", "Idrottspsykolog för identitet, press och övergångar"],
                  ["Tillgång till vårt växande nätverk", "Skatte-, juridik- och försäkringspartners när det behövs"],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    <div>
                      <p className="font-medium text-white">{title}</p>
                      <p className="mt-0.5 text-white/65">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/boka-samtal"
                className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                Boka familjesamtal
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Slutgiltig CTA */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <Container className="relative py-28 sm:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Det första samtalet är gratis
            </p>
            <h2
              className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-accent sm:text-5xl md:text-6xl"
              style={{ textShadow: "0 6px 24px rgba(184,144,44,0.35)" }}
            >
              Det kan bli det viktigaste samtalet i din karriär.
            </h2>
            <Link
              href="/boka-samtal"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-navy shadow-[0_10px_30px_-5px_rgba(184,144,44,0.45)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_18px_45px_-5px_rgba(184,144,44,0.6)]"
            >
              Boka ditt första samtal
              <span className="ml-2 -mr-1">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

const Icon = {
  Coins: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
      <path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  Shield: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  Path: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>
  ),
  Brain: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 4a4 4 0 0 0-4 4 4 4 0 0 0-3 7 4 4 0 0 0 4 5 4 4 0 0 0 6 0 4 4 0 0 0 4-5 4 4 0 0 0-3-7 4 4 0 0 0-4-4z" />
      <path d="M12 4v16" />
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
    </svg>
  ),
};

const PILLARS = [
  {
    Icon: Icon.Brain,
    title: "Mentalt & identitet",
    body: "Vem är du när lampan släcks? Idrottspsykologer som hjälper dig hitta nästa version av dig själv — innan du måste.",
    href: "/ben/mentalt",
  },
  {
    Icon: Icon.Path,
    title: "Karriärcoaching",
    body: "Nästa kapitel börjar inte den dag du slutar — det börjar idag. Executive coachning, branschnätverk och riktningssamtal.",
    href: "/ben/karriar",
  },
  {
    Icon: Icon.Coins,
    title: "Ekonomi",
    body: "Karriärens pengar ska räcka livet ut. Översikt, plan och vägval — placering, skatt och juridik via oberoende specialister vi kopplar in.",
    href: "/ben/ekonomi",
  },
  {
    Icon: Icon.Shield,
    title: "Försäkring & risk",
    body: "Vad händer om kroppen säger nej imorgon? Skydd så att det aldrig blir fritt fall.",
    href: "/ben/forsakring",
  },
  {
    Icon: Icon.Star,
    title: "Personligt varumärke",
    body: "Plattformen du har som aktiv är en av dina största tillgångar. Den ska leva vidare.",
    href: "/ben/personligt-varumarke",
  },
];

const DIFFERENTIATORS = [
  {
    figure: "1",
    title: "Plats för allt",
    body: "Mentalt, karriär, ekonomi, juridik och försäkring — under ett tak.",
  },
  {
    figure: "100%",
    title: "Oberoende",
    body: "Inga egna produkter.",
  },
  {
    figure: "1",
    title: "Navigator",
    body: "En människa. Inte en robot. Inte en algoritm.",
  },
];

const TIERS = [
  {
    name: "Bas",
    who: "För juniorer och nyetablerade proffs",
    price: "Pris på förfrågan",
    href: "/vad-du-far/bas",
    featured: false,
    features: [
      "Du förstår var dina pengar går — på riktigt",
      "Du har en plan, inte bara ett konto",
      "Du vet vem du ska ringa när något händer",
      "Du är inte ensam — andra är i samma resa",
      "Branschens nyheter, utan brus",
    ],
  },
  {
    name: "Aktiv",
    who: "För etablerade elitspelare",
    price: "Pris på förfrågan",
    href: "/vad-du-far/aktiv",
    featured: true,
    features: [
      "Allt i Bas — plus en personlig hand",
      "Du har en person som känner din situation utan förklaring",
      "Du checkar in fyra gånger om året — allt uppdaterat",
      "Du blir matchad med rätt specialist — utan att söka",
      "Mental coach när du behöver — innan det blir akut",
      "Familjen är inbjuden — beslut tas tillsammans",
    ],
  },
  {
    name: "Elit",
    who: "För topp-spelare med komplex situation",
    price: "Pris på förfrågan",
    href: "/vad-du-far/elit",
    featured: false,
    features: [
      "Allt i Aktiv — plus dedikerat stöd",
      "Din navigator är ett samtal bort. Alltid.",
      "Karriären planeras parallellt med nästa kapitel",
      "Ditt varumärke byggs av strateger som förstår sport-media",
      "Du bygger nästa nätverk — parallellt med karriären",
      "Generationerna planeras — inte bara du",
    ],
  },
];
