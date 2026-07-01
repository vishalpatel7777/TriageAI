import { useEffect, useState } from "react";

import {
  analyzeTicket,
  getTickets,
} from "../services/triage.service";

export default function useTriage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [tickets, setTickets] = useState([]);

  const loadTickets = async () => {
    try {
      const response = await getTickets();
      setTickets(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const analyze = async (message) => {
    setLoading(true);

    try {
      const response = await analyzeTicket(message);

      setResult(response.data);

      // Refresh history automatically
      await loadTickets();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return {
    loading,
    result,
    tickets,
    analyze,
    loadTickets,
  };
}