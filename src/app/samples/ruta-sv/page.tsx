import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TitleBlock } from "~/app/_components/title-block";
import { samples } from "~/content/samples";

const sample = samples.find(({ slug }) => slug === "ruta-sv")!;

export const metadata: Metadata = {
  title: "Sample 03, Ruta SV — Enrique García",
  description:
    "A public transit app concept for El Salvador with landmark search, offline routes and tickets, and a cash payment option.",
};

const figures = [
  { value: sample.figure, label: sample.figureLabel, basis: "Research" },
  { value: "4", label: "rider interviews", basis: "Research" },
  { value: "48dp", label: "minimum touch target", basis: "Design spec" },
];

const spec = [
  { label: "Product", value: "Public transit app for El Salvador" },
  {
    label: "Role",
    value: "Product designer, from research to high-fidelity UI",
  },
  {
    label: "Platform",
    value: "Mobile, designed for offline access to saved routes and tickets",
  },
  {
    label: "Scope",
    value: "Rider research, trip planning, ticketing and design system",
  },
];

const screens = {
  home: {
    no: "01",
    file: "home-screen",
    label: "Find a route",
    note: "Search from your current location or revisit a recent destination.",
  },
  results: {
    no: "02",
    file: "route-results",
    label: "Compare routes",
    note: "Sort by time or transfers and compare fares.",
  },
  detail: {
    no: "03",
    file: "route-detail",
    label: "Read the route",
    note: "See the route on a map and follow the stops in order.",
  },
  alert: {
    no: "04",
    file: "home-alert",
    label: "Check a disruption",
    note: "A service alert names the affected route and explains the delay.",
  },
  purchase: {
    no: "05",
    file: "ticket-purchase",
    label: "Choose a ticket",
    note: "Single ride, day and week passes with card or cash at the terminal.",
  },
  tickets: {
    no: "06",
    file: "my-tickets",
    label: "Find a ticket",
    note: "Active, unused and past tickets have separate tabs.",
  },
  trip: {
    no: "07",
    file: "route-map",
    label: "Follow a trip",
    note: "See the active route and when the bus is due.",
  },
  qr: {
    no: "08",
    file: "ticket-qr",
    label: "Show the QR code",
    note: "The ticket shows a large code and the time remaining.",
  },
};

const heroScreens = [
  screens.home,
  screens.results,
  screens.detail,
  screens.purchase,
  screens.qr,
];

const moments = [
  {
    title: "Start with a place you know",
    text: "Search for a destination like Metrocentro, then compare routes by travel time, transfers and fare. The route number helps identify the bus once you know which trip to take.",
    screens: [screens.home, screens.results],
  },
  {
    title: "Know what to expect on the route",
    text: "The map and stop list show where to get on and off. If service changes, an alert names the affected route and explains the delay.",
    screens: [screens.detail, screens.alert],
  },
  {
    title: "Choose a pass and keep it handy",
    text: "Riders can compare pass prices and choose to pay with cash at the terminal. The ticket list separates active passes from unused and past ones.",
    screens: [screens.purchase, screens.tickets],
  },
  {
    title: "Check the bus and show the ticket",
    text: "During a trip, the home screen brings the arrival estimate and a ticket shortcut to the top. The QR view shows how much time is left, and the concept calls for saved tickets to open offline.",
    screens: [screens.trip, screens.qr],
  },
];

const findings = [
  {
    title: "Riders describe trips by landmark",
    finding: "A familiar place is often easier to name than a route number.",
    decision:
      "Accept landmarks, destinations and addresses in search. Show route numbers in the results.",
  },
  {
    title: "Connectivity varies along the trip",
    finding: "Mobile data can be expensive and coverage inconsistent.",
    decision: "Design saved routes and tickets to open without a connection.",
  },
  {
    title: "Cash is part of the trip",
    finding: "A bank card is out of reach for some riders.",
    decision: "Keep cash at the terminal alongside digital ticketing.",
  },
];

const accessibility = [
  {
    title: "4.5:1 contrast",
    text: "Minimum contrast target for standard text.",
  },
  {
    title: "48dp touch targets",
    text: "Minimum size for interactive controls.",
  },
  {
    title: "Screen reader labels",
    text: "Specify labels and a logical reading order for VoiceOver and TalkBack.",
  },
  {
    title: "85–200% text scaling",
    text: "Design type and layouts to support the full size range.",
  },
];

type Screen = (typeof screens)[keyof typeof screens];

function Shot({
  screen,
  sizes,
  priority,
}: {
  screen: Screen;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure className="shot">
      <Image
        src={`/samples/ruta-sv/${screen.file}.png`}
        alt={`Ruta SV prototype. ${screen.note}`}
        width={780}
        height={1688}
        sizes={sizes}
        priority={priority}
      />
      <figcaption>
        <span className="shot-no">{screen.no}</span>
        <span className="shot-label">{screen.label}</span>
        <span className="shot-note">{screen.note}</span>
      </figcaption>
    </figure>
  );
}

export default function RutaSVSample() {
  return (
    <main className="book sheet">
      <Link href="/" className="backlink">
        ← Index of samples
      </Link>

      <TitleBlock
        cells={[
          { label: "Sheet", value: `Sample ${sample.number}` },
          { label: "Status", value: sample.status },
          { label: "Surface", value: "Mobile" },
        ]}
      />

      <header>
        <h1 className="sheet-name">{sample.title}</h1>
        <p className="sheet-lede">{sample.line}</p>
      </header>

      <div className="hero-shots" aria-label="Five key prototype screens">
        {heroScreens.map((screen, index) => (
          <Shot
            key={screen.file}
            screen={screen}
            sizes="(max-width: 860px) 62vw, 18vw"
            priority={index === 0}
          />
        ))}
      </div>

      <ul className="figures" aria-label="Research and design figures">
        {figures.map((figure) => (
          <li key={figure.value}>
            <span className="figure">{figure.value}</span>
            <span className="figure-label">
              {figure.label}
              <span className="figure-basis">{figure.basis}</span>
            </span>
          </li>
        ))}
      </ul>

      <dl className="spec">
        {spec.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>

      <section className="block" aria-labelledby="problem">
        <h2 id="problem" className="block-head">
          <span>A</span> The problem
        </h2>
        <p className="pull">
          Finding the right bus often means asking someone.
        </p>
        <div className="prose">
          <p>
            Ruta SV is a concept for planning a bus trip in El Salvador. Riders
            may know the landmark they want to reach while still needing help
            finding the bus, checking the fare or knowing where to get off.
          </p>
          <p>
            Interviews, a survey and observation informed the design. I
            considered daily commuters juggling transfers, occasional riders
            learning unfamiliar routes and people who rely on a screen reader.
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="findings">
        <h2 id="findings" className="block-head">
          <span>B</span> What the research changed
        </h2>
        <ol className="findings">
          {findings.map((finding, index) => (
            <li key={finding.title}>
              <span className="finding-no">{`0${index + 1}`}</span>
              <div>
                <h3>{finding.title}</h3>
                <p>{finding.finding}</p>
              </div>
              <div className="decision">
                <span>Decision</span>
                <p>{finding.decision}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="moments">
        <h2 id="moments" className="block-head">
          <span>C</span> The prototype, 8 screens
        </h2>
        <div className="moments">
          {moments.map((moment) => (
            <article key={moment.title} className="moment">
              <div className="moment-text">
                <h3>{moment.title}</h3>
                <p>{moment.text}</p>
              </div>
              <div className="moment-shots">
                {moment.screens.map((screen) => (
                  <Shot
                    key={screen.file}
                    screen={screen}
                    sizes="(max-width: 860px) 45vw, 22vw"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="accessibility">
        <h2 id="accessibility" className="block-head">
          <span>D</span> Accessibility targets
        </h2>
        <ol className="principles">
          {accessibility.map((target, index) => (
            <li key={target.title}>
              <span>{`0${index + 1}`}</span>
              <h3>{target.title}</h3>
              <p>{target.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <nav className="sheet-next" aria-label="Samples">
        <Link href="/samples/one-website">← 02 One website</Link>
        <Link href="/samples/dermacare">04 Dermacare →</Link>
      </nav>
    </main>
  );
}
