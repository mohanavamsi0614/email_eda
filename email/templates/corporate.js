export const corporateTemplates = {
  // 3.1 Corporate CSR Partnership Inquiry (Platform -> Corporate)
  partnershipInquiry: (data) => ({
    subject: `College Research Partnership Opportunity - ${data.companyName}`,
    body: `
      <p>Dear ${data.csrManagerName || 'CSR Team'},</p>

      <p>I hope this message finds you well. I'm writing on behalf of ${data.collegeName || 'DreamXec'} to explore a strategic partnership with ${data.companyName} to support college student research through our platform, DreamXec.</p>

      <p><strong>About DreamXec:</strong> DreamXec is India's premier college research crowdfunding platform connecting 4.6M college students with funding, mentorship, and real-world research opportunities. We're aligned with India's National Education Policy 2020 vision.</p>

      <h3>Partnership Opportunity:</h3>
      <p>We're inviting corporations to support student research projects through:</p>
      <ul>
        <li>Direct Project Sponsorship: Fund specific research areas aligned with your CSR goals</li>
        <li>Student Researcher Grants: Provide internships and mentorship</li>
        <li>Innovation Challenge Sponsorship: Host competitions for college researchers</li>
        <li>Employee Mentoring Program: Connect your employees as mentors to students</li>
      </ul>

      <h3>Why This Partnership:</h3>
      <ul>
        <li>✓ Direct impact on 4.6M college students</li>
        <li>✓ Fulfills CSR 2% corporate responsibility mandate</li>
        <li>✓ Builds talent pipeline for future hiring</li>
        <li>✓ Demonstrates commitment to education and innovation</li>
        <li>✓ Tax benefits under Section 80G</li>
      </ul>

      <h3>Sample Projects Available for Sponsorship:</h3>
      <ol>
        ${data.sampleProjects ? data.sampleProjects.map(p => `<li>${p.name} - ${p.area}, ₹${p.target}</li>`).join('') : ''}
      </ol>

      <p>I'd love to schedule a brief call to discuss how we can work together. Could we meet next week?</p>

      <p>Looking forward to building this partnership.</p>

      <p>Best regards,<br>
      ${data.senderName}<br>
      DreamXec Partnerships Team<br>
      ${data.senderContact}</p>
    `
  }),

  // 3.2 Follow-up
  partnershipFollowUp: (data) => ({
    subject: `Follow-up: DreamXec Research Partnership - ${data.companyName}`,
    body: `
      <p>Hi ${data.csrManagerName},</p>

      <p>I hope this email finds you well. I wanted to follow up on my previous message about the partnership opportunity with DreamXec.</p>

      <p><strong>Quick Recap:</strong> We're seeking corporate sponsors to support college research projects. ${data.companyName}'s commitment to education and innovation makes this a perfect fit.</p>

      <h3>What We're Proposing:</h3>
      <ul>
        <li>Sponsor 3-5 research projects in ${data.industryField}</li>
        <li>Invest ₹${data.investmentAmount} for ${data.duration}</li>
        <li>Expected reach: ${data.studentReach} students across ${data.collegeReach} colleges</li>
      </ul>

      <h3>Immediate Next Steps:</h3>
      <ol>
        <li>15-minute exploratory call to understand your priorities</li>
        <li>Customized project list matching your CSR goals</li>
        <li>Partnership agreement and fund deployment</li>
      </ol>

      <p><strong>Available Time Slots:</strong> ${data.timeSlots}</p>

      <p>If none of these work, please suggest your available times.</p>

      <p>I'm confident this partnership will create meaningful impact while fulfilling your CSR objectives.</p>

      <p>Thank you, and looking forward to connecting!</p>

      <p>Best regards,<br>
      ${data.senderName}</p>
    `
  }),

  // 3.3 Project Update
  projectUpdate: (data) => ({
    subject: `${data.projectName} Sponsored by ${data.companyName} - Quarterly Update`,
    body: `
      <p>Dear ${data.sponsorName},</p>

      <p>Thank you for sponsoring ${data.projectName} through DreamXec! I'm delighted to share the progress made in Q${data.quarter}.</p>

      <h3>Project Status:</h3>
      <ul>
        <li><strong>Title:</strong> ${data.projectName}</li>
        <li><strong>Student Lead:</strong> ${data.studentName}, ${data.collegeName}</li>
        <li><strong>Sponsorship Amount:</strong> ₹${data.sponsorshipAmount}</li>
        <li><strong>Funds Utilized:</strong> ₹${data.fundsUtilized} (${data.utilizationPercentage}%)</li>
      </ul>

      <h3>Q${data.quarter} Achievements:</h3>
      <ul>
        ${data.milestones ? data.milestones.map(m => `<li>${m}</li>`).join('') : ''}
      </ul>

      <h3>Research Highlights:</h3>
      <p>${data.highlights}</p>

      <h3>Impact & ROI for Your Brand:</h3>
      <ul>
        <li>${data.engagedStudents} students engaged in research</li>
        <li>${data.involvedInstitutions} college institutions involved</li>
        <li>${data.specificOutcome}</li>
      </ul>

      <h3>Next Quarter Plans:</h3>
      <ul>
        ${data.nextPlans ? data.nextPlans.map(p => `<li>${p}</li>`).join('') : ''}
      </ul>

      <h3>Visibility & Recognition:</h3>
      <p>Your company receives:</p>
      <ul>
        <li>Logo placement on DreamXec project page</li>
        <li>Featured mention in student networks and alumni communications</li>
        <li>Case study highlighting partnership impact</li>
        <li>Recognition at Annual Research Summit (if applicable)</li>
      </ul>

      <p>We're grateful for your continued support. This research wouldn't be possible without partners like ${data.companyName}.</p>

      <p>Best regards,<br>
      ${data.senderName}<br>
      DreamXec Team</p>
    `
  }),

  // 3.4 Thank You
  thankYou: (data) => ({
    subject: `Thank You: ${data.projectName} Completed Successfully`,
    body: `
      <p>Dear ${data.sponsorName},</p>

      <p>On behalf of our student researchers and the entire DreamXec community, I want to express our heartfelt gratitude for sponsoring ${data.projectName}.</p>

      <h3>Campaign Results:</h3>
      <ul>
        <li><strong>Project Status:</strong> ✓ Successfully Completed</li>
        <li><strong>Total Funding Raised:</strong> ₹${data.totalRaised}</li>
        <li><strong>Your Contribution:</strong> ₹${data.contributionAmount} (${data.contributionPercentage}%)</li>
        <li><strong>Participating Students:</strong> ${data.studentCount}</li>
        <li><strong>Collaborating Colleges:</strong> ${data.collegeCount}</li>
      </ul>

      <h3>Research Outcomes:</h3>
      <p>${data.outcomesSummary}</p>

      <h3>What Happens Next:</h3>
      <ul>
        <li>Student research paper publication in ${data.journalName}</li>
        <li>Industry application/implementation potential: ${data.industryPotential}</li>
        <li>2-3 year career prospects for student researchers</li>
      </ul>

      <h3>Your CSR Impact:</h3>
      <p>This sponsorship has directly enabled:</p>
      <ul>
        <li>Research that addresses ${data.researchArea}</li>
        <li>Career development for ${data.studentCount} college students</li>
        <li>Contribution to India's research ecosystem and innovation</li>
      </ul>

      <h3>Recognition:</h3>
      <p>${data.companyName} will be featured as a "Research Champion" on:</p>
      <ul>
        <li>DreamXec website and annual report</li>
        <li>Press releases and media communications</li>
        <li>Student newsletters and college networks</li>
      </ul>

      <p>Thank you for investing in India's future talent and innovation.</p>

      <p>Warmly,<br>
      ${data.senderName}<br>
      DreamXec Community</p>
    `
  })
};
