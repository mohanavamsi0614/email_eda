import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

class RedisService {
    constructor() {
        this.host = process.env.REDIS_HOST || "127.0.0.1";
        this.port = parseInt(process.env.REDIS_PORT || "6379", 10);
        this.password = process.env.REDIS_PASSWORD || undefined;
        this.tls = process.env.REDIS_TLS === "true" ? {} : undefined;
        
        const config = {
            host: this.host,
            port: this.port,
            password: this.password,
            maxRetriesPerRequest: null,
            reconnectStrategy: (retries) => {
                console.log(`🔁 Redis reconnect attempt #${retries}`);
                return Math.min(retries * 100, 3000); // retry delay
            },        };

        if (this.tls) {
            config.tls = this.tls;
        }

        this.client = new Redis(config);
        this.setupListeners();
    }

    setupListeners() {
        this.client.on("connect", () => {
            console.log(`[Redis] Connected to ${this.host}:${this.port}`);
        });

        this.client.on("ready", () => {
            console.log("[Redis] Client is ready");
        });

        this.client.on("error", (err) => {
            console.error("[Redis] Connection error:", err);
        });

        this.client.on("close", () => {
            console.warn("[Redis] Connection closed");
        });

        this.client.on("reconnecting", (time) => {
            console.log(`[Redis] Reconnecting in ${time}ms...`);
        });
    }

    getClient() {
        return this.client;
    }

    async shutdown() {
        console.log("[Redis] Shutting down connection...");
        await this.client.quit();
        console.log("[Redis] Connection shutdown complete.");
    }
}

const redisService = new RedisService();

export default redisService;

export const redisClient = redisService.getClient();