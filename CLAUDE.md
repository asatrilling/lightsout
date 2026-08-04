@AGENTS.md

# Lightsout — webbplats

Premium-sajt för Lightsout, en navigator/koncierge-tjänst för aktiva elitidrottare (fotboll, hockey, tennis, golf) som hjälper dem förvalta pengar och planera transition från karriär.

## Strategi (sammanfattning)

- **Modell:** Navigator/koncierge (alt. B). Vi äger kundrelationen, förmedlar till licensierade specialister.
- **Målgrupp:** Aktiva elitidrottare i fotboll (ledvertikal), tennis, golf (fas 1) + hockey (fas 2). Sverige först, svenska utlandsproffs prioritet.
- **Position:** *"Den oberoende navigatorn — du äger din ekonomi, vi tryggar den."*
- **USP:** Produktagnostisk. Retainer från kund. Inga kickbacks. Specialiserade på internationell skattekomplexitet.
- **Lanseringsnarrativ:** Kring SVT:s "Fotbollsmiljonerna som försvann" (2026) — *"det här hade Lightsout förhindrat"*.

Fullständig research: `~/Lightsout/01-research.md`. Plan: `~/Lightsout/02-plan.md`.

## Teknisk stack

- **Next.js 16** (App Router, Turbopack) — OBS: nya APIer, läs `node_modules/next/dist/docs/` innan ändringar
- **TypeScript**
- **Tailwind CSS v4** (PostCSS-plugin, `@theme inline` i globals.css — ingen tailwind.config.js)
- **React 19**
- Källkod i `src/`

## Designsystem

- **Färger:** Mörk premiumprofil (släckta arenaljus). Bakgrund djup svart, off-white text, gold/amber-accent för CTA, dämpad röd för kritiska narrativ ("varningsexempel").
- **Typografi:** Fraunces (serif headline) + Inter (sans body).
- **Mobile-first.** Målgruppen lever i mobilen.
- **Tonalitet:** Premium men inte stelt. Vi pratar med 25-åriga PL-spelare och 35-åriga golfproffs, inte pensionssparare.

## Sidstruktur (sitemap)

```
/                          Start
/sa-funkar-lightsout       Navigator-modellen förklarad
/ben/                      De fem benen (pelare)
  /mentalt                 Mentalt & identitet
  /karriar                 Karriärcoaching
  /ekonomi                 Ekonomi (inkl. SVT-narrativet "40 miljoner. Borta.")
  /forsakring              Försäkring & risk
  /personligt-varumarke    Personligt varumärke
/for-dig-som-spelar/       Sport-spår
  /fotboll
  /tennis
  /golf
  /hockey                  (fas 2 — stub i v1)
/vad-du-far/               Tjänstepaket
  /junior                  För unga spelare + familj (15-18 år, kvartalsmöten)
  /bas
  /aktiv
  /elit
/panel                     Våra certifierade partners (transparens)
/kunskap                   Lead magnet (artiklar, podcast, handbok-PDF)
/om-oss
/boka-samtal               CTA — kvalifikationsformulär
```

## Innehåll som väntar på sidor

**SVT-narrativet "40 miljoner. Borta."** — ska ligga på `/ben/ekonomi` som öppnings-narrativ. Visar varför ekonomi-benet finns. Baserat på SVT:s dokumentär *Fotbollsmiljonerna som försvann* (2026) där MFF-spelare Stefanidis, Chanko, Theorin, Yngvesson förlorade ~40 MSEK via oreglerad rådgivare. Statistik: 60 % av tidigare proffsidrottare har ekonomiska problem inom fem år.

## Dev

```bash
cd ~/Lightsout/site
npm run dev   # http://localhost:3000
npm run build
npm run start
```

## Cinematic hero-video (att producera)

Startsidan har en cinematic banner överst som idag visar en CSS-animerad placeholder som simulerar "lights out". Inför produktion behövs en riktig videofil.

**Spec att producera:**
- Längd: 8-12 sekunder
- Format: MP4 (H.264) + WebM (VP9) som fallback
- Upplösning: 1920x1080 (export även 1280x720 för mobil)
- Filstorlek: <5 MB MP4
- Aspekt: 21:9 eller 24:9 (cinematic letterbox)
- Ljud: tas bort (sajten autoplay:ar muted)

**Berättelsearc (ca 10 sek):**
1. **Sek 0-3:** Full arena, publik som jublar, energi och glädje (matchögonblick)
2. **Sek 3-7:** Lampor släcks gradvis, ljud dämpas, övergång
3. **Sek 7-10:** Tom, tyst arena med svag dim/månsken

**Källor att överväga:**
- Stock footage: Pond5, Artgrid, Storyblocks (sök "stadium lights out", "empty arena")
- Egenproduktion via SHL/Allsvenskan-klubb (tillstånd kostar)
- Samarbete med klubb i utbyte mot Lightsout-exponering

**Filplats efter produktion:** `public/lightsout-hero.mp4` + `public/lightsout-hero.webm` + `public/hero-poster.jpg`. Avkommentera `<video>`-elementet i `src/app/page.tsx` och ta bort `cinematic-stadium`-placeholdern.

## Vad som INTE ska finnas i v1

- Inloggat medlemsområde (fas 2)
- Stripe-betalning (manuell hantering i pilot)
- Komplett podcast-flöde (lanseras fas 2)
- Fullt kunskapscenter (artikelarkiv kommer fas 2)
- `cacheComponents` / `unstable_instant` (kan adderas i fas 2 för perf)

## Strikt regulatorisk gränsdragning

Sajten får ALDRIG ge personliga rekommendationer om specifika finansiella instrument (kräver FI-tillstånd). Håll dig till:
- Allmän utbildning och information
- Beskrivning av tjänsten
- Hänvisning till partner-panel
- Lead capture för personligt samtal

Allt konkret rådgivningsinnehåll måste granskas av jurist innan publicering.
