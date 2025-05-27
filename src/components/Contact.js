import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("");

    emailjs
      .sendForm("service_twbp4mw", "template_l7q6kvw", form.current, "Em6_vvMmjb1mKYDFZ")
      .then(
        (result) => {
          setStatusMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Try again later.");
        }
      );
  };

  const openWhatsApp = () => {
    const { name, email, phone } = formData;
    const text = `Hello, I'm ${name}. My email is ${email}, phone: ${phone}`;
    window.open(`https://wa.me/919908079283?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2 className="contact-title" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        Contact Me
      </motion.h2>

      <motion.div className="contact-container" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
        <div className="contact-info">
          <p><strong>Name:</strong> Vemula Vikas</p>
          <p><strong>Phone:</strong> 9908079283</p>
          <p><strong>Email:</strong> <a href="mailto:vemulavikas468@gmail.com">vemulavikas468@gmail.com</a></p>
          <div className="social-links">
            <a href="https://github.com/vikas468" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/vikas468" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Message (optional)" value={formData.message} onChange={handleChange}></textarea>
          
          <div className="contact-actions">
            <button type="submit">Send Email</button>
            <button type="button" onClick={openWhatsApp}>Send on WhatsApp</button>
          </div>

          {statusMessage && <div className="form-status">{statusMessage}</div>}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
