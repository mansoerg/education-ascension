import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { books, librarySeries } from "@/content/bookSeries";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";

export function BookSeriesSection({ teaser = false }: { teaser?: boolean }) {
  const list = teaser ? books.slice(0, 3) : books;
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          eyebrow={librarySeries.name}
          title={librarySeries.tagline}
          lede={teaser ? undefined : librarySeries.intro}
        >
          {teaser && (
            <Link
              to="/library"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground border-b border-foreground/40 hover:border-foreground pb-0.5"
            >
              Visit the Library
            </Link>
          )}
        </SectionHeader>

        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {list.map((book) => (
            <article key={book.slug} className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-hairline bg-card">
                <img
                  src={book.cover}
                  alt={`Cover for ${book.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest bg-background/90 text-foreground px-2 py-1 rounded">
                  {book.status}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl md:text-2xl text-foreground">
                {book.title}
              </h3>
              <p className="mt-1 text-sm italic text-muted-foreground">{book.subtitle}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {book.description}
              </p>
              {!teaser && book.status === "Preorder" && (
                <Button asChild className="mt-5 self-start" size="sm">
                  <Link to="/library">
                    Preorder <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              )}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
