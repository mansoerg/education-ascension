import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function CTASection({
  eyebrow = "Work with us",
  title = "Bring quality improvement to your district, school or classroom.",
  body = "Start with a short briefing. We’ll listen, frame the case, and tell you honestly whether we’re the right partner.",
  primary = { label: "Request a briefing", href: "/contact" },
  secondary = { label: "Read the methodology", href: "/methodology" },
}: {
  eyebrow?: string;
  title?: ReactNode;
  body?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <Section tone="paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end p-8 md:p-12 border border-hairline rounded-lg bg-card">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">{eyebrow}</p>
            <h2 className="display-serif text-3xl md:text-5xl text-foreground">{title}</h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild size="lg">
              <Link to={primary.href}>
                {primary.label} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
