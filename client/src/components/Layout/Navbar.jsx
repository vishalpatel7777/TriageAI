import { BotMessageSquare } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-primary p-2 text-white">
            <BotMessageSquare size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              TriageAI
            </h1>

            <p className="text-xs text-slate-500">
              AI Customer Support Triage
            </p>
          </div>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
          Backend Connected
        </span>
      </div>
    </header>
  );
}