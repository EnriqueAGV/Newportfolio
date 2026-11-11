import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TitleBlock } from "~/app/_components/title-block";

export const metadata: Metadata = {
  title: "Sample 01, One app — Enrique García",
  description:
    "Credit card onboarding for One by Banco Atlántida: trust in the first 5 minutes, card on the way in about 15.",
};

const spec = [
  { label: "Product", value: "One credit card, Banco Atlántida, El Salvador" },
  { label: "Title", value: "UX/UI Analyst" },
  { label: "Role", value: "Designed the whole product, discovery to launch" },
  { label: "Team", value: "1 PM, 1 PO, 10 developers" },
  { label: "Platform", value: "iOS and Android" },
  {
    label: "Scope",
    value:
      "Funnel strategy, flows, identity checks, UX writing, UI, interaction specs, build QA",
  },
];

const figures = [
  { value: "86", label: "NPS" },
  {
    value: "46%",
    label: "of applicants reach an outcome, an offer or a clear no",
  },
  {
    value: "~15 min",
    label: "from zero to card on the way"
  },
];

const findings = [
  {
    title: "Trust is the conversion lever",
    finding:
      "People tie credit to hidden fees, charges they never approved and losing control. Anxiety peaks at the identity and terms steps.",
    decision:
      "Preview everything: fees, limits and timelines. Show progress and what happens next at every step.",
  },
  {
    title: "One flow, very different people",
    finding:
      "Security-first, benefits-driven and sceptical applicants all pass through the same screens, and it has to feel safe and simple to each of them.",
    decision:
      "Disclose progressively, and let the microcopy adapt: reassurance, benefit framing and a way to get help at the right moments.",
  },
];

const principles = [
  { title: "Control by default", text: "The applicant is in charge at every step." },
  { title: "Transparent outcomes", text: "Clear states remove the guessing." },
  { title: "Fast, not rushed", text: "Speed with clarity, never confusion." },
  {
    title: "Safe and compliant",
    text: "Fraud prevention that doesn't punish legitimate applicants.",
  },
];

type Screen = { n: string; label: string; note: string };

const screens: Screen[] = [
  { n: "01", label: "Start", note: "Checklist and what you'll need" },
  { n: "02", label: "Identity", note: "Selfie capture" },
  { n: "03", label: "Phone", note: "6-digit code" },
  { n: "04", label: "Address", note: "Map and location details" },
  { n: "05", label: "Email", note: "Contact details" },
  { n: "06", label: "Personal details", note: "Profile and education" },
  { n: "07", label: "Employment", note: "Workplace and contract" },
  { n: "08", label: "References", note: "Empty state" },
  { n: "09", label: "Add reference", note: "Bottom sheet entry" },
  { n: "10", label: "References list", note: "Personal and family" },
  { n: "11", label: "Offer approved", note: "Limit and rate" },
  { n: "12", label: "Offer unavailable", note: "A clear no, with a waitlist" },
  { n: "13", label: "Choose rewards", note: "Shopping, cashback or travel" },
  { n: "14", label: "Benefit details", note: "How the plan works" },
  { n: "15", label: "Personalise", note: "Card colour and name" },
];

const moments = [
  {
    title: "A predictable start",
    text: "The first screen answers “what's next?” before anyone asks: a checklist of what to have ready and a five-step progress bar. Identity is checked with a guided selfie, so the strictest step is also one of the shortest.",
    screens: ["01", "02"],
  },
  {
    title: "The offer, in plain numbers",
    text: "The decision arrives in the flow, with the limit and the rate on one card and how long the offer stands. Choosing a rewards plan is a guided choice between three, and the screen says up front that it can't be changed later.",
    screens: ["11", "13"],
  },
  {
    title: "Something to own",
    text: "The last steps make a digital product feel tangible: pick the card colour, choose how your name appears, and read exactly how the benefits work before the card ships.",
    screens: ["15", "14"],
  },
];

/** The screens shown before any prose, in the order they happen. */
const heroScreens = ["01", "02", "11", "13", "15"];

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
        src={`/samples/one-app/${screen.n}.png`}
        alt={`One app screen: ${screen.label}. ${screen.note}.`}
        width={750}
        height={1624}
        sizes={sizes}
        priority={priority}
      />
      <figcaption>
        <span className="shot-no">{screen.n}</span>
        <span className="shot-label">{screen.label}</span>
        <span className="shot-note">{screen.note}</span>
      </figcaption>
    </figure>
  );
}

const byNumber = (n: string) => screens.find((s) => s.n === n)!;

export default function OneAppSample() {
  return (
    <main className="book sheet">
      <Link href="/" className="backlink">
        ← Index of samples
      </Link>

      <TitleBlock
        cells={[
          { label: "Sheet", value: "Sample 01" },
          { label: "Status", value: "Launched" },
          { label: "Year", value: "2024" },
        ]}
      />

      <header>
        <h1 className="sheet-name">One app</h1>
        <p className="sheet-lede">
          Trust in the first 5 minutes. Card on the way in about 15.
        </p>
      </header>

      <div className="hero-shots" aria-label="Five key screens">
        {heroScreens.map((n) => (
          <Shot
            key={n}
            screen={byNumber(n)}
            sizes="(max-width: 860px) 62vw, 18vw"
            priority
          />
        ))}
      </div>

      <ul className="figures" aria-label="Results">
        {figures.map((f) => (
          <li key={f.value}>
            <span className="figure">{f.value}</span>
            <span className="figure-label">
              {f.label}
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
          People avoid credit because they don&apos;t trust it.
        </p>
        <div className="prose">
          <p>
            One is a credit card you apply for entirely on your phone, with no
            branch visit and no bank executive walking you through it. That
            leaves the screens to do the reassuring.
          </p>
          <p>
            The job was to replace anxiety with control, without giving up
            fraud prevention or compliance. The first five minutes decide
            whether someone keeps going; the rest of the application takes
            about ten more.
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="moments">
        <h2 id="moments" className="block-head">
          <span>B</span> Three moments
        </h2>
        <div className="moments">
          {moments.map((m) => (
            <article key={m.title} className="moment">
              <div className="moment-text">
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
              <div className="moment-shots">
                {m.screens.map((n) => (
                  <Shot
                    key={n}
                    screen={byNumber(n)}
                    sizes="(max-width: 860px) 45vw, 22vw"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="findings">
        <h2 id="findings" className="block-head">
          <span>C</span> What we decided
        </h2>
        <ol className="findings">
          {findings.map((f, i) => (
            <li key={f.title}>
              <span className="finding-no">{`0${i + 1}`}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.finding}</p>
              </div>
              <div className="decision">
                <span>Decision</span>
                <p>{f.decision}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="principles">
        <h2 id="principles" className="block-head">
          <span>D</span> Principles
        </h2>
        <ol className="principles">
          {principles.map((p, i) => (
            <li key={p.title}>
              <span>{`0${i + 1}`}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="charset">
        <h2 id="charset" className="block-head">
          <span>E</span> Character set, 15 screens
        </h2>
        <div className="charset">
          {screens.map((s) => (
            <Shot
              key={s.n}
              screen={s}
              sizes="(max-width: 520px) 45vw, (max-width: 860px) 30vw, 18vw"
            />
          ))}
        </div>
      </section>

      <nav className="sheet-next" aria-label="Samples">
        <Link href="/">← Index of samples</Link>
        <Link href="/samples/one-website">02 One website →</Link>
      </nav>
    </main>
  );
}
