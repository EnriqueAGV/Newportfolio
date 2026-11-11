import { type Metadata } from "next";

import { AiVersion } from "~/app/_components/ai-version";
import { buildAiVersion } from "~/content/ai-version";

export const metadata: Metadata = {
  title: "Résumé, AI version — Enrique García",
  description:
    "Enrique García's résumé as plain markdown, ready to paste into a chatbot.",
};

export default function AiMode() {
  return (
    <main className="book sheet">
      <h1 className="block-head ai-title">
        <span>MD</span> Résumé
      </h1>
      <AiVersion markdown={buildAiVersion()} />
    </main>
  );
}
