import Navbar from "../components/Layout/Navbar";
import MessageForm from "../components/Triage/MessageForm";
import ResultCard from "../components/Triage/ResultCard";
import TicketHistory from "../components/Triage/TicketHistory";

import useTriage from "../hooks/useTriage";

export default function Home() {
  const {
    analyze,
    loading,
    result,
    tickets,
  } = useTriage();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <MessageForm
              onAnalyze={analyze}
              loading={loading}
            />
          </div>

          <div className="lg:col-span-4">
            <ResultCard result={result} />
          </div>

          <div className="lg:col-span-3">
            <TicketHistory tickets={tickets} />
          </div>

        </div>
      </main>
    </>
  );
}