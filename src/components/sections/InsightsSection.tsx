import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Insight } from "@/content/insights";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function ArticleCard({ item }: { item: Insight }) {
  return (
    <Link
      to="/insights/$slug"
      params={{ slug: item.slug }}
      className="group flex flex-col h-full py-6 border-t border-hairline first:border-t-0 md:border-t-0 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="font-mono uppercase tracking-widest text-accent-foreground bg-accent/30 px-2 py-0.5 rounded">
          {item.category}
        </span>
        <span className="text-muted-foreground">{item.readingTime}</span>
      </div>
      <h3 className="mt-4 font-serif text-xl md:text-2xl text-foreground group-hover:underline underline-offset-4 decoration-1">
        {item.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
        {item.excerpt}
      </p>
      <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>{item.author}</span>
        <ArrowUpRight className="h-4 w-4 group-hover:text-foreground transition-colors" />
      </div>
    </Link>
  );
}

export function InsightsSection({
  items,
  eyebrow = "Insights",
  title = "Thinking from the practice.",
  lede,
  limit = 3,
}: {
  items: Insight[];
  eyebrow?: string;
  title?: string;
  lede?: string;
  limit?: number;
}) {
  const list = items.slice(0, limit);
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          lede={lede}
        >
          <Link
            to="/insights"
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground border-b border-foreground/40 hover:border-foreground pb-0.5"
          >
            All insights
          </Link>
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-3">
          {list.map((i) => (
            <ArticleCard key={i.slug} item={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
