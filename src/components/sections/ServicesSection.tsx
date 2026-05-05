import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/content/services";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col h-full p-7 border border-hairline rounded-lg bg-card hover:bg-muted/50 transition-colors">
      <p className="font-mono text-xs tracking-widest text-muted-foreground">
        {service.level}
      </p>
      <h3 className="mt-4 font-serif text-xl md:text-2xl text-foreground">
        {service.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {service.summary}
      </p>
      <ul className="mt-5 space-y-2 text-sm text-foreground/80">
        {service.outcomes.map((o) => (
          <li key={o} className="flex gap-2">
            <span aria-hidden className="text-accent mt-1">—</span>
            <span>{o}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground border-b border-foreground/40 hover:border-foreground self-start pb-0.5"
      >
        Discuss this service <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}

export function ServicesSection({
  services,
  eyebrow = "Services",
  title = "How we engage.",
  lede = "Six service lines, each one anchored on the QI cycle and calibrated to the level we are working at.",
  limit,
}: {
  services: Service[];
  eyebrow?: string;
  title?: string;
  lede?: string;
  limit?: number;
}) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
