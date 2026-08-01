"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GitBranchIcon, Share } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cont = useRef<HTMLDivElement>(null);

    

const project=[{name:"project1",description:"about project 1",link:"sadjksd",
    image:"https://imgs.search.brave.com/bXoZvZvnA4seJpntg8S1xbWtW-6bTO5uqEQeR9c_llE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/NjkzLzM3OS9zbWFs/bC93YXRlcmNvbG9y/LWJsYWNrLWNhdC1o/YWxsb3dlZW4taXNv/bGF0ZS13aXRoLWJh/Y2tncm91bmQtY3V0/ZS1ibGFjay1jYXQt/aWxsdXN0cmF0aW9u/LXBuZy5wbmc"
},
{name:"project2",description:"about project 2",link:"sadjksd",
    image:"https://imgs.search.brave.com/bXoZvZvnA4seJpntg8S1xbWtW-6bTO5uqEQeR9c_llE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/NjkzLzM3OS9zbWFs/bC93YXRlcmNvbG9y/LWJsYWNrLWNhdC1o/YWxsb3dlZW4taXNv/bGF0ZS13aXRoLWJh/Y2tncm91bmQtY3V0/ZS1ibGFjay1jYXQt/aWxsdXN0cmF0aW9u/LXBuZy5wbmc"
},
{name:"project3",description:"about project 3",link:"sadjksd",
    image:"https://imgs.search.brave.com/bXoZvZvnA4seJpntg8S1xbWtW-6bTO5uqEQeR9c_llE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/NjkzLzM3OS9zbWFs/bC93YXRlcmNvbG9y/LWJsYWNrLWNhdC1o/YWxsb3dlZW4taXNv/bGF0ZS13aXRoLWJh/Y2tncm91bmQtY3V0/ZS1ibGFjay1jYXQt/aWxsdXN0cmF0aW9u/LXBuZy5wbmc"
}]


    const PROJECT=project.map((p,idx)=>(
        <div key={idx} className="w-[600px] shadow-2xl shadow-teal-500 shrink-0p-4 rounded-xl h-fit bg-zinc-900">
            <div className="flex flex-col gap-3  p-4 h-full">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-green-400">//project</span>
                <div className="flex items-center gap-3">
                    <Link href={p.link} target="_blank">
                  <GitBranchIcon className="h-5 w-5 cursor-pointer hover:text-green-400" /></Link>
                  <Share className="h-5 w-5 cursor-pointer hover:text-green-400" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="basis-1/2">
                     <p className="font-sans text-2xl font-bold">{p.name}</p>
              <p className=" text-zinc-400 text-2xl">
               {p.description}
              </p>
                </div>
               
               <div className="basis-1/2">
<Image
    src={p.image}
alt="Project screenshot"
  width={300}
  height={300}
  unoptimized
  className="h-auto w-full max-w-[300px] rounded-lg object-cover"
/>               </div>
              </div>
              
            </div>
          </div>
    ))

  useGSAP(
    () => {
      if (!cont.current || !sectionRef.current) return;

      // Calculate total horizontal distance to travel
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
          invalidateOnRefresh: true, // Recalculates on window resize
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
        <h3 className="text-center text-2xl pt-3 ">Things I've have built</h3>
      </div>

      {/* Main Horizontal Scroll Viewport */}
      <div className="relative h-[calc(100vh-100px)] w-full overflow-hidden">
        <div
          ref={cont}
          className="flex h-full items-center gap-20 w-max pl-[calc(50vw-300px)] pr-[calc(50vw-300px)]"
        >
          {/* Project Card 1 */}

          {PROJECT}
          {/* <div className="w-[600px] shrink-0 border-2 border-orange-500 p-4 rounded-xl h-full bg-zinc-900">
            <div className="flex flex-col gap-3 border-2 border-red-400 p-4 h-full">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-green-400">//project</span>
                <div className="flex items-center gap-3">
                  <GitBranchIcon className="h-5 w-5 cursor-pointer hover:text-green-400" />
                  <Share className="h-5 w-5 cursor-pointer hover:text-green-400" />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="basis-1/2">
                     <p className="font-sans text-2xl font-bold">Project Name One</p>
              <p className=" text-zinc-400 text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo
                quibusdam hic temporibus numquam molestiae deleniti placeat porro
                officiis magni, accusantium aperiam.
              </p>
                </div>
               
               <div className="basis-1/2">
<Image
  src="https://imgs.search.brave.com/bXoZvZvnA4seJpntg8S1xbWtW-6bTO5uqEQeR9c_llE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjgv/NjkzLzM3OS9zbWFs/bC93YXRlcmNvbG9y/LWJsYWNrLWNhdC1o/YWxsb3dlZW4taXNv/bGF0ZS13aXRoLWJh/Y2tncm91bmQtY3V0/ZS1ibGFjay1jYXQt/aWxsdXN0cmF0aW9u/LXBuZy5wbmc"
  alt="Project screenshot"
  width={300}
  height={300}
  unoptimized
  className="h-auto w-full max-w-[300px] rounded-lg object-cover"
/>               </div>
              </div>
              
            </div>
          </div> */}

         
        </div>
      </div>
    </section>
  );
}