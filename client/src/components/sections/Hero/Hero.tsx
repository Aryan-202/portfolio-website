import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../../ui/Button';
import { personalInfo } from '../../../data/personalInfo';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hello, I'm <span className={styles.highlight}>{personalInfo.name}</span>
        </h1>
        <h2 className={styles.subtitle}>{personalInfo.title}</h2>
        <p className={styles.description}>
          {personalInfo.tagline}
        </p>
        <div className={styles.ctaButtons}>
          <Button 
            variant="primary" 
            onClick={scrollToContact}
          >
            Get In Touch
          </Button>
          <Button 
            variant="secondary" 
            onClick={scrollToAbout}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollText}>Scroll Down</div>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};