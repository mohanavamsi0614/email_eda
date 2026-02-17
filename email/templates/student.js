export const studentTemplates = {
  welcomeEmail: (data) => ({
    subject: `Welcome to DreamXec, ${data.name}!`,
    body: `
      <h2>Welcome to DreamXec!</h2>
      <p>Hi ${data.name},</p>
      <p>We are thrilled to have you on board. DreamXec is your platform to connect, create, and campaign.</p>
      <a href="${data.dashboardUrl}">Go to Dashboard</a>
    `
  }),

  emailOtp: (data) => ({
    subject: `DreamXec Email OTP`,
    body: `
      <h2>DreamXec OTP</h2>
      <p>Your OTP is <strong>${data.otp}</strong>.</p>
      <p>It is valid for 5 minutes.</p>
    `
  }),

  passwordReset: (data) => ({
    subject: `Password password reset request`,
    body: `
      <h2>Reset Your Password</h2>
      <p>Click the link below to reset your password. The link is valid for 10 minutes.</p>
      <a href="${data.resetUrl}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
    `
  }),

  emailVerification: (data) => ({
    subject: `Verify your Email Address`,
    body: `
      <h2>Email Verification</h2>
      <p>Please click the link below to verify your email address.</p>
      <p><a href="${data.verificationUrl}">Verify Email</a></p>
    `
  }),

  profileCompletionReminder: (data) => ({
    subject: `Complete your Profile`,
    body: `
      <h2>Complete your Profile</h2>
      <p>Hi ${data.name}, your profile is ${data.percentage}% complete.</p>
      <p>Complete it now to unlock all features.</p>
      <a href="${data.profileUrl}">Complete Profile</a>
    `
  }),

  clubJoinConfirmation: (data) => ({
    subject: `You joined ${data.clubName}!`,
    body: `
      <h2>Club Joined Successfully</h2>
      <p>You have successfully joined <strong>${data.clubName}</strong>.</p>
      <p>Contact Email: ${data.clubEmail}</p>
    `
  }),

  campaignDiscovery: (data) => ({
    subject: `Campaigns you might like`,
    body: `
      <h2>Discover New Campaigns</h2>
      <p>Based on your interests, check out these campaigns:</p>
      <ul>
        ${data.campaigns.map(c => `<li><a href="${c.url}">${c.title}</a></li>`).join('')}
      </ul>
    `
  }),

  platformAnnouncement: (data) => ({
    subject: `Announcement: ${data.title}`,
    body: `
      <h2>${data.title}</h2>
      <p>${data.message}</p>
      <p>Best,<br>The DreamXec Team</p>
    `
  }),

  securityAlert: (data) => ({
    subject: `Security Alert: New Login`,
    body: `
      <h2>New Login Detected</h2>
      <p>We detected a new login from ${data.device} at ${data.time}.</p>
      <p>If this was not you, please secure your account immediately.</p>
    `
  }),

  // --- NEW (1.x) ---

  // 1.1 Project Kickoff Example - Note: Typically sent TO mentor
  projectKickoffToMentor: (data) => ({
    subject: `${data.projectName} - Research Project Approval Request`,
    body: `
      <p>Dear Prof./Dr. ${data.mentorName},</p>

      <p>I hope this email finds you well. I am ${data.studentName}, a ${data.year} student in ${data.department} at ${data.collegeName}. I am writing to seek your guidance and approval for a research project on ${data.projectTitle}.</p>

      <h3>Project Overview:</h3>
      <ul>
        <li><strong>Title:</strong> ${data.projectTitle}</li>
        <li><strong>Duration:</strong> ${data.duration}</li>
        <li><strong>Focus Area:</strong> ${data.researchArea}</li>
        <li><strong>Expected Outcome:</strong> ${data.expectedOutcome}</li>
      </ul>

      <p><strong>Why This Research Matters:</strong> ${data.significance}</p>

      <h3>Team Composition:</h3>
      <ul>
        <li><strong>Project Lead:</strong> ${data.studentName}</li>
        <li><strong>Team Members:</strong> ${data.teamMembers || 'N/A'}</li>
      </ul>

      <p>I would greatly appreciate your mentorship throughout this project. Your expertise in ${data.specificArea} would be invaluable. Would you be available for a brief meeting to discuss this in detail?</p>

      <p>Thank you for considering this request. I am eager to embark on this research journey.</p>

      <p>Best regards,<br>
      ${data.studentName}<br>
      ${data.studentId}<br>
      ${data.contactNumber}<br>
      ${data.emailAddress}</p>
    `
  }),

  // 1.2 Crowdfunding Launch
  crowdfundingLaunch: (data) => ({
    subject: `Help Fund My College Research Project - ${data.projectName}`,
    body: `
      <p>Hi ${data.recipientName},</p>

      <p>I'm excited to share that I'm launching a research project on ${data.projectTopic} as part of my studies at ${data.collegeName}. I've created a crowdfunding campaign on DreamXec to raise funds for this important research.</p>

      <h3>What's the project about?</h3>
      <p>${data.projectDescription}</p>

      <h3>Why it matters:</h3>
      <p>${data.impactStatement}</p>

      <h3>What I need funds for:</h3>
      <ul>
        <li>Equipment/Resources: ₹${data.equipmentCost || 0}</li>
        <li>Literature/Data: ₹${data.dataCost || 0}</li>
        <li>Travel (if applicable): ₹${data.travelCost || 0}</li>
        <li><strong>Total Target: ₹${data.totalTarget}</strong></li>
      </ul>

      <p><strong>Campaign Link:</strong> <a href="${data.campaignUrl}">${data.campaignUrl}</a></p>

      <p>I'd be incredibly grateful if you could support this project, even with a small contribution. Every rupee helps move this research forward.</p>

      <p>Plus, all supporters will receive:
      <ul>
        <li>Monthly project updates</li>
        <li>Special recognition on the DreamXec platform</li>
        <li>Final research report/findings</li>
      </ul>
      </p>

      <p>Could you please share this campaign with your network as well? Your help means a lot.</p>

      <p>Thank you for believing in my research!</p>

      <p>${data.studentName}</p>
    `
  }),

  // 1.3 Progress Update
  progressUpdate: (data) => ({
    subject: `${data.projectName} Progress Update - Month ${data.month}`,
    body: `
      <p>Hi everyone,</p>

      <p>Thank you for supporting my research project ${data.projectName} on DreamXec! I'm excited to share a progress update.</p>

      <h3>Milestone Achieved This Month:</h3>
      <ul>
        ${data.achievements ? data.achievements.map(a => `<li>✓ ${a}</li>`).join('') : ''}
      </ul>

      <h3>What's Next:</h3>
      <ul>
        ${data.nextActivities ? data.nextActivities.map(a => `<li>${a}</li>`).join('') : ''}
      </ul>

      <h3>Funds Utilized:</h3>
      <ul>
        <li>Total spent so far: ₹${data.totalSpent}</li>
      </ul>

      <p><strong>Key Insights:</strong> ${data.insights}</p>

      <p>I'm incredibly grateful for your continued support. This project wouldn't be possible without you all.</p>

      <p>The full update with visuals is available here: <a href="${data.projectPageUrl}">DreamXec Project Page Link</a></p>

      <p>Best regards,<br>${data.studentName}</p>
    `
  }),

  // 1.4 Funding Goal Achievement
  fundingGoalAchieved: (data) => ({
    subject: `WE DID IT! 🎉 ${data.projectName} Reached Its Funding Goal!`,
    body: `
      <p>Hi everyone,</p>

      <p>I'm thrilled to announce that we've successfully reached our funding goal of ₹${data.amount}!</p>

      <p>Your collective support means we can now proceed with the full scope of our research. Thank you for believing in this project and its potential impact.</p>

      <h3>What Happens Now:</h3>
      <ol>
        <li>Funds will be released on ${data.releaseDate}</li>
        <li>We'll immediately begin Phase 2 of the project: ${data.phase2Description}</li>
        <li>You'll receive detailed monthly updates on progress</li>
      </ol>

      <h3>Special Thank You:</h3>
      <p>Special recognition to our top supporters:</p>
      <ul>
        ${data.topSupporters ? data.topSupporters.map(s => `<li>${s.name} - Contributed ₹${s.amount}</li>`).join('') : ''}
      </ul>

      <p><strong>Next Steps:</strong> Keep an eye on your inbox for our first detailed progress report. I'll also be sharing behind-the-scenes updates on ${data.socialHandle}.</p>

      <p>Once again, thank you for being part of this research journey!</p>

      <p>Gratefully yours,<br>${data.studentName}</p>
    `
  }),

  // 1.5 Final Report
  finalReport: (data) => ({
    subject: `Research Complete! Here Are Our Findings - ${data.projectName}`,
    body: `
      <p>Dear Supporters,</p>

      <p>I'm excited to share that our research project ${data.projectName} is now complete! The journey has been incredible, and I couldn't have done it without your support.</p>

      <h3>Final Results Summary:</h3>
      <p>${data.resultsSummary}</p>

      <h3>Key Discoveries:</h3>
      <ul>
        ${data.discoveries ? data.discoveries.map(d => `<li>${d}</li>`).join('') : ''}
      </ul>

      <p><strong>Impact:</strong> ${data.impact}</p>

      <h3>Next Steps:</h3>
      <ul>
        <li>Paper submission to ${data.journalName}</li>
        <li>Presentation at ${data.eventName}</li>
        <li>Application for ${data.grantName}</li>
      </ul>

      <p><strong>Full Research Report:</strong> Download the complete report: <a href="${data.reportLink}">Link to PDF/Document</a></p>

      <p><strong>One More Thing:</strong> Your support was crucial in making this possible. You're not just donors – you're part of the research community. Thank you!</p>

      <p>Warm regards,<br>
      ${data.studentName}<br>
      Student Researcher, DreamXec</p>
    `
  })
};
