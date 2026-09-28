import { ArrowUpRight } from "lucide-react";

export interface ProjectProps {
  id: number;
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
    <article className="group flex h-full flex-col">
      <div className="mb-5 aspect-[16/10] overflow-hidden rounded-lg border bg-muted">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={`${project.title} project image`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-muted-foreground">
            Image pending
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">{project.title}</h3>
        <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <p className="mt-3 text-xs text-muted-foreground">
        {project.technologies.join(" · ")}
      </p>
      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Source <ArrowUpRight />
        </a>
        {project.liveUrl && (
          <ProjectSiteSpan link={project.liveUrl} text="Live" />
        )}
        {project.projectWebsite && (
          <ProjectSiteSpan link={project.projectWebsite} text="Website" />
        )}
      </div>
    </article>
  );
}

function ProjectSiteSpan({ link, text }: { link: string; text: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link">
      {text} <ArrowUpRight />
    </a>
  );
}
