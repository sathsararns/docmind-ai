import {
  BellIcon,
  MoreVerticalIcon,
  PlusIcon,
} from "lucide-react";

type TopBarProps = {
  userName: string;
  onNewChat: () => void;
};

export function TopBar({
  userName,
  onNewChat,
}: TopBarProps) {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Welcome back, {userName} 👋
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Ask questions, upload documents, and explore your knowledge base.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* New Chat */}
        <button
          onClick={onNewChat}
          className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-cyan-500"
        >
          <PlusIcon className="h-4 w-4" />
          New Chat
        </button>

        {/* Notifications */}
        <button
          className="rounded-xl border border-slate-700 bg-slate-900 p-2.5 text-slate-400 transition hover:border-cyan-500 hover:text-white"
        >
          <BellIcon className="h-5 w-5" />
        </button>

        {/* Avatar */}
        <button className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-cyan-500">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 font-semibold text-white">
            {userName.charAt(0).toUpperCase()}
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-medium text-white">
              {userName}
            </p>

            <p className="text-xs text-slate-500">
              AI Engineer
            </p>
          </div>

          <MoreVerticalIcon className="h-4 w-4 text-slate-500" />
        </button>

      </div>
    </header>
  );
}