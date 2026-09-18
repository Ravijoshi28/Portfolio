import { ArrowUpRight, GitBranch } from "lucide-react";
import Reveal from "../reveal";

export default function Contact() {
  return <section id="contact" className="content-width contact-section"><Reveal className="contact-panel"><p className="eyebrow">04 / WHAT’S NEXT?</p><h2>Have something in mind?<br /><span className="accent">Let’s build it together.</span></h2><p>I’m open to new opportunities and interesting collaborations.<br />Tell me what you’re working on — I’d love to hear about it.</p><a className="button button-primary" href="mailto:joshiravi96123@gmail.com">Say hello <ArrowUpRight size={19} /></a><a className="email-link" href="mailto:joshiravi96123@gmail.com">joshiravi96123@gmail.com</a></Reveal><footer className="site-footer"><p>© {new Date().getFullYear()} Ravi Joshi</p><span>Built with care and curiosity.</span><a href="https://github.com/Ravijoshi28" target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub <ArrowUpRight size={14} /></a></footer></section>;
}
