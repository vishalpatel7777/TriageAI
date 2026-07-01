export default function ConfidenceBar({ confidence }) {
  const percentage = Math.round(confidence * 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Confidence</span>

        <span className="font-semibold">
          {percentage}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}