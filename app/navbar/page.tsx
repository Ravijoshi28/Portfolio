"use client";

import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    { link: "#about", name: "about", id: 1 },
    { link: "#skills", name: "skills", id: 2 },
    { link: "#projects", name: "projects", id: 3 },
    { link: "#contact", name: "contact", id: 4 },
  ];

  const container = useRef<HTMLDivElement>(null);
  const resume = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Navbar animation
      gsap.from(container.current, {
        y: -10,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
      });

      // Navigation animation
      gsap.from("li", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Resume animation
      gsap.from(resume.current, {
        y: -10,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
      });

      // Cursor animation
      gsap.to("#sp", {
        color: "green",
        ease: "bounce.out",
        duration: 1.5,
        repeat: -1,
      });
    },
    { scope: container }
  );

  return (
    <nav
      ref={container}
      className="
        sticky top-0 z-[100]
        flex h-20 w-full
        items-center justify-between
        border-b-2 border-gray-500
        px-3 sm:px-5
        backdrop-blur-sm
      "
    >
      {/* ============================= */}
      {/* LOGO / NAME */}
      {/* ============================= */}

      <div className="flex items-center gap-2 text-xl text-white sm:text-2xl">
        <span className="bg-green-300">
          <Image
            src="/terminal.png"
            width={30}
            height={30}
            alt="terminal-image"
          />
        </span>

        <p>Ravi Joshi</p>

        <span id="sp">_</span>
      </div>

      {/* ============================= */}
      {/* DESKTOP NAVIGATION */}
      {/* ============================= */}

      <div className="hidden font-mono md:block">
        <ul className="flex items-center gap-3">
          {nav.map((n) => (
            <li
              key={n.id}
              className="
                transition-all
                hover:p-1
                hover:shadow-sm
                hover:shadow-green-500
              "
            >
              <Link href={n.link}>{n.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ============================= */}
      {/* DESKTOP RESUME BUTTON */}
      {/* ============================= */}

      <div
        ref={resume}
        className="
          hidden
          rounded-2xl
          border
          border-r-2
          border-green-500
          p-2
          transition-all
          duration-300
          hover:cursor-pointer
          hover:border-r-black
          hover:bg-green-500
          hover:text-black
          md:block
        "
      >
        <Link href="/resume" target="_blank">
          Resume
        </Link>
      </div>

      {/* ============================= */}
      {/* MOBILE MENU BUTTON */}
      {/* ============================= */}

      <button
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="
          flex
          items-center
          justify-center
          text-green-400
          md:hidden
        "
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? (
          <X className="h-7 w-7" />
        ) : (
          <Menu className="h-7 w-7" />
        )}
      </button>

      {/* ============================= */}
      {/* MOBILE MENU */}
      {/* ============================= */}

      {menuOpen && (
        <div
          className="
            absolute
            left-0
            top-20
            w-full
            border-b
            border-gray-700
            bg-black/95
            backdrop-blur-md
            md:hidden
          "
        >
          <ul
            className="
              flex
              flex-col
              items-center
              gap-5
              py-6
              font-mono
            "
          >
            {nav.map((n) => (
              <li key={n.id}>
                <Link
                  href={n.link}
                  onClick={() => setMenuOpen(false)}
                  className="
                    text-lg
                    transition-colors
                    hover:text-green-400
                  "
                >
                  {n.name}
                </Link>
              </li>
            ))}

            {/* Mobile Resume */}
            <li>
              <Link
                href="/resume"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="
                  block
                  rounded-2xl
                  border
                  border-green-500
                  px-5
                  py-2
                  text-green-400
                  transition-all
                  duration-300
                  hover:bg-green-500
                  hover:text-black
                "
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}