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
            data systems. I am currently pursuing a Master's of Science in CS at
            the University of Copenhagen. In my studies, I am focusing on big
            data systems, programming languages and compilers
          </p>
        </div>
        <p className="text-base md:text-lg text-foreground/80">
          I work across Go, TypeScript, Java, Python, Haskell and more with a
          focus on shipping clean interfaces and resilient backends. With more
          than three years of professional experience as a software engineer, my
          recent roles spanned multiple industries.
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
          <strong>Sytems, Software Engineering, Compilers</strong>
        </div>
      </div>
    </div>
  );
}
