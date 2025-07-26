import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { ThemeProvider } from "./components/theme-provider";
import { projects, openSourceProojects } from "./projectsMetadata";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="px-32 py-3 min-h-screen">
          <Navbar></Navbar>
          <section id="about">
            <Hero></Hero>
          </section>
          <Projects
            projects={projects}
            title={"Projects"}
            id={"projects"}
          ></Projects>
          <Projects
            projects={openSourceProojects}
            title={"Open Source Contributions"}
            id={"open-source-contributions"}
          ></Projects>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
