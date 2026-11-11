import { education, experience, profile, skills } from "./profile";
import { samples } from "./samples";

/** Résumé bullets for each sample. Concept work says so in its own words. */
const work: Record<string, string[]> = {
  "one-app": [
    "Designed the whole product from discovery to launch for the One credit card (Banco Atlántida), with 1 PM, 1 PO and 10 developers",
    "Results in production: NPS 86; 46% of applicants reach an outcome; about 15 minutes from zero to card on the way",
    "Built the flow around trust: fees, limits and timelines are previewed, and every step says what happens next",
  ],
  "one-website": [
    "Main designer of the marketing site for One",
    "About 25,000 visitors in 6 months, 6.2% of whom started onboarding",
  ],
  "ruta-sv": [
    "Concept for a transit app for El Salvador, not shipped",
    "Informed by 4 rider interviews, 28 survey responses and contextual observation",
    "Designed landmark-based search, offline access to saved routes and tickets, and a cash payment option",
    "Accessibility spec: 4.5:1 contrast, 48dp touch targets, full screen-reader labelling, 85–200% dynamic type",
  ],
  dermacare: [
    "Concept for a skin-specialised pharmacy app, not shipped",
    "Prototype test: 20 of 23 people completed the skin assessment",
    "Survey: 36 of 38 people would trust it to recommend their skincare",
  ],
};

const range = (period: string) => period.replace(" — ", " to ");

/** The résumé as markdown, built from the same content as the site. */
export function buildAiVersion(): string {
  const lines: string[] = [];
  const add = (...l: string[]) => lines.push(...l);

  add(
    `# ${profile.name}`,
    "",
    `**${profile.role}**`,
    "",
    [
      profile.location,
      profile.email,
      profile.site.replace("https://", ""),
      profile.linkedin.replace("https://www.", "").replace(/\/$/, ""),
    ].join(" | "),
    "",
    "## Summary",
    "",
    profile.summary,
    "",
    "## Skills",
    "",
    ...skills.map((s) => `- **${s.group}:** ${s.items}`),
    `- **Languages:** ${profile.languages}`,
    "",
    "## Experience",
    "",
  );

  for (const job of experience) {
    add(
      `### ${job.role}`,
      "",
      `**${job.company}** | ${range(job.period)} | ${job.kind}`,
      "",
      ...job.points.map((p) => `- ${p}`),
      "",
    );
  }

  add("## Selected work", "");
  for (const s of samples) {
    add(
      `### ${s.title}`,
      "",
      `${s.status} | ${s.spec.replaceAll(" · ", ", ")}`,
      "",
      ...(work[s.slug] ?? []).map((w) => `- ${w}`),
      ...(s.href ? [`- Case study: ${profile.site}${s.href}`] : []),
      "",
    );
  }

  add("## Education", "");
  for (const e of education) {
    add(
      `### ${e.title}${e.note ? ` (${e.note})` : ""}`,
      "",
      `**${e.school}** | ${range(e.period)}`,
      "",
    );
  }

  return lines.join("\n").trimEnd() + "\n";
}
