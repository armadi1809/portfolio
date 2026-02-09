export interface ProjectProps {
  id: number;
  caseId: string;
  year: string;
  title: string;
  description: string;
  technologies: Array<string>;
  githubUrl: string;
  liveUrl?: string;
  projectWebsite?: string;
  imageUrl?: string;
}

export function ProjectCard(project: ProjectProps) {
  return (
    <div key={project.id} className="paper-card casefile-card">
      <div className="casefile-image">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} project image`}
            className="casefile-image-img"
          />
        ) : (
          <div className="casefile-image-placeholder">
            <span>Image pending</span>
          </div>
        )}
      </div>
      <div className="casefile-card-body">
        <div className="casefile-card-meta">
          <span className="casefile-tag">{project.caseId}</span>
          <span className="casefile-tag">{project.year}</span>
        </div>
        <h3 className="casefile-card-title">{project.title}</h3>
        <p className="casefile-card-description">{project.description}</p>
        <div className="casefile-card-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="casefile-chip">
              {tech}
            </span>
          ))}
        </div>
        <div className="casefile-card-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="casefile-link"
          >
            Source
          </a>
          {project.liveUrl && (
            <ProjectSiteSpan link={project.liveUrl} text="Live" />
          )}
          {project.projectWebsite && (
            <ProjectSiteSpan link={project.projectWebsite} text="Website" />
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectSiteSpan({ link, text }: { link: string; text: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="casefile-link"
    >
      {text}
    </a>
  );
}
