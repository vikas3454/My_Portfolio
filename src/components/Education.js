import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";
import "./Education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>

      <div className="education-cards-wrapper">
        {/* Graduation Card */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-header">
            <FaUniversity size={22} color="#007bff" />
            <h4>Graduation</h4>
          </div>
          <div className="card-content">
            <img
              src="https://up.yimg.com/ib/th?id=OIP.sIRV3JsDtAwaE0MoUnpi1wHaHa&pid=Api&rs=1&c=1&qlt=95&w=124&h=124"
              alt="GITAM logo"
              className="edu-logo"
            />
            <div>
              <h3 className="edu-degree">Computer Science and Engineering</h3>
              <p className="edu-institute">GITAM Deemed to be University, Bengaluru</p>
              <p className="edu-year">2021 - 2025</p>
              <p className="edu-cgpa">CGPA: 9.65</p>
              <p className="edu-achievement">🏅 Gold Medal for Academic Excellence</p>
            </div>
          </div>
        </motion.div>

        {/* Class 12 Card */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-header">
            <FaSchool size={22} color="#007bff" />
            <h4>Class 12 (XII)</h4>
          </div>
          <div className="card-content no-logo">
            <div>
              <p className="edu-institute">Rao’s Junior College, Wanaparthy</p>
              <p className="edu-year">2019 - 2021</p>
              <p className="edu-percentage">Percentage: 97.8%</p>
              <p className="edu-achievement">🥇 Highest Marks in the College</p>
            </div>
          </div>
        </motion.div>

        {/* Class 10 Card */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="card-header">
            <FaSchool size={22} color="#007bff" />
            <h4>Class 10 (X)</h4>
          </div>
          <div className="card-content no-logo centered-content">
            <div>
              <p className="edu-institute">Master Minds High School, Pebbair</p>
              <p className="edu-year">Completed: 2019</p>
              <p className="edu-percentage">Grade Points: 9.7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
