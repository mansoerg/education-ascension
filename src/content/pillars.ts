// Three Strategic Pillars — preserved verbatim from movingup.co.za archives.
// Doctrine. Do not rewrite the body copy.

export type Pillar = {
  slug: "data-driven" | "systemic-thinking" | "use-of-ict";
  number: string;
  title: string;
  short: string;
  body: string;
};

export const pillars: Pillar[] = [
  {
    slug: "data-driven",
    number: "01",
    title: "Data Driven",
    short:
      "An evidence-based decision-making process when analysing the challenges in education.",
    body: "The focus on a data-driven (evidence based) decision-making process when analysing the challenges in education in order to formulate a clear business case. As Dr Gallie reminds educationists — “without data, you are just another person with an opinion”. This approach links strongly with the School Functionality Index (SFI) and includes the development of scenario planning and its related construction of the ‘preferred future’.",
  },
  {
    slug: "systemic-thinking",
    number: "02",
    title: "Systemic Thinking",
    short:
      "A simple thinking technique for gaining systemic insight into complex situations and problems.",
    body: "Adopting a systemic thinking approach when analysing the challenges in education. “Systemic thinking is a simple thinking technique for gaining systemic insight into complex situations and problems” (Bartlett, 2001). This approach is distinct from the often-confused ‘systems thinking’ and ‘systematic thinking’. The fundamental assumption is that everything interacts within the things around it — to change outcomes we must change the system that underpins the situation.",
  },
  {
    slug: "use-of-ict",
    number: "03",
    title: "Use of ICT",
    short:
      "Helicopter, big-picture ICT tools that improve efficiency and effectiveness across the system.",
    body: "The utilisation of ‘helicopter’, ‘big picture’ Information and Communication Technology (ICT) tools to improve the efficiency and effectiveness of the education system, such as GIS and cellular technology. Where standard operating procedures don’t exist, ICT cannot be implemented immediately. Organisations must first establish stable, reliable procedures and processes — functionality has to precede performance.",
  },
];

export const corePrinciple = {
  title: "Functionality must precede Performance",
  body: "Stable systems, processes and procedures are the precondition for sustained gains in learning outcomes. Tools and interventions are matched to the level a school or district has actually reached — not the level it is asked to perform at.",
} as const;
