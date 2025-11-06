import { motion } from "motion/react";
import { personalInfo } from "@/data/personalInfo";
import { Card } from "@/components/ui/Card";
import { MapPin, Calendar, Award } from "lucide-react";

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
          {/* Left Column - My Journey (Full width on mobile, 2/3 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=""
          >
            <Card className="p-8 h-full w-[500px] mr-1.5">
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
          </motion.div>

          {/* Right Column - Personal Details (Full width on mobile, 1/3 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="p-6 h-full w-auto">
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
          </motion.div>
        </div>

        {/* Rest of your component remains the same */}
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

export default About;