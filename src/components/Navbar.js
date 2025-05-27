import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Vikas</div>

        <button className="hamburger" onClick={handleToggle}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="education" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a href="contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
