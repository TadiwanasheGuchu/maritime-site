import { Bell, HelpCircle, Search } from "./icons";

export default function Topbar({ userName }: { userName: string }) {
  const initial = userName.trim().charAt(0).toUpperCase() || "U";

  return (
    <header className="h-16 shrink-0 sticky top-0 z-30 bg-surface-container-lowest border-b border-outline-variant flex items-center justify-between px-6 md:px-8 gap-4">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
        />
        <input
          type="search"
          placeholder="Search operational data…"
          aria-label="Search operational data"
          className="h-9 w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-10 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent"
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full p-2 text-primary hover:bg-surface-container-low transition-colors active:scale-95"
        >
          <Bell size={20} />
        </button>
        <button
          type="button"
          aria-label="Help"
          className="rounded-full p-2 text-primary hover:bg-surface-container-low transition-colors active:scale-95"
        >
          <HelpCircle size={20} />
        </button>
        <div
          title={userName}
          aria-hidden="true"
          className="h-8 w-8 ml-1 rounded-full bg-primary-container text-on-primary grid place-items-center text-xs font-semibold"
        >
          {initial}
        </div>
      </div>
    </header>
  );
}
