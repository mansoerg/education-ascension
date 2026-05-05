import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/sections/CTASection";
import { insights } from "@/content/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const item = insights.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.item.title} — EMU Insights` },
          { name: "description", content: loaderData.item.excerpt },
          { property: "og:title", content: loaderData.item.title },
          { property: "og:description", content: loaderData.item.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Insight — EMU" }],
  }),
  notFoundComponent: () => (
    <Section>
      <Container>
        <h1 className="display-serif text-4xl">Article not found</h1>
        <Link to="/insights" className="mt-6 inline-block underline">
          Back to insights
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
  component: InsightDetail,
});

function InsightDetail() {
  const { item } = Route.useLoaderData();
  return (
    <>
      <Section className="pt-12 md:pt-20 pb-10">
        <Container>
          <Link
            to="/insights"
            className="eyebrow inline-flex items-center gap-2 hover:text-foreground"
          >
            ← Insights
          </Link>
          <article className="mt-10 max-w-3xl">
            <div className="flex items-center gap-3 text-xs">
              <span className="font-mono uppercase tracking-widest text-accent-foreground bg-accent/30 px-2 py-0.5 rounded">
                {item.category}
              </span>
              <span className="text-muted-foreground">{item.readingTime}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">
                {new Date(item.date).toLocaleDateString("en-ZA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="mt-6 display-serif text-4xl md:text-6xl text-foreground">
              {item.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              {item.excerpt}
            </p>
            <p className="mt-8 text-sm text-muted-foreground">By {item.author}</p>
            <div className="prose-editorial mt-12 border-t border-hairline pt-10">
              {item.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </article>
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
