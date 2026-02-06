import nodemailer from 'nodemailer';

class SMTPProvider {
  constructor() {
    this.transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail(to, subject, html) {
    return this.transporter.sendMail({
      from: "mohanavamsi14@gmail.com",
      to,
      subject,
      html,
    });
  }
}

export default SMTPProvider;
