import { ProjectCard, type ProjectProps } from "./projectCard";

interface ProjectsSectionProps {
  id: string;
  title: string;
  projects: Array<ProjectProps>;
}

export default function Projects(props: ProjectsSectionProps) {
  return (
    <section id={props.id} className="py-20">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">{props.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
