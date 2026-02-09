const projects = [
  {
    id: 1,
    caseId: "CASE 01",
    year: "2024",
    title: "Movies Diary",
    description:
      "A full-stack movies diary application that allows users to privately store their impressions about a movie and easily access them as needed. Built with Golang and HTMX.",
    technologies: ["Golang", "HTMX", "Supabase", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/armadi1809/moviesdiary",
    liveUrl: "https://moviesdiary.xyz/",
    imageUrl: "/moviesdiary.jpg",
  },
  {
    id: 2,
    caseId: "CASE 02",
    year: "2023",
    title: "AI Personas",
    description:
      "A web application that lets users create and interact with AI personas through guided prompts, showcasing modern chatbot UX patterns.",
    technologies: [
      "React",
      "Next.js",
      "Prisma",
      "Tailwind CSS",
      "Zod",
      "Clerk",
    ],
    githubUrl: "https://github.com/armadi1809/ai-personas",
    imageUrl: "/aipersonas.jpeg",
  },
  {
    id: 3,
    caseId: "CASE 03",
    year: "2024",
    title: "Vaulta",
    description:
      "A secure, CLI-based secret manager in Go using Bubble Tea for terminal UI. It encrypts data with AES-256-GCM and stores it locally in JSON.",
    technologies: ["Golang", "Bubble Tea", "Cryptography", "CLI"],
    githubUrl: "https://github.com/armadi1809/vaulta",
    imageUrl: "/vaultaa.png",
  },
  {
    id: 4,
    caseId: "CASE 04",
    year: "2024",
    title: "Reinventing the Wheel",
    description:
      "A learning playground where I rebuild well-known programs from scratch to understand fundamentals and low-level details.",
    technologies: ["Golang", "Ebiten", "HTTP", "Systems"],
    githubUrl: "https://github.com/armadi1809/reinventing_the_wheel",
    imageUrl: "/reinventingthewheel.png",
  },
  {
    id: 5,
    caseId: "CASE 05",
    year: "2023",
    title: "Chip 8 Go - A Chip 8 Emulator",
    description:
      "A fully functional Chip 8 emulator written in Go's Ebiten engine, deployed via WebAssembly for easy access in browsers.",
    technologies: ["Golang", "Ebiten Engine", "WebAssembly", "CSS"],
    githubUrl: "https://github.com/armadi1809/chip8-go",
    liveUrl: "https://azizrmadi.com/projects/chip8/",
    imageUrl: "/chip8.png",
  },
];

const openSourceProojects = [
  {
    id: 1,
    caseId: "FIELD 01",
    year: "2023-2025",
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
