import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

import { ThemeContext } from "./components/ThemeContent";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
