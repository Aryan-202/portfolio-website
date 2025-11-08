import { motion } from "motion/react";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/socialLinks";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 lg:p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
              <ContactForm />
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-background/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and challenges. 
              Whether you have a project in mind or just want to say hello, 
              I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full" asChild>
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <a href={personalInfo.resumeLink} download>
                  <Send className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;