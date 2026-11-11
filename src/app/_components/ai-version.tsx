"use client";

import { useRef, useState } from "react";

export function AiVersion({ markdown }: { markdown: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number | undefined>(undefined);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setState("copied");
    } catch {
      // Clipboard access can be blocked; the text below stays selectable.
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2400);
  };

  const words = markdown.trim().split(/\s+/).length;

  return (
    <div className="ai">
      <div className="ai-intro">
        <p className="ai-lede">
          My résumé as markdown. Paste it into a chatbot and ask it anything
          about my work.
        </p>
        <div className="ai-actions">
          <button type="button" className="btn" onClick={copy}>
            {state === "copied" ? "Copied" : "Copy markdown"}
          </button>
          <a className="btn btn-ghost" href="/ai.md" download="enrique-garcia-resume.md">
            Download .md
          </a>
        </div>
        <p className="ai-meta" aria-live="polite">
          {state === "failed"
            ? "Couldn't reach the clipboard. Select the text and copy it."
            : `${words} words · Built from the same content as this site`}
        </p>
      </div>

      <pre className="ai-preview" tabIndex={0} aria-label="Résumé, markdown">
        {markdown}
      </pre>
    </div>
  );
}
