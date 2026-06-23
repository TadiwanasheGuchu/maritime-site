import type { ComponentType } from "react";
import {
  AlertTriangle,
  ChevronRight,
  DollarSign,
  LifeBuoy,
  MoreVertical,
  Plus,
  Users,
} from "../components/icons";

// PLACEHOLDER demo data — replace with real queries once the data layer exists
// (Phase 2/3). Mirrors the Monarch CRM dashboard design.
type Kpi = {
  label: string;
  value: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  iconClass: string;
  delta: string;
  deltaClass: string;
  note: string;
};

const KPIS: Kpi[] = [
  {
    label: "Active Clients",
    value: "1,284",
    Icon: Users,
    iconClass: "bg-primary/10 text-primary",
    delta: "+4%",
    deltaClass: "text-tertiary",
    note: "since last month",
  },
  {
    label: "Active Deployments",
    value: "42",
    Icon: LifeBuoy,
    iconClass: "bg-tertiary/10 text-tertiary",
    delta: "Stable",
    deltaClass: "text-tertiary",
    note: "8 units on standby",
  },
  {
    label: "Incidents This Month",
    value: "12",
    Icon: AlertTriangle,
    iconClass: "bg-error/10 text-error",
    delta: "-2",
    deltaClass: "text-error",
    note: "vs previous month",
  },
  {
    label: "Overdue Invoices",
    value: "$14,200",
    Icon: DollarSign,
    iconClass: "bg-secondary-container/30 text-secondary",
    delta: "6 invoices",
    deltaClass: "text-error",
    note: "avg 12 days late",
  },
];

type Incident = {
  id: string;
  location: string;
  type: "Rescue" | "First Aid";
  status: "Resolved" | "Processing";
  time: string;
};

const INCIDENTS: Incident[] = [
  { id: "INC-9042", location: "North Beach Sector 4", type: "Rescue", status: "Resolved", time: "2h ago" },
  { id: "INC-9041", location: "Blue Bay Resort", type: "First Aid", status: "Processing", time: "5h ago" },
  { id: "INC-9040", location: "Crystal Cove", type: "Rescue", status: "Resolved", time: "1d ago" },
  { id: "INC-9039", location: "Main Beach Jetty", type: "First Aid", status: "Resolved", time: "1d ago" },
];

const TYPE_BADGE: Record<Incident["type"], string> = {
  Rescue: "bg-error/10 text-error",
  "First Aid": "bg-secondary-container/30 text-on-secondary-container",
};

const STATUS_STYLE: Record<Incident["status"], string> = {
  Resolved: "text-tertiary",
  Processing: "text-on-secondary-container",
};

const STATUS_DOT: Record<Incident["status"], string> = {
  Resolved: "bg-tertiary",
  Processing: "bg-on-secondary-container",
};

const DEPLOYMENTS = [
  { month: "Oct", day: "24", title: "Marathon Water Safety", detail: "8 Lifeguards · Downtown Pier" },
  { month: "Oct", day: "26", title: "Surf Masters Qualifiers", detail: "14 Lifeguards · Sunset Beach" },
  { month: "Oct", day: "30", title: "Private Event Coverage", detail: "2 Lifeguards · Villa Aqua" },
  { month: "Nov", day: "02", title: "Annual Harbor Swim", detail: "22 Lifeguards · South Harbor" },
];

const CARD =
  "bg-surface-container-lowest border border-outline-variant rounded-md";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-semibold tracking-tight text-on-surface">
        Dashboard
      </h1>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {KPIS.map((kpi) => (
          <div key={kpi.label} className={`${CARD} p-4 flex flex-col`}>
            <span className="text-xs font-medium text-on-surface-variant mb-1">
              {kpi.label}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-semibold tracking-tight text-on-surface">
                {kpi.value}
              </span>
              <div
                className={`h-10 w-10 rounded-lg flex items-center justify-center ${kpi.iconClass}`}
              >
                <kpi.Icon size={20} />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1 text-xs">
              <span className={`font-bold ${kpi.deltaClass}`}>{kpi.delta}</span>
              <span className="text-on-surface-variant">{kpi.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Incidents + Deployments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        <section className="lg:col-span-2">
          <div className={`${CARD} overflow-hidden`}>
            <div className="px-6 py-4 border-b border-surface-container flex justify-between items-center">
              <h2 className="text-xl font-semibold text-on-surface">
                Recent Incidents
              </h2>
              <button className="text-xs font-semibold text-primary hover:underline">
                View all
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container-low border-b border-surface-container">
                  <tr>
                    {["Incident ID", "Location", "Type", "Status", "Time"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-6 py-3 text-[13px] font-semibold uppercase tracking-wider text-on-surface-variant"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  {INCIDENTS.map((inc) => (
                    <tr
                      key={inc.id}
                      className="hover:bg-surface-container-low/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-[13px] font-semibold">
                        {inc.id}
                      </td>
                      <td className="px-6 py-4 text-[13px]">{inc.location}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 rounded text-[11px] font-bold uppercase tracking-wider ${TYPE_BADGE[inc.type]}`}
                        >
                          {inc.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`flex items-center gap-2 text-[13px] ${STATUS_STYLE[inc.status]}`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${STATUS_DOT[inc.status]}`}
                          />
                          {inc.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-[13px] text-on-surface-variant">
                        {inc.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <div className={`${CARD} p-4`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-on-surface">
                Upcoming Deployments
              </h2>
              <button
                type="button"
                aria-label="More options"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <MoreVertical size={20} />
              </button>
            </div>
            <ul className="flex flex-col gap-2">
              {DEPLOYMENTS.map((d, i) => (
                <li key={d.title}>
                  <button className="w-full text-left flex gap-4 p-3 rounded-lg border border-transparent hover:border-outline-variant hover:bg-surface-container-low transition-all">
                    <div
                      className={`h-10 w-10 shrink-0 rounded flex flex-col items-center justify-center ${
                        i === 0
                          ? "bg-primary-container text-on-primary"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase">
                        {d.month}
                      </span>
                      <span className="text-sm font-bold leading-none">
                        {d.day}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-on-surface leading-tight">
                        {d.title}
                      </p>
                      <p className="text-[13px] text-on-surface-variant mt-0.5">
                        {d.detail}
                      </p>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-on-surface-variant self-center shrink-0"
                    />
                  </button>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 py-3 border border-outline-variant rounded-lg text-xs font-semibold text-primary hover:bg-surface-container-low transition-all">
              Schedule New Deployment
            </button>
          </div>
        </section>
      </div>

      {/* Floating action button */}
      <button
        type="button"
        aria-label="Create new"
        className="fixed bottom-8 right-8 h-14 w-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40"
      >
        <Plus size={28} />
      </button>
    </div>
  );
}
