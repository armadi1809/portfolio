export default function Hero() {
  const year = new Date().getFullYear();
  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <div className="casefile-masthead">
          <span className="section-label">Portfolio {year}</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Ahmed Aziz Rmadi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Full stack developer at the LEGO Group building thoughtful products,
            developer tools, and data-heavy systems. I am currently pursuing an
            MSc in Computer Science at the University of Copenhagen, with a
            focus on data systems, programming languages, and compilers.
          </p>
        </div>
        <p className="text-base md:text-lg text-foreground/80">
          I work across Go, TypeScript, Java, Python, and Haskell, balancing
          product polish with robust backend engineering. Over three years of
          professional experience, I have shipped software in healthcare,
          industrial, and infrastructure-focused teams.
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
          <span>Currently focused on</span>
          <strong>Systems, Software Engineering, and Compilers</strong>
        </div>
      </div>
    </div>
  );
}
