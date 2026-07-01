import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import apiRoutes from "./routes/index.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

// Security
app.use(helmet());

// CORS
app.use(cors());

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan("dev"));

// Health Check
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "TriageAI API Running 🚀",
  });
});

// API Routes
app.use("/api/v1", apiRoutes);

// Global Error Handler (Always Last)
app.use(errorHandler);

export default app;