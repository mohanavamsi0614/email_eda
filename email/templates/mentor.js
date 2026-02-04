export const mentorTemplates = {
  // 2.1 Mentorship Request (Student -> Faculty)
  mentorshipRequest: (data) => ({
    subject: `Mentorship Request for ${data.projectName} Research`,
    body: `
      <p>Dear Prof. ${data.mentorLastName},</p>

      <p>I hope you're doing well. I'm ${data.studentName}, a ${data.year} student in your ${data.department}. I admire your work in ${data.researchArea} and would like to request mentorship for my college research project.</p>

      <h3>Project Details:</h3>
      <ul>
        <li><strong>Title:</strong> ${data.projectTitle}</li>
        <li><strong>Area:</strong> ${data.researchDomain}</li>
        <li><strong>Duration:</strong> ${data.timeline}</li>
        <li><strong>Expected Outcomes:</strong> ${data.deliverables}</li>
      </ul>

      <p><strong>Why I'm Approaching You:</strong> Your recent publication on ${data.relatedTopic} directly relates to my project, and your expertise would be invaluable in shaping my research approach.</p>

      <p><strong>Time Commitment Expected:</strong> Approximately ${data.hoursPerMonth} hours/month for ${data.duration}</p>

      <h3>What I Can Offer:</h3>
      <ul>
        <li>Dedication and commitment to quality research</li>
        <li>Regular progress updates and documentation</li>
        <li>Flexibility with your schedule</li>
      </ul>

      <p>Would you be open to meeting to discuss this further? I'm happy to work around your availability.</p>

      <p>Thank you for considering this request.</p>

      <p>Best regards,<br>
      ${data.studentName}<br>
      ${data.studentId}</p>
    `
  }),

  // 2.2 Monthly Check-in (Student -> Mentor)
  monthlyCheckIn: (data) => ({
    subject: `${data.projectName} - Monthly Progress Update & Mentor Feedback Request`,
    body: `
      <p>Dear Prof. ${data.mentorLastName},</p>

      <p>As promised, I'm sending you our monthly progress update for the ${data.projectName} research.</p>

      <h3>This Month's Accomplishments:</h3>
      <ul>
        ${data.milestones ? data.milestones.map(m => `<li>${m}</li>`).join('') : ''}
      </ul>

      <h3>Current Challenges:</h3>
      <ul>
         ${data.challenges ? data.challenges.map(c => `<li>${c}</li>`).join('') : ''}
      </ul>

      <h3>Proposed Solutions:</h3>
      <ul>
         ${data.solutions ? data.solutions.map(s => `<li>${s}</li>`).join('') : ''}
      </ul>

      <h3>Funding Status:</h3>
      <ul>
        <li>Funds Raised: ₹${data.raised} / ₹${data.target}</li>
        <li>Funds Spent: ₹${data.spent}</li>
        <li>Runway Remaining: ${data.runway}</li>
      </ul>

      <h3>Areas Needing Your Guidance:</h3>
      <ol>
        ${data.questions ? data.questions.map(q => `<li>${q}</li>`).join('') : ''}
      </ol>

      <p><strong>Meeting Request:</strong> Could we schedule a 20-minute call this week to discuss the findings and next steps? I'm available ${data.availabilitySlots}.</p>

      <p>Thank you for your continued mentorship.</p>

      <p>Best regards,<br>
      ${data.studentName}</p>
    `
  }),

  // 2.3 Letter of Support Request (Student -> Mentor)
  supportLetterRequest: (data) => ({
    subject: `Letter of Support Request - ${data.projectName}`,
    body: `
      <p>Dear Prof. ${data.mentorLastName},</p>

      <p>I hope you've been well. As you know, I've been working on ${data.projectName} under your mentorship for the past ${data.mentorshipDuration}.</p>

      <p>I'm now applying for ${data.grantName} to support the next phase of this research. A letter of recommendation/support from you would significantly strengthen my application.</p>

      <h3>Application Details:</h3>
      <ul>
        <li><strong>Deadline:</strong> ${data.deadline}</li>
        <li><strong>Grant Amount:</strong> ₹${data.grantAmount}</li>
        <li><strong>Focus Areas for the Letter:</strong>
           <ul>
             <li>Quality of research and methodology</li>
             <li>Student's potential and dedication</li>
             <li>Significance of the project</li>
             <li>Expected impact and outcomes</li>
           </ul>
        </li>
      </ul>

      <p>I've attached a brief one-pager with key project highlights that might be helpful. The letter needs to be submitted by ${data.submissionDate} to ${data.submissionEmail}.</p>

      <p>I completely understand if you're busy – please let me know if you'd like me to draft an initial version that you can edit and personalize.</p>

      <p>Thank you so much for your support throughout this journey.</p>

      <p>Best regards,<br>
      ${data.studentName}</p>
    `
  })
};
