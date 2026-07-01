export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export const API_ENDPOINTS = {
  TRIAGE: "/api/v1/triage",
  HEALTH: "/api/v1/health",
};