import React from 'react';
import styles from '@/styles/Contact.module.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h1 className={styles.contactTitle}>Contact Us</h1>
        <p className={styles.contactText}>
          We are here to help! Feel free to reach out to us for any questions, suggestions, or support. Our team is ready to assist you with any inquiries you may have.
        </p>
        <div className={styles.contactDetails}>
          <div className={styles.contactCard}>
            <FaPhoneAlt className={styles.icon} />
            <h3 className={styles.detailTitle}>Phone</h3>
            <p className={styles.detailText}>+92 3172077696</p>
          </div>
          <div className={styles.contactCard}>
            <FaEnvelope className={styles.icon} />
            <h3 className={styles.detailTitle}>Email</h3>
            <p className={styles.detailText}>ukubaid74@gmail.com</p>
          </div>
          <div className={styles.contactCard}>
            <FaMapMarkerAlt className={styles.icon} />
            <h3 className={styles.detailTitle}>Location</h3>
            <p className={styles.detailText}>123 Main Street, Karachi, Pakistan</p>
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.contactForm}>
          <input type="text" className={styles.inputField} placeholder="Your Name" required />
          <input type="email" className={styles.inputField} placeholder="Your Email" required />
          <textarea className={styles.textArea} placeholder="Your Message" required></textarea>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;