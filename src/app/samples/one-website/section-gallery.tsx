"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type SectionCapture = {
  file: string;
  label: string;
  note: string;
  fullHeight: number;
  lead?: boolean;
};

export function SectionGallery({
  sections,
}: {
  sections: SectionCapture[];
}) {
  const [active, setActive] = useState<SectionCapture | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openScreenshot(section: SectionCapture) {
    setActive(section);
    dialogRef.current?.showModal();
  }

  function closeScreenshot() {
    if (dialogRef.current?.open) dialogRef.current.close();
  }

  function renderSection(section: SectionCapture, no: number, sizes: string) {
    return (
      <figure className="shot" key={section.file}>
        <button
          type="button"
          className="screenshot-trigger"
          onClick={() => openScreenshot(section)}
          aria-label={`View a larger screenshot of ${section.label}`}
        >
          <Image
            src={`/samples/one-website/${section.file}.jpg`}
            alt={`The top of the ${section.label} page on the One website.`}
            width={1439}
            height={1000}
            sizes={sizes}
          />
        </button>
        <figcaption>
          <span className="shot-no">{`0${no}`}</span>
          <span className="shot-label">{section.label}</span>
          <span className="shot-note">{section.note}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <>
      <div className="gallery gallery-lead">
        {sections
          .filter((section) => section.lead)
          .map((section, index) =>
            renderSection(section, index + 1, "(max-width: 860px) 100vw, 46vw"),
          )}
      </div>
      <div className="gallery">
        {sections
          .filter((section) => !section.lead)
          .map((section, index) =>
            renderSection(
              section,
              index + 3,
              "(max-width: 860px) 45vw, 18vw",
            ),
          )}
      </div>
      <p className="gallery-note">Click a capture to view the full page enlarged.</p>

      <dialog
        ref={dialogRef}
        className="screenshot-dialog"
        aria-labelledby="screenshot-dialog-title"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeScreenshot();
        }}
      >
        <div className="screenshot-dialog-panel">
          <div className="screenshot-dialog-toolbar">
            <h2 id="screenshot-dialog-title">
              {active ? `${active.label} — full page` : "Full page"}
            </h2>
            <button type="button" onClick={closeScreenshot}>
              <span aria-hidden="true">×</span>
              Close
            </button>
          </div>
          <div className="screenshot-dialog-scroll">
            {active && (
              <Image
                src={`/samples/one-website/${active.file}-full.jpg`}
                alt={`Full-page screenshot of ${active.label}.`}
                width={1439}
                height={active.fullHeight}
                sizes="(max-width: 860px) 94vw, 1400px"
                className="screenshot-dialog-image"
              />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
