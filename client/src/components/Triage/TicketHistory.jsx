import Card from "../UI/Card";
import PriorityBadge from "./PriorityBadge";

export default function TicketHistory({ tickets }) {
  return (
    <Card className="h-full">
      <h2 className="mb-5 text-xl font-semibold">
        Recent Tickets
      </h2>

      {tickets.length === 0 ? (
        <p className="text-slate-500">
          No tickets yet.
        </p>
      ) : (
        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="rounded-xl border border-slate-200 p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <strong>{ticket.category}</strong>

                <PriorityBadge priority={ticket.priority} />
              </div>

              <p className="line-clamp-2 text-sm text-slate-600">
                {ticket.summary}
              </p>

              <div className="mt-2 text-xs text-slate-400">
                {new Date(ticket.createdAt).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}