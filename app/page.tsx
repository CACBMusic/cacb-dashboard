import DashboardNavbar from "@/components/layout/dashboard-navbar";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardHome() {
  return (
    <main className="flex min-h-screen bg-zinc-50 dark:bg-[#050505]">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <DashboardNavbar />

        <div className="p-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-900 dark:bg-zinc-950">
              <p className="text-sm text-zinc-500">
                Total Artists
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                12
              </h2>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-900 dark:bg-zinc-950">
              <p className="text-sm text-zinc-500">
                Total News
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                28
              </h2>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-900 dark:bg-zinc-950">
              <p className="text-sm text-zinc-500">
                Releases
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                45
              </h2>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 dark:border-zinc-900 dark:bg-zinc-950">
              <p className="text-sm text-zinc-500">
                Revenue
              </p>

              <h2 className="mt-2 text-4xl font-bold">
                $12.4K
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}