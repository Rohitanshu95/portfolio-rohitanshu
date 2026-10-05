const nodemailer = require('nodemailer');

const createTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }

  // Fallback simulator transporter if credentials are not set
  return {
    sendMail: async (mailOptions) => {
      console.log('\n================ [EMAIL SIMULATION] ================');
      console.log(`To: ${mailOptions.to}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log(`From: ${mailOptions.from}`);
      console.log(`Message preview:\n${mailOptions.text || mailOptions.html}`);
      console.log('====================================================\n');
      return { messageId: `mock-${Date.now()}` };
    },
  };
};

const transporter = createTransporter();

module.exports = transporter;
