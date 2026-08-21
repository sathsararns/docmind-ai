import { motion } from "framer-motion";
import {
  FileTextIcon,
  Clock3Icon,
  ArrowRightIcon,
} from "lucide-react";

import { Composer } from "@/components/features/Composer";
import { quickActions } from "@/data/quickActions";

type DashboardProps = {
  userName: string;
  onAsk: (message: string) => void;
};

const recentDocuments = [
  {
    id: 1,
    name: "Artificial Intelligence.pdf",
    time: "Today",
  },
  {
    id: 2,
    name: "Machine Learning Notes.pdf",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Research Paper.pdf",
    time: "2 days ago",
  },
];

const tips = [
  "Upload your PDFs before asking questions.",
  "Use Deep Search to retrieve information across multiple documents.",
  "AI Summary can summarize long PDFs within seconds.",
];

export function Dashboard({
  userName,
  onAsk,
}: DashboardProps) {
  return (
    <div className="flex-1 overflow-y-auto bg-slate-950">

      <div className="mx-auto max-w-7xl px-8 py-10">

        {/* Hero */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-center"
        >
          <div className="mb-6 flex justify-center">
  <img
    src="https://cdn.magicpatterns.com/patterns/generated-images/1e36c52f-0bda-4d61-93fe-367423383c55.jpg"
    alt="DocMind AI"
    className="h-[150px] w-[150px] object-cover mix-blend-screen"
  />
</div>

          <h1 className="text-5xl font-bold text-white">
            Welcome back, {userName}
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            Ask questions, upload PDFs, and explore your knowledge with AI.
          </p>
        </motion.div>

        {/* Composer */}

        <div className="mx-auto mt-10 max-w-3xl">
          <Composer onSubmit={onAsk} />
        </div>

        {/* Quick Actions */}

        <section className="mt-14">

          <h2 className="mb-6 text-xl font-semibold text-white">
            Quick Actions
          </h2>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:border-cyan-500 hover:bg-slate-900/80"
                >
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${action.iconClass}`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {action.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {action.description}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recent Documents */}

        <section className="mt-14">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-xl font-semibold text-white">
              Recent Documents
            </h2>

            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
              View All
              <ArrowRightIcon size={18} />
            </button>

          </div>

          <div className="grid gap-4 lg:grid-cols-3">

            {recentDocuments.map((doc) => (
              <div
                key={doc.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:border-cyan-500"
              >
                <FileTextIcon className="mb-4 text-cyan-400" />

                <h3 className="truncate font-medium text-white">
                  {doc.name}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                  <Clock3Icon size={15} />
                  {doc.time}
                </div>
              </div>
            ))}

          </div>

        </section>

        {/* Tips */}

        <section className="mt-14 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-xl font-semibold text-white">
            Tips
          </h2>

          <ul className="mt-5 space-y-4">

            {tips.map((tip) => (
              <li
                key={tip}
                className="flex gap-3 text-slate-400"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                {tip}
              </li>
            ))}

          </ul>

        </section>

      </div>

    </div>
  );
}