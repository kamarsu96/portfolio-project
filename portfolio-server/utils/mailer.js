const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    // We default to a standard SMTP configuration (like Gmail or general SMTP).
    // The user should configure these variables in their .env file.
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: process.env.EMAIL_PORT || 587,
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const sendContactEmail = async ({ name, email, message }) => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('EMAIL_USER and/or EMAIL_PASS not defined. Skipping email dispatch.');
    return;
  }

  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`, // sender address
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, // list of receivers
      subject: `New Contact Message from ${name}`, // Subject line
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `, // html body
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = {
  sendContactEmail,
};
