import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    company: "KPIT Technologies",
    role: "Internship",
    date: "May 2024 - August 2024",
    location: "Bangalore",
    logo:
      "https://s.yimg.com/fz/api/res/1.2/OxymLqO7oqRBmXgxHg.9jw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/7890ff5a-4ce3-3899-bba6-186133dc6de6/t_500x300",
    points: [
      "Developed an Automated Reservation and Guidance System for Car Parking, optimizing parking space in urban areas.",
      "Designed hardware prototype using Embedded C and Arduino IDE, interfacing IR sensors, LED and servo motor control, and communication between Arduino Uno and NodeMCU.",
      "Built web app for car parking slot booking using React, Node.js, and MySQL, as part of a 4-person team.",
      "Received 90% project completion feedback from mentor, recognizing high quality and success.",
    ],
    techStack: ["C", "Arduino IDE", "NodeMCU", "MQTT", "HiveMQ", "React.js", "Node.js", "MySQL"],
  },
  {
    company: "Verzeo",
    role: "Machine Learning Intern",
    date: "March 2022 - May 2022",
    location: "",
    logo: "https://up.yimg.com/ib/th?id=OIP.uyE7uHn2qj-RuiKQBLliyQHaEK&pid=Api&rs=1&c=1&qlt=95&w=140&h=78",
    points: [
      "Developed Gender Recognition project using Machine Learning and Deep Learning.",
      "Used Python, Flask, React and implemented CNN, ANN algorithms.",
    ],
    techStack: ["Python", "Flask", "React", "CNN", "ANN", "Machine Learning", "Deep Learning"],
  },
  {
    company: "Wipro",
    role: "Java Full Stack Development Training",
    date: "June 2023 - September 2023",
    location: "",
    logo: "https://s.yimg.com/fz/api/res/1.2/acA5uxjIsTKBMVTdTWCZpA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/40219526-ddde-39c4-b2ad-984d3b674c78/t_500x300",
    points: [
      "Completed Java Full Stack Development training with Wipro.",
      "Gained hands-on experience with Java, Spring Boot, Hibernate, REST APIs, React.js, and MySQL.",
    ],
    techStack: ["Java", "Spring Boot", "Hibernate", "REST APIs", "React.js", "MySQL"],
  },
  {
    company: "HCL",
    role: "Embedded Systems Training",
    date: "January 2022 - March 2022",
    location: "",
    logo: "https://up.yimg.com/ib/th?id=OIP.cKAHFqOjJ4LTN2kvRwgyLgHaEK&pid=Api&rs=1&c=1&qlt=95&w=215&h=120",
    points: [
      "Completed training on Embedded Systems at HCL.",
      "Learned C, C++, STM32 microcontrollers, embedded software development.",
    ],
    techStack: ["C", "C++", "Embedded Systems", "STM32"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-grid">
        {experiences.map(({ company, role, date, location, logo, points, techStack }, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="experience-card"
          >
            <img src={logo} alt={`${company} logo`} className="experience-logo" />

            <div className="experience-content">
              <h3 className="company-name">{company}</h3>
              <p className="role-date-location">
                {role} {date && `| ${date}`} {location && `| ${location}`}
              </p>

              <ul className="experience-points">
                {points.map((point, i) => (
                  <li key={i} className="experience-point">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="tech-stack">
                {techStack.map((tech, i) => (
                  <span key={i} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
