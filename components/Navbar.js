"use client";
import { useState } from "react";
import Link from "next/link";

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevScroll = scrollY.getPrevious();
    // console.log(`latest: ${latest} || prev: ${prevScroll}`);
    if (latest > prevScroll && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
      setScrollValue(latest);
    }
  });

  return (
    <IconContext.Provider value={{ className: "text-xl" }}>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 z-50 w-full h-20 flex items-center duration-500 ease-in-out ${
          scrollValue <= 120 ? "bg-inherit" : "bg-slate-100 text-slate-800"
        }`}
      >
        <div className="nav-item px-6 sm:px-3 font-medium flex container mx-auto items-center justify-between">
          <div className="sm:text-3xl text-xl uppercase">Nithipan P.</div>
          <div className="flex items-center font-medium gap-4 lg:gap-14">
            <div className="lg:text-xl text-lg hidden md:flex gap-4 lg:gap-14 font-medium">
              <div className={`p-2 border-b-2 border-transparent hover:border-red-500 duration-300`}>
                <Link href="/">Home</Link>
              </div>
              <div className="p-2 border-b-2 border-transparent hover:border-red-500 duration-300">
                <Link href="/#our-project">Project</Link>
              </div>
              <div className="p-2 border-b-2 border-transparent hover:border-red-500 duration-300">
                <Link href="/#about-me">About me</Link>
              </div>
              <div className="p-2 border-b-2 border-transparent hover:border-red-500 duration-300">
                <Link href="/#contact">Contact</Link>
              </div>
            </div>
            <Link href="https://github.com/ntp37">
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "#db2777" }}
                transition={{ type: "spring" }}
                className={`rounded-lg shadow-lg h-10 p-2 bg-rose-600 text-white`}
              >
                <div className="flex gap-1 items-center justify-center">
                  <FaGithub />
                  <span className="text-sm sm:text-base">My GitHub</span>
                </div>
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>
    </IconContext.Provider>
  );
}