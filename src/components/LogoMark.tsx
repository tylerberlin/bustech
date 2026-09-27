// Simplified vector version of the club logo: the red band with the bar chart.
// To use the full logo instead, drop it at /public/logo.png and swap this for
// <Image src="/logo.png" ... /> wherever <LogoMark /> appears.
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden="true">
      <ellipse cx="32" cy="12" rx="29" ry="8" fill="none" stroke="var(--red)" strokeWidth="3" />
      <path d="M3 12v16c0 4.4 13 8 29 8s29-3.6 29-8V12" fill="none" stroke="var(--red)" strokeWidth="3" />
      <path d="M3 28c0 4.4 13 8 29 8s29-3.6 29-8" fill="none" stroke="var(--paper)" strokeWidth="1.2" />
      <rect x="22" y="15" width="20" height="14" rx="1" fill="var(--red)" />
      <rect x="25.5" y="23" width="2.6" height="4" fill="var(--paper)" />
      <rect x="29.5" y="21" width="2.6" height="6" fill="var(--paper)" />
      <rect x="33.5" y="19" width="2.6" height="8" fill="var(--paper)" />
      <rect x="37.5" y="17" width="2.6" height="10" fill="var(--paper)" />
      <path d="M9 17v10M13 18v10M17 18.5v10" stroke="var(--red)" strokeWidth="2.4" />
      <path d="M46 19h10M46 23h10M46 27h9" stroke="var(--red)" strokeWidth="2" />
    </svg>
  );
}
