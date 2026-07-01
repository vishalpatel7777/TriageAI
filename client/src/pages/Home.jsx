import Navbar from "../components/Layout/Navbar";
import MessageForm from "../components/Triage/MessageForm";
import ResultCard from "../components/Triage/ResultCard";
import TicketHistory from "../components/Triage/TicketHistory";
import DashboardStats from "../components/Triage/DashboardStats";

import useTriage from "../hooks/useTriage";

export default function Home() {
  const { analyze, loading, result, tickets ,selectedTicket ,setSelectedTicket  } = useTriage();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <MessageForm onAnalyze={analyze} loading={loading} />
          </div>

          <div className="lg:col-span-4">
            <ResultCard result={selectedTicket || result} loading={loading} />
          </div>

          <div className="lg:col-span-3">
            <DashboardStats tickets={tickets} />
          </div>
        </div>
        <div className="mt-8">
          <TicketHistory tickets={tickets} onSelect={setSelectedTicket} />
        </div>
      </main>
    </>
  );
}
