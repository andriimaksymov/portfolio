import { Activity, BarChart3, Code2, GitBranch, Rocket, Zap } from "lucide-react";

const bars = [34, 58, 46, 72, 84, 62, 90, 76, 94, 68, 86, 54];
const metricCards = [
  { label: "LCP 0.8s", caption: "Core Web Vitals", icon: Zap, color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Type-safe", caption: "Architecture", icon: GitBranch, color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "CI/CD", caption: "Delivery owned", icon: Rocket, color: "text-blue-600", bg: "bg-blue-50" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-label="Frontend engineering dashboard preview">
      <div className="absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_60%_35%,rgba(99,102,241,0.09),transparent_62%)]" aria-hidden="true" />

      <div className="relative aspect-square">
        <div className="absolute inset-x-4 top-12 bottom-16 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_30px_90px_rgba(3,2,19,0.12)]">
          <div className="flex h-11 items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 flex h-6 flex-1 items-center rounded-md bg-neutral-100 px-3 text-xs text-neutral-400">
              app.frontend.systems
            </span>
          </div>

          <div className="flex h-full">
            <div className="flex w-12 flex-col gap-2 border-r border-neutral-100 bg-neutral-50 p-3">
              {[0, 1, 2, 3, 4].map((item) => (
                <span key={item} className={item === 0 ? "h-7 w-7 rounded-lg bg-indigo-50" : "h-7 w-7 rounded-lg bg-neutral-100"} />
              ))}
            </div>

            <div className="flex-1 p-5">
              <div className="mb-5 flex items-center justify-between">
                <span className="h-3 w-24 rounded bg-neutral-200" />
                <div className="flex gap-2">
                  <span className="h-6 w-6 rounded-full bg-indigo-50" />
                  <span className="h-6 w-6 rounded-full bg-neutral-100" />
                </div>
              </div>

              <div className="mb-5 grid grid-cols-3 gap-3">
                {[
                  ["bg-indigo-500", "w-8/12"],
                  ["bg-blue-500", "w-6/12"],
                  ["bg-emerald-500", "w-10/12"],
                ].map(([color, width], index) => (
                  <div key={index} className="rounded-lg border border-neutral-100 bg-neutral-50 p-3">
                    <span className={`mb-2 block h-1.5 rounded ${color} opacity-20`} />
                    <span className={`mb-2 block h-1.5 rounded ${color} ${width} opacity-70`} />
                    <span className="block h-1 rounded bg-neutral-200" />
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-neutral-100 bg-neutral-50 p-4">
                <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-neutral-500">
                  <BarChart3 className="h-4 w-4 text-indigo-500" aria-hidden="true" />
                  Production health
                </div>
                <div className="flex h-16 items-end gap-1.5">
                  {bars.map((height, index) => (
                    <span
                      key={index}
                      className={index === bars.length - 1 ? "flex-1 rounded-t bg-indigo-500" : "flex-1 rounded-t bg-indigo-100"}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-lg border border-neutral-100">
                {[Activity, Code2].map((Icon, index) => (
                  <div key={index} className="flex h-9 items-center gap-3 border-b border-neutral-50 px-3 last:border-b-0">
                    <span className={index === 0 ? "rounded-full bg-indigo-50 p-1" : "rounded-full bg-emerald-50 p-1"}>
                      <Icon className={index === 0 ? "h-3.5 w-3.5 text-indigo-500" : "h-3.5 w-3.5 text-emerald-500"} aria-hidden="true" />
                    </span>
                    <span className="h-1.5 flex-1 rounded bg-neutral-100" />
                    <span className={index === 0 ? "h-1.5 w-10 rounded bg-indigo-100" : "h-1.5 w-10 rounded bg-emerald-100"} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {metricCards.map((card, index) => {
          const Icon = card.icon;
          const position =
            index === 0
              ? "right-0 top-24"
              : index === 1
                ? "left-0 bottom-40"
                : "right-6 bottom-14";

          return (
            <div
              key={card.label}
              className={`absolute ${position} hidden items-center gap-3 rounded-lg border border-neutral-100 bg-white px-4 py-3 shadow-[0_18px_44px_rgba(3,2,19,0.1)] sm:flex`}
            >
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.bg}`}>
                <Icon className={`h-4 w-4 ${card.color}`} aria-hidden="true" />
              </span>
              <span>
                <span className={`block text-sm font-semibold ${card.color}`}>{card.label}</span>
                <span className="block text-xs text-neutral-400">{card.caption}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
