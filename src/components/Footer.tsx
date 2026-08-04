import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";

const FOOTER_NAV = [
  {
    title: "Områden",
    links: [
      { label: "Mentalt & identitet", href: "/ben/mentalt" },
      { label: "Karriärcoaching", href: "/ben/karriar" },
      { label: "Ekonomi", href: "/ben/ekonomi" },
      { label: "Försäkring & risk", href: "/ben/forsakring" },
      { label: "Personligt varumärke", href: "/ben/personligt-varumarke" },
    ],
  },
  {
    title: "Tjänsten",
    links: [
      { label: "Så funkar det", href: "/sa-funkar-lightsout" },
      { label: "Junior + Familj", href: "/vad-du-far/junior" },
      { label: "Bas", href: "/vad-du-far/bas" },
      { label: "Aktiv", href: "/vad-du-far/aktiv" },
      { label: "Elit", href: "/vad-du-far/elit" },
      { label: "Vår panel", href: "/panel" },
    ],
  },
  {
    title: "Kunskap",
    links: [
      { label: "Artiklar", href: "/kunskap" },
      { label: "Handbok (PDF)", href: "/kunskap#handbok" },
      { label: "Podcast", href: "/kunskap#podcast" },
    ],
  },
  {
    title: "Lightsout",
    links: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Boka samtal", href: "/boka-samtal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background-elevated">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Den oberoende navigatorn för elitidrottare. Du äger din ekonomi — vi tryggar den.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_NAV.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Lightsout. Alla rättigheter förbehållna.</p>
          <p className="max-w-xl text-right">
            Lightsout är inte ett värdepappersbolag. All konkret rådgivning utförs av licensierade partners i vår panel.
          </p>
        </div>
      </Container>
    </footer>
  );
}
