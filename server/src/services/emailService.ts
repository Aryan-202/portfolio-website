import transporter from '../config/nodemailer.js';
import { ContactFormData, EmailOptions, EmailResponse } from '../types/email.js';
import { config } from '../config/index.js';

export class EmailService {
  /**
   * Send contact form email
   */
  static async sendContactEmail(formData: ContactFormData): Promise<EmailResponse> {
    try {
      const { name, email, subject, message } = formData;

      // Email to portfolio owner
      const ownerMailOptions: EmailOptions = {
        to: config.email.from!,
        subject: `Portfolio Contact: ${subject}`,
        html: this.generateOwnerEmailTemplate(name, email, subject, message),
      };

      // Email to sender (confirmation)
      const senderMailOptions: EmailOptions = {
        to: email,
        subject: 'Thank you for contacting me!',
        html: this.generateConfirmationEmailTemplate(name),
      };

      // Send both emails
      const ownerResult = await transporter.sendMail({
        from: `"Portfolio Contact" <${config.email.from}>`,
        ...ownerMailOptions,
      });

      // Send confirmation email (optional - can be removed if not needed)
      await transporter.sendMail({
        from: `"Aryan Vishwakarma" <${config.email.from}>`,
        ...senderMailOptions,
      });

      return {
        success: true,
        message: 'Email sent successfully',
        messageId: ownerResult.messageId,
      };
    } catch (error) {
      console.error('Email service error:', error);
      throw new Error('Failed to send email');
    }
  }

  /**
   * Generate email template for portfolio owner
   */
  private static generateOwnerEmailTemplate(
    name: string,
    email: string,
    subject: string,
    message: string
  ): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; }
            .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Subject:</span> ${subject}
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="message">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                <small>This email was sent from your portfolio contact form.</small>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  /**
   * Generate confirmation email template for sender
   */
  private static generateConfirmationEmailTemplate(name: string): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; text-align: center; }
            .thank-you { font-size: 24px; color: #667eea; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
              <div class="thank-you">Hi ${name},</div>
              <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
              <p>I typically respond within 24-48 hours.</p>
              <p>Best regards,<br><strong>Aryan Vishwakarma</strong></p>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                <small>This is an automated confirmation email.</small>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}