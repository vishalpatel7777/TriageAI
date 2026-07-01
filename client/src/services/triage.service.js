import api from "./api";
import { API_ENDPOINTS } from "../constants/endpoints";

export const analyzeTicket = async (message) => {
  const response = await api.post(API_ENDPOINTS.TRIAGE, {
    message,
  });

  return response.data;
};

export const getTickets = async () => {
  const response = await api.get(API_ENDPOINTS.TRIAGE);

  return response.data;
};

export const getTicketById = async (id) => {
  const response = await api.get(
    `${API_ENDPOINTS.TRIAGE}/${id}`
  );

  return response.data;
};

export const checkHealth = async () => {
  const response = await api.get(API_ENDPOINTS.HEALTH);

  return response.data;
};