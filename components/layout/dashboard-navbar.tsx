"use client";

import { UserButton } from "@clerk/nextjs";

import ThemeToggle from "./theme-toggle";

export default function DashboardNavbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-900 dark:bg-black">
      <div>
        <h1 className="text-xl font-semibold">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}