const projects = [
  {
    id: 1,
    title: "Movies Diary",
    description:
      "A full-stack movies diary application that allows users to privately store their impressions about a movie and easily access them as needed. Built with Golang and HTMX",
    technologies: ["Golang", "HTMX", "Supabase", "PostgresSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/armadi1809/moviesdiary",
    liveUrl: "https://moviesdiary.xyz/",
    imageUrl: "/moviesdiary.jpg",
  },
  {
    id: 2,
    title: "Chip 8 Go - A Chip 8 Emulator",
    description:
      "A fully functional Chip 8 emulator written in Go's ebiten game engine, allowing users to run classic Chip 8 games and applications. It's deployed via WebAssembly for easy access in browsers.",
    technologies: ["Golang", "Ebiten Engine", "Web Assembly", "CSS"],
    githubUrl: "https://github.com/armadi1809/chip8-go",
    liveUrl: "https://azizrmadi.com/projects/chip8/",
    imageUrl: "/chip8.png",
  },
  {
    id: 3,
    title: "AI Personas",
    description:
      "A web application that allows users to create and interact with AI personas, showcasing the capabilities of modern AI chatbots in a user-friendly interface.",
    technologies: [
      "React",
      "Next.js",
      "Prisma",
      "Tailwind CSS",
      "Zod",
      "Clerk",
    ],
    githubUrl: "https://github.com/armadi1809/ai-personas",
    liveUrl: "",
    imageUrl: "/aipersonas.jpeg",
  },
];

const openSourceProojects = [
  {
    id: 1,
    title: "Caddy",
    description:
      "Caddy is a modern, open-source web server that automatically provides HTTPS and is easy to configure, making secure web hosting simple and efficient.",
    technologies: ["Golang", "OpenSSL"],
    imageUrl: "/caddy.jpeg",
    githubUrl: "https://github.com/caddyserver/caddy",
    projectWebsite: "https://caddyserver.com/",
  },
];

export { projects, openSourceProojects };
