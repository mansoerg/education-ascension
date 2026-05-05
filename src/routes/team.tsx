import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TeamGrid, FounderFeature } from "@/components/sections/TeamGrid";
import { CTASection } from "@/components/sections/CTASection";
import { team, founder } from "@/content/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Education Moving Up" },
      {
        name: "description",
        content:
          "Meet the EMU team. Founder Dr. Muavia Gallie and the practice leaders who run our district, school and learning engagements.",
      },
      { property: "og:title", content: "Team — Education Moving Up" },
      {
        property: "og:description",
        content:
          "A small, senior team — research-led and practice-tested — built around Dr. Muavia Gallie’s work.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <Hero
        eyebrow="Team"
        title="A small, senior team. Research-led. Practice-tested."
        lede="The EMU team is intentionally small. Every engagement is led by senior practitioners who have done the work themselves — in districts, schools and classrooms."
      />
      <FounderFeature founder={founder} />
      <TeamGrid people={team} eyebrow="Practice" title="Leadership team." />
      <CTASection
        title="Work alongside our team."
        body="If you’d like to discuss bringing EMU into your district or school, the briefing form is the right next step."
      />
    </>
  );
}
