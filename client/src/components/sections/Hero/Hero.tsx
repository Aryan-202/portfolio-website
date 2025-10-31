import { personalInfo, socialLinks } from '../../../data'
import Button from '../../ui/Button'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.name}>{personalInfo.name}</span>
            </h1>
            <h2 className={styles.subtitle}>{personalInfo.title}</h2>
            <p className={styles.description}>{personalInfo.bio}</p>
            
            <div className={styles.buttons}>
              <Button 
                variant="primary" 
                size="large"
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="large"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Get In Touch
              </Button>
            </div>

            <div className={styles.socialLinks}>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className={styles.image}>
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name}
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero