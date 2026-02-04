export const alumniTemplates = {
  // 4.1 Alumni Outreach
  alumniOutreach: (data) => ({
    subject: `Mentor the Next Generation of Researchers - Opportunity from ${data.collegeName}`,
    body: `
      <p>Dear ${data.alumniName},</p>

      <p>Greetings! I hope this email finds you in great spirits. I'm reaching out from ${data.collegeName}'s research initiative because I know you're someone who values education and innovation.</p>

      <p><strong>About DreamXec:</strong> Our college is part of DreamXec, India's platform connecting college student researchers with mentors, mentorship, and funding. We're helping students like you once were – curious, ambitious, and ready to make an impact.</p>

      <p><strong>Mentorship Opportunity:</strong> We're inviting accomplished alumni like you to mentor current students in their research projects. Your guidance could be transformative.</p>

      <h3>What Mentoring Involves:</h3>
      <ul>
        <li>1-2 hours per month (flexible)</li>
        <li>Virtual meetings at your convenience</li>
        <li>Guidance on research approach, methodology, and outcomes</li>
        <li>No financial commitment (unless you want to sponsor a project!)</li>
      </ul>

      <h3>Why This Matters:</h3>
      <ul>
        <li>Give back to your alma mater</li>
        <li>Guide the next generation</li>
        <li>Stay connected with college and campus</li>
        <li>Tax-deductible donations (if applicable)</li>
      </ul>

      <h3>Available Mentorship Roles:</h3>
      <ol>
        ${data.availableRoles ? data.availableRoles.map(r => `<li>${r.area} - Student: ${r.studentName}</li>`).join('') : ''}
      </ol>

      <p>Would you be interested in learning more? I can share detailed project descriptions and match you with the best fit.</p>

      <p>Looking forward to reconnecting!</p>

      <p>Best regards,<br>
      ${data.senderName}<br>
      Alumni Relations / DreamXec Coordinator</p>
    `
  }),

  // 4.2 Alumni Donation Appeal
  donationAppeal: (data) => ({
    subject: `Support College Research: Your Donation Can Change Lives`,
    body: `
      <p>Dear ${data.alumniName},</p>

      <p>Do you remember the moment you discovered your passion for ${data.alumniField}? For many students at ${data.collegeName}, that moment comes during their first research project.</p>

      <p><strong>The Challenge:</strong> Only 1% of college students in India have access to meaningful research opportunities. The rest dream of it but never get the chance.</p>

      <p><strong>DreamXec's Solution:</strong> We're democratizing college research through crowdfunding. Students propose projects, secure mentors, and raise funds – entirely through the DreamXec platform.</p>

      <h3>Your Impact:</h3>
      <p>A donation of ₹${data.donationAmount || 'Amount'} can:</p>
      <ul>
        <li>₹5,000 - Support 1 student's research for 1 month</li>
        <li>₹25,000 - Fund a complete small-scale project</li>
        <li>₹1,00,000 - Create a scholarship for 5 students</li>
        <li>₹5,00,000 - Establish an "Alumni Lab" at your college</li>
      </ul>

      <h3>How to Contribute:</h3>
      <ol>
        <li>Visit: <a href="${data.givingPageUrl}">DreamXec Giving Page</a></li>
        <li>Select a project or the "General Fund"</li>
        <li>Complete secure donation</li>
        <li>Receive tax receipt + recognition</li>
      </ol>

      <p><strong>100% Transparent:</strong> Every rupee is tracked. You'll receive quarterly impact reports showing exactly how your donation was used.</p>

      <p>Your alumni network is counting on you. Will you help unlock research potential for the next generation?</p>

      <p><a href="${data.donateLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Donate Now</a></p>

      <p>Thank you for considering this opportunity to give back.</p>

      <p>With gratitude,<br>
      ${data.senderName}</p>
    `
  }),

  // 4.3 Alumni Newsletter
  monthlyNewsletter: (data) => ({
    subject: `DreamXec Monthly Update - Alumni Edition | ${data.month}`,
    body: `
      <p>Dear DreamXec Alumni Community,</p>

      <p>We're excited to share what your mentorship and donations have enabled this month!</p>

      <h3>This Month's Highlights:</h3>

      <h4>📊 Platform Growth:</h4>
      <ul>
        <li>${data.newProjectsCount} new research projects launched</li>
        <li>₹${data.totalFundingRaised} in total funding raised</li>
        <li>${data.newMentorsCount} new mentors joined the community</li>
        <li>${data.participatingCollegesCount} colleges now participating</li>
      </ul>

      <h4>🔬 Student Stories:</h4>
      <p>Meet ${data.featuredStudentName}: A ${data.studentYear} student from ${data.studentCollege} who launched a research project on ${data.studentTopic} and secured ₹${data.studentFunding} in funding through DreamXec. With mentor ${data.featuredMentorName}'s guidance, the project is progressing beautifully.</p>

      <h4>💡 Featured Research:</h4>
      <p>This month, we're highlighting ${data.featuredProjectName} – research that could impact ${data.impactArea} significantly.</p>

      <h4>🎓 Alumni Spotlights:</h4>
      <p>${data.spotlightMentorName}'s Journey: From being a DreamXec researcher ${data.yearsAgo} years ago to now mentoring ${data.menteeCount} students. A true full-circle moment!</p>

      <h3>How You Can Help:</h3>
      <ul>
        <li>Mentor a student (<a href="${data.mentorLink}">Link</a>)</li>
        <li>Sponsor a research project (<a href="${data.sponsorLink}">Link</a>)</li>
        <li>Share your success story (<a href="mailto:${data.contactEmail}">Email us</a>)</li>
      </ul>

      <p><strong>Save the Date:</strong> Annual DreamXec Reunion - ${data.reunionDate} (Virtual) - Connect with fellow alumni and meet the researchers you've mentored!</p>

      <p>Thank you for being part of this movement.</p>
    `
  })
};
