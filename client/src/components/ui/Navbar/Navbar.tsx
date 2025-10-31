import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { personalInfo } from '../../../data/personalInfo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navbarClass = `${styles.navbar} ${isScrolled ? styles.navbarScrolled : ''}`;
  const mobileMenuClass = `${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`;

  return (
    <nav className={navbarClass}>
      <div className={styles.container}>
        <a 
          href="#home" 
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          {personalInfo.name}
        </a>

        <div className={styles.nav}>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={styles.navLink}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={styles.mobileMenuIcon}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </div>
        </button>

        <div className={mobileMenuClass}>
          <div className={styles.mobileNav}>
            <button 
              className={styles.navLink}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={styles.navLink}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={styles.navLink}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};