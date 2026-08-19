import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Globe,
  ChevronDown,
  ChevronRight,
  Lock,
  Check,
  Clock,
  Star,
  Heart,
  Shield,
  Zap,
  Frown,
  Flame,
  CalendarCheck,
  MessageCircle,
  Sparkles,
  Activity,
  Award,
  AlertTriangle,
  Compass,
  Waves,
  Sprout,
  Leaf,
} from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Gauge } from "@/components/dashboard/Gauge";
import { WellbeingChart } from "@/components/dashboard/WellbeingChart";
import blob from "@/assets/blob-mascot.png";
import nightCard from "@/assets/night-card.jpg";
import plant from "@/assets/plant-sprig.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Wellbeing Dashboard | Mindful Work" },
      {
        name: "description",
        content:
          "Track your weekly wellbeing check-ins, quests, streaks and insights in one private, personal dashboard.",
      },
      { property: "og:title", content: "Your Wellbeing Dashboard | Mindful Work" },
      {
        property: "og:description",
        content:
          "Weekly check-ins, XP, quests and wellbeing trends — private by design and always yours.",
      },
    ],
  }),
  component: Index,
});

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`card-surface ${className}`}>{children}</section>;
}

function SectionHead({ title, action }: { title: string; action: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[17px] font-extrabold tracking-tight text-foreground">{title}</h2>
      <button className="flex items-center gap-1 text-[12px] font-semibold text-primary">
        {action} <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

const journeySteps = [
  { n: 1, title: "Wellbeing", sub: "WHO-5 Wellbeing", state: "done", date: "May 5", icon: Sprout },
  { n: 2, title: "Psychosocial Risk", sub: "HSE-MSIT", state: "done", date: "May 12", icon: Shield },
  { n: 3, title: "Burnout", sub: "CBI", state: "done", date: "May 19", icon: Zap },
  { n: 4, title: "Depression Screen", sub: "PHQ-9", state: "current", mins: "~3 min", icon: Activity },
  { n: 5, title: "Anxiety Screen", sub: "GAD-7", state: "locked", mins: "~3 min", icon: Frown },
  { n: 6, title: "Work Functioning", sub: "WPAI", state: "locked", mins: "~2 min", icon: Compass },
] as const;

const quests = [
  {
    icon: CalendarCheck,
    tint: "var(--primary-soft)",
    color: "var(--primary)",
    title: "Complete your check-in",
    sub: "Understand how you're doing",
    xp: "+100 XP",
    xpColor: "var(--primary)",
  },
  {
    icon: Sparkles,
    tint: "var(--warning-soft)",
    color: "var(--warning)",
    title: "Try a 3-minute reset",
    sub: "Take a quick reset for your mind",
    xp: "+75 XP",
    xpColor: "var(--warning)",
  },
  {
    icon: MessageCircle,
    tint: "var(--success-soft)",
    color: "var(--success)",
    title: "Reflect on one thing",
    sub: "What helped you this week?",
    xp: "+50 XP",
    xpColor: "var(--success)",
  },
];

const glance = [
  { icon: Heart, label: "Wellbeing", verdict: "Good", value: "16", max: "/ 25", num: 16, den: 25, color: "var(--success)", trend: "Improving", up: true },
  { icon: Shield, label: "Psychosocial Risk", verdict: "Moderate", value: "47.9", max: "/ 100", num: 47.9, den: 100, color: "var(--warning)", trend: "Stable", up: null },
  { icon: Zap, label: "Burnout", verdict: "Mild", value: "25", max: "/ 100", num: 25, den: 100, color: "var(--success)", trend: "Improving", up: false },
  { icon: Frown, label: "Anxiety", verdict: "Mild", value: "8.0", max: "/ 21", num: 8, den: 21, color: "var(--primary)", trend: "Stable", up: null },
];

const badges = [
  { label: "First Step", icon: Sprout, tint: "var(--success-soft)", color: "var(--success)" },
  { label: "Momentum", icon: Flame, tint: "var(--warning-soft)", color: "var(--flame)" },
  { label: "Self-Aware", icon: Compass, tint: "var(--primary-soft)", color: "var(--primary)" },
  { label: "Consistency", icon: Waves, tint: "oklch(0.94 0.04 220)", color: "var(--info)" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 px-5 pb-24 pt-6 lg:px-7">
          {/* Header */}
          <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="flex items-center gap-2 text-[27px] font-extrabold tracking-tight text-foreground">
                Good evening, Omar! <span aria-hidden="true">👋</span>
              </h1>
              <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                Take care of yourself today so you can show up for what matters.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative" aria-label="Notifications">
                <Bell className="h-[19px] w-[19px] text-foreground" />
                <span className="absolute -right-2 -top-2 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-destructive-foreground">
                  3
                </span>
              </button>
              <button className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-[13px] font-semibold text-foreground shadow-sm">
                <Globe className="h-4 w-4 text-muted-foreground" />
                English
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </header>

          {/* Row 1 */}
          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1fr]">
            <section className="relative overflow-hidden rounded-[22px] bg-gradient-hero p-7 shadow-hero">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Your next step
              </span>
              <h2 className="mt-5 max-w-[300px] text-[26px] font-extrabold leading-tight text-primary-foreground">
                Weekly wellbeing check-in
              </h2>
              <p className="mt-2 text-[13px] text-primary-foreground/75">
                See how work is feeling this week.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/12 px-3 py-1.5 text-[11.5px] font-medium text-primary-foreground/90">
                  <Clock className="h-3.5 w-3.5" /> 3 min
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/12 px-3 py-1.5 text-[11.5px] font-medium text-primary-foreground/90">
                  <Lock className="h-3.5 w-3.5" /> Private
                </span>
              </div>
              <button className="mt-6 inline-flex items-center gap-8 rounded-full bg-card px-6 py-3.5 text-[15px] font-bold text-foreground shadow-lg transition-transform hover:-translate-y-0.5">
                Start check-in
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
              <img
                src={blob}
                alt="Friendly wellbeing companion with a sprouting leaf"
                width={768}
                height={768}
                className="pointer-events-none absolute -bottom-4 right-2 w-[210px] select-none"
              />
              <Sparkles
                className="absolute right-10 top-8 h-6 w-6 text-primary-foreground/70"
                aria-hidden="true"
              />
            </section>

            <Card className="p-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-soft">
                  <Compass className="h-4 w-4 text-primary" />
                </span>
                <p className="text-[11.5px] font-bold uppercase tracking-wide text-muted-foreground">
                  Your journey
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-foreground">
                    <span className="text-[40px] font-extrabold leading-none">4</span>
                    <span className="mx-2 text-[17px] font-medium text-muted-foreground">of</span>
                    <span className="text-[30px] font-extrabold leading-none">6</span>
                  </p>
                  <p className="mt-2 text-[14px] text-muted-foreground">check-ins complete</p>
                </div>
                <div className="relative h-[104px] w-[104px] shrink-0">
                  <svg viewBox="0 0 104 104" className="h-full w-full -rotate-90">
                    <circle cx="52" cy="52" r="44" fill="none" stroke="var(--muted)" strokeWidth="11" />
                    <circle
                      cx="52"
                      cy="52"
                      r="44"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="11"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 44 * 0.67} ${2 * Math.PI * 44}`}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[18px] font-extrabold text-foreground">
                    67%
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-6 gap-1.5">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`h-[7px] rounded-full ${i < 4 ? "bg-primary" : "bg-muted"}`}
                  />
                ))}
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <p className="flex items-center gap-2 text-[13px] text-muted-foreground">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-bold text-foreground">+420 XP</span> earned this month
                </p>
                <p className="mt-1.5 pl-6 text-[12.5px] text-muted-foreground">
                  Keep going, you're doing great!
                </p>
              </div>
            </Card>
          </div>

          {/* Row 2 */}
          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1fr]">
            <Card className="p-6">
              <SectionHead title="Your journey" action="View all steps" />
              <ol className="relative mt-5">
                <span className="absolute left-[13px] top-3 bottom-6 w-[2px] bg-border" aria-hidden="true" />
                {journeySteps.map((s) => {
                  const Icon = s.icon;
                  const done = s.state === "done";
                  const current = s.state === "current";
                  return (
                    <li
                      key={s.n}
                      className={`relative flex items-center gap-3 rounded-2xl py-3 pr-3 ${
                        current ? "bg-accent px-3" : ""
                      }`}
                    >
                      <span
                        className={`z-10 flex h-[27px] w-[27px] shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
                          done
                            ? "bg-success text-primary-foreground"
                            : current
                              ? "bg-primary text-primary-foreground"
                              : "border border-border bg-card text-muted-foreground"
                        }`}
                      >
                        {done ? <Check className="h-4 w-4" strokeWidth={3} /> : s.n}
                      </span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                          done ? "bg-success-soft" : current ? "bg-primary-soft" : "bg-secondary"
                        }`}
                      >
                        <Icon
                          className="h-[17px] w-[17px]"
                          style={{
                            color: done
                              ? "var(--success)"
                              : current
                                ? "var(--primary)"
                                : "var(--muted-foreground)",
                          }}
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[14px] font-bold text-foreground">{s.title}</p>
                        <p className="text-[11.5px] text-muted-foreground">{s.sub}</p>
                        {"mins" in s && s.mins ? (
                          <div className="mt-1.5 flex gap-1.5">
                            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-[3px] text-[10px] font-medium text-muted-foreground">
                              <Clock className="h-[11px] w-[11px]" /> {s.mins}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-[3px] text-[10px] font-medium text-muted-foreground">
                              <Lock className="h-[11px] w-[11px]" /> Private
                            </span>
                          </div>
                        ) : null}
                      </div>
                      {done ? (
                        <div className="text-right">
                          <span className="rounded-full bg-success-soft px-2.5 py-1 text-[11px] font-bold text-success">
                            Done
                          </span>
                          <p className="mt-1 text-[11px] text-muted-foreground">{s.date}</p>
                        </div>
                      ) : current ? (
                        <button className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[13px] font-bold text-primary-foreground">
                          Start <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                          <Lock className="h-3 w-3" /> Locked
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
              <div className="mt-2 flex items-center gap-3 rounded-2xl bg-secondary px-4 py-3.5">
                <Lock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-[13px] font-bold text-foreground">Your insights &amp; summary</p>
                  <p className="text-[11.5px] text-muted-foreground">
                    Unlock when all steps complete
                  </p>
                </div>
              </div>
            </Card>

            <div className="flex flex-col gap-5">
              <Card className="p-6">
                <SectionHead title="This week's quests" action="View all" />
                <ul className="mt-4 flex flex-col gap-3">
                  {quests.map((q) => {
                    const Icon = q.icon;
                    return (
                      <li
                        key={q.title}
                        className="flex items-center gap-3 rounded-2xl border border-border px-3.5 py-3"
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: q.tint }}
                        >
                          <Icon className="h-[18px] w-[18px]" style={{ color: q.color }} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13.5px] font-bold text-foreground">{q.title}</p>
                          <p className="text-[11.5px] text-muted-foreground">{q.sub}</p>
                        </div>
                        <span className="text-[12.5px] font-bold" style={{ color: q.xpColor }}>
                          {q.xp}
                        </span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </li>
                    );
                  })}
                </ul>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-2.5">
                  <Flame className="h-[22px] w-[22px]" style={{ color: "var(--flame)" }} />
                  <h2 className="text-[17px] font-extrabold tracking-tight text-foreground">
                    Your momentum
                  </h2>
                </div>
                <p className="mt-3 text-foreground">
                  <span className="text-[26px] font-extrabold">4</span>
                  <span className="ml-1.5 text-[18px] font-bold">-week streak</span>
                </p>
                <p className="mt-1 text-[12.5px] text-muted-foreground">
                  You've checked in 4 weeks in a row.
                </p>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {[true, true, true, true, false].map((lit, i) => (
                      <span
                        key={i}
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-full"
                        style={{ backgroundColor: lit ? "var(--warning-soft)" : "var(--muted)" }}
                      >
                        <Flame
                          className="h-4 w-4"
                          style={{ color: lit ? "var(--flame)" : "var(--muted-foreground)" }}
                        />
                      </span>
                    ))}
                  </div>
                  <p className="max-w-[160px] text-[11.5px] leading-relaxed text-muted-foreground">
                    Keep it up! Taking a break won't reset your progress.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Row 3 */}
          <Card className="mt-5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[17px] font-extrabold tracking-tight text-foreground">
                Your wellbeing at a glance
              </h2>
              <button className="flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-[12.5px] font-semibold text-foreground">
                This month <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {glance.map((g) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.label}
                    className="rounded-[18px] border border-border p-4 text-center"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-[15px] w-[15px]" style={{ color: g.color }} />
                      <p className="text-[12.5px] font-semibold text-foreground">{g.label}</p>
                    </div>
                    <div className="mt-3 flex justify-center">
                      <Gauge value={g.num} max={g.den} color={g.color} label={g.verdict} />
                    </div>
                    <p className="mt-1 text-foreground">
                      <span className="text-[22px] font-extrabold">{g.value}</span>
                      <span className="ml-1 text-[12px] text-muted-foreground">{g.max}</span>
                    </p>
                    <span
                      className="mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                      style={{
                        backgroundColor:
                          g.trend === "Improving" ? "var(--success-soft)" : "var(--secondary)",
                        color:
                          g.trend === "Improving" ? "var(--success)" : "var(--muted-foreground)",
                      }}
                    >
                      {g.up === null ? "→" : g.up ? "↑" : "↓"} {g.trend}
                    </span>
                  </div>
                );
              })}
              <div className="relative overflow-hidden rounded-[18px] bg-gradient-night p-5">
                <img
                  src={nightCard}
                  alt="Night sky with a crescent moon over calm mountains"
                  width={700}
                  height={1024}
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
                />
                <div className="relative">
                  <p className="text-[17px] font-extrabold leading-snug text-primary-foreground">
                    Small steps,
                    <br />
                    big difference.
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-primary-foreground/80">
                    You're building a healthier you every day.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Row 4 */}
          <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_1fr]">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-[17px] font-extrabold tracking-tight text-foreground">
                  Your wellbeing over time
                </h2>
                <button className="flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-[12.5px] font-semibold text-foreground">
                  Wellbeing score <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
              <div className="relative mt-2">
                <WellbeingChart />
                <div className="absolute right-6 top-0 rounded-xl border border-border bg-card px-3 py-1.5 text-center shadow-sm">
                  <p className="text-[12.5px] font-bold text-foreground">
                    16 <span className="font-medium text-muted-foreground">/ 25</span>
                  </p>
                  <p className="text-[11px] font-semibold text-success">Good</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-accent px-4 py-3.5">
                <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-[12.5px] font-semibold text-foreground">
                    Your wellbeing has improved since your last check-in.
                  </p>
                  <p className="text-[11.5px] text-muted-foreground">
                    Consistency is key. Keep taking care of yourself.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="flex flex-col p-6">
              <SectionHead title="Latest insight" action="View all insights" />
              <div className="mt-4 flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-success-soft">
                  <Heart className="h-[17px] w-[17px] text-success" />
                </span>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-success">
                    Strength
                  </p>
                  <p className="mt-0.5 text-[14px] font-bold text-foreground">Strong peer support</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                    Your connection with colleagues is one of your strongest areas.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-warning-soft">
                  <AlertTriangle className="h-[17px] w-[17px] text-warning" />
                </span>
                <div>
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-warning">
                    Worth exploring
                  </p>
                  <p className="mt-0.5 text-[14px] font-bold text-foreground">Workload demands</p>
                  <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">
                    Your workload may be an area worth paying attention to.
                  </p>
                </div>
              </div>
              <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-[13px] font-bold text-primary-foreground">
                See recommended actions <ArrowRight className="h-4 w-4" />
              </button>
            </Card>
          </div>

          {/* Row 5 */}
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <Card className="p-5">
              <SectionHead title="Your recent wins" action="View all" />
              <ul className="mt-4 flex flex-col gap-3">
                {[
                  { icon: Check, label: "Completed 3 check-ins", xp: "+300 XP", color: "var(--success)" },
                  { icon: Check, label: "Explored your wellbeing trend", xp: "+50 XP", color: "var(--success)" },
                  { icon: Award, label: "Earned Self-Aware badge", xp: "+25 XP", color: "var(--warning)" },
                ].map((w) => {
                  const Icon = w.icon;
                  return (
                    <li key={w.label} className="flex items-center gap-2.5">
                      <Icon className="h-[17px] w-[17px] shrink-0" style={{ color: w.color }} />
                      <span className="flex-1 text-[12.5px] font-medium text-foreground">
                        {w.label}
                      </span>
                      <span className="text-[12px] font-bold text-success">{w.xp}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>

            <Card className="p-5">
              <SectionHead title="Your badges" action="View all" />
              <div className="mt-4 grid grid-cols-4 gap-2">
                {badges.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.label} className="flex flex-col items-center gap-1.5">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-full"
                        style={{ backgroundColor: b.tint }}
                      >
                        <Icon className="h-5 w-5" style={{ color: b.color }} />
                      </span>
                      <span className="text-[10.5px] font-semibold text-muted-foreground">
                        {b.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-[11.5px] text-muted-foreground">
                2 more badges to unlock Level 8
              </p>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-[7px] flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[72%] rounded-full bg-primary" />
                </div>
                <span className="text-[11px] font-semibold text-foreground">720 / 1000 XP</span>
              </div>
            </Card>

            <Card className="relative overflow-hidden bg-success-soft p-5">
              <p className="text-[14px] font-extrabold text-foreground">Top tip for you</p>
              <p className="mt-2 text-[13px] font-bold text-foreground">Take mini breaks</p>
              <p className="mt-1 max-w-[220px] text-[11.5px] leading-relaxed text-muted-foreground">
                Short breaks can help improve focus and reduce stress.
              </p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-success px-4 py-2.5 text-[12.5px] font-bold text-primary-foreground">
                Try a 3-min reset <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <img
                src={plant}
                alt=""
                width={512}
                height={512}
                loading="lazy"
                className="pointer-events-none absolute -bottom-2 right-1 w-[110px] select-none"
              />
            </Card>
          </div>
        </main>
      </div>

      {/* Privacy footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 border-t border-border bg-accent/90 px-6 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-card">
            <Lock className="h-4 w-4 text-foreground" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-bold text-foreground">Always private. Always yours.</p>
            <p className="text-[11.5px] text-muted-foreground">
              Your answers are confidential and secure. Your employer only sees anonymous, grouped
              results.
            </p>
          </div>
          <button className="rounded-full border border-border bg-card px-4 py-2.5 text-[12.5px] font-semibold text-primary">
            How privacy works →
          </button>
        </div>
      </footer>
    </div>
  );
}
