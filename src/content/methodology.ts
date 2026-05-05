// Quality Improvement model — 5 stages, preserved verbatim where possible.

export type QIStage = {
  number: string;
  title: string;
  short: string;
  body: string;
};

export const qiStages: QIStage[] = [
  {
    number: "01",
    title: "Case Analysis",
    short: "Diagnose the situation with evidence, not opinion.",
    body: "We begin every engagement with rigorous, data-driven case analysis — defining the problem, mapping the system, and surfacing the constraints that hold current performance in place.",
  },
  {
    number: "02",
    title: "Input",
    short: "Match the right resources to the diagnosed need.",
    body: "Inputs are designed against the case: people, time, materials, ICT, training. Functionality always precedes performance — we calibrate inputs to the system’s actual readiness.",
  },
  {
    number: "03",
    title: "Process",
    short: "Establish reliable processes and standard procedures.",
    body: "Quality improvement lives in repeatable processes. We instal, document and stabilise the procedures that allow inputs to translate predictably into outputs.",
  },
  {
    number: "04",
    title: "Output",
    short: "Measure what the system actually produces.",
    body: "Outputs are tracked against the case analysis with the same evidence discipline that opened the engagement — not against generic benchmarks.",
  },
  {
    number: "05",
    title: "Impact",
    short: "Evaluate change in learning, schooling and district performance.",
    body: "Impact is measured at the level that matters: improvement in learners, schools and the district system as a whole — feeding the next cycle of case analysis.",
  },
];

export const focusAreas = [
  {
    title: "District",
    body: "We support districts to manage projects with quality across schools — turning policy intent into operational reality.",
  },
  {
    title: "School",
    body: "We work alongside school leaders to install the procedures and habits that move a school from functional to high-performing.",
  },
  {
    title: "Learning",
    body: "Inside the classroom we focus on the practices that change what learners actually understand, retain and apply.",
  },
] as const;

export const visionMission = {
  // Verbatim from archives.
  text: "Our aim is to support the quality improvement of project management at all levels (district, school and learning) as displayed in the three focus areas of our business. The quality improvement approach will focus on five stages in the project management process, namely Case Analysis, Input, Process, Output and Impact of the projects.",
} as const;
