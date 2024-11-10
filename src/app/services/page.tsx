import React from "react";
import styles from "@/styles/Services.module.css";
import { FaCogs, FaLaptopCode, FaChartLine } from "react-icons/fa";

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContent}>
        <h1 className={styles.servicesTitle}>Our Services</h1>
        <p className={styles.servicesText}>
          We offer a range of high-quality services to help you achieve your
          business goals. Our dedicated team is here to provide you with
          innovative solutions tailored to your needs.
        </p>
        <div className={styles.servicesCards}>
          <div className={styles.serviceCard}>
            <FaCogs className={styles.icon} />
            <h3 className={styles.serviceTitle}>Custom Solutions</h3>
            <p className={styles.serviceText}>
              Tailor-made solutions designed to meet your specific business
              requirements.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <FaLaptopCode className={styles.icon} />
            <h3 className={styles.serviceTitle}>Software Development</h3>
            <p className={styles.serviceText}>
              Professional software development services to bring your ideas to
              life.
            </p>
          </div>
          <div className={styles.serviceCard}>
            <FaChartLine className={styles.icon} />
            <h3 className={styles.serviceTitle}>Business Growth</h3>
            <p className={styles.serviceText}>
              Strategic planning and analytics to help your business reach new
              heights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
