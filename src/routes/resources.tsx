import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ResourcesHub } from "@/components/sections/ResourcesHub";
import { SFIToolCard } from "@/components/sections/SFIToolCard";
import { NewsletterStub } from "@/components/sections/NewsletterStub";
import { resources } from "@/content/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Education Moving Up" },
      {
        name: "description",
        content:
          "Frameworks, whitepapers, briefings and tools — including the School Functionality Index — from the EMU practice.",
      },
      { property: "og:title", content: "Resources — Education Moving Up" },
      {
        property: "og:description",
        content:
          "The working library behind the EMU practice. Open where it can be, gated where it should be.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <Hero
        eyebrow="Resources"
        title="A working library, not a glossy one."
        lede="The frameworks, briefings and tools we actually use in the field — including the School Functionality Index."
      />
      <SFIToolCard />
      <ResourcesHub
        resources={resources.filter((r) => r.slug !== "school-functionality-index")}
        eyebrow="Library"
        title="Frameworks, whitepapers and briefings."
        lede="Open where it can be, gated where it should be."
      />
      <NewsletterStub />
    </>
  );
}
