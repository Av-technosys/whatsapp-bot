import redisClient from "../lib/redis.js";

export async function getUserProfile(req, res) {
  const { key } = req.params;
  const result = await redisClient.get(`user:${key}:profile`);
  res.json(JSON.parse(result));
}

export async function addRedisEntry(req, res) {
  const { key, value } = req.body;
  const hashKey = `user:${key}:profile`;
  const result = await redisClient.set(hashKey, JSON.stringify({value}), {EX: 60});
  res.status(201).json({ msg: "added", data: result });
}
