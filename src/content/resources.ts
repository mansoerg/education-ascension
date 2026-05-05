export type Resource = {
  slug: string;
  title: string;
  type: "Framework" | "Whitepaper" | "Tool" | "Briefing";
  summary: string;
  gated: boolean;
  format: string;
};

export const resources: Resource[] = [
  {
    slug: "school-functionality-index",
    title: "School Functionality Index (SFI)",
    type: "Tool",
    summary:
      "The diagnostic instrument developed inside Dr. Gallie’s doctoral thesis. A structured questionnaire that makes functionality observable and comparable.",
    gated: true,
    format: "Interactive tool",
  },
  {
    slug: "qi-cycle-framework",
    title: "Quality Improvement Cycle — Framework",
    type: "Framework",
    summary:
      "The 5-stage QI cycle (Case Analysis → Input → Process → Output → Impact) explained, with worked examples for district, school and learning levels.",
    gated: false,
    format: "PDF · 24 pages",
  },
  {
    slug: "functionality-before-performance",
    title: "Functionality before Performance — Whitepaper",
    type: "Whitepaper",
    summary:
      "Why systems must function before they can perform — and what changes inside a school when leaders accept the sequence.",
    gated: true,
    format: "PDF · 18 pages",
  },
  {
    slug: "systemic-thinking-primer",
    title: "Systemic Thinking — A Primer for Education Leaders",
    type: "Briefing",
    summary:
      "A short briefing on the distinction between systems, systematic and systemic thinking, and how to apply systemic insight in practice.",
    gated: false,
    format: "PDF · 8 pages",
  },
  {
    slug: "scenario-planning-template",
    title: "Scenario Planning — Working Template",
    type: "Framework",
    summary:
      "The working template we use to construct credible ‘preferred futures’ with district leadership teams.",
    gated: true,
    format: "Worksheet bundle",
  },
];
