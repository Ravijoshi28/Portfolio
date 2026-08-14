import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

// 1. Defined project details dataset
const PROJECTS_DATA = [
  {
    slug: "saas-workspace",
    title: "SaaS WorkSpace",
    subtitle: "Project Management Platform",
    description:
      "A feature-rich SaaS application engineered for team productivity, dynamic project assignment, real-time tracking, and modular task management.",
    fullDescription:
      "Built with a scalable Next.js and Node.js architecture, SaaS WorkSpace streamlines modern project workflows. It features real-time dynamic updates via Socket.IO, custom dashboard analytics, dynamic role management, and file sharing integrations.",
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    highlights: [
      "Role-based authentication & route protection",
      "Real-time dynamic task board powered by WebSockets",
      "Interactive data visualizations and reporting dashboards",
      "Integrated file management system for task attachments",
    ],
    github: "https://github.com/Ravijoshi28/ProjectManagement-__developmentphase__",
    liveDemo: "https://project-management-developmentphase-three.vercel.app/",
    image:
        "/pmitask.png"
  },
  {
    slug: "beatsync",
    title: "BeatSync",
    subtitle: "Music Streaming & Social Chat Platform",
    description:
      "A Spotify-inspired audio streaming service combined with live social messaging to listen and chat with friends synchronously.",
    fullDescription:
      "BeatSync merges media playback with instant communication. Users can stream custom audio playlists while enjoying seamless chat interaction powered by WebSockets and seamless modern user authentication.",
    techStack: ["React", "Node.js", "Express", "Socket.IO", "Clerk", "Tailwind CSS"],
    highlights: [
      "Integrated music player with modern audio control features",
      "Real-time synchronized chat rooms using WebSockets",
      "Authentication managed via Clerk",
      "Fully responsive, dark-mode focused UI component design",
    ],
    github: "https://github.com/Ravijoshi28/spotify-clone",
    liveDemo: "https://spotify-clone-1chn.onrender.com/",
    image:
        "/spotify.png"
        },
  {
    slug: "echochat",
    title: "EchoChat",
    subtitle: "Real-Time Web Chat Application",
    description:
      "A lightning-fast real-time chat application tailored for low-latency messaging and dynamic web interaction.",
    fullDescription:
      "EchoChat focuses on modular architecture and performance optimization. It delivers real-time messaging capabilities with minimal delay while ensuring efficient resource handling on both frontend and backend.",
    techStack: ["React", "Express.js", "Node.js", "MongoDB", "Socket.IO"],
    highlights: [
      "Low-latency WebSocket messaging backend",
      "Optimized API communication and fast database queries",
      "Clean dynamic UI built with responsive design patterns",
      "Modular backend architecture built for scalability",
    ],
    github: "https://github.com/Ravijoshi28/app",
    liveDemo: "https://app-1-j033.onrender.com",
    image:
        "/chatapp.png"
        },
   {
    slug: "wenweaver",
    title: "WenWeaver",
    subtitle: "Real-Time Web Ide",
    description:"Real Time Web Ide ",
    fullDescription:
      "Built a browser-based collaborative web IDE that enables users to create, edit, and preview Next.js projects in real time. It features a Monaco code editor, Yjs-powered real-time collaboration, Zustand state management, Supabase file storage, Redis-based rate limiting, and Docker-powered live previews.",
    techStack: ["Next.js", "React", "TypeScript", "Monaco" ,"Editor", "Yjs", "Zustand", "Supabase", "Redis", "Vercel SandBox", "Prisma"],
    highlights: [
      "Browser-Based Code Editor — Monaco Editor with syntax highlighting and developer-friendly editing.",
"Real-Time Collaboration — Multiple users can edit files simultaneously using Yjs + WebSockets.",
"Project & File Management — Create files/folders and manage projects using full file-path-based identification.",
"Live Project Preview — Run Next.js projects inside Vercel Sandbox containers and preview them directly in the browser.",
"Cloud File Storage — Project files are persisted using Supabase Storage.",
"State Management — Efficient project and editor state handling with Zustand.",
"Authentication & Authorization — Secure access to user projects and APIs.",
"API Rate Limiting — Redis/Upstash-based rate limiting to protect authentication, file-saving, and preview APIs.",
"Persistent Project Data — Project metadata and relationships managed with Prisma.",
"Responsive Developer UI — VS Code-inspired file explorer, editor, and preview workspace.",
    ],
    github: "https://github.com/Ravijoshi28/wenweaver",
    liveDemo: "https://wen-weaver.vercel.app/auth",
    image:
      "/ide.png",
  },
];

interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { name } = await params;

  // 2. Look up the project matching the route name parameter
  const project = PROJECTS_DATA.find(
    (p) => p.slug.toLowerCase() === name.toLowerCase()
  );

  // Fallback if project slug is invalid
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-16">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Projects
      </Link>

      <main className="max-w-4xl mx-auto space-y-10">
        {/* Header Section */}
        <div className="space-y-4 border-b border-zinc-800 pb-8">
          <span className="text-sm font-mono text-green-400">// {project.subtitle}</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">{project.title}</h1>
          <p className="text-lg text-zinc-400 leading-relaxed">{project.description}</p>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-green-400 hover:text-green-400 transition-all text-sm"
            >
              <GitBranch className="h-4 w-4" /> Code Repository
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-zinc-950 font-semibold rounded-lg hover:bg-green-400 transition-all text-sm"
            >
              <ExternalLink className="h-4 w-4" /> Live Preview
            </a>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative w-full  h-[300px] md:h-[450px] overflow-hidden rounded-2xl border border-zinc-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Technical Highlights & Full Overview */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white">Project Overview</h2>
            <p className="text-zinc-400 leading-relaxed">{project.fullDescription}</p>

            <h3 className="text-xl font-bold text-white pt-4">Key Features</h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Sidebar */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-6 h-fit space-y-4">
            <h3 className="text-lg font-bold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-zinc-800 text-green-400 font-mono text-xs rounded-full border border-zinc-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}