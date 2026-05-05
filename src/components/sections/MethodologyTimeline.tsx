import type { QIStage } from "@/content/methodology";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function MethodologyTimeline({
  stages,
  eyebrow = "Quality Improvement Cycle",
  title = "Five stages, run with discipline.",
  lede = "Every EMU engagement runs the same five-stage cycle — Case Analysis through to Impact — calibrated to the level the system has actually reached.",
}: {
  stages: QIStage[];
  eyebrow?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <ol className="relative grid gap-6 md:grid-cols-5">
          {stages.map((stage, i) => (
            <li
              key={stage.number}
              className="relative flex flex-col p-6 bg-card border border-hairline rounded-lg"
            >
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-mono text-xs text-muted-foreground tracking-widest">
                  {stage.number}
                </span>
                {i < stages.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute top-8 -right-3 h-px w-6 bg-hairline"
                  />
                )}
              </div>
              <h3 className="font-serif text-xl text-foreground">{stage.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {stage.short}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
