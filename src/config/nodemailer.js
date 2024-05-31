import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  // port: 465,
  // secure: true,
  // auth: {
  //   user: process.env.GMAIL_USERNAME,
  //   pass: process.env.GMAIL_PASSWORD,
  // },
  // host: 'smtp.hostinger.com',
  // secure: true,
  // secureConnection: false,
  // tls: {
  //   ciphers: 'SSLv3',
  // },
  // requireTLS: true,
  // port: 587,
  // debug: true,
  // connectionTimeout: 10000,
  // auth: {
  //   user: process.env.GMAIL_USERNAME,
  //   pass: process.env.GMAIL_PASSWORD,
  // },
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.HOSTINGER_EMAIL,
    pass: process.env.HOSTINGER_PASSWORD,
  },
  tls: { ciphers: 'TLSv1.2' },
  requireTLS: true,
  debug: true,
  connectionTimeout: 10000,
});

export const mailOptions = {
  from: process.env.HOSTINGER_EMAIL,
  to: process.env.HOSTINGER_EMAIL,
};
