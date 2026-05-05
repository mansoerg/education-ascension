import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { BriefingRequestForm } from "@/components/forms/BriefingRequestForm";
import { services, engagementSteps } from "@/content/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Education Moving Up" },
      {
        name: "description",
        content:
          "How EMU engages: district quality management, school functionality audits, learning labs, ICT and data, scenario planning, and executive briefings.",
      },
      { property: "og:title", content: "Services — Education Moving Up" },
      {
        property: "og:description",
        content:
          "Six service lines, each one anchored on the QI cycle and calibrated to the level we are working at.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Engagements at the level the system is actually at."
        lede="Six service lines across district, school and learning. Each one runs the same five-stage Quality Improvement cycle — calibrated, not generic."
        primaryCta={{ label: "Request a briefing", href: "/contact" }}
      />

      <FocusAreas />
      <ServicesSection
        services={services}
        eyebrow="Service lines"
        title="What we do."
        lede="Outcomes, not deliverables. Every engagement is scoped against the case analysis."
      />

      <Section tone="muted">
        <Container>
          <SectionHeader
            eyebrow="Engagement model"
            title="How we work together."
          />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((s) => (
              <li
                key={s.step}
                className="p-7 bg-card border border-hairline rounded-lg"
              >
                <p className="font-mono text-xs tracking-widest text-muted-foreground">
                  {s.step}
                </p>
                <h3 className="mt-3 font-serif text-xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">Start a conversation</p>
              <h2 className="display-serif text-3xl md:text-4xl text-foreground">
                Request a briefing.
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                A short, structured conversation. We listen, frame the case, and tell
                you honestly whether EMU is the right partner.
              </p>
            </div>
            <BriefingRequestForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
