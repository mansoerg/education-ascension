import { focusAreas } from "@/content/methodology";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function FocusAreas() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Three focus areas"
          title="District. School. Learning."
          lede="Our work moves between three levels of the system — and the same QI discipline runs at each."
        />
        <div className="grid gap-px bg-hairline border border-hairline rounded-lg overflow-hidden md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="bg-card p-8 md:p-10">
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                Focus area
              </p>
              <h3 className="font-serif text-2xl md:text-3xl mt-3 text-foreground">
                {area.title}
              </h3>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {area.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
