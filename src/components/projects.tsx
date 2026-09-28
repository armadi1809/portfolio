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
    <section id={props.id} className="section">
      <header className="section-header">
        {props.eyebrow && <p className="section-eyebrow">{props.eyebrow}</p>}
        <h2 className="section-title">{props.title}</h2>
        {props.lede && <p className="section-lede">{props.lede}</p>}
      </header>
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
        {props.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
