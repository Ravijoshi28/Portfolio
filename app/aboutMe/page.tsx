import { ArrowDown, ArrowUpRight, Code2, GitBranch } from "lucide-react";
import Link from "next/link";
import Reveal from "../reveal";

export default function AboutMe() {
  return <>
    <section className="hero content-width" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow hero-enter"><span className="status-dot" /> Open to opportunities</p>
        <h1 id="hero-title" className="hero-enter">Thoughtful code.<br />Meaningful <span className="accent">experiences.</span></h1>
        <p className="hero-intro hero-enter">Hey, I’m Ravi Joshi — a full-stack developer turning ideas into intuitive, dependable web applications.</p>
        <div className="button-row hero-enter"><Link href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={18} /></Link><a href="mailto:joshiravi96123@gmail.com" className="button">Let’s talk <ArrowUpRight size={18} /></a></div>
        <div className="hero-stack hero-enter"><span>MY EVERYDAY TOOLKIT</span><p>React <i /> Next.js <i /> Node.js <i /> TypeScript</p></div>
      </div>
      <div className="code-window hero-enter" aria-label="Developer profile">
        <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>developer.ts</span><Code2 size={16} /></div>
        <div className="code-body"><p><span className="code-purple">const</span> developer = {'{'}</p><p className="indent">name: <span className="code-green">&quot;Ravi Joshi&quot;</span>,</p><p className="indent">focus: <span className="code-green">&quot;Full-stack development&quot;</span>,</p><p className="indent">building: [</p><p className="indent-double code-green">&quot;Useful products&quot;,</p><p className="indent-double code-green">&quot;Better experiences&quot;</p><p className="indent">],</p><p className="indent">curiosity: <span className="code-purple">true</span></p><p>{'};'}</p><p className="code-comment">{"// Always learning. Always building."}</p></div>
        <div className="window-footer"><span><GitBranch size={13} /> main</span><span className="accent">Ready to build <span className="cursor">_</span></span></div>
      </div>
      <a href="#about" className="scroll-cue"><ArrowDown size={15} /> A little more about me</a>
    </section>
    <section id="about" className="section content-width about-section">
      <Reveal><p className="eyebrow">01 / ABOUT ME</p><h2>Curious by nature.<br /><span className="muted">Developer by craft.</span></h2></Reveal>
      <Reveal className="about-copy"><p>I’m a full-stack developer who loves building things that live on the internet. I care about clean, efficient code and interfaces that feel natural to use.</p><p>From collaborative workspaces to real-time applications, I enjoy connecting thoughtful frontend design with reliable backend systems.</p><p className="about-note"><span className="status-dot" /> Ready to learn, contribute, and grow.</p></Reveal>
    </section>
  </>;
}
