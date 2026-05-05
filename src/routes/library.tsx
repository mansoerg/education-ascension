import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BookSeriesSection } from "@/components/sections/BookSeriesSection";
import { PreorderForm } from "@/components/forms/PreorderForm";
import { books, librarySeries, endorsements } from "@/content/bookSeries";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "The Library of Excellence — Education Moving Up" },
      {
        name: "description",
        content:
          "A working library of EMU’s methodology in book form. Preorder the flagship volume by Dr. Muavia Gallie.",
      },
      {
        property: "og:title",
        content: "The Library of Excellence — Education Moving Up",
      },
      {
        property: "og:description",
        content:
          "Functionality Precedes Performance — the flagship volume from EMU. Preorder now.",
      },
      { property: "og:type", content: "book" },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
  const flagship = books[0];
  return (
    <>
      <Hero
        eyebrow={librarySeries.name}
        title={
          <>
            A working library on the discipline of{" "}
            <span className="italic text-primary">quality improvement.</span>
          </>
        }
        lede={librarySeries.intro}
        primaryCta={{ label: "Preorder the flagship", href: "/library" }}
        secondaryCta={{ label: "Read the methodology", href: "/methodology" }}
        imageSrc={flagship.cover}
        imageAlt={`Cover for ${flagship.title}`}
      />

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Flagship volume · Preorder"
            title={flagship.title}
            lede={flagship.subtitle}
          />
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-hairline bg-card">
              <img
                src={flagship.cover}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                {flagship.description}
              </p>
              <h3 className="mt-10 eyebrow">Inside the book</h3>
              <ol className="mt-4 grid gap-3">
                {flagship.chapters.map((c, i) => (
                  <li
                    key={c}
                    className="flex gap-4 py-3 border-b border-hairline text-foreground"
                  >
                    <span className="font-mono text-xs text-muted-foreground w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-lg">{c}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-10 p-6 md:p-8 border border-hairline rounded-lg bg-card">
                <p className="eyebrow mb-3">Reserve a copy</p>
                <h4 className="font-serif text-xl text-foreground mb-5">
                  We’ll let you know when it ships.
                </h4>
                <PreorderForm bookTitle={flagship.title} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <BookSeriesSection />

      <Section tone="ink">
        <Container>
          <p className="eyebrow text-background/60 mb-8">Endorsements</p>
          <div className="grid gap-10 md:grid-cols-2">
            {endorsements.map((e) => (
              <figure key={e.name}>
                <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-background">
                  “{e.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-background/70">
                  <span className="font-medium text-background">{e.name}</span> —{" "}
                  {e.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
