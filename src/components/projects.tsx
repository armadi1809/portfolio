import { ProjectCard, type ProjectProps } from "./projectCard";

interface ProjectsSectionProps {
  id: string;
  title: string;
  eyebrow?: string;
  lede?: string;
  projects: Array<ProjectProps>;
}

export default function Projects(props: ProjectsSectionProps) {
  return (
    <section id={props.id} className="casefile-section">
      <div className="casefile-section-header">
        {props.eyebrow && (
          <span className="section-label">{props.eyebrow}</span>
        )}
        <h2 className="section-title font-display">{props.title}</h2>
        {props.lede && <p className="section-lede">{props.lede}</p>}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {props.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
