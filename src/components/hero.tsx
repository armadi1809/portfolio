import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-5">
        <img
          src="/profile.jpeg"
          alt="Ahmed Aziz Rmadi"
          className="size-16 shrink-0 rounded-full object-cover ring-1 ring-border md:size-20"
        />
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ahmed Aziz Rmadi
          </h1>
          <p className="text-sm text-muted-foreground">Based in Copenhagen</p>
        </div>
      </div>
      <div className="space-y-4 leading-relaxed">
        <p>
          Full stack developer at the LEGO Group building thoughtful products,
          developer tools, and data-heavy systems. I am currently pursuing an
          MSc in Computer Science at the University of Copenhagen, with a focus
          on data systems, programming languages, and compilers.
        </p>
        <p className="text-muted-foreground">
          I work across Go, TypeScript, Java, Python, and Haskell, balancing
          product polish with robust backend engineering. Over three years of
          professional experience, I have shipped software in healthcare,
          industrial, and infrastructure-focused teams.
        </p>
      </div>
      <p className="text-sm text-muted-foreground">
        Currently focused on{" "}
        <span className="text-foreground">
          Systems, Software Engineering, and Compilers
        </span>
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a href="mailto:azizrmadi@gmail.com" className="link">
          Email <ArrowUpRight />
        </a>
        <a
          href="https://github.com/armadi1809"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          GitHub <ArrowUpRight />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-aziz-rmadi/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          LinkedIn <ArrowUpRight />
        </a>
      </div>
    </div>
  );
}
