import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { signatureQuote } from "@/content/site";

export function SignatureQuote({
  text = signatureQuote.text,
  attribution = signatureQuote.attribution,
  role = signatureQuote.role,
}: {
  text?: string;
  attribution?: string;
  role?: string;
}) {
  return (
    <Section tone="ink">
      <Container>
        <figure className="max-w-4xl mx-auto text-center">
          <span aria-hidden className="font-serif text-6xl md:text-8xl text-background/30 leading-none">
            “
          </span>
          <blockquote className="-mt-6 font-serif text-2xl md:text-4xl lg:text-5xl leading-tight text-background">
            {text}
          </blockquote>
          <figcaption className="mt-10 text-background/70">
            <span className="font-medium text-background">{attribution}</span>
            <span className="block text-sm mt-1">{role}</span>
          </figcaption>
        </figure>
      </Container>
    </Section>
  );
}
