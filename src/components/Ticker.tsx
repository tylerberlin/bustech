const quotes = [
  { sym: "AI", val: "+∞", up: true },
  { sym: "FINTECH", val: "+12.4%", up: true },
  { sym: "NETWORK", val: "+38", up: true },
  { sym: "IMPOSTER.SYNDROME", val: "−64%", up: false },
  { sym: "DATA", val: "+21.7%", up: true },
  { sym: "RÉSUMÉ", val: "+3 LINES", up: true },
  { sym: "PRODUCT", val: "+8.9%", up: true },
  { sym: "BORING.MEETINGS", val: "−100%", up: false },
  { sym: "SPARTANS", val: "▲ ALL TIME HIGH", up: true },
];

export function Ticker() {
  const row = [...quotes, ...quotes];
  return (
    <div className="relative overflow-hidden border-y border-red/60 bg-ink-2 py-3" aria-hidden="true">
      <div className="animate-ticker flex w-max gap-10 whitespace-nowrap font-mono text-sm">
        {row.map((q, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="text-paper/90">{q.sym}</span>
            <span className={q.up ? "text-emerald-400" : "text-red-bright"}>
              {q.up ? "▲" : "▼"} {q.val}
            </span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-2" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-2" />
    </div>
  );
}
