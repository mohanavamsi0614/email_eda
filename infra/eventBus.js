import { EventEmitter } from "events";

class EventBus {
    constructor() {
        this.bus = new EventEmitter();
        this.bus.setMaxListeners(20);
    }

    static EVENTS = {
        // ADMIN EVENTS
        CAMPAIGN_SUBMITTED: "CAMPAIGN_SUBMITTED",
        CLUB_VERIFICATION_PENDING: "CLUB_VERIFICATION_PENDING",
        HIGH_VALUE_DONATION: "HIGH_VALUE_DONATION",
        PAYOUT_FAILED: "PAYOUT_FAILED",
        REFUND_FAILED: "REFUND_FAILED",
        SUSPICIOUS_ACTIVITY: "SUSPICIOUS_ACTIVITY",
        KYC_FAILURE: "KYC_FAILURE",
        SYSTEM_ERROR: "SYSTEM_ERROR",
        PLATFORM_REPORT: "PLATFORM_REPORT",

        // STUDENT EVENTS
        USER_WELCOME: "USER_WELCOME",
        EMAIL_VERIFICATION: "EMAIL_VERIFICATION",
        EMAIL_OTP_REQUEST: "EMAIL_OTP_REQUEST",
        PASSWORD_RESET_REQUEST: "PASSWORD_RESET_REQUEST",
        PROFILE_REMINDER: "PROFILE_REMINDER",
        CLUB_JOINED: "CLUB_JOINED",
        CAMPAIGN_SUGGESTION: "CAMPAIGN_SUGGESTION",
        PLATFORM_ANNOUNCEMENT: "PLATFORM_ANNOUNCEMENT",
        SECURITY_ALERT: "SECURITY_ALERT",

        // STUDENT PRESIDENT EVENTS
        CLUB_VERIFICATION_STATUS: "CLUB_VERIFICATION_STATUS",
        CAMPAIGN_CREATED: "CAMPAIGN_CREATED",
        CAMPAIGN_LIVE: "CAMPAIGN_LIVE",
        LOW_DONATION_REMINDER: "LOW_DONATION_REMINDER",
        CAMPAIGN_COMPLETED: "CAMPAIGN_COMPLETED",
        FUND_WITHDRAWAL_STATUS: "FUND_WITHDRAWAL_STATUS",

        // DONOR EVENTS
        DONATION_FAILED: "DONATION_FAILED",
        THANK_YOU: "THANK_YOU",
        CAMPAIGN_UPDATE: "CAMPAIGN_UPDATE",
        IMPACT_REPORT: "IMPACT_REPORT",
        DONATE_AGAIN: "DONATE_AGAIN",
        TAX_RECEIPT: "TAX_RECEIPT",

        // MENTOR EVENTS
        MENTORSHIP_REQUEST: "MENTORSHIP_REQUEST",
        MENTOR_CHECKIN: "MENTOR_CHECKIN",
        MENTOR_SUPPORT_LETTER: "MENTOR_SUPPORT_LETTER",

        // CORPORATE EVENTS
        CORPORATE_PARTNERSHIP_INQUIRY: "CORPORATE_PARTNERSHIP_INQUIRY",
        CORPORATE_FOLLOWUP: "CORPORATE_FOLLOWUP",
        CORPORATE_PROJECT_UPDATE: "CORPORATE_PROJECT_UPDATE",
        CORPORATE_THANK_YOU: "CORPORATE_THANK_YOU",

        // ALUMNI EVENTS
        ALUMNI_OUTREACH: "ALUMNI_OUTREACH",
        ALUMNI_DONATION_APPEAL: "ALUMNI_DONATION_APPEAL",
        ALUMNI_NEWSLETTER: "ALUMNI_NEWSLETTER",
        
        // PROJECT EVENTS
        PROJECT_KICKOFF: "PROJECT_KICKOFF",
        PROJECT_LAUNCH: "PROJECT_LAUNCH",
        PROJECT_GOAL_ACHIEVED: "PROJECT_GOAL_ACHIEVED",
        PROJECT_FINAL_REPORT: "PROJECT_FINAL_REPORT",

        // MIXED / SHARED EVENTS
        CAMPAIGN_APPROVED: "CAMPAIGN_APPROVED",
        CAMPAIGN_REJECTED: "CAMPAIGN_REJECTED",
        DONATION_SUCCESS: "DONATION_SUCCESS",
        REFUND_ISSUED: "REFUND_ISSUED",
        CAMPAIGN_MILESTONE: "CAMPAIGN_MILESTONE",
        SECURITY_ALERT_ALL: "SECURITY_ALERT_ALL"
    };


    publish(eventName, data) {
        if (!Object.values(EventBus.EVENTS).includes(eventName)) {
            console.warn(`[EventBus] Warning: Publishing unknown event "${eventName}"`);
        }

        console.log(`[EventBus] Publishing event: ${eventName}`);
        
        try {
            this.bus.emit(eventName, data);
        } catch (error) {
            console.error(`[EventBus] Error publishing event ${eventName}:`, error);
        }
    }

    subscribe(eventName, callback) {
        if (!Object.values(EventBus.EVENTS).includes(eventName)) {
             console.warn(`[EventBus] Warning: Subscribing to unknown event "${eventName}"`);
        }

        const safeCallback = async (data) => {
            try {
                await callback(data);
            } catch (error) {
                console.error(`[EventBus] Error in listener for ${eventName}:`, error);
            }
        };

        this.bus.on(eventName, safeCallback);
        console.log(`[EventBus] Subscribed to ${eventName}`);
    }
}

const eventBus = new EventBus();
export const EVENTS = EventBus.EVENTS;
export default eventBus;