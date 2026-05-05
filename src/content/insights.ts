// Mock insights / blog posts — placeholder content for v0/Codex migration.

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Methodology" | "Research" | "Field Notes" | "Policy";
  readingTime: string;
  date: string;
  author: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "functionality-precedes-performance",
    title: "Why functionality must precede performance",
    excerpt:
      "If the everyday processes inside a school don’t work, no performance target — however ambitious — will hold. A field perspective.",
    category: "Methodology",
    readingTime: "7 min read",
    date: "2026-02-12",
    author: "Dr. Muavia Gallie",
    body: [
      "Across two decades of working with South African districts and schools, one pattern is unmissable: the system that produces a result is the only thing that can change the result. When we ask schools to perform without first asking whether they function, we are asking for outputs the system cannot produce.",
      "Functionality is not a soft prelude to performance — it is the precondition. Reliable timetabling, predictable assessment, document control, and basic record-keeping are not bureaucratic luxuries. They are the load-bearing walls.",
      "The Quality Improvement cycle treats this seriously. Case Analysis surfaces what actually works. Input is calibrated to the level the school has actually reached. Process makes the small things repeatable. Only then do Output and Impact start to behave.",
    ],
  },
  {
    slug: "school-functionality-index-2026",
    title: "Reading the School Functionality Index in 2026",
    excerpt:
      "An updated lens on the SFI questionnaire and the dimensions that best predict sustained improvement.",
    category: "Research",
    readingTime: "10 min read",
    date: "2026-01-28",
    author: "EMU Research",
    body: [
      "The SFI was developed inside Dr. Gallie’s doctoral thesis as a way to make functionality observable — to give school leaders an honest baseline of what is in place and what isn’t.",
      "In 2026 the dimensions that most reliably predict improvement remain unsurprising: leadership rhythm, document control, teacher attendance, assessment integrity, and parent communication.",
      "We share five practical reads of the SFI you can run in a single morning with a school leadership team.",
    ],
  },
  {
    slug: "data-driven-without-dashboards",
    title: "Data-driven, without the dashboards",
    excerpt:
      "Most schools don’t need another dashboard — they need a single number, defended honestly. A note on evidence discipline.",
    category: "Field Notes",
    readingTime: "5 min read",
    date: "2026-01-05",
    author: "EMU Practice",
    body: [
      "It is tempting to equate ‘data-driven’ with ‘instrumented’. In our work the opposite is usually true: the schools that improve fastest are the ones that pick one or two numbers, agree on the definition, and defend them every week.",
      "Dashboards come later, if at all. The first job is to make evidence socially safe to talk about.",
    ],
  },
  {
    slug: "from-systems-to-systemic",
    title: "From systems thinking to systemic thinking",
    excerpt:
      "‘Systems’, ‘systematic’ and ‘systemic’ are not the same word. Why the distinction matters in education work.",
    category: "Methodology",
    readingTime: "6 min read",
    date: "2025-12-14",
    author: "Dr. Muavia Gallie",
    body: [
      "Systemic thinking is the discipline of seeing how the parts interact — and accepting that to change an outcome we must change the system that produces it.",
      "It is distinct from systems thinking (a body of theory) and from systematic thinking (a step-by-step procedure). In education work the distinction is not academic — it determines whether an intervention actually moves anything.",
    ],
  },
];
