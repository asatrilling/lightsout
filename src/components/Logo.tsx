import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="Lightsout — startsida"
    >
      <span className="relative inline-block h-2 w-2">
        <span className="absolute inset-0 rounded-full bg-accent" />
      </span>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Lightsout
      </span>
    </Link>
  );
}
