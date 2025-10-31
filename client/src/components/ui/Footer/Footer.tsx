import React from 'react';
import styles from './Footer.module.css';
import { personalInfo } from '../../../data/personalInfo';
import { socialLinks } from '../../../data/socialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>{personalInfo.name}</div>
          
          <nav className={styles.nav}>
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
          </nav>
          
          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};