import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { Dashboard } from "@/pages/Dashboard";

function App() {
  const [activeNav, setActiveNav] = React.useState("dashboard");
  const [lastQuestion, setLastQuestion] = React.useState<string | null>(null);

  const handleAsk = (message: string) => {
    console.log("Question:", message);
    setLastQuestion(message);
  };

  const handleNewChat = () => {
    setLastQuestion(null);
  };

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar
        activeId={activeNav}
        onSelect={setActiveNav}
      />

      <main className="flex flex-1 flex-col">
        <TopBar
          userName="Sathsara"
          onNewChat={handleNewChat}
        />

        <Dashboard
          userName="Sathsara"
          onAsk={handleAsk}
        />

        {lastQuestion && (
          <div className="fixed bottom-6 right-6 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 shadow-xl">
            <p className="text-sm text-slate-300">
              Sent:
            </p>

            <p className="mt-1 font-medium text-cyan-400">
              {lastQuestion}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;