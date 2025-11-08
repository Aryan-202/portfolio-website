import nodemailer from 'nodemailer';
import { config } from './index';

// Create transporter
export const transporter = nodemailer.createTransport({
  service: config.email.service,
  host: config.email.host,
  port: config.email.port,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

// Verify transporter connection
export const verifyTransporter = async (): Promise<boolean> => {
  try {
    await transporter.verify();
    console.log('✅ Email transporter is ready');
    return true;
  } catch (error) {
    console.error('❌ Email transporter verification failed:', error);
    return false;
  }
};

export default transporter;