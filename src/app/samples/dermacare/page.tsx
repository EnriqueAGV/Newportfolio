import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TitleBlock } from "~/app/_components/title-block";
import { samples } from "~/content/samples";

const sample = samples.find(({ slug }) => slug === "dermacare")!;

export const metadata: Metadata = {
  title: "Sample 04, Dermacare — Enrique García",
  description:
    "A skin pharmacy app concept that assesses your skin before it recommends anything, and explains every match.",
};

const figures = [
  { value: sample.figure, label: sample.figureLabel, basis: "Survey" },
  {
    value: "20/23",
    label: "completed the skin assessment",
    basis: "Prototype test",
  },
  { value: "5", label: "steps in the assessment", basis: "Design" },
];

const spec = [
  { label: "Product", value: "Skin-specialised pharmacy app" },
  {
    label: "Role",
    value: "Product designer, from research synthesis to design system",
  },
  { label: "Platform", value: "Mobile, iOS and Android" },
  {
    label: "Scope",
    value: "Skin assessment, results, matched shop and product detail",
  },
];

const screens = {
  welcome: {
    no: "01",
    file: "01-welcome",
    label: "Welcome",
    note: "One promise and one action: get started.",
  },
  category: {
    no: "02",
    file: "02-category-search",
    label: "Browse a category",
    note: "Filter, sort and compare products the usual way.",
  },
  intro: {
    no: "03",
    file: "03-assessment-intro",
    label: "Before the assessment",
    note: "How long it takes and what its three parts are.",
  },
  type: {
    no: "04",
    file: "04-skin-type",
    label: "Skin type",
    note: "Each option is described, and “Not sure” is an answer.",
  },
  concerns: {
    no: "05",
    file: "05-concerns",
    label: "Main concerns",
    note: "Choose up to three, with progress shown.",
  },
  lifestyle: {
    no: "06",
    file: "06-lifestyle",
    label: "Lifestyle",
    note: "Sun, sleep and stress, each on a labelled scale.",
  },
  results: {
    no: "07",
    file: "07-results",
    label: "Skin profile",
    note: "Skin type, primary goal and concerns in order.",
  },
  shop: {
    no: "08",
    file: "08-shop-home",
    label: "Shop, matched",
    note: "The best match leads, with the reason it was chosen.",
  },
  product: {
    no: "09",
    file: "09-product-detail",
    label: "Product detail",
    note: "A match score and “Why it's for you” before the price.",
  },
};

const heroScreens = [
  screens.welcome,
  screens.intro,
  screens.concerns,
  screens.results,
  screens.product,
];

const moments = [
  {
    title: "Say what it costs before asking",
    text: "The assessment opens with a time estimate and the three things it will ask for. Nobody starts a questionnaire without knowing how long it is.",
    screens: [screens.welcome, screens.intro],
  },
  {
    title: "Questions that teach",
    text: "Skin types come with a plain description, so picking one is also learning what it means. Concerns are capped at three, and lifestyle uses labelled scales in place of free text.",
    screens: [screens.type, screens.concerns],
  },
  {
    title: "A profile, then products",
    text: "The result is a skin profile first: type, goal and concerns in order of priority. Only then does the shop open, already sorted for that profile.",
    screens: [screens.results, screens.shop],
  },
  {
    title: "Every match explains itself",
    text: "A product page leads with how well it matches and why, in three short lines tied to the answers given. The general shop is still there for anyone who wants to browse.",
    screens: [screens.product, screens.category],
  },
];

const findings = [
  {
    title: "Overwhelm kills conversion",
    finding:
      "Thousands of products make conflicting claims. Too much choice ends in abandonment or a purchase that is regretted.",
    decision:
      "Curate first, expand later. Personal matches lead; browsing the whole shop is the second path.",
  },
  {
    title: "An assessment is an investment, not friction",
    finding:
      "People will give time if each question feels like it has a purpose.",
    decision:
      "Disclose progressively and teach along the way, so each question explains something while it collects an answer.",
  },
];

const principles = [
  {
    title: "Expertise, accessible",
    text: "Dermatological guidance without the jargon.",
  },
  {
    title: "Personalisation, transparent",
    text: "Always explain why something matches.",
  },
  {
    title: "Education, not overwhelm",
    text: "Teach while guiding the decision.",
  },
  { title: "Trust, earned", text: "Clinical credibility in every interaction." },
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
        src={`/samples/dermacare/${screen.file}.png`}
        alt={`Dermacare prototype, ${screen.label}. ${screen.note}`}
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

export default function DermacareSample() {
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
          People don&apos;t struggle with skincare because they don&apos;t
          care. They struggle because they&apos;re overwhelmed.
        </p>
        <div className="prose">
          <p>
            Dermacare is a concept for a pharmacy that guides before it sells.
            Most shops treat skin type as one filter and recommend the same
            best sellers to everyone, which leaves people guessing between
            marketing and what will work for them.
          </p>
          <p>
            The idea is to ask first: a short assessment builds a skin profile,
            and the shop then shows what matches it and says why.
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="findings">
        <h2 id="findings" className="block-head">
          <span>B</span> What I found, what I decided
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
          <span>C</span> The prototype, 9 screens
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

      <section className="block" aria-labelledby="principles">
        <h2 id="principles" className="block-head">
          <span>D</span> Principles
        </h2>
        <ol className="principles">
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <span>{`0${index + 1}`}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <nav className="sheet-next" aria-label="Samples">
        <Link href="/samples/ruta-sv">← 03 Ruta SV</Link>
        <Link href="/#about">About →</Link>
      </nav>
    </main>
  );
}
