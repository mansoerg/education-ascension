import type { Person } from "@/content/team";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function PersonCard({ person }: { person: Person }) {
  return (
    <article className="flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-hairline bg-muted">
        {person.photo && (
          <img
            src={person.photo}
            alt={`Portrait of ${person.name}`}
            loading="lazy"
            className="h-full w-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-500"
          />
        )}
      </div>
      <h3 className="mt-5 font-serif text-xl text-foreground">{person.name}</h3>
      <p className="text-sm text-muted-foreground">{person.title}</p>
      <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{person.bio}</p>
    </article>
  );
}

export function TeamGrid({
  people,
  eyebrow = "Practice",
  title = "The team behind the work.",
  lede,
}: {
  people: Person[];
  eyebrow?: string;
  title?: string;
  lede?: string;
}) {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow={eyebrow} title={title} lede={lede} />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p) => (
            <PersonCard key={p.slug} person={p} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function FounderFeature({ founder }: { founder: Person }) {
  return (
    <Section tone="muted">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-hairline bg-card">
            {founder.photo && (
              <img
                src={founder.photo}
                alt={`Portrait of ${founder.name}`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div>
            <p className="eyebrow mb-4">Founder</p>
            <h2 className="display-serif text-3xl md:text-5xl text-foreground">
              {founder.name}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">{founder.title}</p>
            <p className="mt-6 text-base md:text-lg text-foreground/85 leading-relaxed">
              {founder.bio}
            </p>
            <ul className="mt-8 space-y-3">
              {founder.credentials.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-foreground/80">
                  <span aria-hidden className="text-accent">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
