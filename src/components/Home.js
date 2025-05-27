import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import profileImg from "../components/vikas_image.jpg";
import "./Home.css";

const highlights = [
  { icon: <FaCode />, text: "250+ LeetCode Problems" },
  { icon: <FaGithub />, text: "Internship @ KPIT (2024)" },
  { icon: <FaLinkedin />, text: "90% Accuracy Facial Recognition" },
  { icon: <HiOutlineDocumentDownload />, text: "2nd Place Hackathon" },
];

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   if (darkMode) {
  //     document.body.classList.add("light");
  //     document.body.classList.remove("dark");
  //     setDarkMode(false);
  //   } else {
  //     document.body.classList.add("dark");
  //     document.body.classList.remove("light");
  //     setDarkMode(true);
  //   }
  // };

  return (
    <section className="home-section">
      <div className="home-container">
        {/* Left: Image + Tagline */}
        <motion.div
          className="left-container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}
        >
          <div className="image-container">
            <img src={profileImg} alt="Vikas" className="profile-img" />
          </div>
          <h2 className="role" style={{ margin: 0, textAlign: "center" }}>
            Java Developer • DSA Enthusiast • Tech Problem Solver
          </h2>
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          className="text-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h1>
            Hi, I'm <span className="highlight">Vikas</span>
          </h1>

          <p>
            I'm a Computer Science student and Java developer with 250+ LeetCode problems solved and
            hands-on experience building full-stack projects using React, Node.js, and MySQL.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a
              href="/V VIKAS.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <HiOutlineDocumentDownload /> View Resume
            </a>
            <a href="projects" className="btn btn-outline">
              View Projects
            </a>
          </div>

          

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/vemula-vikas-609a90249/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vikas3454"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/VVikas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
            >
              <FaCode />
            </a>
          </div>

          {/* Highlights */}
          <div className="highlights">
            {highlights.map(({ icon, text }, idx) => (
              <div key={idx} className="highlight-item">
                {icon}
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
