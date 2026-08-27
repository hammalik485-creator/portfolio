// Simple contact-form backend for Hammad Malik's portfolio.
// Serves the site AND handles the "Leave a Message" form, emailing you via Gmail.
// Your Gmail app password lives in .env (server-side only) — never in the web page.

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(__dirname)); // serves index.html, images, videos, etc.

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password (no spaces)
  },
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Missing fields' });
  }
  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h2>New message from your portfolio</h2>
             <p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br>${String(message).replace(/\n/g, '<br>')}</p>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Send failed:', err.message);
    res.status(500).json({ ok: false, error: 'Send failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`\n  Portfolio running →  http://localhost:${PORT}\n`));
