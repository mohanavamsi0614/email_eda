import { redisClient } from "./redis.js";
import eventBus from "./eventBus.js";

const CHANNEL_NAME = "dreamxec:events";

class RedisEventBridge {
    constructor() {
        this.subscriber = redisClient.duplicate({ lazyConnect: true });
        this.init();
    }

    async init() {
        this.subscriber.on("error", (err) => {
            console.error("[RedisBridge] Subscriber Error:", err);
        });

        if (this.subscriber.status === 'ready' || this.subscriber.status === 'connecting') {
            console.log("[RedisBridge] Subscriber already connected or connecting.");
        } else {
            await this.subscriber.connect();
        }
        
        console.log(`[RedisBridge] Subscribing to channel: ${CHANNEL_NAME}`);
        
        await this.subscriber.subscribe(CHANNEL_NAME);
        
        this.subscriber.on("message", (channel, message) => {
            if (channel !== CHANNEL_NAME) return;

            try {
                const parsedMessage = JSON.parse(message);
                
                if (!parsedMessage || typeof parsedMessage !== 'object') {
                    console.warn(`[RedisBridge] Received invalid message format: ${message}`);
                    return;
                }

                const { event, data } = parsedMessage;
                
                if (event && data) {
                    console.log(`[RedisBridge] Received remote event: ${event}`);
                    eventBus.publish(event, data);
                }
            } catch (error) {
                console.error("[RedisBridge] Failed to parse message:", error);
            }
        });
    }
}

export default new RedisEventBridge();
