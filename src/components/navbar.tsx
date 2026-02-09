import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <nav className="casefile-nav">
      <div className="casefile-logo">
        <span className="casefile-logo-mark">AR</span>
        <span>Aziz Rmadi</span>
      </div>
      <div className="casefile-nav-links">
        <a href="#about" className="casefile-nav-link">
          Overview
        </a>
        <a href="#casefile" className="casefile-nav-link">
          Casefile
        </a>
        <a href="#projects" className="casefile-nav-link">
          Projects
        </a>
        <a href="#open-source-contributions" className="casefile-nav-link">
          Open Source
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
