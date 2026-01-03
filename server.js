import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Node.js backend 🚀" });
});

// New Test API – Great for health checks or testing deployment
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy and running! - API 2",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
