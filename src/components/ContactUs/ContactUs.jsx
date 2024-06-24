import React, { useRef, useState } from "react";
import styles from "./ContactUs.module.css";
import githubIcon from "../../assets/github.png";
import LinkedlnIcon from "../../assets/linkedin (1).png";
import TwitterIcon from "../../assets/twitter.png";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ztg7o7t",
        "template_j96oj3x",
        form.current,
        "3BCsxgaKw9WMnCXrh"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text); // Debugging statement
          setStatus("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text); // Debugging statement
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className={styles.contactPage}>
      <h2>Contact Me</h2>
      <span className={styles.contactDescription}>
        <p>Please fill out the form below to discuss any work opportunities.</p>
      </span>
      <div className={styles.contactContainer}>
        <div className={styles.socialCard}>
          <h3>Connect with me</h3>
          <div className={styles.links}>
            <a href="https://www.linkedin.com/in/navyasrivastava29/">
              <img src={LinkedlnIcon} alt="linkedin" />
            </a>
            <a href="https://github.com/Navya-1212/">
              <img src={githubIcon} alt="github" />
            </a>
            <a href="https://x.com/Navya_2907">
              <img src={TwitterIcon} alt="twitter" />
            </a>
          </div>
        </div>
        <form className={styles.contactForm} ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className={styles.name}
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className={styles.email}
            placeholder="Your Email"
            name="your_email"
            required
          />
          <input
            type="text"
            className={styles.number}
            placeholder="Your Phone Number"
            name="your_phone_number"
          />
          <textarea
            className={styles.yourMessage}
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="send" className={styles.submitBtn}>
            Send
          </button>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
