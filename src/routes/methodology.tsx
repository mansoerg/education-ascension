import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { MethodologyTimeline } from "@/components/sections/MethodologyTimeline";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { SFIToolCard } from "@/components/sections/SFIToolCard";
import { SignatureQuote } from "@/components/sections/SignatureQuote";
import { CTASection } from "@/components/sections/CTASection";
import { pillars, corePrinciple } from "@/content/pillars";
import { qiStages } from "@/content/methodology";

export const Route = createFileRoute("/methodology")({
  head: () => ({
    meta: [
      { title: "Methodology — Education Moving Up" },
      {
        name: "description",
        content:
          "Three strategies, five stages, and a single principle: functionality precedes performance. The EMU methodology in depth.",
      },
      { property: "og:title", content: "Methodology — Education Moving Up" },
      {
        property: "og:description",
        content:
          "Data Driven · Systemic Thinking · Use of ICT — applied through a five-stage Quality Improvement cycle.",
      },
    ],
  }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <>
      <Hero
        eyebrow="Methodology"
        title="Three strategies. Five stages. One principle."
        lede="Our methodology has been refined over two decades of practice with South African education systems. The doctrine has not changed — the tools around it have."
      />

      <Section>
        <Container>
          <SectionHeader
            eyebrow="The three strategies"
            title="Doctrine, in full."
            lede="Preserved verbatim from the original EMU writing, because the language is the IP."
          />
          <div className="grid gap-12 lg:gap-16">
            {pillars.map((p) => (
              <article
                key={p.slug}
                className="grid gap-8 md:grid-cols-[auto_1fr] items-start border-t border-hairline pt-10"
              >
                <div className="md:w-40">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground">
                    {p.number}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl text-foreground">
                    {p.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <MethodologyTimeline stages={qiStages} />

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Core principle</p>
            <h2 className="display-serif text-3xl md:text-5xl text-foreground">
              {corePrinciple.title}.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {corePrinciple.body}
            </p>
          </div>
        </Container>
      </Section>

      <FocusAreas />
      <SFIToolCard />
      <SignatureQuote />
      <CTASection
        title="See the methodology applied to your context."
        body="A short briefing is the fastest way to know whether the EMU approach is the right one for your district, school or classroom."
      />
    </>
  );
}
