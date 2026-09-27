import Link from "next/link";
import { Container } from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boka samtal — Lightsout",
  description:
    "Ett första samtal på 30 minuter. Kostnadsfritt. Vi lyssnar på din situation och säger ärligt om Lightsout passar dig just nu.",
};

const CONTACT_EMAIL = "hej@lightsout.se";

export default function BokaSamtalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="dot-grid absolute inset-0 opacity-60" />
        <Container className="relative pt-20 pb-16 sm:pt-28 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-card px-4 py-1.5 text-xs font-medium text-foreground-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Första samtalet är kostnadsfritt
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Ta ett första samtal.
              <br />
              <span className="text-accent-navy">Se om Lightsout passar dig.</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* Vad händer i första samtalet */}
      <section className="border-b border-border bg-background-elevated">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                Detta gör vi i första samtalet
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                30 minuter. Utan agenda.
              </h2>
              <ul className="mt-8 space-y-3 text-base leading-relaxed text-foreground-muted">
                {[
                  "Vi lyssnar på var du är i karriären",
                  "Vi går igenom vilka frågor som redan är lösta",
                  "Vi identifierar områden som känns oklara",
                  "Vi säger ärligt om Lightsout passar dig just nu",
                  "Vi föreslår vad nästa steg kan vara",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-navy" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                Detta gör vi inte
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Ingen försäljning. Ingen press.
              </h2>
              <ul className="mt-8 space-y-3 text-base leading-relaxed text-foreground-muted">
                {[
                  "Vi ger inga råd om placeringar",
                  "Vi rekommenderar inga försäkringar",
                  "Vi går inte igenom juridik eller avtal",
                  "Vi kontaktar inte din agent eller klubb utan ditt godkännande",
                  "Vi lovar inget innan vi förstår din situation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground-subtle" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Kontakt */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
              Så här bokar du
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Skicka ett kort mejl så återkommer vi inom ett dygn.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground-muted">
              Berätta gärna kort vem du är och vad du vill diskutera — så kan vi förbereda oss. Vi svarar personligen, inte via automat.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Boka%20samtal&body=Hej%20Lightsout%2C%0A%0AJag%20heter%3A%0AJag%20spelar%20/%20representerar%3A%0AJag%20vill%20diskutera%3A%0A%0AH%C3%A4lsningar%2C%0A`}
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-navy shadow-[0_10px_30px_-5px_rgba(184,144,44,0.5)] transition-all hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_18px_45px_-5px_rgba(184,144,44,0.65)]"
              >
                Skicka mejl till {CONTACT_EMAIL}
                <span className="ml-2 -mr-1">→</span>
              </a>
              <p className="text-sm text-foreground-subtle">
                Föredrar du telefon? Skriv ditt nummer i mejlet så ringer vi upp.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Vem samtalet passar */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Passar bra
              </p>
              <ul className="mt-6 space-y-3 text-base leading-relaxed text-foreground-muted">
                {[
                  "Du är aktiv elitidrottare i fotboll, ishockey, tennis eller golf",
                  "Du representerar en idrottare (agent, förälder eller klubb)",
                  "Du står inför en förändring — utlandsflytt, nytt kontrakt, karriärslut",
                  "Du vill ha en oberoende partner som ser helheten",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-navy" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-foreground-subtle">
                Passar inte
              </p>
              <ul className="mt-6 space-y-3 text-base leading-relaxed text-foreground-muted">
                {[
                  "Du söker en ny agent — vi förhandlar inga kontrakt",
                  "Du vill ha konkreta placeringsrekommendationer direkt — då hänvisar vi till en licensierad rådgivare",
                  "Du behöver akut juridisk hjälp — då ska du gå direkt till advokat",
                  "Du är inte elitidrottare — vår tjänst är designad specifikt för elit",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground-subtle" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-2xl text-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              ← Tillbaka till startsidan
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
