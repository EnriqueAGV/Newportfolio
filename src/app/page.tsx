import { education, experience, profile } from "~/content/profile";
import { getWeather } from "~/server/weather";
import Link from "next/link";

import { Cover } from "./_components/cover";
import { SampleIndex } from "./_components/sample-index";

export const revalidate = 900;

const links = [
  { label: "LinkedIn", value: "in/enrique-agv", href: profile.linkedin },
  { label: "X", value: "@enrique_garciav", href: profile.x },
  { label: "GitHub", value: "Kikeagv", href: profile.github },
];

export default async function Home() {
  const weather = await getWeather();

  return (
    <main className="book">
      <Cover weather={weather} />
      <SampleIndex />

      <div className="sheet">
        <section className="block" aria-labelledby="experience">
          <h2 id="experience" className="block-head">
            <span>A</span> Experience
          </h2>
          <ol className="records">
            {experience.map((job) => (
              <li key={job.company}>
                <p className="record-period">
                  {job.period}
                  <span>{job.kind}</span>
                </p>
                <div>
                  <h3>{job.role}</h3>
                  <p className="record-org">{job.company}</p>
                </div>
                <p className="record-text">{job.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="block" aria-labelledby="education">
          <h2 id="education" className="block-head">
            <span>B</span> Education
          </h2>
          <ol className="records">
            {education.map((study) => (
              <li key={study.title}>
                <p className="record-period">
                  {study.period}
                  {study.note ? <span>{study.note}</span> : null}
                </p>
                <div>
                  <h3>{study.title}</h3>
                  <p className="record-org">{study.school}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="block" aria-labelledby="about">
          <h2 id="about" className="block-head">
            <span>C</span> About
          </h2>
          <p className="sheet-lede">
            Designer. Builder. Obsessive about clarity.
          </p>
          <div className="prose">
            <p>
              I&apos;m {profile.name}, a product designer in {profile.location}.
              Years of shipping mobile products taught me that great design
              isn&apos;t about pixel-perfect screens. It&apos;s about making hard
              things feel effortless.
            </p>
            <p>
              I work end to end: research, flows, UX writing, interface, design
              systems and QA with engineering. I use AI to move faster through
              that cycle. It isn&apos;t replacing me; it&apos;s making me better
              and faster each day.
            </p>
            <p>{profile.languages}.</p>
          </div>
        </section>

        <section className="block" aria-labelledby="contact">
          <h2 id="contact" className="block-head">
            <span>D</span> Contact
          </h2>
          <a className="contact-mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="contact-links">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  <span>{link.label}</span>
                  <span>{link.value}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
            <li>
              <Link href="/ai">
                <span>Résumé</span>
                <span>Markdown, ready to paste</span>
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <footer className="site-footer">
        <p>Specimen No. 01</p>
        <p>
          <Link href="/#about">About and contact →</Link>
        </p>
      </footer>
    </main>
  );
}
