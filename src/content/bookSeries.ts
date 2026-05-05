// "Library of Excellence" — primary conversion page content.
// TODO: replace placeholder titles/descriptions with real catalog.

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  status: "Available" | "Preorder" | "Forthcoming";
  cover: string;
  description: string;
  chapters: string[];
};

export const librarySeries = {
  name: "The Library of Excellence",
  tagline: "A working library on the discipline of quality improvement in education.",
  intro:
    "The Library of Excellence collects EMU’s methodology in book form — the doctrine, the diagnostics, the worked examples and the field notes. Each volume is a working manual: built to be marked up, argued with, and used in district offices, school staff rooms and university seminars.",
} as const;

export const books: Book[] = [
  {
    slug: "functionality-precedes-performance",
    title: "Functionality Precedes Performance",
    subtitle: "A working theory of school improvement",
    author: "Dr. Muavia Gallie",
    status: "Preorder",
    cover:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80",
    description:
      "The flagship volume. The full argument for why functionality must come before performance, the evidence base behind the claim, and the operating model that follows from it.",
    chapters: [
      "The wrong question",
      "What functionality looks like",
      "The School Functionality Index",
      "Sequencing intervention",
      "What changes when leaders accept the sequence",
    ],
  },
  {
    slug: "the-qi-cycle",
    title: "The Quality Improvement Cycle",
    subtitle: "Case Analysis · Input · Process · Output · Impact",
    author: "Dr. Muavia Gallie",
    status: "Forthcoming",
    cover:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    description:
      "A practical manual for running the 5-stage QI cycle inside a district or school, with worked examples and review templates.",
    chapters: [
      "Case Analysis as discipline",
      "Calibrating Input",
      "Installing Process",
      "Reading Output honestly",
      "What Impact actually means",
    ],
  },
  {
    slug: "systemic-thinking-for-leaders",
    title: "Systemic Thinking for Education Leaders",
    subtitle: "Seeing the system that produces the result",
    author: "Dr. Muavia Gallie",
    status: "Forthcoming",
    cover:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=80",
    description:
      "A short, sharp briefing on systemic thinking and how it changes the way district and school leaders intervene.",
    chapters: [
      "Systems, systematic, systemic",
      "Mapping interactions",
      "Changing the system, not the symptom",
    ],
  },
];

export const endorsements = [
  {
    quote:
      "The clearest articulation of why so many of our well-funded interventions fail to move outcomes.",
    name: "Provincial Education Director",
    role: "Public sector",
  },
  {
    quote:
      "A working library — not a glossy one. We use it inside our weekly leadership meetings.",
    name: "School Principal",
    role: "Independent school",
  },
] as const;
