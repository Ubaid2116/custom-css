import React from "react";
import styles from "@/styles/Hero.module.css";
import heroImage from "../../public/hero-2.jpg"; // Add a suitable image in the 'public' folder

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Introduce Your Product Quickly & Effectively
        </h1>
        <p className={styles.heroSubtitle}>
          Discover our services and see how we can help you succeed.
        </p>
        <button className={styles.ctaButton}>Get Started</button>
      </div>
      <div className={styles.heroImageContainer}>
        <img src={heroImage.src} alt="Hero" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;
