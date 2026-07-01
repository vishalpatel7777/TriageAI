import Card from "../UI/Card";
import PriorityBadge from "./PriorityBadge";
import ConfidenceBar from "./ConfidenceBar";

export default function ResultCard({ result }) {
  if (!result) {
    return (
      <Card className="h-full">
        <h2 className="mb-4 text-xl font-semibold">
          AI Analysis
        </h2>

        <div className="space-y-3 text-slate-500">
          <p>🏷 Category</p>
          <p>🚨 Priority</p>
          <p>📝 Summary</p>
          <p>💡 Suggested Action</p>
          <p>👤 Human Review</p>
          <p>📈 Confidence</p>
        </div>

        <p className="mt-8 text-sm text-slate-400">
          Submit a customer message to generate an AI analysis.
        </p>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <h2 className="mb-6 text-xl font-semibold">
        AI Analysis
      </h2>

      <div className="space-y-5">

        <div>
          <p className="mb-1 text-sm text-slate-500">
            Category
          </p>

          <h3 className="text-lg font-semibold">
            {result.category}
          </h3>
        </div>

        <div>
          <p className="mb-1 text-sm text-slate-500">
            Priority
          </p>

          <PriorityBadge priority={result.priority} />
        </div>

        <div>
          <p className="mb-1 text-sm text-slate-500">
            Summary
          </p>

          <p>{result.summary}</p>
        </div>

        <div>
          <p className="mb-1 text-sm text-slate-500">
            Suggested Action
          </p>

          <p>{result.suggestedAction}</p>
        </div>

        <div>
          <p className="mb-1 text-sm text-slate-500">
            Human Review
          </p>

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              result.needsHuman
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {result.needsHuman ? "Required" : "Not Required"}
          </span>
        </div>

        <ConfidenceBar confidence={result.confidence} />

      </div>
    </Card>
  );
}