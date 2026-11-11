import "~/styles/globals.css";

import { type Metadata } from "next";
import {
  Figtree,
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter_Tight,
  Poppins,
} from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { SpecimenProvider } from "./_components/specimen-provider";
import { Tester } from "./_components/tester";
import { Topbar } from "./_components/topbar";

export const metadata: Metadata = {
  title: "Enrique García — Specimen No. 01",
  description:
    "Product designer. A specimen book of four samples: One app, One website, Ruta SV and Dermacare.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// The designer's cut.
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

// Voices used by the project editions; only fetched when a visitor picks one.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  preload: false,
});
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  preload: false,
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  preload: false,
});

const fonts = [interTight, plexMono, poppins, figtree, instrumentSerif]
  .map((f) => f.variable)
  .join(" ");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={fonts}
      data-voice="grotesque"
      data-density="regular"
      data-corner="sharp"
      data-ink="draft"
    >
      <body>
        <TRPCReactProvider>
          {/* The tester lives here so the chosen cut survives navigation. */}
          <SpecimenProvider>
            <Topbar />
            {children}
            <Tester />
          </SpecimenProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
