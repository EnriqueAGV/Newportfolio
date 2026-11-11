import { buildAiVersion } from "~/content/ai-version";

export const dynamic = "force-static";

/** The AI version as a raw markdown file, for agents and for downloading. */
export function GET() {
  return new Response(buildAiVersion(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
