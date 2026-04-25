import { Activity, Code2, GitBranch, Rocket, ShieldCheck } from "lucide-react";

const stack = ["React", "Next.js 15", "TypeScript", "CI/CD", "SEO"];
const rows = [
  { label: "Architecture", icon: GitBranch, width: "w-11/12" },
  { label: "Performance", icon: Activity, width: "w-4/5" },
  { label: "Delivery", icon: Rocket, width: "w-3/4" },
  { label: "Quality", icon: ShieldCheck, width: "w-5/6" },
];

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-xl"
      aria-label="Product engineering dashboard preview"
    >
      <div className="absolute inset-4 -z-10 rounded-lg bg-cyan-200/45 blur-2xl" aria-hidden="true" />
      <div className="rounded-lg border border-slate-200 bg-white/90 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-2xl md:p-5">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
            <Code2 className="h-3.5 w-3.5 text-cyan-700" aria-hidden="true" />
            production-ready
          </div>
        </div>

        <div className="grid gap-5 pt-5 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-950 p-4">
            <p className="font-mono text-xs text-slate-500">frontend/system.ts</p>
            <pre className="overflow-hidden whitespace-pre-wrap font-mono text-xs leading-6 text-slate-300">
              <code>
                <span className="text-violet-300">const</span> stack ={" "}
                <span className="text-cyan-300">["React", "Next.js 15", "TypeScript"]</span>
                {";\n"}
                <span className="text-violet-300">ship</span>({"{"}
                {"\n  "}architecture: <span className="text-emerald-300">"scalable"</span>,
                {"\n  "}performance: <span className="text-emerald-300">"sub-second"</span>
                {"\n"}
                {"}"});
              </code>
            </pre>
          </div>

          <div className="space-y-3">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <div
                  key={row.label}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-600">
                    <Icon className="h-3.5 w-3.5 text-cyan-700" aria-hidden="true" />
                    {row.label}
                  </div>
                  <div className="h-2 rounded-full bg-slate-200">
                    <div
                      className={`${row.width} h-2 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
