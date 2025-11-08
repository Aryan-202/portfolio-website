import { Request, Response } from 'express';
import { emailTransporter } from '../config/email';
import { ContactFormData } from '../types/contact';
import { createResponse } from '../utils/response';

export const sendContactEmail = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Email content for you (the portfolio owner)
    const ownerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; }
            .content { background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { color: #333; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span>
                <span class="value">${name} (${email})</span>
              </div>
              <div class="field">
                <span class="label">Subject:</span>
                <span class="value">${subject}</span>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value" style="margin-top: 10px; padding: 10px; background: #f9f9f9; border-radius: 5px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              <div class="field">
                <small>Sent from your portfolio contact form</small>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Auto-reply to the person who filled the form
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; text-align: center; }
            .content { background: white; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Reaching Out!</h2>
            </div>
            <div class="content">
              <p>Hello <strong>${name}</strong>,</p>
              
              <p>Thank you for getting in touch! I've received your message and will get back to you as soon as possible.</p>
              
              <p>Here's a summary of your message:</p>
              
              <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong><br>${message}</p>
              </div>
              
              <p>I typically respond within 24-48 hours. If your inquiry is urgent, feel free to connect with me on LinkedIn.</p>
              
              <p>Best regards,<br>
              <strong>Aryan Vishwakarma</strong><br>
              Full Stack Developer</p>
              
              <hr style="margin: 20px 0;">
              
              <p style="font-size: 12px; color: #666;">
                This is an automated response. Please do not reply to this email.
              </p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to portfolio owner
    await emailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${subject}`,
      html: ownerEmailHtml,
    });

    // Send auto-reply to the sender
    await emailTransporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Aryan Vishwakarma',
      html: autoReplyHtml,
    });

    res.status(200).json(
      createResponse(true, 'Message sent successfully! We\'ve also sent a confirmation email to your inbox.')
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    res.status(500).json(
      createResponse(false, 'Failed to send message. Please try again later.')
    );
  }
};