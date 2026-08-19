type GaugeProps = {
  value: number;
  max: number;
  color: string;
  label: string;
};

export function Gauge({ value, max, color, label }: GaugeProps) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = 46;
  const cx = 60;
  const cy = 56;
  const circumference = Math.PI * r;

  return (
    <div className="relative flex flex-col items-center">
      <svg width={120} height={68} viewBox="0 0 120 68" aria-hidden="true">
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="var(--border)"
          strokeWidth={9}
          strokeLinecap="round"
        />
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke={color}
          strokeWidth={9}
          strokeLinecap="round"
          strokeDasharray={`${circumference * pct} ${circumference}`}
        />
      </svg>
      <span
        className="-mt-9 text-[15px] font-bold"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}
