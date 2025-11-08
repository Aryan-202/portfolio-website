export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  messageId?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}