import sendgrid from 'sendgrid';

class SendGridProvider {
  constructor() {
    this.sg = sendgrid(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(to, subject, html) {
    const request = this.sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [{
          to: [{ email: to }],
          subject: subject,
        }],
        from: { email: process.env.EMAIL_FROM },
        content: [{
          type: 'text/html',
          value: html,
        }],
      },
    });
    return this.sg.API(request);
  }
}

export default SendGridProvider;
