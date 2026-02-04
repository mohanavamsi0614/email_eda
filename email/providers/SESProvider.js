import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

class SESProvider {
  constructor() {
    this.client = new SESClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async sendEmail(to, subject, html) {
    const command = new SendEmailCommand({
      Source: process.env.EMAIL_FROM,
      Destination: { ToAddresses: [to] },
      Message: {
        Subject: { Data: subject },
        Body: { Html: { Data: html } },
      },
    });
    return this.client.send(command);
  }
}

export default SESProvider;
