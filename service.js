import dotenv from "dotenv";
dotenv.config();

import "./infra/redisBridge.js";
import EmailOrchestrator from "./email/EmailOrchestrator.js";
import "./email/workers/emailWorker.js";

console.log("-----------------------------------------");
console.log("   DREAMXEC EMAIL EDA SERVICE STARTED    ");
console.log("-----------------------------------------");

new EmailOrchestrator();
process.on('SIGTERM', async () => {
    console.log('SIGTERM signal received: closing HTTP server');
    process.exit(0);
});
