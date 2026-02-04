export const adminTemplates = {
  newCampaignSubmitted: (data) => ({
    subject: `New Campaign Submitted: ${data.campaignTitle}`,
    body: `
      <h2>New Campaign Submission</h2>
      <p><strong>Campaign Title:</strong> ${data.campaignTitle}</p>
      <p><strong>Submitted By:</strong> ${data.studentName} (${data.studentEmail})</p>
      <p><strong>Club:</strong> ${data.clubName}</p>
      <p><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</p>
      <p>Please review the campaign details in the admin dashboard.</p>
      <a href="${data.adminDashboardUrl}/campaigns/${data.campaignId}">Review Campaign</a>
    `
  }),

  campaignStatusUpdate: (data) => ({
    subject: `Campaign ${data.status}: ${data.campaignTitle}`,
    body: `
      <h2>Campaign Status Update</h2>
      <p>The campaign "<strong>${data.campaignTitle}</strong>" has been <strong>${data.status}</strong>.</p>
      <p><strong>Action Taken By:</strong> ${data.adminName}</p>
      <p><strong>Reason (if rejected):</strong> ${data.reason || 'N/A'}</p>
    `
  }),

  clubVerificationPending: (data) => ({
    subject: `Club Verification Pending: ${data.clubName}`,
    body: `
      <h2>Club Verification Request</h2>
      <p><strong>Club Name:</strong> ${data.clubName}</p>
      <p><strong>President:</strong> ${data.presidentName}</p>
      <p><strong>University:</strong> ${data.universityName}</p>
      <p>Please verify the club documents.</p>
      <a href="${data.adminDashboardUrl}/clubs/${data.clubId}">Verify Club</a>
    `
  }),

  highValueDonationAlert: (data) => ({
    subject: `High Value Donation Alert: ${data.currency}${data.amount}`,
    body: `
      <h2>High Value Donation Received</h2>
      <p><strong>Amount:</strong> ${data.currency}${data.amount}</p>
      <p><strong>Donor:</strong> ${data.donorName || 'Anonymous'}</p>
      <p><strong>Campaign:</strong> ${data.campaignTitle}</p>
      <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
    `
  }),

  failedPayoutRefund: (data) => ({
    subject: `Alert: Failed Payout/Refund - ${data.transactionId}`,
    body: `
      <h2 style="color: red;">Transaction Failure Alert</h2>
      <p><strong>Type:</strong> ${data.type} (Payout/Refund)</p>
      <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
      <p><strong>Campaign:</strong> ${data.campaignTitle}</p>
      <p><strong>Error Message:</strong> ${data.errorMessage}</p>
      <p>Please investigate immediately.</p>
    `
  }),

  suspiciousActivity: (data) => ({
    subject: `SECURITY ALERT: Suspicious Activity Detected`,
    body: `
      <h2 style="color: red;">Suspicious Activity Report</h2>
      <p><strong>User ID:</strong> ${data.userId}</p>
      <p><strong>Activity Type:</strong> ${data.activityType}</p>
      <p><strong>IP Address:</strong> ${data.ipAddress}</p>
      <p><strong>Details:</strong> ${data.details}</p>
      <p>System has flagged this for review.</p>
    `
  }),

  kycFailure: (data) => ({
    subject: `KYC Failure: ${data.userName}`,
    body: `
      <h2>KYC Verification Failed</h2>
      <p><strong>User:</strong> ${data.userName} (${data.userEmail})</p>
      <p><strong>Reason:</strong> ${data.failureReason}</p>
      <p>Please review the submitted documents.</p>
      <a href="${data.adminDashboardUrl}/kyc/${data.userId}">Review KYC</a>
    `
  }),

  systemError: (data) => ({
    subject: `SYSTEM ALERT: ${data.errorType}`,
    body: `
      <h2 style="color: red;">System Error / Downtime Alert</h2>
      <p><strong>Error Type:</strong> ${data.errorType}</p>
      <p><strong>Service:</strong> ${data.serviceName}</p>
      <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      <p><strong>Stack/Details:</strong> <pre>${data.errorDetails}</pre></p>
    `
  }),

  platformReport: (data) => ({
    subject: `Platform Report: ${data.period}`,
    body: `
      <h2>Platform ${data.period} Report</h2>
      <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      <p><strong>Total Donations:</strong> ${data.totalDonations}</p>
      <p><strong>New Campaigns:</strong> ${data.newCampaigns}</p>
      <p><strong>New Users:</strong> ${data.newUsers}</p>
      <p>Attached is the detailed report (if configured).</p>
      <a href="${data.reportUrl}">View Full Report</a>
    `
  }),
};
