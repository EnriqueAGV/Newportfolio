"use client";

import Link from "next/link";

import { samples } from "~/content/samples";
import { useSpecimen } from "./specimen-provider";

export function SampleIndex() {
  const { preset, applyPreset } = useSpecimen();

  return (
    <section className="index" aria-labelledby="index-title">
      <div className="index-head">
        <h2 id="index-title">Index of samples</h2>
        <p>Launched work first. Concepts are marked as concepts.</p>
      </div>

      <ol className="samples">
        {samples.map((sample) => {
          const active = preset === sample.preset;
          return (
            <li key={sample.slug} className="sample">
              <span className="sample-no">{sample.number}</span>

              <div className="sample-body">
                <h3 className="sample-title">
                  {sample.href ? (
                    <Link href={sample.href}>
                      {sample.title}
                      <span aria-hidden="true"> →</span>
                    </Link>
                  ) : (
                    sample.title
                  )}
                </h3>
                <p className="sample-line">{sample.line}</p>
                <p className="sample-spec">{sample.spec}</p>
              </div>

              <div className="sample-side">
                <span
                  className="stamp"
                  data-status={sample.status.toLowerCase()}
                >
                  {sample.status}
                </span>
                <button
                  type="button"
                  className="setin"
                  aria-pressed={active}
                  onClick={() => applyPreset(active ? "designer" : sample.preset)}
                >
                  {active
                    ? "Back to designer's cut"
                    : `Set the book in ${sample.presetName}`}
                </button>
              </div>

              <p className="sample-figure">
                <span className="figure">{sample.figure}</span>
                <span className="figure-label">
                  {sample.figureLabel}
                  <span className="figure-basis">{sample.basis}</span>
                </span>
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
