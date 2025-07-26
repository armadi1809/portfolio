import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        <div className="px-32 py-3 min-h-screen">
          <Navbar></Navbar>
          <section id="about">
            <Hero></Hero>
          </section>
          <Projects></Projects>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
