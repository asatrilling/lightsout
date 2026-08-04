"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { Logo } from "./Logo";

const PILLARS = [
  { label: "Mentalt & identitet", href: "/ben/mentalt" },
  { label: "Karriärcoaching", href: "/ben/karriar" },
  { label: "Ekonomi", href: "/ben/ekonomi" },
  { label: "Försäkring & risk", href: "/ben/forsakring" },
  { label: "Personligt varumärke", href: "/ben/personligt-varumarke" },
];

const NAV = [
  { label: "Så funkar det", href: "/sa-funkar-lightsout" },
  { label: "Junior + Familj", href: "/vad-du-far/junior" },
  { label: "Paket", href: "/vad-du-far/aktiv" },
  { label: "Panel", href: "/panel" },
  { label: "Kunskap", href: "/kunskap" },
  { label: "Om oss", href: "/om-oss" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          <Link
            href={NAV[0].href}
            className="text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            {NAV[0].label}
          </Link>

          {/* Områden — dropdown med fem ben */}
          <div className="relative">
            <button
              type="button"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
              onClick={() => setAreasOpen((v) => !v)}
              aria-expanded={areasOpen}
              className="inline-flex items-center gap-1 text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Områden
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform ${areasOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {areasOpen && (
              <div
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
                className="absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-background-card shadow-xl"
              >
                <div className="p-2">
                  {PILLARS.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setAreasOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-foreground-muted transition-colors hover:bg-background-elevated hover:text-foreground"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {NAV.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/boka-samtal"
            className="inline-flex items-center justify-center rounded-full bg-accent-navy px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-navy-strong"
          >
            Boka samtal
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Meny"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground-muted lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <Link
              href={NAV[0].href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-base text-foreground-muted hover:bg-background-elevated hover:text-foreground"
            >
              {NAV[0].label}
            </Link>

            <p className="mt-3 px-3 font-mono text-[10px] uppercase tracking-widest text-foreground-subtle">
              Områden
            </p>
            {PILLARS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-5 py-2 text-sm text-foreground-muted hover:bg-background-elevated hover:text-foreground"
              >
                {p.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-border/60 pt-3">
              {NAV.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base text-foreground-muted hover:bg-background-elevated hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/boka-samtal"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-accent-navy px-5 py-3 text-sm font-medium text-white"
            >
              Boka samtal
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
