"use client";

import { useEffect, useRef, useState } from "react";

import { voiceFace } from "~/specimen/settings";
import { useSpecimen } from "./specimen-provider";
import type { Weather } from "~/server/weather";
import { LocalConditions } from "./local-conditions";
import { TitleBlock } from "./title-block";

type Metrics = { size: number; tracking: number; leading: number };

export function Cover({ weather }: { weather: Weather | null }) {
  const { settings } = useSpecimen();
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  // The caption under the name is measured from the name itself, so the
  // specimen always documents what is actually on screen.
  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    const measure = () => {
      const cs = getComputedStyle(el);
      const size = parseFloat(cs.fontSize);
      const spacing = parseFloat(cs.letterSpacing) || 0;
      const lineHeight = parseFloat(cs.lineHeight) || size;
      setMetrics({
        size: Math.round(size),
        tracking: Math.round((spacing / size) * 1000) / 10,
        leading: Math.round((lineHeight / size) * 100),
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [settings]);

  return (
    <header className="cover">
      <TitleBlock
        cells={[
          { label: "Sheet", value: "Spec—01" },
          { label: "Subject", value: "Product designer" },
          { label: "Samples", value: "04" },
        ]}
      />

      <h1 ref={nameRef} className="cover-name">
        Enrique <br className="name-break" />
        García
      </h1>

      <p className="dim" aria-hidden={metrics ? undefined : true}>
        <span className="dim-line" />
        <span className="dim-label">
          {voiceFace(settings)}
          {metrics
            ? ` / ${metrics.size}px / ${metrics.tracking}% tracking / ${metrics.leading}% leading`
            : ""}
        </span>
        <span className="dim-line" />
      </p>

      <div className="cover-foot">
        <p className="cover-intro">
        I design products for people who have good reasons not to trust them:
        credit, transit, health, etc.
        </p>
        <LocalConditions weather={weather} />
      </div>
    </header>
  );
}
