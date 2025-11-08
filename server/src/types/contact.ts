export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}