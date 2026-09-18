import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../reveal";

const projects = [
  { name: "SaaS Workspace", slug: "saas-workspace", category: "PRODUCTIVITY / FULL-STACK", description: "A shared space for teams to plan projects, track tasks, and keep work moving in real time.", image: "/pmlanding.png", tags: ["Next.js", "Node.js", "Socket.IO"] },
  { name: "WenWeaver", slug: "wenweaver", category: "DEVELOPER TOOLS / COLLABORATION", description: "A collaborative browser-based IDE to create, edit, and preview web projects together.", image: "/ideLanding.png", tags: ["TypeScript", "Monaco", "Yjs"] },
  { name: "BeatSync", slug: "beatsync", category: "MUSIC / REAL-TIME", description: "Music and conversation in one place, with custom playback controls and live social chat.", image: "/spotify.png", tags: ["React", "Socket.IO", "Clerk"] },
  { name: "EchoChat", slug: "echochat", category: "COMMUNICATION / FULL-STACK", description: "A responsive messaging experience built around instant conversations and WebSocket connectivity.", image: "/chatapp.png", tags: ["React", "Express", "MongoDB"] },
];
export default function Projects() {
  return <section id="projects" className="section content-width">
    <Reveal className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK</p><h2>Ideas turned into products<span className="accent">.</span></h2></div><a className="text-link" href="https://github.com/Ravijoshi28" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={17} /></a></Reveal>
    <div className="project-grid">{projects.map((project, index) => <Reveal key={project.slug}><Link className="project-card" href={`/projects/${project.slug}`}><div className={`project-image project-tone-${index}`}><Image src={project.image} alt={`${project.name} application screenshot`} width={1000} height={625} sizes="(max-width: 700px) 100vw, 50vw" /><span className="project-open"><ArrowUpRight size={22} /></span></div><div className="project-info"><p className="eyebrow">{project.category}</p><div className="project-title"><h3>{project.name}</h3><span>0{index + 1}</span></div><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></Link></Reveal>)}</div>
  </section>;
}
