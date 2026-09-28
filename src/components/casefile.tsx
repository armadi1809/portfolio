const experience = [
  {
    role: "Student Software Engineer - Marketing Data Strategy (MDS)",
    company: "The LEGO Group",
    location: "Copenhagen, Denmark",
    period: "Jun 2026 - Present",
    highlights: [
      "Built and maintained a company-wide internal marketing campaign taxonomy string generator using React, FastAPI, AWS Lambda, and S3, used by marketing teams across the organization to standardize campaign metadata.",
      "Developed automated ingestion pipelines for third-party marketing data using AWS and Databricks, including scheduled SFTP workflows that retrieve CSV files, store them in S3, and trigger downstream table population on file arrival.",
      "Replaced a previous AWS FTP-server-based ingestion setup with a simpler event-driven architecture, reducing infrastructure costs by approximately $200/month while improving maintainability and reliability.",
    ],
  },
  {
    role: "Student Software Engineer - Edge Applications (EDAE)",
    company: "Everllence (formerly MAN Energy)",
    location: "Copenhagen, Denmark",
    period: "Aug 2025 - May 2026",
    highlights: [
      "Owned a Node.js CLI scaffolding tool used as the default starter for framework projects.",
      "Designed React HMI screens in Electron for data-heavy engine control systems.",
      "Built example products, documentation, and best practices for internal developers.",
    ],
  },
  {
    role: "Software Engineer II",
    company: "GE Healthcare",
    location: "Chicago, IL",
    period: "Jun 2024 - Jul 2025",
    highlights: [
      "Built a clinical data platform in Java Spring Boot, Go, TypeScript, and PostgreSQL.",
      "Deployed microservices on AWS with CI/CD pipelines to shorten release cycles.",
      "Implemented REST APIs to support interoperability across distributed systems.",
    ],
  },
  {
    role: "Software Engineer I",
    company: "DMC Engineering, Inc.",
    location: "Chicago, IL",
    period: "Jan 2023 - Jun 2024",
    highlights: [
      "Developed full stack apps with Next.js, React, ASP.NET, and SQL Server.",
      "Upgraded mobile applications with Xamarin and MAUI for 1,000+ users.",
      "Delivered internal tools to manage budgets and time across 300+ employees.",
    ],
  },
  {
    role: "Software Engineering Intern - Algorithmic Predictive Execution",
    company: "Susquehanna International Group (SIG)",
    location: "Philadelphia, PA",
    period: "Jun 2022 - Aug 2022",
    highlights: [
      "Built a Python CLI to analyze C++ dependencies across a 60,000-file codebase.",
      "Reduced Phoenix engine build time by about 1 hour via dependency rules.",
      "Created a dependency visualization tool with Vis.js for dynamic graphs.",
    ],
  },
];

const education = [
  {
    school: "University of Copenhagen",
    location: "Copenhagen, Denmark",
    program: "MSc in Computer Science",
    period: "Sep 2025 - Present",
    notes: ["Programming and Languages track", "Danish Government Scholarship"],
  },
  {
    school: "Purdue University",
    location: "West Lafayette, IN",
    program: "BS in Computer Engineering",
    period: "Jan 2019 - Dec 2022",
    notes: ["GPA 3.99/4.00"],
  },
];

const caseNotes = [
  "I enjoy turning fuzzy ideas into clear, shippable products.",
  "My sweet spot is developer tooling, data-rich interfaces, and resilient services.",
];

export default function Casefile() {
  return (
    <section id="experience" className="section">
      <header className="section-header">
        <p className="section-eyebrow">Journey</p>
        <h2 className="section-title">Experience and Education</h2>
        <p className="section-lede">
          A quick snapshot of where I have worked, what I have studied, and how
          I approach building software.
        </p>
      </header>
      <div className="space-y-16">
        <div>
          <h3 className="subsection-title">Professional Experience</h3>
          <ol className="space-y-10">
            {experience.map((item) => (
              <li key={`${item.company}-${item.period}`} className="entry">
                <p className="entry-period">{item.period}</p>
                <div>
                  <p className="font-medium">{item.role}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.company} · {item.location}
                  </p>
                  <ul className="entry-list">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="subsection-title">Education</h3>
          <ol className="space-y-10">
            {education.map((item) => (
              <li key={`${item.school}-${item.period}`} className="entry">
                <p className="entry-period">{item.period}</p>
                <div>
                  <p className="font-medium">{item.program}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.school} · {item.location}
                  </p>
                  <ul className="entry-list">
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h3 className="subsection-title">Quick Notes</h3>
          <ul className="entry-list">
            {caseNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
