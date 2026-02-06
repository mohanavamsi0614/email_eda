import EmailDispatcher from '../EmailDispatcher.js';
import fs from 'fs';

const LOG_FILE = 'verify_log.txt';

// Clear log file
fs.writeFileSync(LOG_FILE, '');

function log(message) {
    console.log(message);
    // Append to file for reliable reading by agent
    fs.appendFileSync(LOG_FILE, message + '\n');
}

// Mock Provider Manager to simulate failures and successes
const mockProviderManager = {
    getProvider: (name) => {
        if (name === 'ses') {
            return {
                sendEmail: async () => {
                    log(`[MockProvider] SES is simulating a FAILURE (Network Error)`);
                    throw new Error("Simulated SES Network Error");
                }
            };
        }
        if (name === 'sendgrid') {
            return {
                sendEmail: async (to, subject, html) => {
                    log(`[MockProvider] SendGrid is simulating SUCCESS for ${to}`);
                    return { success: true, messageId: 'mock-sg-id' };
                }
            };
        }
        return {
            sendEmail: async () => {
                log(`[MockProvider] ${name} fallback usage`);
                return { success: true };
            }
        };
    },
    recordSuccess: (name) => log(`[Stats] Recorded SUCCESS for ${name}`),
    recordFailure: (name) => log(`[Stats] Recorded FAILURE for ${name}`),
};

async function runVerification() {
    log("=== Starting Email Failover Verification ===");

    const dispatcher = new EmailDispatcher();
    
    // Inject our mock manager
    dispatcher.manager = mockProviderManager;

    // Test Case: Failover from SES to SendGrid
    try {
        log("\n--- Test 1: Failover from SES to SendGrid ---");
        // We explicitly pass providers list to force the order: SES (fail) -> SendGrid (success)
        await dispatcher.dispatch({
            providers: ['ses', 'sendgrid'],
            to: 'test@example.com',
            subject: 'Failover Test',
            html: '<p>This is a test of the failover system.</p>',
        });
        log("\n>>> RESULT: PASSED - Email dispatched successfully after failover.");
    } catch (error) {
        log("\n>>> RESULT: FAILED - Dispatch threw an error:" + error);
    }

    // Test Case: All Fail
    try {
        log("\n--- Test 2: All Providers Fail (Expected Error) ---");
        // Overwrite manager to fail everything
        dispatcher.manager = {
            getProvider: (name) => ({
                sendEmail: async () => { throw new Error(`Simulated ${name} Failure`); }
            }),
            recordSuccess: () => {},
            recordFailure: (name) => log(`[Stats] Recorded FAILURE for ${name}`),
        };

        await dispatcher.dispatch({
            providers: ['ses', 'sendgrid'],
            to: 'test@example.com',
            subject: 'Fail Test',
            html: '<p>Fail</p>'
        });
        log("\n>>> RESULT: FAILED - Should have thrown an error but didn't.");
    } catch (error) {
        if (error.message.includes("All email providers failed")) {
            log("\n>>> RESULT: PASSED - Correctly threw error when all providers failed.");
        } else {
            log("\n>>> RESULT: FAILED - Threw unexpected error:" + error);
        }
    }
    
    log("\n=== Verification Complete ===");
    process.exit(0);
}

runVerification();
