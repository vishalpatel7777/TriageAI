import Card from "../UI/Card";

export default function DashboardStats({ tickets = [] }) {
  const total = tickets.length;

  const billing = tickets.filter(
    t => t.category === "Billing"
  ).length;

  const human = tickets.filter(
    t => t.needsHuman
  ).length;

  const avg =
    total === 0
      ? 0
      : Math.round(
          tickets.reduce(
            (a, b) => a + b.confidence,
            0
          ) / total * 100
        );

  return (
    <Card>

      <h2 className="mb-5 text-xl font-semibold">
        Dashboard
      </h2>

      <div className="space-y-4">

        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-sm text-slate-500">
            Total Tickets
          </p>

          <p className="text-3xl font-bold">
            {total}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-sm text-slate-500">
            Billing
          </p>

          <p className="text-3xl font-bold">
            {billing}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-sm text-slate-500">
            Human Review
          </p>

          <p className="text-3xl font-bold">
            {human}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-sm text-slate-500">
            Avg Confidence
          </p>

          <p className="text-3xl font-bold">
            {avg}%
          </p>
        </div>

      </div>

    </Card>
  );
}