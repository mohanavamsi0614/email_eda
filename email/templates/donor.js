export const donorTemplates = {
  donationSuccess: (data) => ({
    subject: `Donation Receipt: ${data.currency}${data.amount}`,
    body: `
      <h2>Thank you for your donation!</h2>
      <p><strong>Amount:</strong> ${data.currency}${data.amount}</p>
      <p><strong>Campaign:</strong> ${data.campaignTitle}</p>
      <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
      <p>Your support makes a difference.</p>
    `
  }),

  donationFailed: (data) => ({
    subject: `Action Required: Donation Failed`,
    body: `
      <h2>Donation Failed</h2>
      <p>We were unable to process your donation of ${data.currency}${data.amount}.</p>
      <p>Reason: ${data.reason}</p>
      <p>Please try again or update your payment method.</p>
    `
  }),

  refundStatus: (data) => ({
    subject: `Refund Update: ${data.status}`,
    body: `
      <h2>Refund Status</h2>
      <p>Your refund of ${data.currency}${data.amount} for "${data.campaignTitle}" has been <strong>${data.status}</strong>.</p>
    `
  }),

  thankYou: (data) => ({
    subject: `A specialized Thank You`,
    body: `
      <h2>Thank You</h2>
      <p>Dear ${data.donorName},</p>
      <p>We deeply appreciate your contribution to "${data.campaignTitle}".</p>
    `
  }),

  campaignProgress: (data) => ({
    subject: `Update on ${data.campaignTitle}`,
    body: `
      <h2>Campaign Update</h2>
      <p>The campaign you supported has a new update:</p>
      <blockquote>${data.updateMessage}</blockquote>
      <a href="${data.campaignUrl}">View Campaign</a>
    `
  }),

  impactReport: (data) => ({
    subject: `Your Impact Report`,
    body: `
      <h2>Impact Report</h2>
      <p>See how your donations have helped this year.</p>
      <a href="${data.reportUrl}">View Report</a>
    `
  }),

  donateAgain: (data) => ({
    subject: `Support more causes`,
    body: `
      <h2>Ready to help again?</h2>
      <p>Check out these new campaigns that match your interests.</p>
    `
  }),

  taxReceipt: (data) => ({
    subject: `Tax Receipt for your Donation`,
    body: `
      <h2>Tax Receipt</h2>
      <p>Attached/Below is your tax receipt for the donation of ${data.currency}${data.amount}.</p>
      <p>Transaction ID: ${data.transactionId}</p>
    `
  }),
};
