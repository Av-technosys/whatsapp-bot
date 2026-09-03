import { createClient } from "redis";
import { redisUsername, redisPassword, redisHost, redisPort } from "../config/env.js";

const redisClient = createClient({
  username: redisUsername,
  password: redisPassword,
  socket: {
    host: redisHost,
    port: redisPort,
  },
});

redisClient.on("error", (err) => console.error("Redis Client Error:", err));

export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log("Redis connected");
  }
}

export default redisClient;
