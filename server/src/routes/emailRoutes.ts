import { Router } from 'express';
import { EmailController } from '../controllers/emailController.js';
import { contactFormValidation, handleValidationErrors } from '../middleware/validation.js';
import { emailRateLimiter } from '../middleware/rateLimit.js';

const router = Router();

/**
 * @route   POST /api/email/contact
 * @desc    Send contact form email
 * @access  Public
 */
router.post(
  '/contact',
  emailRateLimiter,
  contactFormValidation,
  handleValidationErrors,
  EmailController.sendContactEmail
);

/**
 * @route   GET /api/email/health
 * @desc    Email service health check
 * @access  Public
 */
router.get('/health', EmailController.healthCheck);

export default router;