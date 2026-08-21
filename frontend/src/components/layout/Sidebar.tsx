import {
  BrainCircuitIcon,
  Clock3Icon,
  DatabaseIcon,
  MoreVerticalIcon,
  SearchIcon,
} from "lucide-react";

import { navItems, recentDocuments } from "@/data/navigation";

type SidebarProps = {
  activeId: string;
  onSelect: (id: string) => void;
};

export function Sidebar({
  activeId,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="hidden w-[300px] shrink-0 border-r border-slate-800 bg-slate-950 lg:flex lg:flex-col">

      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6">
        <BrainCircuitIcon className="h-8 w-8 text-cyan-400" />
        <div>
          <h1 className="text-lg font-bold text-white">
            DocMind AI
          </h1>
          <p className="text-xs text-slate-500">
            Knowledge Assistant
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="px-5">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

          <input
            type="text"
            placeholder="Search..."
            className="h-11 w-full rounded-xl border border-slate-700 bg-slate-900 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            const active = activeId === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onSelect(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition
                  ${
                    active
                      ? "bg-cyan-500/15 text-cyan-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />

                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mx-6 my-6 border-t border-slate-800" />

      {/* Recent Documents */}
      <div className="flex-1 overflow-y-auto px-4">

        <h2 className="mb-3 px-3 text-sm font-semibold text-slate-400">
          Recent Documents
        </h2>

        <ul className="space-y-2">
          {recentDocuments.map((doc) => (
            <li key={doc.id}>
              <button
                className="flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-800"
              >
                <DatabaseIcon className="mt-1 h-5 w-5 text-cyan-400" />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm text-white">
                    {doc.name}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                    <Clock3Icon className="h-3 w-3" />
                    {doc.uploadedAt}
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <button
          className="mt-4 px-3 text-sm text-cyan-400 hover:text-cyan-300"
        >
          View All
        </button>
      </div>

      {/* User */}
      <div className="border-t border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-semibold text-white">
            S
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              Sathsara
            </p>

            <p className="truncate text-xs text-slate-500">
              AI Engineer
            </p>
          </div>

          <button>
            <MoreVerticalIcon className="h-5 w-5 text-slate-500 hover:text-white" />
          </button>

        </div>
      </div>

    </aside>
  );
}