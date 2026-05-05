import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { toast } from "sonner";

export function NewsletterStub() {
  const [email, setEmail] = useState("");
  // Mock handler.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast("Subscribed", {
      description: "Thanks — we’ll send the next field note. (placeholder)",
    });
    setEmail("");
  };

  return (
    <Section className="py-16" tone="muted">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="eyebrow mb-3">Field Notes</p>
            <h3 className="display-serif text-2xl md:text-3xl text-foreground">
              A short letter, when there is something worth saying.
            </h3>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              required
              placeholder="you@institution.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-background"
            />
            <Button type="submit" size="lg">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
