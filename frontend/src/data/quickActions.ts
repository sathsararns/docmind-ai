import {
  FileUpIcon,
  SearchCheckIcon,
  Trash2Icon,
  SparklesIcon,
  type LucideIcon,
} from "lucide-react";

export type QuickAction = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
};

export const quickActions: QuickAction[] = [
  {
    id: "upload",
    title: "Upload PDF",
    description: "Upload documents and build your knowledge base.",
    icon: FileUpIcon,
    iconClass: "bg-cyan-500/15 text-cyan-400",
  },
  {
    id: "deep-search",
    title: "Deep Search",
    description: "Search across all uploaded documents instantly.",
    icon: SearchCheckIcon,
    iconClass: "bg-indigo-500/15 text-indigo-400",
  },
  {
    id: "summarize",
    title: "AI Summary",
    description: "Generate concise summaries from your documents.",
    icon: SparklesIcon,
    iconClass: "bg-emerald-500/15 text-emerald-400",
  },
  {
    id: "clear-chat",
    title: "Clear Chat",
    description: "Start a fresh conversation with the AI assistant.",
    icon: Trash2Icon,
    iconClass: "bg-rose-500/15 text-rose-400",
  },
];