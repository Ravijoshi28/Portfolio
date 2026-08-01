"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Link from "next/link";


gsap.registerPlugin(useGSAP);

export default function AboutMe(){

   useGSAP(()=>{
      gsap.from("#semi-hero span",{
         opacity:0,
         duration:1.5,
         stagger:.25,
         
      })
      gsap.from("#code-img",{
         y:10,
         duration:1,
         opacity:0,
      })
   })

     return (
        <>
        <div id="aboutMe" className="h-fit w-full 
        p-7 ">
         <div className="mt-20 ">
  <span className="font-mono text-green-400">
    // Hello World! I'm
  </span>

  <h1
    id="hero"
    className="mt-2 text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
  >
    Ravi Joshi.
  </h1>

  <h2
    id="semi-hero"
    className="mt-4 text-3xl md:text-5xl font-semibold text-gray-400 leading-tight"
  >
    <span>I</span>{" "}
    <span>design</span>{" "}
    <span>and</span>{" "}
    <span>build</span>{" "}
    <span>modern</span>{" "}
    <span>full-stack</span>{" "}
    <span>web</span>{" "}
    <span>applications.</span>
  </h2>


           <p className="max-w-3xl text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-400 font-light mt-6">
  Full-stack developer specializing in building fast, scalable, and beautifully
  crafted digital experiences. Currently focused on{" "}
  <span className="text-cyan-400 font-medium">React</span>,{" "}
  <span className="text-cyan-400 font-medium">Node.js</span>, and{" "}
  <span className="text-cyan-400 font-medium">cloud-native systems</span>.
</p>
         </div>
      
         <div className="flex mt-4 gap-3 w-fit">
          <Link href="#projects">
            <button className="bg-green-500 p-3
            border-2 border-black rounded-2xl
            hover:bg-emerald-300 hover:text-black hover:cursor-pointer">View Projects</button></Link>
            <Link target="_blank"
             href="https://mail.google.com/mail/?view=cm&fs=1&to=joshiravi96123@gmail.com">
                        <button className="hover:cursor-pointer border-2  p-3
             rounded-2xl hover:shadow-md hover:shadow-emerald-300 border-gray-500"> get in touch</button>

            </Link>
         </div>
         <div className="mt-5   w-fit mb-6 ">
            <img id="code-img"
            className="w-100"
            src="https://imgs.search.brave.com/y8BhlJjYyh_WzXZMLDnAZ3Tml5YN6pZDN6v28HZpTic/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aGFzaG5vZGUuY29t/L3Jlcy9oYXNobm9k/ZS9pbWFnZS91cGxv/YWQvdjE3MDk3MzQz/MjAyNzMvYmY3M2E5/NjgtZWFmNi00NWQw/LWJiYmItNmJjY2Rh/ZjU0NjZiLnBuZw"></img>
         </div>
      <hr className="border-1.5 border-gray-500 w-full"></hr>
        <div className="flex flex-col md:flex-row items-center gap-16 px-10 py-20">
  {/* Left */}
  <div className="md:w-1/2 space-y-6">
    <p className="text-green-400 font-mono text-lg">
      //01.<span className="text-white">about</span>
    </p>

    <section className="space-y-5 text-gray-300 leading-8 text-lg">
      <p>
        I'm a full-stack developer who loves building things that live on the
        internet. I care deeply about crafting clean, efficient code and
        intuitive user experiences.
      </p>

      <p>
        When I'm not coding, you'll find me contributing to open source,
        writing about web development, or exploring the latest in distributed
        systems.
      </p>

      <p>
        I'm currently based in San Francisco and open to remote or hybrid roles
        globally.
      </p>
    </section>
  </div>

  {/* Right */}
  <div className="md:w-1/2 flex justify-center">
    <div className="w-80 h-96 overflow-hidden rounded-2xl border border-cyan-900 shadow-2xl">
      <img
        src="https://imgs.search.brave.com/ldf-b-4SOJuM4kRLcWGfncDhN0R1c7S-wKaa54i6jl0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRpYTIuZGV2LnRvL2R5bmFtaWMvaW1hZ2Uvd2lkdGg9ODAwLGhlaWdodD0sZml0PXNjYWxlLWRvd24sZ3Jhdml0eT1hdXRvLGZvcm1hdD1hdXRvL2h0dHBzOi8vZGV2LXRvLXVwbG9hZHMuczMuYW1hem9uYXdzLmNvbS91cGxvYWRzL2FydGljbGVzLzZmazRrdmJtMnMxcTljeGpzeWRrLmpwZw"
        alt="Experience"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>
</div>
        </div>
        </>
     )
}