import { useGSAP } from "@gsap/react"
import { BookDashedIcon } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import gsap from "gsap"
import Image from "next/image"

gsap.registerPlugin(useGSAP);

export default function Navbar(){
        const nav=[
            {link:'#about',name:"about",id:1},
            {link:'#skills',name:"skills",id:2},
            {link:'#projects',name:"projects",id:3},
            {link:'#contact',name:"contact",id:4},
        ]

        const container=useRef(null)
        const resume=useRef(null)
       
        useGSAP(()=>{
            gsap.from(container.current,{
                y:-10,
                duration:1,
                opacity: 0,
                 ease: "power2.out",
                
            })

             gsap.from("li", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15
    });

    gsap.from(resume,{
        y:-10,
                duration:1,
                opacity: 0,
                stagger:0.5,
               
    })
    gsap.to("#sp",{
        color:"green",
        ease:"bounce.out",
        duration:1.5,
        repeat:-1,
    })
        },{scope:container})

    return (
        <div 
        ref={container}
        className="h-25
        border-b-2 border-gray-500 p-3 flex justify-between  items-center sticky top-0 z-100 backdrop-blur-sm">
            {/* name left side */}
            <div className=" flex gap-2   text-white text-2xl items-center">
                <span className="bg-green-300">
                    <Image src="/terminal.png" className="bg-blend-multiply bg-transparent " width={30} height={30} alt="terminal-image"></Image>
                </span>
                <p>Ravi Joshi</p><span id="sp">_</span>
            </div>
            <div className="font-mono">
                <ul className="flex  gap-3">{
                    nav.map((n)=>(
                        <li key={n.id} className="hover:p-1 hover:shadow-sm shadow-green-500"><Link href={n.link}>{n.name}</Link></li>
                    ))
                    }
                </ul></div>
                <div className="border border-r-2 p-2 rounded-2xl hover:cursor-pointer
                 hover:bg-green-500 hover:border-r-black hover:text-black border-green-500 " ref={resume} ><Link  href="resume" target="_blank">Resume</Link></div>
        </div>
    )
}