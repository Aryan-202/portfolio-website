import React from 'react';
import styles from './About.module.css';
import { personalInfo } from '../../../data/personalInfo';

export const About: React.FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img 
              src={personalInfo.photo} 
              alt={personalInfo.name}
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h2>Hello, I'm {personalInfo.name}</h2>
            <p>
              A passionate <span className={styles.highlight}>{personalInfo.title}</span> with {personalInfo.experience} of experience 
              in creating digital solutions that make a difference.
            </p>
            <p>
              {personalInfo.bio}
            </p>
            <p>
              When I'm not coding, you can find me {personalInfo.hobbies}. 
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};