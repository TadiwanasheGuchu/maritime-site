import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Authoritative auth gate (proxy.ts is only an optimistic pre-check).
  const session = await verifySession();
  if (!session) redirect("/login");

  return (
    <div className="crm-theme flex min-h-screen bg-surface-container-low text-on-surface">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar userName={session.name} />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
