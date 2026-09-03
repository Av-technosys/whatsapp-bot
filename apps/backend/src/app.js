import express from "express";
import { logger } from "./middlewares/logger.js";
import redisRoutes from "./routes/redis.routes.js";
import healthRoutes from "./routes/health.route.js";
const app = express();

app.use(express.json());
app.use(logger);

app.use("/health", healthRoutes);
app.use("/", redisRoutes);

export default app;
