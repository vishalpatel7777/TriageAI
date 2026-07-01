import { useMemo, useState } from "react";

import Card from "../UI/Card";
import PriorityBadge from "./PriorityBadge";

export default function TicketHistory({
  tickets,
  onSelect,
}) {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    switch (filter) {
      case "Human":
        return tickets.filter(t => t.needsHuman);

      case "Billing":
      case "Refund":
      case "Account":
      case "Cancellation":
      case "General":
        return tickets.filter(
          t => t.category === filter
        );

      default:
        return tickets;
    }
  }, [tickets, filter]);

  return (
    <Card>

      <div className="mb-5 flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Recent Ticket Activity
        </h2>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="rounded-lg border px-3 py-2 text-sm"
        >
          <option>All</option>
          <option>Human</option>
          <option>Billing</option>
          <option>Refund</option>
          <option>Account</option>
          <option>Cancellation</option>
          <option>General</option>
        </select>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-3 text-left">
                Category
              </th>

              <th className="p-3 text-left">
                Priority
              </th>

              <th className="p-3 text-left">
                Human
              </th>

              <th className="p-3 text-left">
                Confidence
              </th>

              <th className="p-3 text-left">
                Summary
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map(ticket => (

              <tr
                key={ticket.id}
                onClick={() => onSelect(ticket)}
                className="cursor-pointer border-b transition hover:bg-slate-50"
              >

                <td className="p-3 font-semibold">
                  {ticket.category}
                </td>

                <td className="p-3">
                  <PriorityBadge
                    priority={ticket.priority}
                  />
                </td>

                <td className="p-3">
                  {ticket.needsHuman ? "✅" : "—"}
                </td>

                <td className="p-3">
                  {Math.round(
                    ticket.confidence * 100
                  )}
                  %
                </td>

                <td className="max-w-sm truncate p-3">
                  {ticket.summary}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </Card>
  );
}