import { motion } from "motion/react";
import { personalInfo } from "@/data/personalInfo";
import { skills } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Calendar, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info & Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Personal Story */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with a love for creating efficient, 
                scalable, and user-friendly applications. My journey in web development 
                started with curiosity and has evolved into a career dedicated to 
                crafting digital experiences that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I believe in continuous learning and 
                staying updated with the latest industry trends.
              </p>
            </Card>

            {/* Personal Details */}
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-6">Personal Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium">2+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="font-medium">Full Stack Development</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              asChild
            >
              <a href={personalInfo.resumeLink} download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {skills.map((skillCategory, categoryIndex) => (
              <Card key={skillCategory.category} className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {skillCategory.category}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.6 + (categoryIndex * 0.1) + (skillIndex * 0.05) 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg border hover:bg-accent/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">
                          {getSkillIcon(skill)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-center">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold">Fast & Efficient</h4>
                <p className="text-muted-foreground text-sm">
                  Deliver high-quality code with optimal performance and clean architecture
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎨</span>
                </div>
                <h4 className="text-lg font-semibold">Creative Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Innovative approaches to complex problems with user-centric design
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold">Team Player</h4>
                <p className="text-muted-foreground text-sm">
                  Excellent communication skills and collaborative mindset
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to get icons for skills
const getSkillIcon = (skill: string): string => {
  const icons: { [key: string]: string } = {
    'React': '⚛️',
    'TypeScript': '📘',
    'JavaScript': '💛',
    'Node.js': '🟢',
    'Python': '🐍',
    'Java': '☕',
    'HTML': '🌐',
    'CSS': '🎨',
    'Tailwind CSS': '💨',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'Git': '📚',
    'Docker': '🐳',
    'AWS': '☁️',
    'Firebase': '🔥',
    'Next.js': '⏭️',
    'Express.js': '🚂',
    'Redis': '🗃️',
    'GraphQL': '📊',
    'REST API': '🔗',
  };
  
  return icons[skill] || '💼';
};

export default About;