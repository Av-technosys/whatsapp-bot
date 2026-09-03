export const port = process.env.PORT || 8000;

export const redisUsername = process.env.REDIS_USERNAME || "default";
export const redisPassword = process.env.REDIS_PASSWORD;
export const redisHost = process.env.REDIS_HOST || "hyperstable-wing-change-84301.db.redis.io";
export const redisPort = parseInt(process.env.REDIS_PORT, 10) || 10074;
