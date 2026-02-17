import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.SENDGRID_API_KEY);

class SendGridProvider {
  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(to, subject, html) {
    try {
      const msg = {
        to: to,
        from: process.env.EMAIL_FROM,
        subject: subject,
        html: html,
      };

      const response = await sgMail.send(msg);

      return {
        success: true,
        response: response[0].statusCode,
      };
    } catch (error) {
      console.error(
        "SendGrid Error:",
        error.response?.body || error.message
      );

      return {
        success: false,
        error: error.response?.body || error.message,
      };
    }
  }
}

export default SendGridProvider;
