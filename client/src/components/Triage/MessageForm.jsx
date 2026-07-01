import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

export default function MessageForm({ onAnalyze, loading }) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    await onAnalyze(message);

setMessage("");
  };

  return (
    <Card>
      <h2 className="mb-2 text-xl font-semibold">
        Customer Message
      </h2>

      <p className="mb-6 text-sm text-slate-500">
        Enter a customer support request to analyze using AI.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <textarea
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Example:

'I paid yesterday but my order still shows payment pending.'"
          className="w-full resize-none rounded-xl border border-slate-300 p-4 outline-none transition focus:border-primary"
        />

        <Button
          type="submit"
          loading={loading}
        >
          Analyze Ticket
        </Button>
      </form>
    </Card>
  );
}