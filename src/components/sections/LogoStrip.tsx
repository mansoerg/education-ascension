import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const partners = [
  "Department of Basic Education",
  "Provincial Districts",
  "Independent Schools Association",
  "University Partners",
  "Public Sector Foundations",
];

export function LogoStrip() {
  return (
    <Section className="py-12" tone="paper">
      <Container>
        <p className="eyebrow text-center mb-8">Trusted by partners across the system</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {partners.map((p) => (
            <span
              key={p}
              className="font-serif text-base md:text-lg text-muted-foreground/80"
            >
              {p}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
