interface SkillItem {
  name: string;
  tag: string;
}

interface CategoryConfig {
  title: string;
  badge: string;
  theme: {
    text: string;
    border: string;
    badgeBg: string;
    glow: string;
  };
  skills: SkillItem[];
}

const SKILL_CATEGORIES: CategoryConfig[] = [
  {
    title: "Frontend Engineering",
    badge: "01 / CLIENT",
    theme: {
      text: "text-cyan-400",
      border: "border-cyan-500/20 hover:border-cyan-500/40",
      badgeBg: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      glow: "from-cyan-500/10",
    },
    skills: [
      { name: "React / Next.js", tag: "Primary Framework" },
      { name: "TypeScript", tag: "Language" },
      { name: "Tailwind CSS", tag: "Styling" },
      { name: "GSAP / Framer Motion", tag: "Animation" },
    ],
  },
  {
    title: "Backend & Systems",
    badge: "02 / SERVER",
    theme: {
      text: "text-emerald-400",
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      badgeBg: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      glow: "from-emerald-500/10",
    },
    skills: [
      { name: "Node.js / Express", tag: "Runtime" },
      { name: "REST & GraphQL APIs", tag: "Architecture" },
      { name: "MongoDB / AstraDB", tag: "NoSQL DB" },
      { name: "SQL (PostgreSQL)", tag: "Relational DB" },
    ],
  },
  {
    title: "DevOps & Tooling",
    badge: "03 / CLOUD",
    theme: {
      text: "text-purple-400",
      border: "border-purple-500/20 hover:border-purple-500/40",
      badgeBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      glow: "from-purple-500/10",
    },
    skills: [
      { name: "Docker & Containers", tag: "Containerization" },
      { name: "CI/CD Pipelines", tag: "Automation" },
      { name: "Git & GitHub Actions", tag: "Version Control" },
      { name: "Vercel / AWS Deployment", tag: "Cloud Infrastructure" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full bg-zinc-950 px-6 py-24 text-white select-none scroll-mt-16"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-6xl mb-16 text-center sm:text-left">
        <p className="font-mono text-sm tracking-widest text-emerald-400">
          // 02. TECHNICAL PROFICIENCY
        </p>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Skills & Technologies
        </h2>
      </div>

      {/* Category Grid Cards */}
      <div className="relative z-10 mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className={`relative overflow-hidden rounded-2xl border ${cat.theme.border} bg-zinc-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            {/* Soft Ambient Radial Glow */}
            <div
              className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${cat.theme.glow} to-transparent blur-2xl pointer-events-none`}
            />

            {/* Category Header */}
            <div className="mb-6 flex items-center justify-between border-b border-zinc-800/80 pb-4">
              <h3 className={`text-xl font-bold tracking-wide ${cat.theme.text}`}>
                {cat.title}
              </h3>
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
                {cat.badge}
              </span>
            </div>

            {/* Tech Badges List */}
            <div className="grid grid-cols-1 gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3 transition-colors hover:border-zinc-700 hover:bg-zinc-900/80"
                >
                  <span className="text-sm font-semibold text-zinc-200">
                    {skill.name}
                  </span>
                  <span
                    className={`rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-wide uppercase ${cat.theme.badgeBg}`}
                  >
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}