import Image from "next/image";

export function SideProject() {
  return (
    <div>
      <p className="side-project-tag">Check out what I built</p>
      <a
        className="side-project"
        href="https://usepraxia.com/"
        lang="es-SV"
        aria-labelledby="praxia-cta"
        aria-describedby="praxia-headline praxia-description"
        target="_blank"
        rel="noreferrer"
      >
        <span className="side-project-copy">
          <Image
            className="side-project-logo"
            src="/praxia/logo.svg"
            width={579}
            height={172}
            alt=""
          />
          <strong className="side-project-headline" id="praxia-headline">
            Tus pacientes agendan por WhatsApp.
          </strong>
          <span className="side-project-text" id="praxia-description">
            Citas, recordatorios y expedientes para consultorios en El Salvador.
          </span>
          <span className="side-project-cta" id="praxia-cta">
            Conocer Praxia <span aria-hidden="true">↗</span>
          </span>
        </span>
        <span className="side-project-visual">
          <Image
            className="side-project-preview"
            src="/praxia/preview.webp"
            width={1600}
            height={900}
            sizes="(max-width: 520px) 35vw, 240px"
            alt=""
          />
        </span>
      </a>
    </div>
  );
}
