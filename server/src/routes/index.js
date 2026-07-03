import { Router } from "express";
import triageRoutes from "./triage.routes.js";
import healthRoutes from "./health.routes.js";

const router = Router();

router.use("/triage", triageRoutes);
router.use("/health", healthRoutes);

export default router;