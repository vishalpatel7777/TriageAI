import { analyzeCustomerMessage } from "../services/ai.service.js";
import { triageRequestSchema } from "../schemas/triage.schema.js";

import {
  createTicket,
  getAllTickets,
  getTicketById,
} from "../repositories/ticket.repository.js";

import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../utils/asyncHandler.js";

// POST /api/v1/triage
export const analyzeMessage = asyncHandler(async (req, res) => {
  const { message } = triageRequestSchema.parse(req.body);

  const result = await analyzeCustomerMessage(message);

  const savedTicket = await createTicket({
    message,
    category: result.category,
    priority: result.priority,
    summary: result.summary,
    suggestedAction: result.suggested_action,
    needsHuman: result.needs_human,
    confidence: result.confidence,
  });

  if (!savedTicket) {
    throw new ApiError(500, "Failed to save ticket.");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      savedTicket,
      "Ticket analyzed successfully."
    )
  );
});

// GET /api/v1/triage
export const getTickets = asyncHandler(async (req, res) => {
  const tickets = await getAllTickets();

  return res.status(200).json(
    new ApiResponse(
      200,
      tickets,
      "Tickets fetched successfully."
    )
  );
});

// GET /api/v1/triage/:id
export const getTicket = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const ticket = await getTicketById(id);

  if (!ticket) {
    throw new ApiError(404, "Ticket not found.");
  }

  return res.status(200).json(
    new ApiResponse(
      200,
      ticket,
      "Ticket fetched successfully."
    )
  );
});