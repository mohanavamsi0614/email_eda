import Provider from "./providers/provider.js";
import { redisClient } from "../infra/redis.js";

class ProviderManager {
    constructor() {
        this.providerFactory = new Provider();
        this.providers = {};
        this.stats = {}; // Simple in-memory stats: { providerName: { success: 0, failure: 0 } }
    }

    getProvider(name) {
        if (!this.providers[name]) {
            this.providers[name] = this.providerFactory.provider(name);
            this.stats[name] = { success: 0, failure: 0 };
        }
        return this.providers[name];
    }

    recordSuccess(name) {
        if (this.stats[name]) this.stats[name].success++;
    }

    recordFailure(name) {
        if (this.stats[name]) this.stats[name].failure++;
    }
}

class EmailDispatcher {
    constructor() {
        this.manager = new ProviderManager();
        this.defaultProviders = ['ses', 'sendgrid', 'smtp'];
        this.timeoutMs = 20000; // 20 seconds timeout per provider
    }

    /**
     * Dispatch email with fallback strategy and idempotency.
     */
    async dispatch({ providerName, providers, to, subject, html, idempotencyKey, jobId }) {
        // Idempotency Check
        const key = idempotencyKey || (jobId ? `email:processed:${jobId}` : null);
        if (key) {
             // Set key if not exists, expire in 24 hours
            const set = await redisClient.set(key, "1", "NX", "EX", 86400);
            if (!set) {
                console.log(`[EmailDispatcher] Skipping duplicate job (Idempotency Key: ${key})`);
                return;
            }
        }

        // Determine provider list
        const providerList = providers || (providerName ? [providerName] : this.defaultProviders);
        
        const errors = [];

        for (const name of providerList) {
            try {
                console.log(`[EmailDispatcher] Attempting to send email via ${name}...`);
                await this.sendWithTimeout(name, to, subject, html);
                
                console.log(`[EmailDispatcher] Successfully sent email via ${name}`);
                this.manager.recordSuccess(name);
                return; // Success, stop trying
            } catch (error) {
                console.warn(`[EmailDispatcher] Failed to send via ${name}: ${error.message}`);
                this.manager.recordFailure(name);
                // Classify error (mock classification)
                const isRetryable = error.message.includes("timeout") || error.message.includes("network");
                errors.push({ provider: name, error: error.message, isRetryable });
            }
        }

        // If we reach here, all providers failed
        throw new Error(`All email providers failed. Errors: ${JSON.stringify(errors)}`);
    }

    /**
     * Send email with timeout enforcement.
     */
    async sendWithTimeout(name, to, subject, html) {
        const provider = this.manager.getProvider(name);
        
        const sendPromise = provider.sendEmail(to, subject, html);
        
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Provider timeout")), this.timeoutMs);
        });

        return Promise.race([sendPromise, timeoutPromise]);
    }
}

export default EmailDispatcher;
