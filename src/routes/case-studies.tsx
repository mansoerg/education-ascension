import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { CaseStudyCard } from "@/components/sections/CaseStudiesSection";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/content/caseStudies";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Education Moving Up" },
      {
        name: "description",
        content:
          "Selected EMU engagements across districts, schools and classrooms — measured on the metrics that matter.",
      },
      { property: "og:title", content: "Case Studies — Education Moving Up" },
      {
        property: "og:description",
        content:
          "Evidence in the field. The work, the metrics, and the systems that produced them.",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <>
      <Hero
        eyebrow="Case studies"
        title="Evidence in the field."
        lede="A selected portfolio of district, school and learning engagements — measured on the metrics that mattered to the case at hand."
      />
      <Section className="pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <CaseStudyCard key={c.slug} item={c} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
