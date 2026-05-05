import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/content/caseStudies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const item = caseStudies.find((c) => c.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.item.title} — EMU Case Study` },
          { name: "description", content: loaderData.item.summary },
          { property: "og:title", content: loaderData.item.title },
          { property: "og:description", content: loaderData.item.summary },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Case Study — EMU" }],
  }),
  notFoundComponent: () => (
    <Section>
      <Container>
        <h1 className="display-serif text-4xl">Case study not found</h1>
        <Link to="/case-studies" className="mt-6 inline-block underline">
          Back to case studies
        </Link>
      </Container>
    </Section>
  ),
  errorComponent: ({ error }) => (
    <Section>
      <Container>
        <h1 className="display-serif text-4xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
      </Container>
    </Section>
  ),
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { item } = Route.useLoaderData();
  return (
    <>
      <Section className="pt-12 md:pt-20 pb-10">
        <Container>
          <Link
            to="/case-studies"
            className="eyebrow inline-flex items-center gap-2 hover:text-foreground"
          >
            ← Case studies
          </Link>
          <article className="mt-10 max-w-4xl">
            <p className="font-mono text-xs tracking-widest text-muted-foreground">
              {item.level} · {item.period} · {item.client}
            </p>
            <h1 className="mt-5 display-serif text-4xl md:text-6xl text-foreground">
              {item.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              {item.summary}
            </p>

            <dl className="mt-10 grid gap-px bg-hairline border border-hairline rounded-lg overflow-hidden sm:grid-cols-3">
              {item.metrics.map((m) => (
                <div key={m.label} className="bg-card p-6">
                  <dt className="text-xs text-muted-foreground">{m.label}</dt>
                  <dd className="mt-2 font-serif text-2xl text-foreground">{m.value}</dd>
                </div>
              ))}
            </dl>

            <div className="prose-editorial mt-12 border-t border-hairline pt-10">
              {item.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
