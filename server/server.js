import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CLIENT_URL ? process.env.CLIENT_URL.split(",").map(x => x.trim()) : true,
}));
app.use(express.json({ limit: "50kb" }));

app.get("/api/health", (_, res) => {
  res.json({ ok: true, service: "portfolio-api" });
});

app.use("/api/contact", contactRoutes);

async function start() {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("MONGO_URI is missing. API will start, but contact submissions need MongoDB.");
    } else {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected");
    }

    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  } catch (error) {
    console.error("Startup error:", error);
    process.exit(1);
  }
}

start();