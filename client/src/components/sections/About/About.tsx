import { motion } from "motion/react";
import { personalInfo } from "@/data/personalInfo";
import { Card } from "@/components/ui/Card";
import { MapPin, Calendar, Award, Mail, Phone, GraduationCap } from "lucide-react";

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 lg:p-8 h-auto">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Full Stack Developer with a love for creating efficient, 
                scalable, and user-friendly applications. My journey in web development 
                started with curiosity and has evolved into a career dedicated to 
                crafting digital experiences that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community. I believe in continuous learning and 
                staying updated with the latest industry trends.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My expertise spans across modern web technologies including React, 
                TypeScript, Node.js, and cloud platforms, allowing me to deliver 
                comprehensive solutions from concept to deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My expertise spans across modern web technologies including React, 
                TypeScript, Node.js, and cloud platforms, allowing me to deliver 
                comprehensive solutions from concept to deployment.
              </p>
            </Card>
          </motion.div>

          {/* Right Column - Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 lg:p-8 h-auto">
              <h4 className="text-2xl font-semibold mb-6">Personal Details</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-lg">{personalInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-lg">{personalInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Experience</p>
                    <p className="font-medium text-lg">2+ Years</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Specialization</p>
                    <p className="font-medium text-lg">Full Stack Development</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Education</p>
                    <p className="font-medium text-lg">B.Tech in Computer Science</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="font-medium text-lg">Open for Opportunities</p>
                  </div>
                </div>
              </div>

              {/* Additional Skills Preview */}
              {/* <div className="mt-8 pt-6 border-t border-border">
                <h5 className="text-lg font-semibold mb-4">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "MongoDB", "Tailwind", "AWS"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}
            </Card>
          </motion.div>
        </div>

        {/* Why Work With Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="p-6 lg:p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6 lg:mb-8">Why Work With Me?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">⚡</span>
                </div>
                <h4 className="text-lg font-semibold">Fast & Efficient</h4>
                <p className="text-muted-foreground text-sm">
                  Deliver high-quality code with optimal performance and clean architecture
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">🎨</span>
                </div>
                <h4 className="text-lg font-semibold">Creative Solutions</h4>
                <p className="text-muted-foreground text-sm">
                  Innovative approaches to complex problems with user-centric design
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-xl lg:text-2xl">🤝</span>
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

export default About;