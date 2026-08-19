import { Home, Compass, Sparkles, CheckSquare, HelpCircle, User, Settings, Lock, Moon, Sun } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const mainNav = [
  { icon: Home, label: "Home", active: true },
  { icon: Compass, label: "Journey" },
  { icon: Sparkles, label: "Insights" },
  { icon: CheckSquare, label: "Quests" },
  { icon: HelpCircle, label: "Support" },
];

const secondaryNav = [
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[152px] shrink-0 flex-col bg-sidebar px-4 pb-4 pt-6 lg:flex">
      <div className="flex flex-col items-center">
        <div className="rounded-full p-[3px] ring-2 ring-primary">
          <img
            src={avatar}
            alt="Omar's profile picture"
            width={64}
            height={64}
            className="h-14 w-14 rounded-full object-cover"
          />
        </div>
        <p className="mt-3 text-[13px] font-bold text-foreground">Level 7</p>
        <p className="text-[11px] text-muted-foreground">Wellbeing Explorer</p>
        <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[72%] rounded-full bg-primary" />
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground">
          <span className="font-bold text-foreground">720</span> / 1000 XP
        </p>
      </div>

      <nav className="mt-6 flex flex-col gap-1">
        {mainNav.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={
              active
                ? "flex items-center gap-3 rounded-xl bg-accent px-3 py-2.5 text-[13px] font-semibold text-accent-foreground"
                : "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-secondary"
            }
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.4 : 1.8} />
            {label}
          </button>
        ))}
      </nav>

      <div className="my-4 h-px bg-border" />

      <nav className="flex flex-col gap-1">
        {secondaryNav.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-secondary"
          >
            <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
            {label}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="rounded-2xl border border-border bg-card p-3">
          <div className="flex items-center gap-2">
            <Lock className="h-[14px] w-[14px] text-foreground" />
            <p className="text-[12px] font-bold leading-tight text-foreground">
              Your space
              <br />
              is private
            </p>
          </div>
          <p className="mt-2 text-[10.5px] leading-relaxed text-muted-foreground">
            Your employer only sees anonymous, grouped results.
          </p>
          <button className="mt-2 text-[10.5px] font-semibold text-primary">
            How privacy works →
          </button>
        </div>

        <p className="mt-4 text-center text-[10px] text-muted-foreground">v2.0.0</p>
        <div className="mt-2 flex items-center justify-center gap-1 rounded-full bg-secondary p-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full text-foreground">
            <Moon className="h-[14px] w-[14px]" />
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-card text-foreground shadow-sm">
            <Sun className="h-[14px] w-[14px]" />
          </span>
        </div>
      </div>
    </aside>
  );
}
