export default function Hero() {
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <div className="casefile-masthead">
          <span className="section-label">Casefile 2026</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Ahmed Aziz Rmadi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Full stack developer building dependable web products, tooling, and
            data systems from Copenhagen.
          </p>
        </div>
        <p className="text-base md:text-lg text-foreground/80">
          I work across Go, TypeScript, and Java with a focus on shipping clean
          interfaces and resilient backends. My recent work spans healthcare
          data platforms, industrial control tooling, and open source
          infrastructure.
        </p>
        <div className="casefile-links">
          <a href="mailto:azizrmadi@gmail.com" className="casefile-link">
            Email
          </a>
          <a
            href="https://github.com/armadi1809"
            target="_blank"
            rel="noopener noreferrer"
            className="casefile-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-aziz-rmadi/"
            target="_blank"
            rel="noopener noreferrer"
            className="casefile-link"
          >
            LinkedIn
          </a>
          <span className="casefile-tag">Based in Copenhagen</span>
        </div>
      </div>
      <div className="paper-card casefile-portrait">
        <div className="casefile-portrait-frame">
          <img
            src="/profile.jpeg"
            alt="Ahmed Aziz Rmadi"
            className="casefile-portrait-image"
          />
        </div>
        <div className="casefile-portrait-caption">
          <span>Primary focus</span>
          <strong>Interfaces, tooling, systems</strong>
        </div>
      </div>
    </div>
  );
}
