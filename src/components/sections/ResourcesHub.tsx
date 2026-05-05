import { Lock, Download, ArrowRight } from "lucide-react";
import type { Resource } from "@/content/resources";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ResourceCard({ resource }: { resource: Resource }) {
  // Mock handler — wired up to real backend later.
  const handle = () => {
    toast(resource.gated ? "Request received" : "Download starting", {
      description: resource.gated
        ? "We’ll email you the link shortly. (placeholder)"
        : `${resource.title} — placeholder file.`,
    });
  };
  return (
    <article className="flex flex-col h-full p-7 border border-hairline rounded-lg bg-card">
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-xs tracking-widest text-muted-foreground">
          {resource.type}
        </span>
        {resource.gated ? (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" /> Gated
          </span>
        ) : (
          <span className="text-xs text-muted-foreground">Open</span>
        )}
      </div>
      <h3 className="font-serif text-xl text-foreground">{resource.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
        {resource.summary}
      </p>
      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-xs text-muted-foreground">{resource.format}</span>
        <Button variant="outline" size="sm" onClick={handle}>
          {resource.gated ? (
            <>
              Request access <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </>
          ) : (
            <>
              Download <Download className="ml-1.5 h-3.5 w-3.5" />
            </>
          )}
        </Button>
      </div>
    </article>
  );
}

export function ResourcesHub({
  resources,
  eyebrow = "Resources",
  title = "Frameworks, tools and briefings.",
  lede = "The working library behind our practice — open where it can be, gated where it should be.",
}: {
  resources: Resource[];
  eyebrow?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => (
            <ResourceCard key={r.slug} resource={r} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
