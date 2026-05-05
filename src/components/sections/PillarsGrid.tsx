import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Pillar } from "@/content/pillars";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Section } from "@/components/layout/Section";

export function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <article className="group relative flex flex-col h-full p-7 md:p-8 border border-hairline rounded-lg bg-card hover:border-foreground/40 transition-colors">
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {pillar.number}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
      <h3 className="font-serif text-2xl md:text-3xl text-foreground">{pillar.title}</h3>
      <p className="mt-4 text-base text-muted-foreground leading-relaxed flex-1">
        {pillar.short}
      </p>
      <Link
        to="/methodology"
        className="mt-6 text-sm font-medium text-foreground inline-flex items-center gap-1 border-b border-foreground/40 hover:border-foreground self-start pb-0.5"
      >
        Read methodology
      </Link>
    </article>
  );
}

export function PillarsGrid({
  eyebrow = "Methodology",
  title = "Three strategies anchor every engagement.",
  lede,
  pillars,
}: {
  eyebrow?: string;
  title?: string;
  lede?: string;
  pillars: Pillar[];
}) {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <PillarCard key={p.slug} pillar={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
