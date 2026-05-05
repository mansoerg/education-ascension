import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ArticleCard } from "@/components/sections/InsightsSection";
import { NewsletterStub } from "@/components/sections/NewsletterStub";
import { insights } from "@/content/insights";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Education Moving Up" },
      {
        name: "description",
        content:
          "Field notes, methodology pieces and research from the EMU practice on quality improvement in education.",
      },
      { property: "og:title", content: "Insights — Education Moving Up" },
      {
        property: "og:description",
        content:
          "Thinking from the practice — written for district leaders, principals and education researchers.",
      },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  return (
    <>
      <Hero
        eyebrow="Insights"
        title="Thinking from the practice."
        lede="Field notes, methodology pieces and research — written for the people who actually run districts, schools and classrooms."
      />
      <Section className="pt-0">
        <Container>
          <div className="grid gap-x-8 gap-y-2 md:grid-cols-2 lg:grid-cols-3 border-t border-hairline pt-2">
            {insights.map((i) => (
              <ArticleCard key={i.slug} item={i} />
            ))}
          </div>
        </Container>
      </Section>
      <NewsletterStub />
    </>
  );
}
