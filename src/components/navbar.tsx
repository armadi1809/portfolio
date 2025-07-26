import { ModeToggle } from "./mode-toggle";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="text-2xl">Aziz Rmadi</div>
      <div className="space-x-4 text-xl">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
