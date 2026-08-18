import { Activity, CheckCircle2, ShieldCheck } from "lucide-react";

const checks = [
  { label: "E2E-Szenarien", value: "38" },
  { label: "API-Checks", value: "12" },
  { label: "Abdeckung", value: "96%" },
];

const QualityDashboard = () => (
  <aside className="quality-dashboard glass-panel relative overflow-hidden p-5 sm:p-6" aria-label="Beispiel für ein Quality1st Test-Dashboard">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="flex items-center justify-between gap-4 border-b border-border/80 pb-4">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center bg-accent/15 text-accent">
          <Activity aria-hidden="true" className="h-4 w-4" />
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-foreground">Test execution</p>
          <p className="text-xs text-muted-foreground">Release candidate</p>
        </div>
      </div>
      <span className="inline-flex items-center gap-2 border border-accent/25 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
        <span className="h-1.5 w-1.5 bg-accent" /> Live
      </span>
    </div>

    <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">Quality score</p>
        <div className="mt-2 flex items-end gap-2">
          <strong className="font-display text-5xl font-semibold leading-none text-foreground">96</strong>
          <span className="mb-1 text-lg font-semibold text-primary">/100</span>
        </div>
        <div className="mt-4 h-1.5 overflow-hidden bg-secondary">
          <div className="h-full w-[96%] bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]" />
        </div>
      </div>
      <div className="flex h-20 w-20 items-center justify-center border border-primary/25 bg-primary/10 text-primary">
        <ShieldCheck aria-hidden="true" className="h-9 w-9" strokeWidth={1.5} />
      </div>
    </div>

    <ul className="mt-6 grid gap-2 border-t border-border/80 pt-4">
      {checks.map((check) => (
        <li key={check.label} className="flex items-center justify-between gap-4 text-sm">
          <span className="flex items-center gap-2 text-muted-foreground">
            <CheckCircle2 aria-hidden="true" className="h-4 w-4 text-accent" />
            {check.label}
          </span>
          <span className="font-display font-semibold text-foreground">{check.value}</span>
        </li>
      ))}
    </ul>
  </aside>
);

export default QualityDashboard;