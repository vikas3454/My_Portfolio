import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Automated Reservation & Guidance System",
    description:
      "Smart parking system using IR sensors, camera-based validation, and Google Maps guidance. Built with full-stack web and embedded hardware.",
    techStack: ["React", "Node.js", "MongoDB", "TensorFlow", "Google Maps API"],
    github: "https://github.com/vikas3454",
  },
  {
    title: "Predicting Credit Risk",
    description:
      "ML-powered credit scoring system with SHAP/LIME-based explainability, visual insights, and Streamlit UI.",
    techStack: ["Python", "Streamlit", "SHAP", "LIME"],
    github: "https://github.com/vikas3454/Predicting-Credit-Risk-for-Loan-Applicants",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Automated attendance using OpenCV and face recognition. Detects and logs faces in real time.",
    techStack: ["Python", "OpenCV", "NumPy"],
    github: "https://github.com/vikas3454",
  },
  {
    title: "Image Encryption & Decryption",
    description:
      "Encrypts and decrypts images via client-side JS logic. Ensures data privacy using simple algorithms.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vikas3454",
  },
  {
    title: "E-commerce Website",
    description:
      "Frontend web app with product catalog, cart, and mock checkout. Built with responsive design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vikas3454",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 0 20px 2px rgba(108, 99, 255, 0.6), 0 0 30px 10px rgba(108, 99, 255, 0.4)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-heading">🚀 Projects</h2>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((proj, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tech-tags">
                {proj.techStack.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
