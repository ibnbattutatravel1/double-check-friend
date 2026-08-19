import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { month: "Mar", score: 8 },
  { month: "Apr", score: 10.5 },
  { month: "May", score: 12 },
  { month: "Jun", score: 14 },
  { month: "Jul", score: 12.8 },
  { month: "Aug", score: 16 },
];

export function WellbeingChart() {
  return (
    <div className="h-[190px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 16, right: 24, bottom: 4, left: 0 }}>
          <CartesianGrid stroke="var(--border)" vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          />
          <YAxis
            domain={[0, 25]}
            ticks={[0, 12.5, 25]}
            tickLine={false}
            axisLine={false}
            width={36}
            tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="var(--primary)"
            strokeWidth={2.2}
            dot={{ r: 3.5, fill: "var(--card)", stroke: "var(--primary)", strokeWidth: 2 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
