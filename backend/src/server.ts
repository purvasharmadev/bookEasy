// src/server.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req: Request, res: any) => {
  res.send("Backend running 🚀 (TypeScript + Express)");
});

// Port from .env or fallback
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
