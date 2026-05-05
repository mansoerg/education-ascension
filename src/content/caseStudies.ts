// Mock case studies — placeholder content for v0/Codex migration.
// TODO: replace with real engagements before launch.

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  level: "District" | "School" | "Learning";
  period: string;
  summary: string;
  metrics: { value: string; label: string }[];
  body: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "gauteng-district-turnaround",
    title: "Turning a Gauteng district from functional to performing",
    client: "Provincial Education District",
    level: "District",
    period: "2024 – 2025",
    summary:
      "An 18-month engagement applying the 5-stage QI cycle across 42 schools, anchored on a district-wide SFI baseline.",
    metrics: [
      { value: "42", label: "Schools in scope" },
      { value: "31%", label: "Lift in Grade 9 maths pass rate" },
      { value: "9 → 4", label: "Procedural defects per school audit" },
    ],
    body: [
      "The district leadership commissioned a case analysis after three years of flat outcomes despite increased budget allocation. The diagnostic revealed that variance in school functionality — not capacity or funding — explained most of the underperformance.",
      "We installed a district-wide procedural baseline, built a single weekly review cadence, and coached district officials through the QI cycle for two full quarters before stepping back.",
    ],
  },
  {
    slug: "rural-school-functionality-rebuild",
    title: "Rebuilding functionality in a rural primary school",
    client: "Confidential — rural primary",
    level: "School",
    period: "2023 – 2024",
    summary:
      "An SFI-anchored, principal-led rebuild of timetabling, assessment integrity and parent communication.",
    metrics: [
      { value: "0 → 100%", label: "On-time period start rate" },
      { value: "+22%", label: "Average attendance" },
      { value: "11", label: "SOPs installed" },
    ],
    body: [
      "We began with a one-day SFI assessment with the principal and SMT. The dimensions of weakest functionality were not surprising to staff — but the explicit map of them changed the conversation.",
      "Six months of small, defended changes followed. By month nine the school was running predictably enough to begin work on learning quality.",
    ],
  },
  {
    slug: "ict-data-platform-deployment",
    title: "A helicopter-view data platform for a metro education office",
    client: "Metropolitan Education Office",
    level: "District",
    period: "2022 – 2023",
    summary:
      "Designing and deploying a GIS- and mobile-led data layer that gave officials a single view of every school in the metro.",
    metrics: [
      { value: "180+", label: "Schools instrumented" },
      { value: "1", label: "Source of truth (was 7)" },
      { value: "< 24h", label: "Data freshness" },
    ],
    body: [
      "The metro had seven overlapping data systems and no single map of where its schools were, how they were performing, or where to deploy support next.",
      "We rebuilt the layer around a GIS spine and a lightweight mobile data-collection app. Within a quarter, the office was making deployment decisions on a single weekly view.",
    ],
  },
];
