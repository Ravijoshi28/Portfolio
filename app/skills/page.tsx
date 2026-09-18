import { Code2, Database, Workflow } from "lucide-react";
import Reveal from "../reveal";

const categories = [
  { title: "Frontend", number: "01", icon: Code2, description: "Interfaces that feel right.", skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "GSAP / Framer Motion"] },
  { title: "Backend & data", number: "02", icon: Database, description: "The systems behind the experience.", skills: ["Node.js / Express", "REST ", "MongoDB / AstraDB", "PostgreSQL"] },
  { title: "Tools & deployment", number: "03", icon: Workflow, description: "From local development to live.", skills: ["Docker", "CI/CD Pipelines", "Git / GitHub Actions", "Vercel / Render"] },
];
export default function Skills() {
  return <section id="skills" className="section content-width">
    <Reveal className="section-heading"><div><p className="eyebrow">02 / THE TOOLKIT</p><h2>Tools I build with<span className="accent">.</span></h2></div><p>A practical stack for bringing<br />ideas to life, end to end.</p></Reveal>
    <div className="skill-grid">{categories.map(({ title, number, icon: Icon, description, skills }) => <Reveal key={title}><article className="skill-card"><div className="skill-top"><Icon size={25} /><span>{number}</span></div><h3>{title}</h3><p>{description}</p><ul>{skills.map(skill => <li key={skill}><span className="skill-bullet" />{skill}</li>)}</ul></article></Reveal>)}</div>
  </section>;
}
