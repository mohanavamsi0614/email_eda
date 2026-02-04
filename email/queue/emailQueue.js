import { Queue, QueueEvents } from "bullmq";
import { redisClient } from "../../infra/redis.js";

// Configuration Constants
export const QUEUE_NAME = process.env.EMAIL_QUEUE_NAME || "dreamxec-mail-v1";

export const JOB_PRIORITY = {
    HIGH: 1,    // OTP, Security Alerts
    MEDIUM: 5,  // Standard notifications
    LOW: 10     // Bulk, Marketing
};

const DEFAULT_JOB_OPTIONS = {
    attempts: 3,
    backoff: {
        type: 'exponential',
        delay: 1000,
    },
    removeOnComplete: {
        age: 24 * 3600, // Keep for 24 hours
        count: 1000,    // Keep last 1000
    },
    removeOnFail: {
        age: 7 * 24 * 3600, // Keep failed for 7 days
        count: 5000,
    }
};

class EmailQueueService {
    constructor() {
        this.queue = new Queue(QUEUE_NAME, {
            connection: redisClient,
            defaultJobOptions: DEFAULT_JOB_OPTIONS
        });

        this.queueEvents = new QueueEvents(QUEUE_NAME, { connection: redisClient });
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.queueEvents.on('waiting', ({ jobId }) => {
            console.log(`[EmailQueue] Job ${jobId} is waiting`); // Verbose
        });

        this.queueEvents.on('active', ({ jobId }) => {
            console.log(`[EmailQueue] Job ${jobId} is active`);
        });

        this.queueEvents.on('completed', ({ jobId, returnvalue }) => {
            console.log(`[EmailQueue] Job ${jobId} completed`);
        });

        this.queueEvents.on('failed', ({ jobId, failedReason }) => {
            console.error(`[EmailQueue] Job ${jobId} failed: ${failedReason}`);
        });
        
        console.log(`[EmailQueue] Initialized queue: ${QUEUE_NAME}`);
    }

    /**
     * Add a job to the queue.
     * @param {string} name - Job name.
     * @param {object} data - Job data.
     * @param {object} opts - BullMQ job options (overrides defaults).
     */
    async add(name, data, opts = {}) {
        return this.queue.add(name, data, opts);
    }

    getQueue() {
        return this.queue;
    }
}

const emailQueueService = new EmailQueueService();

export default emailQueueService;
export const emailQueue = emailQueueService.getQueue();