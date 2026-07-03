import { Router } from "express";

import {
  analyzeMessage,
  getTickets,
  getTicket,
} from "../controllers/triage.controller.js";

const router = Router();

router.post("/", analyzeMessage);

router.get("/", getTickets);

router.get("/:id", getTicket);

export default router;