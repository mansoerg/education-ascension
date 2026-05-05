import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  lede: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  meta?: ReactNode;
};

export function Hero({
  eyebrow = "Education Moving Up",
  title,
  lede,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = "",
  meta,
}: HeroProps) {
  return (
    <section className="relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden">
      {/* Subtle data-grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at top, black 30%, transparent 75%)",
        }}
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">{eyebrow}</p>
            <h1 className="display-serif text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] text-foreground">
              {title}
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {lede}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-wrap gap-3">
                {primaryCta && (
                  <Button asChild size="lg">
                    <Link to={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild size="lg" variant="outline">
                    <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </div>
            )}
            {meta && <div className="mt-10">{meta}</div>}
          </div>

          {imageSrc && (
            <figure className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-hairline bg-muted">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="eyebrow mt-3 text-right">
                South African classroom · placeholder
              </figcaption>
            </figure>
          )}
        </div>
      </Container>
    </section>
  );
}
