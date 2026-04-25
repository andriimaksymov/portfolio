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
      <div className="absolute inset-4 -z-10 rounded-lg bg-cyan-300/10 blur-2xl" aria-hidden="true" />
      <div className="rounded-lg border border-white/[0.12] bg-panel/[0.82] p-4 shadow-lift backdrop-blur-2xl md:p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-violet-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300">
            <Code2 className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
            production-ready
          </div>
        </div>

        <div className="grid gap-5 pt-5 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-3 rounded-lg border border-white/10 bg-black/[0.24] p-4">
            <p className="font-mono text-xs text-slate-500">frontend/system.ts</p>
            <pre className="overflow-hidden whitespace-pre-wrap font-mono text-xs leading-6 text-slate-300">
              <code>
                <span className="text-violet-200">const</span> stack ={" "}
                <span className="text-cyan-200">["React", "Next.js 15", "TypeScript"]</span>
                {";\n"}
                <span className="text-violet-200">ship</span>({"{"}
                {"\n  "}architecture: <span className="text-emerald-200">"scalable"</span>,
                {"\n  "}performance: <span className="text-emerald-200">"sub-second"</span>
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
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-3"
                >
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-300">
                    <Icon className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" />
                    {row.label}
                  </div>
                  <div className="h-2 rounded-full bg-white/[0.08]">
                    <div
                      className={`${row.width} h-2 rounded-full bg-gradient-to-r from-cyan-300 via-violet-300 to-emerald-300`}
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
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.055] px-2.5 py-1.5 text-xs font-medium text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
