import React from 'react';
import styles from '@/styles/About.module.css';
import Image from 'next/image';
import { FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <p className={styles.aboutText}>
          Welcome to our website! We are dedicated to providing the best services to our clients. Our team consists of highly skilled professionals who are passionate about helping you achieve your goals.
        </p>
        <p className={styles.aboutText}>
          Our journey began with a simple idea: to make high-quality services accessible to everyone. We believe in transparency, dedication, and customer satisfaction. We continuously strive to innovate and improve our offerings to ensure that you have the best experience possible.
        </p>
        <div className={styles.iconsSection}>
          <div className={styles.iconCard}>
            <FaAward className={styles.icon} />
            <h3 className={styles.iconTitle}>Quality Services</h3>
            <p className={styles.iconText}>We provide award-winning quality services to all our clients.</p>
          </div>
          <div className={styles.iconCard}>
            <FaUsers className={styles.icon} />
            <h3 className={styles.iconTitle}>Expert Team</h3>
            <p className={styles.iconText}>Our team is composed of dedicated and highly skilled professionals.</p>
          </div>
          <div className={styles.iconCard}>
            <FaLightbulb className={styles.icon} />
            <h3 className={styles.iconTitle}>Innovative Solutions</h3>
            <p className={styles.iconText}>We believe in continuous innovation to provide better solutions.</p>
          </div>
        </div>
      </div>
      <div className={styles.teamImageContainer}>
        <Image src="/team.jpg" alt="Our Team" className={styles.teamImage} width={400} height={300}  />
      </div>
    </section>
  );
};
export default About;