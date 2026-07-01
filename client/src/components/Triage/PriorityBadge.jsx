const styles = {
  P1: "bg-red-100 text-red-700",
  P2: "bg-orange-100 text-orange-700",
  P3: "bg-blue-100 text-blue-700",
  P4: "bg-green-100 text-green-700",
};

export default function PriorityBadge({ priority }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[priority] || "bg-slate-100 text-slate-700"
      }`}
    >
      {priority}
    </span>
  );
}