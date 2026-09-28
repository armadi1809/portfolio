import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { ThemeProvider } from "./components/theme-provider";
import Casefile from "./components/casefile";
import { projects, openSourceProojects } from "./projectsMetadata";

function App() {
  const year = new Date().getFullYear();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="page">
        <Navbar />
        <main className="space-y-24 md:space-y-32">
          <section id="about" className="section">
            <p className="mb-8 text-sm text-muted-foreground animate-in fade-in duration-1000">
              Welcome to my website. Thanks for stopping by!
            </p>
            <Hero />
          </section>
          <Casefile />
          <Projects
            projects={projects}
            title="Featured Projects"
            eyebrow="Projects"
            lede="A selection of products and experiments where I owned architecture, implementation, and delivery."
            id="projects"
          />
          <Projects
            projects={openSourceProojects}
            title="Open Source Contributions"
            eyebrow="Community"
            lede="Public contributions and collaborations that improve real-world developer tools."
            id="open-source-contributions"
          />
        </main>
        <footer className="mt-24 border-t pt-6 text-sm text-muted-foreground md:mt-32">
          © {year} Ahmed Aziz Rmadi
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
