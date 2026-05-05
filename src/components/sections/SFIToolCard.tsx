import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function SFIToolCard() {
  return (
    <Section tone="paper" className="py-16 md:py-20">
      <Container>
        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center p-8 md:p-12 rounded-lg bg-foreground text-background overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(var(--color-background) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative">
            <p className="font-mono text-xs tracking-widest text-background/60 mb-4">
              Featured tool
            </p>
            <h3 className="display-serif text-3xl md:text-4xl">
              The School Functionality Index.
            </h3>
            <p className="mt-5 text-background/80 leading-relaxed max-w-xl">
              The diagnostic instrument from Dr. Gallie’s doctoral thesis — a
              structured questionnaire that makes school functionality observable,
              comparable and improvable.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="secondary">
                <Link to="/resources">
                  Request the SFI <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-background hover:bg-background/10">
                <Link to="/methodology">How we use it</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <ul className="space-y-3 text-sm">
              {[
                "Leadership rhythm",
                "Document control",
                "Teacher attendance",
                "Assessment integrity",
                "Parent communication",
              ].map((d, i) => (
                <li
                  key={d}
                  className="flex items-center justify-between border-b border-background/15 pb-3 text-background/85"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-background/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {d}
                  </span>
                  <span className="font-mono text-xs text-background/50">
                    SFI dim.
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
