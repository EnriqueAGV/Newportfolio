import type { PresetId } from "~/specimen/settings";

export type Sample = {
  slug: string;
  number: string;
  title: string;
  line: string;
  /** Launched work and concept work are always labelled as such. */
  status: "Launched" | "Concept";
  /** Where the headline figure comes from. */
  basis: string;
  figure: string;
  figureLabel: string;
  spec: string;
  preset: PresetId;
  presetName: string;
  /** Set once the sample's page exists; the index links to it. */
  href?: string;
};

export const samples: Sample[] = [
  {
    slug: "one-app",
    number: "01",
    title: "One app",
    line: "Trust in the first 5 minutes. Card on the way in about 15.",
    status: "Launched",
    basis: "Production",
    figure: "86",
    figureLabel: "NPS",
    spec: "Credit card onboarding · iOS and Android · Team of 12",
    preset: "one",
    presetName: "One",
    href: "/samples/one-app",
  },
  {
    slug: "one-website",
    number: "02",
    title: "One website",
    line: "No small print, no queues.",
    status: "Launched",
    basis: "Production, 6 months",
    figure: "6.2%",
    figureLabel: "of 25K visitors started onboarding",
    spec: "Marketing site · Web · Main designer",
    preset: "one",
    presetName: "One",
    href: "/samples/one-website",
  },
  {
    slug: "ruta-sv",
    number: "03",
    title: "Ruta SV",
    line: "What if a city's transit knowledge lived only in people's heads?",
    status: "Concept",
    basis: "Research",
    figure: "28",
    figureLabel: "survey responses",
    spec: "Transit app · Mobile, designed for offline use · 48dp targets, 4.5:1 contrast",
    preset: "ruta-sv",
    presetName: "Ruta SV",
    href: "/samples/ruta-sv",
  },
  {
    slug: "dermacare",
    number: "04",
    title: "Dermacare",
    line: "Skincare that starts with understanding, not selling.",
    status: "Concept",
    basis: "Survey",
    figure: "36/38",
    figureLabel: "would trust its recommendations",
    spec: "Skin pharmacy · Mobile e-commerce · Prototype tested with 23 people",
    preset: "dermacare",
    presetName: "Dermacare",
    href: "/samples/dermacare",
  },
];
