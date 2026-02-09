const experience = [
  {
    role: "Student Software Engineer - Edge Applications (EDAE)",
    company: "Everllence (formerly MAN Energy)",
    location: "Copenhagen, Denmark",
    period: "Aug 2025 - Present",
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
  "Full stack builder across Go, TypeScript, Java, and React.",
  "Focus on tooling, data-heavy UIs, and reliable backend systems.",
  "Based in Copenhagen with experience across healthcare and industrial tech.",
];

export default function Casefile() {
  return (
    <section id="casefile" className="casefile-section">
      <div className="casefile-section-header">
        <span className="section-label">Casefile</span>
        <h2 className="section-title font-display">
          Background and Field Notes
        </h2>
        <p className="section-lede">
          A concise record of roles, education, and the working patterns that
          guide my projects.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] pt-5">
        <div className="paper-card">
          <div className="paper-card-header">
            <h3 className="paper-card-title">Experience Timeline</h3>
          </div>
          <div className="space-y-6">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.period}`}
                className="case-entry"
              >
                <div className="case-entry-header">
                  <div>
                    <p className="case-entry-role">{item.role}</p>
                    <p className="case-entry-company">
                      {item.company} - {item.location}
                    </p>
                  </div>
                  <span className="case-entry-period">{item.period}</span>
                </div>
                <ul className="case-entry-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="paper-card">
            <div className="paper-card-header">
              <h3 className="paper-card-title">Education</h3>
              <span className="paper-card-tag">Academic</span>
            </div>
            <div className="space-y-5">
              {education.map((item) => (
                <div key={`${item.school}-${item.period}`}>
                  <p className="case-entry-role">{item.program}</p>
                  <p className="case-entry-company">
                    {item.school} - {item.location}
                  </p>
                  <p className="case-entry-period">{item.period}</p>
                  <ul className="case-entry-list">
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="paper-card">
            <div className="paper-card-header">
              <h3 className="paper-card-title">Case Notes</h3>
              <span className="paper-card-tag">Focus</span>
            </div>
            <ul className="case-entry-list">
              {caseNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
