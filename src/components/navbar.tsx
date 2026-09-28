import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <nav className="mb-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 md:mb-24">
      <span className="font-semibold tracking-tight">Aziz Rmadi</span>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        <a href="#about" className="nav-link">
          Home
        </a>
        <a href="#experience" className="nav-link">
          Journey
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#open-source-contributions" className="nav-link">
          Open Source
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
