import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { PillarsGrid } from "@/components/sections/PillarsGrid";
import { MethodologyTimeline } from "@/components/sections/MethodologyTimeline";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { SignatureQuote } from "@/components/sections/SignatureQuote";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { BookSeriesSection } from "@/components/sections/BookSeriesSection";
import { CTASection } from "@/components/sections/CTASection";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { StatBand } from "@/components/sections/StatBand";
import { NewsletterStub } from "@/components/sections/NewsletterStub";
import { pillars } from "@/content/pillars";
import { qiStages } from "@/content/methodology";
import { caseStudies } from "@/content/caseStudies";
import { insights } from "@/content/insights";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Education Moving Up — Quality improvement for education systems" },
      {
        name: "description",
        content:
          "A South African research and advisory practice helping districts, schools and learners move from functionality to performance.",
      },
      {
        property: "og:title",
        content: "Education Moving Up — Quality improvement for education systems",
      },
      {
        property: "og:description",
        content:
          "Data-driven, systemic methods for moving education systems from functionality to performance.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Education Moving Up · Est. South Africa"
        title={
          <>
            Quality improvement for the systems that{" "}
            <span className="italic text-primary">teach a country.</span>
          </>
        }
        lede="We help districts, schools and learners move from functionality to performance — through data-driven decision-making, systemic thinking and the disciplined use of ICT."
        primaryCta={{ label: "Explore our methodology", href: "/methodology" }}
        secondaryCta={{ label: "Request a briefing", href: "/contact" }}
        imageSrc="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1100&q=80"
        imageAlt="A South African classroom with engaged learners"
      />
      <LogoStrip />
      <PillarsGrid
        pillars={pillars}
        lede="The three strategies Dr. Gallie set out two decades ago — preserved as written, applied with the tools of 2026."
      />
      <MethodologyTimeline stages={qiStages} />
      <FocusAreas />
      <SignatureQuote />
      <StatBand />
      <CaseStudiesSection items={caseStudies} limit={3} />
      <BookSeriesSection teaser />
      <InsightsSection items={insights} limit={3} lede="Field notes, methodology pieces and research from the practice." />
      <CTASection />
      <NewsletterStub />
    </>
  );
}
