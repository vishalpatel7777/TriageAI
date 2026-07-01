import { useState } from "react";

import {
  analyzeTicket,
  getTickets,
} from "../services/triage.service";

export default function useTriage() {
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [tickets, setTickets] = useState([]);

  const analyze = async (message) => {
    setLoading(true);

    try {
      const data = await analyzeTicket(message);

      setResult(data.data);

      return data;
    } finally {
      setLoading(false);
    }
  };

  const loadTickets = async () => {
    const data = await getTickets();

    setTickets(data.data);
  };

  return {
    loading,
    result,
    tickets,
    analyze,
    loadTickets,
  };
}