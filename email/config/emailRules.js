import { EVENTS } from "../../infra/eventBus.js";
import { JOB_PRIORITY } from "../queue/emailQueue.js";
import {
    adminTemplates,
    studentTemplates,
    studentPresidentTemplates,
    
    donorTemplates,
    mentorTemplates,
    corporateTemplates,
    alumniTemplates
} from "../templates/index.js";

const DEFAULT_ADMIN_EMAIL_FN = () => process.env.ADMIN_EMAIL || "admin@dreamxec.com";

/**
 * @typedef {Object} EmailRule
 * @property {string} role - The recipient role (ADMIN, STUDENT, etc.)
 * @property {function} template - The template function from templates/index.js
 * @property {number} priority - Job priority level
 * @property {function} [resolveRecipient] - Optional custom recipient resolver function (overrides default)
 */

/**
 * @type {Object.<string, EmailRule[]>}
 */
export const EMAIL_RULES = {
    // ADMIN EVENTS
    [EVENTS.CAMPAIGN_SUBMITTED]: [
        { role: "ADMIN", template: adminTemplates.newCampaignSubmitted, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.CLUB_VERIFICATION_PENDING]: [
        { role: "ADMIN", template: adminTemplates.clubVerificationPending, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.HIGH_VALUE_DONATION]: [
        { role: "ADMIN", template: adminTemplates.highValueDonationAlert, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.PAYOUT_FAILED]: [
        { role: "ADMIN", template: adminTemplates.failedPayoutRefund, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.REFUND_FAILED]: [
        { role: "ADMIN", template: adminTemplates.failedPayoutRefund, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.SUSPICIOUS_ACTIVITY]: [
        { role: "ADMIN", template: adminTemplates.suspiciousActivity, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.KYC_FAILURE]: [
        { role: "ADMIN", template: adminTemplates.kycFailure, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.SYSTEM_ERROR]: [
        { role: "ADMIN", template: adminTemplates.systemError, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.PLATFORM_REPORT]: [
        { role: "ADMIN", template: adminTemplates.platformReport, priority: JOB_PRIORITY.LOW }
    ],

    // STUDENT EVENTS
    [EVENTS.USER_WELCOME]: [
        { role: "STUDENT", template: studentTemplates.welcomeEmail, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.EMAIL_OTP_REQUEST]: [
        { role: "STUDENT", template: studentTemplates.emailOtp, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.EMAIL_VERIFICATION]: [
        { role: "STUDENT", template: studentTemplates.emailVerification, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.PASSWORD_RESET_REQUEST]: [
        { role: "STUDENT", template: studentTemplates.passwordReset, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.PROFILE_REMINDER]: [
        { role: "STUDENT", template: studentTemplates.profileCompletionReminder, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.CLUB_JOINED]: [
        { role: "STUDENT", template: studentTemplates.clubJoinConfirmation, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.CAMPAIGN_SUGGESTION]: [
        { role: "STUDENT", template: studentTemplates.campaignDiscovery, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.PLATFORM_ANNOUNCEMENT]: [
        { role: "STUDENT", template: studentTemplates.platformAnnouncement, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.SECURITY_ALERT]: [
        { role: "STUDENT", template: studentTemplates.securityAlert, priority: JOB_PRIORITY.HIGH }
    ],

    // STUDENT PRESIDENT EVENTS
    [EVENTS.CLUB_VERIFICATION_STATUS]: [
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.clubVerificationStatus, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.CAMPAIGN_CREATED]: [
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.campaignCreated, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.CAMPAIGN_LIVE]: [
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.campaignLive, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.LOW_DONATION_REMINDER]: [
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.lowDonationReminder, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.CAMPAIGN_COMPLETED]: [
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.campaignCompleted, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.FUND_WITHDRAWAL_STATUS]: [
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.fundWithdrawalStatus, priority: JOB_PRIORITY.HIGH }
    ],

    // DONOR EVENTS
    [EVENTS.DONATION_FAILED]: [
        { role: "DONOR", template: donorTemplates.donationFailed, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.THANK_YOU]: [
        { role: "DONOR", template: donorTemplates.thankYou, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.CAMPAIGN_UPDATE]: [
        { role: "DONOR", template: donorTemplates.campaignProgress, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.IMPACT_REPORT]: [
        { role: "DONOR", template: donorTemplates.impactReport, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.DONATE_AGAIN]: [
        { role: "DONOR", template: donorTemplates.donateAgain, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.TAX_RECEIPT]: [
        { role: "DONOR", template: donorTemplates.taxReceipt, priority: JOB_PRIORITY.MEDIUM }
    ],

    // MENTOR EVENTS
    [EVENTS.MENTORSHIP_REQUEST]: [
        { role: "MENTOR", template: mentorTemplates.mentorshipRequest, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.MENTOR_CHECKIN]: [
        { role: "MENTOR", template: mentorTemplates.monthlyCheckIn, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.MENTOR_SUPPORT_LETTER]: [
        { role: "MENTOR", template: mentorTemplates.supportLetterRequest, priority: JOB_PRIORITY.MEDIUM }
    ],

    // CORPORATE EVENTS
    [EVENTS.CORPORATE_PARTNERSHIP_INQUIRY]: [
        { role: "CORPORATE", template: corporateTemplates.partnershipInquiry, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.CORPORATE_FOLLOWUP]: [
        { role: "CORPORATE", template: corporateTemplates.partnershipFollowUp, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.CORPORATE_PROJECT_UPDATE]: [
        { role: "CORPORATE", template: corporateTemplates.projectUpdate, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.CORPORATE_THANK_YOU]: [
        { role: "CORPORATE", template: corporateTemplates.thankYou, priority: JOB_PRIORITY.MEDIUM }
    ],

    // ALUMNI EVENTS
    [EVENTS.ALUMNI_OUTREACH]: [
        { role: "ALUMNI", template: alumniTemplates.alumniOutreach, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.ALUMNI_DONATION_APPEAL]: [
        { role: "ALUMNI", template: alumniTemplates.donationAppeal, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.ALUMNI_NEWSLETTER]: [
        { role: "ALUMNI", template: alumniTemplates.monthlyNewsletter, priority: JOB_PRIORITY.LOW }
    ],

    // PROJECT EVENTS (Using existing or new templates mapped to roles)
    [EVENTS.PROJECT_LAUNCH]: [
        { role: "DONOR", template: studentTemplates.crowdfundingLaunch, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.PROJECT_GOAL_ACHIEVED]: [
        { role: "DONOR", template: studentTemplates.fundingGoalAchieved, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.PROJECT_FINAL_REPORT]: [
        { role: "DONOR", template: studentTemplates.finalReport, priority: JOB_PRIORITY.LOW }
    ],

    // MIXED EVENTS
    [EVENTS.CAMPAIGN_APPROVED]: [
        { role: "ADMIN", template: adminTemplates.campaignStatusUpdate, priority: JOB_PRIORITY.MEDIUM },
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.campaignApprovalStatus, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.CAMPAIGN_REJECTED]: [
        { role: "ADMIN", template: adminTemplates.campaignStatusUpdate, priority: JOB_PRIORITY.MEDIUM },
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.campaignApprovalStatus, priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.DONATION_SUCCESS]: [
        { role: "DONOR", template: donorTemplates.donationSuccess, priority: JOB_PRIORITY.MEDIUM },
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.donationReceived, priority: JOB_PRIORITY.MEDIUM },
        { role: "ADMIN", template: (data) => ({ subject: `Donation Received: ${data.amount}`, body: `Donation of ${data.amount} received.` }), priority: JOB_PRIORITY.MEDIUM }
    ],
    [EVENTS.REFUND_ISSUED]: [
        { role: "DONOR", template: donorTemplates.refundStatus, priority: JOB_PRIORITY.HIGH },
        { role: "ADMIN", template: adminTemplates.failedPayoutRefund, priority: JOB_PRIORITY.HIGH }
    ],
    [EVENTS.CAMPAIGN_MILESTONE]: [
        { role: "STUDENT_PRESIDENT", template: studentPresidentTemplates.campaignMilestone, priority: JOB_PRIORITY.LOW },
        { role: "DONOR", template: donorTemplates.campaignProgress, priority: JOB_PRIORITY.LOW }
    ],
    [EVENTS.SECURITY_ALERT_ALL]: [
        { role: "STUDENT", template: studentTemplates.securityAlert, priority: JOB_PRIORITY.HIGH },
        { role: "ADMIN", template: adminTemplates.suspiciousActivity, priority: JOB_PRIORITY.HIGH }
    ]
};
