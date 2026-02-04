export const studentPresidentTemplates = {
  clubVerificationStatus: (data) => ({
    subject: `Club Verification Status: ${data.status}`,
    body: `
      <h2>Club Verification Update</h2>
      <p>Your club <strong>${data.clubName}</strong> verification status is now: <strong>${data.status}</strong>.</p>
      ${data.reason ? `<p>Reason: ${data.reason}</p>` : ''}
      <a href="${data.dashboardUrl}">View Dashboard</a>
    `
  }),

  campaignCreated: (data) => ({
    subject: `Campaign Created: ${data.campaignTitle}`,
    body: `
      <h2>Campaign Created</h2>
      <p>You have successfully created the campaign "${data.campaignTitle}".</p>
      <p>It is currently under review.</p>
    `
  }),

  campaignApprovalStatus: (data) => ({
    subject: `Campaign ${data.status}: ${data.campaignTitle}`,
    body: `
      <h2>Campaign Update</h2>
      <p>Your campaign "${data.campaignTitle}" has been <strong>${data.status}</strong>.</p>
      ${data.status === 'APPROVED' ? '<p>It is now live!</p>' : `<p>Reason: ${data.reason}</p>`}
    `
  }),

  campaignLive: (data) => ({
    subject: `Campaign is LIVE: ${data.campaignTitle}`,
    body: `
      <h2>Your Campaign is Live!</h2>
      <p>Start sharing your campaign link: <a href="${data.campaignUrl}">${data.campaignUrl}</a></p>
      <p>Good luck!</p>
    `
  }),

  donationReceived: (data) => ({
    subject: `Donation Received: ${data.currency}${data.amount}`,
    body: `
      <h2>New Donation!</h2>
      <p>You received <strong>${data.currency}${data.amount}</strong> from ${data.donorName || 'Anonymous'}.</p>
      <p>Campaign: ${data.campaignTitle}</p>
    `
  }),

  campaignMilestone: (data) => ({
    subject: `Milestone Reached! ${data.percentage}% Funded`,
    body: `
      <h2>Milestone Achieved!</h2>
      <p>Congratulations! Your campaign "${data.campaignTitle}" has reached <strong>${data.percentage}%</strong> of its goal.</p>
    `
  }),

  lowDonationReminder: (data) => ({
    subject: `Action Needed: Campaign Momentum`,
    body: `
      <h2>Keep the Momentum Going</h2>
      <p>Your campaign "${data.campaignTitle}" has slowed down.</p>
      <p>Deadline is approaching in ${data.daysLeft} days.</p>
      <p>Consider posting an update to attract more donors.</p>
    `
  }),

  campaignCompleted: (data) => ({
    subject: `Campaign Completed: ${data.campaignTitle}`,
    body: `
      <h2>Campaign Finished</h2>
      <p>Your campaign "${data.campaignTitle}" has ended.</p>
      <p>Total Raised: ${data.currency}${data.totalRaised}</p>
      <p>Please initiate the fund withdrawal process.</p>
    `
  }),

  fundWithdrawalStatus: (data) => ({
    subject: `Withdrawal Status: ${data.status}`,
    body: `
      <h2>Fund Withdrawal Update</h2>
      <p>Your withdrawal request for ${data.currency}${data.amount} is <strong>${data.status}</strong>.</p>
      <p>Transaction ID: ${data.transactionId}</p>
    `
  }),
};
