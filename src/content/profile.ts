export const profile = {
  name: "Enrique García",
  role: "Product Designer",
  location: "San Salvador, El Salvador",
  email: "contact@enriqueagv.com",
  site: "https://enriqueagv.com",
  linkedin: "https://www.linkedin.com/in/enrique-agv/",
  x: "https://x.com/enrique_garciav",
  github: "https://github.com/Kikeagv",
  summary:
    "Product designer working since 2020, mostly on mobile products in fintech. I design end to end: research, flows, UX writing, UI, design systems and build QA with engineering.",
  languages: "Spanish (native), English (B2, professional working proficiency)",
};

export type Job = {
  period: string;
  role: string;
  company: string;
  kind: string;
  text: string;
  points: string[];
};

export const experience: Job[] = [
  {
    period: "Sep 2023 — Present",
    role: "UX/UI Analyst",
    company: "Banco Atlántida",
    kind: "Full-time",
    text: "End-to-end UX/UI for core retail banking products. Designed the One app from concept to launch and built the design systems shared by the Atlántida and One brands.",
    points: [
      "Designed the One app from concept to launch",
      "Built and maintain cross-brand design systems: tokens, components and guidelines for Atlántida and One",
      "Planned and ran user interviews and usability tests, and turned them into flows, prototypes and developer-ready specs",
      "Held implementation quality through design reviews, detailed Figma handoff and hands-on QA with engineering",
      "Designed for real conditions: variable connectivity, error states, loading states and edge cases",
    ],
  },
  {
    period: "Mar 2020 — Apr 2023",
    role: "UX/UI Designer",
    company: "BlueStar",
    kind: "Full-time",
    text: "The full product design cycle across several digital products, from discovery and user research to prototypes and developer handoff.",
    points: [
      "Shipped features end to end for mobile and web: discovery, flows, high-fidelity UI, prototypes and handoff",
      "Ran user interviews and usability tests, and iterated on what they showed",
      "Delivered developer-ready specs covering edge cases, component states and interaction patterns",
      "Worked with engineering through QA to keep the build faithful to the design",
    ],
  },
  {
    period: "Feb 2022 — Jul 2022",
    role: "Web Designer",
    company: "Ministry of Economy, El Salvador",
    kind: "Internship",
    text: "Designed and built internal pages for a government website, working with designers, developers and public-sector stakeholders.",
    points: [
      "Designed and developed internal pages for a major government website",
      "Worked with designers, developers and government stakeholders",
    ],
  },
];

export type Study = {
  period: string;
  title: string;
  school: string;
  note?: string;
};

export const education: Study[] = [
  {
    period: "2021 — 2025",
    title: "Bachelor of Engineering in Computer Science",
    school: "Universidad Don Bosco",
  },
  {
    period: "2019 — 2020",
    title: "Product Design Certification",
    school: "Platzi",
  },
];

export const skills: { group: string; items: string }[] = [
  { group: "Design tools", items: "Figma, After Effects, Lottie" },
  {
    group: "UX methods",
    items:
      "User research, usability testing, user flows, wireframing, A/B testing",
  },
  {
    group: "Design systems",
    items:
      "Token architecture, component libraries, pattern documentation, iOS Human Interface Guidelines, Material Design",
  },
  {
    group: "Collaboration",
    items: "Developer handoff, design QA, Agile and Scrum, stakeholder management",
  },
  {
    group: "Technical",
    items: "React Native, Tailwind CSS, Amplitude, Git",
  },
];
