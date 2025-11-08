import { ContactFormData, ValidationResult } from '../types/email';

export const validateContactForm = (data: ContactFormData): ValidationResult => {
  const errors: string[] = [];

  // Name validation
  if (!data.name || data.name.trim().length === 0) {
    errors.push('Name is required');
  } else if (data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  } else if (data.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Email validation
  if (!data.email || data.email.trim().length === 0) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.push('Please provide a valid email address');
    }
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length === 0) {
    errors.push('Subject is required');
  } else if (data.subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long');
  } else if (data.subject.trim().length > 200) {
    errors.push('Subject must be less than 200 characters');
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  } else if (data.message.trim().length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};