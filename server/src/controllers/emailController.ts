import { Request, Response } from 'express';
import { EmailService } from '../services/emailService.js';
import { validateContactForm, sanitizeInput } from '../utils/validation.js';
import { sendSuccess, sendError, sendServerError } from '../utils/response.js';
import { ContactFormData } from '../types/email.js';

export class EmailController {
  /**
   * Handle contact form submission
   */
  static async sendContactEmail(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, subject, message }: ContactFormData = req.body;

      // Sanitize inputs
      const sanitizedData: ContactFormData = {
        name: sanitizeInput(name),
        email: sanitizeInput(email),
        subject: sanitizeInput(subject),
        message: sanitizeInput(message),
      };

      // Validate form data
      const validation = validateContactForm(sanitizedData);
      
      if (!validation.isValid) {
        sendError(res, 'Validation failed', validation.errors, 422);
        return;
      }

      // Send email
      const result = await EmailService.sendContactEmail(sanitizedData);

      sendSuccess(res, 'Email sent successfully', {
        messageId: result.messageId,
      });
      
    } catch (error) {
      console.error('Email controller error:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('Failed to send email')) {
          sendServerError(res, 'Unable to send email at the moment. Please try again later.');
        } else {
          sendServerError(res, 'An unexpected error occurred');
        }
      } else {
        sendServerError(res, 'An unexpected error occurred');
      }
    }
  }

  /**
   * Health check for email service
   */
  static async healthCheck(req: Request, res: Response): Promise<void> {
    try {
      // You can add additional health checks here
      sendSuccess(res, 'Email service is healthy', {
        service: 'email',
        status: 'operational',
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      sendServerError(res, 'Email service health check failed');
    }
  }
}