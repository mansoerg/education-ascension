// Brand strings, navigation, and contact details.
// Contact details sourced from 2016 Wayback capture — TODO: confirm with client.

export const site = {
  name: "Education Moving Up",
  shortName: "EMU",
  tagline: "Quality improvement for education systems.",
  description:
    "Education Moving Up is a South African research and advisory practice helping districts, schools and learners move from functionality to performance through data-driven, systemic methods.",
  url: "https://movingup.co.za",
  contact: {
    phone: "+27 12 370 3600",
    cell: "+27 82 822 9494",
    fax: "+27 86 672 0520",
    email: "muavia@movingup.co.za",
    address: "Pretoria, South Africa",
  },
  social: {
    linkedin: "#",
    twitter: "#",
  },
} as const;

export const primaryNav = [
  { label: "About", href: "/about" },
  { label: "Methodology", href: "/methodology" },
  { label: "Services", href: "/services" },
  { label: "Insights", href: "/insights" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Library", href: "/library" },
  { label: "Team", href: "/team" },
] as const;

export const footerNav = {
  Practice: [
    { label: "About", href: "/about" },
    { label: "Methodology", href: "/methodology" },
    { label: "Team", href: "/team" },
  ],
  Engage: [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  Library: [
    { label: "Insights", href: "/insights" },
    { label: "Resources", href: "/resources" },
    { label: "Library of Excellence", href: "/library" },
  ],
} as const;

export const signatureQuote = {
  text: "Without data, you are just another person with an opinion.",
  attribution: "Dr. Muavia Gallie",
  role: "Founder, Education Moving Up",
} as const;

// TODO: confirm real impact numbers with client.
export const impactStats = [
  { value: "20+", label: "Years of practice" },
  { value: "120+", label: "School improvement engagements" },
  { value: "9", label: "Provinces reached across South Africa" },
  { value: "5", label: "Stages in the Quality Improvement model" },
] as const;
