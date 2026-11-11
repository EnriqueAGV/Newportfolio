import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { TitleBlock } from "~/app/_components/title-block";
import { SectionGallery, type SectionCapture } from "./section-gallery";

export const metadata: Metadata = {
  title: "Sample 02, One website — Enrique García",
  description:
    "The marketing site for One by Banco Atlántida: 25K visitors in 6 months, 6.2% of whom started onboarding.",
};

const figures = [
  { value: "25K", label: "visitors" },
  {
    value: "6.2%",
    label: "of visitors started onboarding"
  },
  {
    value: "~1,550",
    label: "onboardings started from the site"
  },
];

const spec = [
  { label: "Product", value: "one.bancoatlantida.com.sv" },
  { label: "Title", value: "UX/UI Analyst" },
  { label: "Role", value: "Main designer" },
  { label: "Surface", value: "Web, desktop and mobile" },
];

/** The home page read top to bottom, as it is live today. */
const anatomy = [
  {
    title: "One line, one action",
    text: "“Tus finanzas sin fronteras” over a fan of cards, and a single button: download the app. The same action stays in the header on every scroll.",
  },
  {
    title: "Three promises",
    text: "You choose your benefits. Big benefits with no small print. Everything managed from the app. Each is one short sentence.",
  },
  {
    title: "The card, shown through the app",
    text: "The credit card is explained beside a real app screen, the approved offer, so the product is seen before it is described.",
  },
  {
    title: "The app and the stores",
    text: "A second look at the app, with the App Store and Google Play buttons in their own block.",
  },
  {
    title: "Other people's words",
    text: "Reviews from cardholders, before the site says anything more about itself.",
  },
  {
    title: "Help that reads like help",
    text: "Articles on everyday tasks: changing a PIN, withdrawing cash, using the loyalty plan.",
  },
  {
    title: "Questions, answered on the page",
    text: "The first answer is already open. Below it, three ways to reach a person, around the clock.",
  },
  {
    title: "Nothing hidden in the footer",
    text: "Terms, fees and commissions, loyalty plan rules and resolution statistics are each one click away.",
  },
];

/** The section pages, captured from the live site. The first two are the leads. */
const sections = [
  {
    file: "one-day",
    label: "One Day",
    note: "The monthly offers day",
    fullHeight: 4493,
    lead: true,
  },
  {
    file: "app-tarjeta-one",
    label: "One App",
    note: "What the app does, from payments to protection",
    fullHeight: 6438,
    lead: true,
  },
  {
    file: "sobre-one",
    label: "Sobre One",
    note: "Mission and backing",
    fullHeight: 3016,
  },
  {
    file: "promociones",
    label: "Promociones",
    note: "Current promotions",
    fullHeight: 1900,
  },
  {
    file: "blog",
    label: "Blog",
    note: "Everyday how-to articles",
    fullHeight: 3006,
  },
  {
    file: "ayuda",
    label: "Ayuda",
    note: "Help and questions",
    fullHeight: 2443,
  },
] satisfies SectionCapture[];

export default function OneWebsiteSample() {
  return (
    <main className="book sheet">
      <Link href="/" className="backlink">
        ← Index of samples
      </Link>

      <TitleBlock
        cells={[
          { label: "Sheet", value: "Sample 02" },
          { label: "Status", value: "Launched" },
          { label: "Surface", value: "Web" },
        ]}
      />

      <header>
        <h1 className="sheet-name">One website</h1>
        <p className="sheet-lede">
          No small print, no queues.
        </p>
      </header>

      <figure className="frame sheet-hero">
        <Image
          src="/samples/one-website/hero.jpg"
          alt="The One website home page: the headline “Tus finanzas sin fronteras” over a fan of One credit cards in several colours, with a button to download the app."
          width={2400}
          height={1500}
          sizes="(max-width: 860px) 100vw, 94vw"
          priority
        />
      </figure>

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

      <section className="block" aria-labelledby="job">
        <h2 id="job" className="block-head">
          <span>A</span> The job
        </h2>
        <p className="pull">
          The site has one job: get someone to start the application in the
          app.
        </p>
        <div className="prose">
          <p>
            The One card is applied for on a phone, so the website is the step
            before the first step. It has to make the same promise the app
            keeps, in the same voice, and then get out of the way.
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="anatomy">
        <h2 id="anatomy" className="block-head">
          <span>B</span> The page, top to bottom
        </h2>
        <div className="anatomy">
          <ol className="anatomy-notes">
            {anatomy.map((a, i) => (
              <li key={a.title}>
                <span>{`0${i + 1}`}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="frame">
            <Image
              src="/samples/one-website/home-full.jpg"
              alt="The full One home page from top to bottom: hero, three promises, the credit card, the app, reviews, help articles, frequently asked questions, support contacts and the footer."
              width={1439}
              height={6129}
              sizes="(max-width: 860px) 100vw, 52vw"
            />
          </figure>
        </div>
      </section>

      <section className="block" aria-labelledby="sections">
        <h2 id="sections" className="block-head">
          <span>C</span> The sections, 6 pages
        </h2>
        <SectionGallery sections={sections} />
      </section>

      <nav className="sheet-next" aria-label="Samples">
        <Link href="/samples/one-app">← 01 One app</Link>
        <Link href="/samples/ruta-sv">03 Ruta SV →</Link>
      </nav>
    </main>
  );
}
