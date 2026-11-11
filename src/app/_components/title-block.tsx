"use client";

import { useSpecimen } from "./specimen-provider";

/** The drawing's title block. The last cell always reports the current cut. */
export function TitleBlock({
  cells,
}: {
  cells: { label: string; value: string }[];
}) {
  const { edition } = useSpecimen();

  return (
    <dl className="titleblock">
      {cells.map((cell) => (
        <div key={cell.label}>
          <dt>{cell.label}</dt>
          <dd>{cell.value}</dd>
        </div>
      ))}
      <div>
        <dt>Cut</dt>
        <dd aria-live="polite">{edition}</dd>
      </div>
    </dl>
  );
}
