import Link from "next/link";
import { Container } from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss — Lightsout",
  description:
    "Vi har sett tomheten som uppstår när idrottare slutar. Och vi har bestämt oss för att göra något åt det.",
};

export default function OmOssPage() {
  return (
    <>
      {/* Hero — manifestets öppning, med spotlight-effekt */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="dot-grid absolute inset-0 opacity-60" />
        {/* Spotlight som fadear ut — kopplar till "rampljuset släcks" */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[120%]"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(184, 144, 44, 0.18) 0%, transparent 60%)",
          }}
        />
        <Container className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
          <div className="max-w-5xl">
            <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-4 py-1.5 text-xs font-medium text-foreground-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Manifestet bakom Lightsout
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              När rampljuset släcks
              <br />
              blir det <span className="italic text-foreground-muted">tyst</span>.
              <br />
              <span
                className="text-accent-navy"
                style={{ textShadow: "0 8px 30px rgba(10,31,77,0.18)" }}
              >
                Lightsout finns kvar.
              </span>
              <br />
              <span className="text-accent">
                Hela vägen.
              </span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Berättelsen — med pullquote-moment */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-warning">
              Berättelsen
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Vi har sett det gång på gång.
            </h2>

            <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground-muted sm:text-xl">
              <p>
                En idrottare slutar — av skada, sjukdom, ålder eller bara för att tiden har sin gång. Det som följer är inte alltid det som visas i media.
              </p>
            </div>
          </div>

          {/* Pullquote — hjärtat av berättelsen */}
          <div className="my-16 sm:my-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-serif text-balance text-4xl font-medium leading-[1.15] text-accent-navy sm:text-5xl md:text-6xl">
                <span className="block">Det är en tomhet.</span>
                <span className="block">En sorg.</span>
                <span className="block text-accent">En saknad som hänger kvar i åratal.</span>
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-foreground-muted sm:text-xl">
            <p>
              Många i branschen ser det här — men få har verktygen att möta det. Att förstå karriärslutet kräver en annan typ av närvaro än att förhandla nästa kontrakt.
            </p>
            <p className="text-foreground">
              Lightsout finns för att göra avslutet enklare. Inte enkelt — det blir det aldrig. Men <em className="not-italic font-medium">enklare</em>. <em className="not-italic font-medium">Mer förberett</em>. Med någon vid sidan som faktiskt förstår vad du går igenom.
            </p>
          </div>
        </Container>
      </section>

      {/* Det vi tror på — fyra principer med dramatiska siffror */}
      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <div className="mb-16 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Det vi tror på
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Fyra principer som styr allt vi gör.
            </h2>
          </div>

          <div className="space-y-px overflow-hidden rounded-3xl border border-border bg-border">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="group grid gap-6 bg-background p-8 transition-colors hover:bg-background-card sm:grid-cols-[auto_1fr] sm:gap-12 sm:p-10 md:p-12"
              >
                <div className="flex items-baseline">
                  <span className="font-serif text-7xl font-semibold leading-none text-accent transition-transform group-hover:scale-105 sm:text-8xl md:text-[9rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Var vi är just nu — med visuell tillgänglighets-indikator */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Just nu
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                Vi är i början.
                <br />
                <span className="text-accent-navy">Och det är poängen.</span>
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                Lightsout är i pilotfas under 2026. Vi söker de första <strong className="font-medium text-accent-navy">5–10 spelarna</strong> som vill vara med och bygga något som inte funnits förut.
              </p>

              {/* Visuell platsindikator */}
              <div className="rounded-2xl border border-border bg-background-card p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                    Pilot 2026
                  </p>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    Lediga platser
                  </p>
                </div>
                <div className="mt-5 flex gap-2 sm:gap-3">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <div
                      key={idx}
                      className="h-6 flex-1 rounded-full border-2 border-accent-navy/30 bg-transparent sm:h-8"
                      aria-hidden
                    />
                  ))}
                </div>
                <p className="mt-5 text-sm text-foreground-muted">
                  Tio platser. Inga ifyllda än. Din kan bli den första.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-foreground-muted sm:text-xl">
                De första vi arbetar med får mer än ett medlemskap — de får en plats vid bordet medan Lightsout tar form. Det är inte ett erbjudande som upprepas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Visionen — som ett poetiskt moment */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(184, 144, 44, 0.08) 0%, transparent 70%)",
          }}
        />
        <Container className="relative py-24 sm:py-32 md:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Visionen
            </p>
            <p className="mt-10 font-serif text-3xl font-medium leading-[1.2] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-accent text-5xl sm:text-6xl md:text-7xl">&ldquo;</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">Om fem år är </span>
              <span className="italic">&ldquo;broke athlete&rdquo;</span>-rubrikerna ett minne från innan Lightsout fanns.
              <br />
              <span className="text-accent text-5xl sm:text-6xl md:text-7xl">&rdquo;</span>
            </p>
            <p className="mt-12 text-base leading-relaxed text-foreground-muted sm:text-lg">
              Tanken är att de idrottare som gått igenom transitionen med oss då är ambassadörer för en ny standard. Det är vad vi bygger — en spelare i taget.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA — gold glow moment */}
      <section className="relative overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <Container className="relative py-28 sm:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-warning">
              Skillnaden är brutal
            </p>
            <h2
              className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-accent sm:text-5xl md:text-6xl"
              style={{ textShadow: "0 6px 24px rgba(184,144,44,0.35)" }}
            >
              Skapa trygghet för din framtid.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">
              60 % av f.d. proffsidrottare hamnar i ekonomisk kris.
              <br />
              <span className="text-foreground-muted">Vi ser till att du blir en av de andra. Det börjar med ett samtal.</span>
            </p>
            <Link
              href="/boka-samtal"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-navy shadow-[0_10px_30px_-5px_rgba(184,144,44,0.5)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_18px_45px_-5px_rgba(184,144,44,0.65)]"
            >
              Boka samtal
              <span className="ml-2 -mr-1">→</span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

const PRINCIPLES = [
  {
    title: "Spelaren först. Alltid.",
    body: "Vi jobbar inte för fondbolag, försäkringsbolag eller agenter. Bara för den vars liv vi hjälper.",
  },
  {
    title: "Karriären är 10–15 år. Vi tänker 50.",
    body: "De flesta rådgivare planerar för nu. Vi planerar för decennierna efter att rampljuset släckts.",
  },
  {
    title: "Ingen rådgivare är en hjälte.",
    body: "Vi äger inte rådgivningen — vi äger urvalet. Specialister är specialister. Vi koordinerar dem.",
  },
  {
    title: "Familjen är inbjuden.",
    body: "Aldrig en isolerad spelare. Alltid relationen runt — partner, föräldrar, syskon, barn.",
  },
];
