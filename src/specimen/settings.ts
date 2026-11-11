/**
 * The tester's vocabulary. Every control has a few fixed stops, so no
 * combination can produce an undesigned page. The values themselves live in
 * globals.css, keyed by the data attributes these ids are written to.
 */

export const VOICES = [
  { id: "grotesque", label: "Grotesque", face: "Inter Tight" },
  { id: "geometric", label: "Geometric", face: "Poppins" },
  { id: "rounded", label: "Rounded", face: "Figtree" },
  { id: "serif", label: "Serif", face: "Instrument Serif" },
] as const;

export const DENSITIES = [
  { id: "airy", label: "Airy" },
  { id: "regular", label: "Regular" },
  { id: "compact", label: "Compact" },
] as const;

export const CORNERS = [
  { id: "sharp", label: "0" },
  { id: "soft", label: "10" },
  { id: "round", label: "24" },
] as const;

export const INKS = [
  { id: "draft", label: "Draft" },
  { id: "one", label: "One" },
  { id: "ruta", label: "Ruta SV" },
  { id: "derma", label: "Dermacare" },
] as const;

export type Settings = {
  voice: (typeof VOICES)[number]["id"];
  density: (typeof DENSITIES)[number]["id"];
  corner: (typeof CORNERS)[number]["id"];
  ink: (typeof INKS)[number]["id"];
};

export type PresetId = "designer" | "one" | "ruta-sv" | "dermacare";

export const PRESETS: { id: PresetId; label: string; settings: Settings }[] = [
  {
    id: "designer",
    label: "Designer's cut",
    settings: {
      voice: "grotesque",
      density: "regular",
      corner: "sharp",
      ink: "draft",
    },
  },
  {
    id: "one",
    label: "Set in One",
    settings: {
      voice: "geometric",
      density: "regular",
      corner: "round",
      ink: "one",
    },
  },
  {
    id: "ruta-sv",
    label: "Set in Ruta SV",
    settings: { voice: "rounded", density: "airy", corner: "soft", ink: "ruta" },
  },
  {
    id: "dermacare",
    label: "Set in Dermacare",
    settings: { voice: "serif", density: "airy", corner: "soft", ink: "derma" },
  },
];

export const DEFAULT_SETTINGS: Settings = PRESETS[0]!.settings;

export function matchPreset(s: Settings): PresetId | null {
  const hit = PRESETS.find(
    (p) =>
      p.settings.voice === s.voice &&
      p.settings.density === s.density &&
      p.settings.corner === s.corner &&
      p.settings.ink === s.ink,
  );
  return hit?.id ?? null;
}

function labelOf<T extends { id: string; label: string }>(
  list: readonly T[],
  id: string,
) {
  return list.find((x) => x.id === id)?.label ?? id;
}

/** The edition name printed on the cover and in the tester. */
export function editionName(s: Settings): string {
  const preset = matchPreset(s);
  if (preset) return PRESETS.find((p) => p.id === preset)!.label;
  return [
    labelOf(DENSITIES, s.density),
    labelOf(VOICES, s.voice),
    `R${labelOf(CORNERS, s.corner)}`,
    labelOf(INKS, s.ink),
  ].join(" · ");
}

export function voiceFace(s: Settings): string {
  return VOICES.find((v) => v.id === s.voice)?.face ?? "";
}
