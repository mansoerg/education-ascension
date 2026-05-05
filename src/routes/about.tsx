import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { FounderFeature } from "@/components/sections/TeamGrid";
import { CTASection } from "@/components/sections/CTASection";
import { visionMission } from "@/content/methodology";
import { founder } from "@/content/team";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Education Moving Up" },
      {
        name: "description",
        content:
          "EMU is a South African quality-improvement practice for education. Two decades of work with districts, schools and classrooms.",
      },
      { property: "og:title", content: "About — Education Moving Up" },
      {
        property: "og:description",
        content:
          "A research-led practice committed to one idea: functionality must precede performance.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title={
          <>
            A practice built on a single conviction:{" "}
            <span className="italic text-primary">functionality precedes performance.</span>
          </>
        }
        lede="For more than two decades, EMU has worked alongside South African districts, schools and classrooms — applying the same disciplined cycle of case analysis, input, process, output and impact."
      />

      <Section tone="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-3">Vision &amp; Mission</p>
              <h2 className="display-serif text-3xl md:text-4xl text-foreground">
                Why we exist.
              </h2>
            </div>
            <blockquote className="font-serif text-xl md:text-2xl text-foreground/90 leading-relaxed border-l-2 border-accent pl-6">
              {visionMission.text}
            </blockquote>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="Origin"
            title="A discipline that began in a doctoral thesis."
            lede="The practice grew from Dr. Muavia Gallie’s doctoral work, which produced the School Functionality Index — and from a refusal to accept that ambition alone could substitute for evidence."
          />
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Evidence over opinion",
                body: "We frame every engagement around what the data actually says — not what the room would prefer to hear.",
              },
              {
                title: "System over symptom",
                body: "We change the system that produces the result. Symptom-chasing is the most expensive way to stay still.",
              },
              {
                title: "Practice over pitch",
                body: "Our work lives or dies in classrooms, schools and district offices. The slide deck is downstream of the practice.",
              },
            ].map((v) => (
              <div key={v.title} className="border-t border-hairline pt-6">
                <h3 className="font-serif text-xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FounderFeature founder={founder} />
      <CTASection
        title="Two decades of practice. One next conversation."
        body="If our approach resonates, the most useful next step is a short briefing. We’ll tell you honestly whether we’re the right partner."
      />
    </>
  );
}
