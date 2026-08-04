import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="dot-grid absolute inset-0 opacity-50" />
      <Container className="relative pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground-muted">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
