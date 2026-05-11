import Link from "next/link";

import {
  LayoutDashboard,
  Newspaper,
  Music2,
  Users,
  Settings,
} from "lucide-react";

const links = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "News",
    href: "/news",
    icon: Newspaper,
  },
  {
    label: "Artists",
    href: "/artists",
    icon: Users,
  },
  {
    label: "Releases",
    href: "/releases",
    icon: Music2,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-zinc-200 bg-white dark:border-zinc-900 dark:bg-black lg:flex lg:flex-col">
      <div className="border-b border-zinc-200 p-6 dark:border-zinc-900">
        <h2 className="text-2xl font-bold">
          CACB
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Dashboards
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-zinc-600 transition hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            >
              <Icon size={18} />

              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}