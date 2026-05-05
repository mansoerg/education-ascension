import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { impactStats } from "@/content/site";

export function StatBand({
  stats = impactStats as readonly { value: string; label: string }[],
}: {
  stats?: readonly { value: string; label: string }[];
}) {
  return (
    <Section className="py-12 md:py-16" tone="paper">
      <Container>
        <div className="grid gap-px bg-hairline border-y border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8">
              <p className="font-serif text-4xl md:text-5xl text-foreground">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
