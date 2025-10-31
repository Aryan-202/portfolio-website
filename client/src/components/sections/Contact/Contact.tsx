import React from 'react';
import styles from './Contact.module.css';
import { ContactForm } from './ContactForm';
import { personalInfo } from '../../../data/personalInfo';
import { socialLinks } from '../../../data/socialLinks';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h1 className={styles.title}>Get In Touch</h1>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>📧</div>
              <div className={styles.infoText}>
                <h3>Email</h3>
                <p>{personalInfo.email}</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.icon}>📱</div>
              <div className={styles.infoText}>
                <h3>Phone</h3>
                <p>{personalInfo.phone}</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.icon}>📍</div>
              <div className={styles.infoText}>
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};