import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <Link
      to="/case-studies/$slug"
      params={{ slug: item.slug }}
      className="group flex flex-col h-full p-7 md:p-8 border border-hairline rounded-lg bg-card hover:border-foreground/40 transition-colors"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {item.level} · {item.period}
        </span>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition" />
      </div>
      <h3 className="font-serif text-xl md:text-2xl text-foreground">{item.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
        {item.summary}
      </p>
      <dl className="mt-6 grid grid-cols-3 gap-4 pt-6 border-t border-hairline">
        {item.metrics.map((m) => (
          <div key={m.label}>
            <dt className="text-xs text-muted-foreground">{m.label}</dt>
            <dd className="font-serif text-lg text-foreground mt-1">{m.value}</dd>
          </div>
        ))}
      </dl>
    </Link>
  );
}

export function CaseStudiesSection({
  items,
  eyebrow = "Case studies",
  title = "Evidence in the field.",
  lede = "Selected engagements across districts, schools and classrooms — measured on the metrics that matter.",
  limit,
}: {
  items: CaseStudy[];
  eyebrow?: string;
  title?: string;
  lede?: string;
  limit?: number;
}) {
  const list = limit ? items.slice(0, limit) : items;
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CaseStudyCard key={c.slug} item={c} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
