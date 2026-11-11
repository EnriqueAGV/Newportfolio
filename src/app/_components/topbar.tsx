"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The strip above every sheet. Its switch moves between the designed site
 * (Human) and the same content as plain markdown (AI). Both are real pages,
 * so the switch works without JavaScript and each mode has its own URL.
 */
export function Topbar() {
  const pathname = usePathname();
  const ai = pathname === "/ai";

  return (
    <div className="topbar">
      <div className="topbar-nav">
        <Link href="/" className="topbar-home">
          EG <span>Specimen No. 01</span>
        </Link>
        <Link href="/#about" className="topbar-link">
          About
        </Link>
      </div>

      <nav className="mode" aria-label="Reading mode">
        <span className="mode-label" aria-hidden="true">
          Read as
        </span>
        <Link href={ai ? "/" : pathname} aria-current={ai ? undefined : "page"}>
          Human
        </Link>
        <Link href="/ai" aria-current={ai ? "page" : undefined}>
          AI
        </Link>
      </nav>
    </div>
  );
}
