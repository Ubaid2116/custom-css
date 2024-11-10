import React from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>DEVBLITS</div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/"> <FaHome className={styles.icon} /> Home</Link></li>
          <li><Link href="/about"> <FaInfoCircle className={styles.icon} /> About</Link></li>
          <li><Link href="/services"> <FaServicestack className={styles.icon} /> Services</Link></li>
          <li><Link href="/contact"> <FaEnvelope className={styles.icon} /> Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;