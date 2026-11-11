"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { flushSync } from "react-dom";

import {
  DEFAULT_SETTINGS,
  PRESETS,
  editionName,
  matchPreset,
  type PresetId,
  type Settings,
} from "~/specimen/settings";

type SpecimenContext = {
  settings: Settings;
  edition: string;
  preset: PresetId | null;
  set: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
  applyPreset: (id: PresetId) => void;
};

const Ctx = createContext<SpecimenContext | null>(null);

export function SpecimenProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);

  // The whole book is themed from four attributes on <html>; CSS does the rest.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.voice = settings.voice;
    root.dataset.density = settings.density;
    root.dataset.corner = settings.corner;
    root.dataset.ink = settings.ink;
  }, [settings]);

  // The edition voices are not preloaded. Fetch them once the page is idle so
  // switching edition never flashes a fallback typeface.
  useEffect(() => {
    const warm = () => {
      const root = getComputedStyle(document.documentElement);
      const faces: [string, string][] = [
        ["--font-poppins", "600"],
        ["--font-poppins", "400"],
        ["--font-figtree", "700"],
        ["--font-instrument-serif", "400"],
      ];
      for (const [name, weight] of faces) {
        const family = root.getPropertyValue(name).trim();
        if (family) void document.fonts.load(`${weight} 1em ${family}`);
      }
    };
    const timer = window.setTimeout(warm, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  // Every change is drawn, not swapped. A single control cross-fades; a whole
  // edition is wiped across the sheet like a new print being pulled.
  const commit = useCallback(
    (update: (s: Settings) => Settings, motion: "fade" | "wipe") => {
      const still = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const hidden = document.visibilityState !== "visible";
      if (still || hidden || !("startViewTransition" in document)) {
        setSettings(update);
        return;
      }
      const root = document.documentElement;
      root.dataset.motion = motion;
      const transition = document.startViewTransition(() => {
        flushSync(() => setSettings(update));
      });
      // A transition can be skipped (for example when the tab is hidden). The
      // change is still applied, so a skipped animation is not an error.
      const done = () => {
        delete root.dataset.motion;
      };
      transition.ready.catch(() => undefined);
      transition.updateCallbackDone.catch(() => undefined);
      transition.finished.then(done, done);
    },
    [],
  );

  const set = useCallback<SpecimenContext["set"]>(
    (key, value) => commit((s) => ({ ...s, [key]: value }), "fade"),
    [commit],
  );

  const applyPreset = useCallback(
    (id: PresetId) => {
      const preset = PRESETS.find((p) => p.id === id);
      if (preset) commit(() => preset.settings, "wipe");
    },
    [commit],
  );

  const value = useMemo(
    () => ({
      settings,
      edition: editionName(settings),
      preset: matchPreset(settings),
      set,
      applyPreset,
    }),
    [settings, set, applyPreset],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSpecimen() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSpecimen must be used inside SpecimenProvider");
  return ctx;
}
