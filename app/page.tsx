"use client";

import AboutMe from "./aboutMe/page";
import Contact from "./contact/page";
import Navbar from "./navbar/page";
import Projects from "./projects/page";
import Skills from "./skills/page";


export default function Home() {
  

  return (
   <><div className="m-0 p-0 min-h-screenh-screen font-mono scroll-smooth">
      <Navbar/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
   </div>
   
   </>
  );
}