# Lightsout — sajt-skiss

Hej Peter! Här är en tidig skiss av Lightsout-sajten.

## Två sidor att titta på

- **Spelarsidan (huvudvarumärket):** `/`
- **Agentbyrå-sidan (för Nordic Sky och liknande):** `/agenter`

## Hur du kör den på din dator

Du behöver Node.js (version 20 eller högre).

```bash
# 1. Packa upp zip-filen
# 2. Öppna en terminal i mappen "site"
cd site

# 3. Installera beroenden (tar 1-2 min första gången)
npm install

# 4. Starta dev-servern
npm run dev

# 5. Öppna http://localhost:3000 i din webbläsare
# 6. Agentsidan: http://localhost:3000/agenter
```

## Filer som är värda att titta i

- `src/app/page.tsx` — startsidan (spelare)
- `src/app/agenter/page.tsx` — agentbyrå-sidan
- `src/components/Header.tsx` — header/navigation
- `src/components/Footer.tsx` — footer
- `CLAUDE.md` — projektsammanfattning och strategi

## Vad är inte klart än

- De fem ben-sidorna (`/ben/mentalt`, `/ben/karriar`, `/ben/ekonomi`, etc.) — leder till 404 just nu
- Boka-samtal-formuläret (`/boka-samtal`) — också 404
- Sport-spår-sidor (fotboll/tennis/golf/hockey) — 404
- En riktig produktionsvideo (vi har en AI-genererad placeholder)

Säg gärna vad du tycker — startsidan och agentsidan är de två viktigaste i denna fas.

/ Åsa
