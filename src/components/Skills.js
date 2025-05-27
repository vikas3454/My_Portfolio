import React from "react";
import {
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiPython,
  SiC,
  SiReact,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import {
  FaJava,
  FaNetworkWired,
  FaLaptopCode,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import { MdOutlineAccountTree } from "react-icons/md";
import "./Skills.css";

const skills = [
  { name: "Java", icon: FaJava, level: "Advanced", note: "Used for LeetCode problem solving, 3 years experience" },
  { name: "React JS", icon: SiReact, level: "Advanced", note: "2 years experience, 2 live projects" },
  { name: "Node JS", icon: SiNodedotjs, level: "Advanced", note: "2 years experience, 2 live projects" },
  { name: "Express JS", icon: SiExpress, level: "Advanced", note: "2 years experience, 2 live projects" },
  { name: "MySQL", icon: SiMysql, level: "Advanced", note: "2 years experience, 2 live projects" },
  { name: "Python", icon: SiPython, level: "Intermediate", note: "2 years coding experience" },
  { name: "C", icon: SiC, level: "Intermediate", note: "4 years experience" },
  { name: "DBMS", icon: FaServer, level: "Advanced", note: "3 years experience, 2 live projects" },
  { name: "DSA", icon: MdOutlineAccountTree, level: "Advanced", note: "3 years experience, 280+ LeetCode problems solved" },
  { name: "OOPS", icon: MdOutlineAccountTree, level: "Advanced", note: "2 years experience" },
  { name: "Computer Networks", icon: FaNetworkWired, level: "Intermediate", note: "Academic knowledge" },
  { name: "Operating Systems", icon: FaLaptopCode, level: "Intermediate", note: "Academic knowledge" },
  { name: "SDLC", icon: FaProjectDiagram, level: "Intermediate", note: "2 years experience, live project" },
  { name: "HTML", icon: SiHtml5, level: "Advanced", note: "2 years experience, frontend projects" },
  { name: "CSS", icon: SiCss3, level: "Advanced", note: "2 years experience, responsive & themed UI" },
  { name: "JavaScript", icon: SiJavascript, level: "Advanced", note: "2 years experience, core frontend scripting" },
  { name: "Git", icon: SiGit, level: "Advanced", note: "2 years experience, version control in all projects" },
  { name: "GitHub", icon: SiGithub, level: "Advanced", note: "2 years experience, used for all repositories" },
];


const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map(({ name, icon: Icon, level, note }) => (
          <div key={name} className="skill-card" title={note}>
            <Icon className="skill-icon" />
            <div className="skill-info">
              <span className="skill-name">{name}</span>
              <span className={`skill-level ${level.toLowerCase()}`}>{level}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
