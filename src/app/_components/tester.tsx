"use client";

import { useId, useState } from "react";

import {
  CORNERS,
  DENSITIES,
  INKS,
  PRESETS,
  VOICES,
} from "~/specimen/settings";
import { useSpecimen } from "./specimen-provider";

const CONTROLS = [
  { key: "voice", label: "Voice", stops: VOICES },
  { key: "density", label: "Density", stops: DENSITIES },
  { key: "corner", label: "Corner", stops: CORNERS },
  { key: "ink", label: "Ink", stops: INKS },
] as const;

export function Tester() {
  const { settings, edition, preset, set, applyPreset } = useSpecimen();
  const [open, setOpen] = useState(false);
  // The invitation stops nudging once someone has opened the tester.
  const [used, setUsed] = useState(false);
  const panelId = useId();

  return (
    <aside
      className="tester"
      data-open={open}
      data-used={used}
      aria-label="Specimen tester"
    >
      <button
        type="button"
        className="tester-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={
          open ? "Close the tester" : "Open the tester and restyle this site"
        }
        onClick={() => {
          setOpen((o) => !o);
          setUsed(true);
        }}
      >
        <span className="tester-tag">
          {open ? (
            "Tester"
          ) : (
            <>
              <span className="cue-click">Click me</span>
              <span className="cue-tap">Tap me</span>
              <span className="tester-arrow">↑</span>
            </>
          )}
        </span>
        <span className="tester-edition">
          {open ? (
            edition
          ) : (
            <>
              Restyle this site <span>· {edition}</span>
            </>
          )}
        </span>
        <span className="tester-chevron" aria-hidden="true">
          {open ? "Close" : "Open"}
        </span>
      </button>

      <div id={panelId} className="tester-panel" hidden={!open}>
        <div className="tester-row" role="group" aria-label="Editions">
          <span className="tester-label">Edition</span>
          <div className="stops">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                aria-pressed={preset === p.id}
                onClick={() => applyPreset(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {CONTROLS.map((control) => (
          <div
            key={control.key}
            className="tester-row"
            role="group"
            aria-label={control.label}
          >
            <span className="tester-label">{control.label}</span>
            <div className="stops">
              {control.stops.map((stop) => (
                <button
                  key={stop.id}
                  type="button"
                  aria-pressed={settings[control.key] === stop.id}
                  onClick={() => set(control.key, stop.id)}
                >
                  {stop.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
