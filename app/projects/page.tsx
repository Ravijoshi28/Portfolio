"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GitBranchIcon, Share, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cont = useRef<HTMLDivElement>(null);

  const project = [
    {
      name: "Saas-Workspace",
      description:
        "Full-stack project management platform with real-time task tracking, role-based access control, file sharing, and interactive analytics dashboards.",
      link: "project-management-developmentphase.vercel.app",
      image:
      "/pmlanding.png"
        },
    {
      name: "BeatSync",
      description:
        "Spotify-inspired music streaming application integrated with live interactive chat features, custom media controls, and seamless authentication.",
      link: "https://github.com/Ravijoshi28/spotify-clone",
      image:
        "/spotify.png"
      },
    {
      name: "EchoChat",
      description:
        "High-performance, real-time messaging platform engineered with WebSocket connectivity for instant dynamic communication and responsive UI.",
      link: "https://github.com/Ravijoshi28/app",
      image:
          "/chatapp.png"
      },
    {
      name:"WenWeaver",
      description:"Built a browser-based collaborative web IDE that enables users to create, edit, and preview Next.js projects in real time.",
      link:"",
      image:"/ideLanding.png"
    }
  ];

  const PROJECT = project.map((p, idx) => (
    <Link href={`/projects/${p.name}`} key={idx}>
    
    <div
      key={idx}
      /* Added `group` for child hover states & smooth card scaling */
      className="group relative w-[600px] shrink-0 rounded-xl bg-zinc-900 p-4 shadow-2xl shadow-teal-500/20 transition-all duration-300 hover:shadow-teal-400/40 cursor-pointer"
    >
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <span className="text-green-400 font-mono">//project</span>
          <div className="flex items-center gap-3">
            <Link href={p.link} target="_blank">
              <GitBranchIcon className="h-5 w-5 cursor-pointer hover:text-green-400 transition-colors" />
            </Link>
            <Share className="h-5 w-5 cursor-pointer hover:text-green-400 transition-colors" />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="basis-1/2 flex flex-col justify-between">
            <div>
              <p className="font-sans text-2xl font-bold text-white mb-2">{p.name}</p>
              <p className="text-sm text-zinc-400 leading-relaxed">{p.description}</p>
            </div>
          </div>

          <div className="basis-1/2">
            {/* Image Container with Overlay */}
            <div className="relative h-full w-full max-w-[300px] overflow-hidden rounded-lg">
              <Image
                src={p.image}
                alt="Project screenshot"
                width={300}
                height={300}
                unoptimized
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1 text-sm font-semibold text-green-400">
                  View Project Details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></Link>
  ));

  useGSAP(
    () => {
      if (!cont.current || !sectionRef.current) return;

      const getScrollAmount = () => {
        return -(cont.current!.scrollWidth - window.innerWidth);
      };

      gsap.to(cont.current, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cont.current!.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen w-full overflow-hidden p-3">
      {/* Upper Title Section */}
      <div className="h-fit py-4">
        <p className="text-2xl text-green-500">
          <span className="text-xl">//03. </span>Projects
        </p>
        <h3 className="text-center text-2xl pt-3">Things I've built</h3>
      </div>

      {/* Main Horizontal Scroll Viewport */}
      <div className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
        <div
          ref={cont}
          className="flex h-full items-center gap-20 w-max pl-[calc(50vw-300px)] pr-[calc(50vw-300px)]"
        >
          {PROJECT}
        </div>
      </div>
    </section>
  );
}