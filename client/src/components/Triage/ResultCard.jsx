import Card from "../UI/Card";
import PriorityBadge from "./PriorityBadge";
import ConfidenceBar from "./ConfidenceBar";

export default function ResultCard({ result, loading }) {
  if (loading) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col items-center justify-center">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />

        <h2 className="mt-6 text-xl font-semibold">
          AI is analyzing...
        </h2>

        <p className="mt-2 text-center text-slate-500">
          Understanding the request and generating structured output.
        </p>

      </div>
    </Card>
  );
}

  if (!result) {
  return (
    <Card className="h-full">
      <div className="flex h-full flex-col justify-center text-center">

        <div className="mb-6 text-5xl">
          🤖
        </div>

        <h2 className="text-2xl font-bold">
          Ready to Analyze
        </h2>

        <p className="mt-3 text-slate-500">
          Submit a customer support request and the AI will classify it,
          assign priority, generate a summary and recommend the next action.
        </p>

        <div className="mt-8 space-y-3 text-left text-slate-600">

          <div>🏷 Category Detection</div>

          <div>🚨 Priority Prediction</div>

          <div>📝 Smart Summary</div>

          <div>💡 Suggested Action</div>

          <div>👤 Human Escalation</div>

          <div>📊 Confidence Score</div>

        </div>

      </div>
    </Card>
  );
}

 return (
  <Card className="h-full">
    <h2 className="mb-6 text-2xl font-bold">
      🤖 AI Analysis
    </h2>

    <div className="space-y-6">

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Category
        </p>

        <span className="rounded-lg bg-blue-100 px-3 py-2 font-semibold text-blue-700">
          {result.category}
        </span>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Priority
        </p>

        <PriorityBadge priority={result.priority} />
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Summary
        </p>

        <div className="rounded-lg bg-slate-50 p-3">
          {result.summary}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Suggested Action
        </p>

        <div className="rounded-lg bg-amber-50 p-3">
          {result.suggestedAction}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Human Review
        </p>

        <span
          className={`rounded-full px-3 py-2 text-sm font-semibold ${
            result.needsHuman
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {result.needsHuman
            ? "Human Review Required"
            : "No Escalation Needed"}
        </span>
      </div>

      <ConfidenceBar confidence={result.confidence} />

    </div>
  </Card>
);
}