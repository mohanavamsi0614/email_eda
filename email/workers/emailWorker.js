import { Worker } from "bullmq";
import { redisClient } from "../../infra/redis.js";
import { QUEUE_NAME } from "../queue/emailQueue.js";
import EmailDispatcher from "../EmailDispatcher.js";

const CONCURRENCY = parseInt(process.env.EMAIL_WORKER_CONCURRENCY || "5", 10);

const emailWorker = new Worker(QUEUE_NAME, async (job) => {
    console.log(`[EmailWorker] Processing job ${job.id} (${job.name})`);
    
    try {
        await new EmailDispatcher().dispatch({ ...job.data, jobId: job.id });
    } catch (error) {
        console.error(`[EmailWorker] Error processing job ${job.id}:`, error);
        throw error;
    }
}, { 
    connection: redisClient,
    concurrency: CONCURRENCY
});
emailWorker.on("completed", (job) => {
    console.log(`[EmailWorker] Job ${job.id} has completed!`);
});

emailWorker.on("failed", (job, err) => {
    console.error(`[EmailWorker] Job ${job.id} has failed with ${err.message}`);
});

const gracefulShutdown = async (signal) => {
    console.log(`[EmailWorker] Received ${signal}, closing worker...`);
    await emailWorker.close();
    console.log("[EmailWorker] Worker closed.");
    process.exit(0);
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

console.log(`[EmailWorker] Worker started for queue: ${QUEUE_NAME} with concurrency: ${CONCURRENCY}`);

export default emailWorker;