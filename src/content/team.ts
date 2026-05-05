export type Person = {
  slug: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  photo?: string;
};

export const founder: Person = {
  slug: "muavia-gallie",
  name: "Dr. Muavia Gallie",
  title: "Founder & Lead Strategist",
  bio: "Dr. Gallie is a South African education quality strategist with more than two decades of practice across districts, schools and classrooms. His doctoral work produced the School Functionality Index, the diagnostic instrument that anchors much of EMU’s practice. He is best known for the discipline he insists on: ‘without data, you are just another person with an opinion’.",
  credentials: [
    "PhD in Education — School Functionality Index",
    "Architect of the Quality Improvement 5-stage model",
    "Author, Library of Excellence (forthcoming)",
  ],
  photo:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
};

export const team: Person[] = [
  {
    slug: "lead-research",
    name: "Dr. N. Mokoena",
    title: "Director of Research",
    bio: "Leads EMU’s research programme, with a focus on functionality measurement and longitudinal evaluation of district-level interventions.",
    credentials: ["PhD, Education Policy", "Former district director"],
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "head-practice",
    name: "T. van Zyl",
    title: "Head of Practice — Districts",
    bio: "Runs district-level engagements across the QI cycle, from case analysis through to impact review.",
    credentials: ["MBA", "20 years in public-sector consulting"],
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "head-data",
    name: "S. Naidoo",
    title: "Head of Data & ICT",
    bio: "Designs the ‘helicopter view’ data and ICT layer for our district and metro engagements, including GIS and mobile collection.",
    credentials: ["MSc, Information Systems", "GIS specialist"],
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "lead-learning",
    name: "K. Dlamini",
    title: "Lead — Learning Labs",
    bio: "Leads in-classroom improvement labs with subject teachers across primary and secondary phases.",
    credentials: ["MEd, Curriculum Studies", "Former HOD, Mathematics"],
    photo:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80",
  },
];
