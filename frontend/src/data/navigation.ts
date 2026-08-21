import {
  LayoutDashboardIcon,
  MessageSquareIcon,
  DatabaseIcon,
  SettingsIcon,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboardIcon,
  },
  {
    id: "knowledge-base",
    label: "Knowledge Base",
    icon: DatabaseIcon,
  },
  {
    id: "chat",
    label: "AI Chat",
    icon: MessageSquareIcon,
  },
  {
    id: "settings",
    label: "Settings",
    icon: SettingsIcon,
  },
];

export type RecentDocument = {
  id: string;
  name: string;
  uploadedAt: string;
};

export const recentDocuments: RecentDocument[] = [
  {
    id: "1",
    name: "Artificial Intelligence.pdf",
    uploadedAt: "Today",
  },
  {
    id: "2",
    name: "Machine Learning Notes.pdf",
    uploadedAt: "Yesterday",
  },
  {
    id: "3",
    name: "Database Systems.pdf",
    uploadedAt: "2 days ago",
  },
  {
    id: "4",
    name: "Deep Learning.pdf",
    uploadedAt: "Last week",
  },
];