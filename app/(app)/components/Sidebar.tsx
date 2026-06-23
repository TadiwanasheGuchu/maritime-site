"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/lib/auth-actions";
import {
  AlertTriangle,
  FileText,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "./icons";

const NAV = [
  { label: "Dashboard", href: "/dashboard", Icon: LayoutDashboard },
  { label: "Clients", href: "/clients", Icon: Users },
  { label: "Invoices", href: "/invoices", Icon: FileText },
  { label: "Incidents", href: "/incidents", Icon: AlertTriangle },
];

const itemBase =
  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors";
const itemInactive =
  "text-on-primary-container hover:text-on-primary hover:bg-white/10 font-medium";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col bg-[#042c53] py-6">
      <div className="px-6 mb-8">
        <p className="text-xl font-bold text-on-primary leading-tight">
          Monarch
        </p>
        <p className="text-xs text-on-primary-container/70">Lifeguard CRM</p>
      </div>

      <nav className="flex-1 px-2 flex flex-col gap-1">
        {NAV.map(({ label, href, Icon }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`${itemBase} ${
                active ? "bg-primary-container text-on-primary" : itemInactive
              }`}
            >
              <Icon size={20} />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-2 pt-4 border-t border-on-secondary-fixed-variant/20 flex flex-col gap-1">
        <Link href="#" className={`${itemBase} ${itemInactive}`}>
          <Settings size={20} />
          Settings
        </Link>
        <form action={signOut}>
          <button type="submit" className={`w-full ${itemBase} ${itemInactive}`}>
            <LogOut size={20} />
            Logout
          </button>
        </form>
      </div>
    </aside>
  );
}
