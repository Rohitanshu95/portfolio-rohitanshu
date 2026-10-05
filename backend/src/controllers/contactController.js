const Message = require('../models/Message');
const transporter = require('../config/mailer');

// Simple email regex for validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// @desc    Handle incoming contact form submission & send notification
// @route   POST /api/v1/contact
// @access  Public (Rate limited)
const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Field presence validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, email, subject, message',
      });
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      });
    }

    // IP and User-Agent capture
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'] || '';

    // Save message to MongoDB if connection is alive
    let savedMessage = null;
    try {
      savedMessage = await Message.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
        ipAddress,
        userAgent,
      });
    } catch (dbErr) {
      console.warn('[Contact] Database insert skipped or failed:', dbErr.message);
    }

    // Send email alert to portfolio owner
    const targetRecipient = process.env.CONTACT_NOTIFICATION_EMAIL || 'rohitanshudhar07@gmail.com';
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER || 'no-reply@portfolio.ai'}>`,
      to: targetRecipient,
      replyTo: email,
      subject: `[Portfolio Inquiry] ${subject} - from ${name}`,
      text: `You received a new inquiry from your portfolio website:
      
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Sent at: ${new Date().toISOString()}
IP: ${ipAddress}
`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0f131d; color: #dfe2f1; padding: 24px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #313540;">
          <h2 style="color: #4cd7f6; margin-top: 0;">New Portfolio Inquiry</h2>
          <p style="color: #c7c4d7; font-size: 14px;">You received a message via your AI Engineer Portfolio website:</p>
          
          <div style="background: #171b26; border-left: 4px solid #c0c1ff; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4cd7f6;">${email}</a></p>
            <p style="margin: 0 0 8px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="background: #1c1f2a; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #7bd0ff; letter-spacing: 0.05em;">Message Content:</p>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #908fa0; margin-top: 24px;">Sent from IP ${ipAddress} on ${new Date().toLocaleString()}</p>
        </div>
      `,
    };

    // Trigger async email dispatch (transporter handles both actual SMTP and simulated fallback)
    try {
      await transporter.sendMail(mailOptions);
    } catch (mailErr) {
      console.error('[Contact Error] Failed to send email alert:', mailErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Rohitanshu will get back to you shortly.',
      data: savedMessage ? { id: savedMessage._id, createdAt: savedMessage.createdAt } : null,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContactForm,
};
