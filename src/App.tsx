import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { ThemeProvider } from "./components/theme-provider";
import Casefile from "./components/casefile";
import { projects, openSourceProojects } from "./projectsMetadata";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="casefile-shell min-h-screen">
          <div className="casefile-container">
            <Navbar />
            <main className="casefile-main">
              <section id="about" className="casefile-section">
                <div className="casefile-intro">
                  <span className="casefile-intro-text">
                    Welcome to the case file of Ahmed Aziz Rmadi. Happy
                    investigation!
                  </span>
                </div>
                <Hero />
              </section>
              <Casefile />
              <Projects
                projects={projects}
                title="Selected Casefiles"
                eyebrow="Projects"
                lede="A focused set of builds where I owned the core logic, shipped the product, and documented the outcome."
                id="projects"
              />
              <Projects
                projects={openSourceProojects}
                title="Open Source Contributions"
                eyebrow="Field Work"
                lede="Public collaboration and fixes that strengthen real-world infrastructure."
                id="open-source-contributions"
              />
            </main>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
