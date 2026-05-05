export type Service = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  level: "District" | "School" | "Learning";
};

export const services: Service[] = [
  {
    slug: "district-quality-management",
    title: "District Quality Management",
    summary:
      "Embedding the 5-stage Quality Improvement cycle inside district offices so that policy intent translates into measurable school-level change.",
    outcomes: [
      "District-wide case analysis and baseline diagnostic",
      "Standard operating procedures across schools",
      "Performance dashboards and review cadence",
    ],
    level: "District",
  },
  {
    slug: "school-functionality-audit",
    title: "School Functionality Audit",
    summary:
      "Applying the School Functionality Index (SFI) to surface the constraints that hold school performance in place — and the path to remove them.",
    outcomes: [
      "SFI assessment with school leadership",
      "Functionality-to-Performance roadmap",
      "Coached implementation review",
    ],
    level: "School",
  },
  {
    slug: "learning-improvement-labs",
    title: "Learning Improvement Labs",
    summary:
      "In-classroom improvement cycles that focus on the practices most likely to shift learner understanding, retention and application.",
    outcomes: [
      "Subject-level practice audit",
      "Teacher coaching sprints",
      "Learner outcome tracking",
    ],
    level: "Learning",
  },
  {
    slug: "ict-and-data-systems",
    title: "ICT & Data Systems",
    summary:
      "Designing the ‘helicopter view’ ICT and data infrastructure — from GIS to mobile — that lets leaders see the whole system.",
    outcomes: [
      "Data architecture review",
      "GIS / mobile tooling deployment",
      "Decision-maker dashboards",
    ],
    level: "District",
  },
  {
    slug: "scenario-planning",
    title: "Scenario Planning & Strategy",
    summary:
      "Scenario-based strategy work that constructs a credible ‘preferred future’ for an education system and the steps to reach it.",
    outcomes: [
      "Scenario set with stakeholders",
      "Preferred-future roadmap",
      "Risk and assumption ledger",
    ],
    level: "District",
  },
  {
    slug: "leadership-briefings",
    title: "Executive & Board Briefings",
    summary:
      "Tightly-scoped briefings for principals, district directors and boards on what the evidence is actually saying.",
    outcomes: [
      "Briefing pack tailored to your data",
      "Half-day working session",
      "Decision register",
    ],
    level: "School",
  },
];

export const engagementSteps = [
  {
    step: "01",
    title: "Case Analysis Briefing",
    body: "A short, structured conversation to understand your context and what counts as success.",
  },
  {
    step: "02",
    title: "Diagnostic & Proposal",
    body: "We assemble the evidence, map the system, and propose the engagement scope and shape.",
  },
  {
    step: "03",
    title: "Engagement",
    body: "We work alongside your team through the QI cycle — Input, Process, Output, Impact.",
  },
  {
    step: "04",
    title: "Hand-back & Capability",
    body: "We hand back stronger procedures and a team able to run the cycle without us.",
  },
] as const;
