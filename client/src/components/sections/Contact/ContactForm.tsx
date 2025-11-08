// client/src/components/sections/Contact/ContactForm.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle } from "lucide-react";
import styles from './ContactForm.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h4 className="text-2xl font-semibold mb-2">Message Sent!</h4>
        <p className="text-muted-foreground mb-6">
          Thank you for your message. I'll get back to you as soon as possible.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="rounded-full"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      {/* Error Message */}
      {error && (
        <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-destructive text-sm">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name Field */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
        </div>

        {/* Email Field */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
        </div>
      </div>

      {/* Subject Field */}
      <div className={styles.formGroup}>
        <label htmlFor="subject" className={styles.label}>
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={styles.input}
          placeholder="What's this about?"
          disabled={isSubmitting}
        />
      </div>

      {/* Message Field */}
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={styles.textarea}
          placeholder="Tell me about your project or just say hello..."
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="mt-8"
      >
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full rounded-full py-6 text-lg font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </form>
  );
};

export default ContactForm;