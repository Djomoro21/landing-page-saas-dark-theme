'use client'
import Image from "next/image";
import Logo from "@/assets/images/logosaas.png"
import Menu from "@/assets/icons/menu.svg"
import { motion } from "framer-motion";

export const Header = () => {
  return (
  <header className="bg-black">
    <div className="flex bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#BBCB92,#FFFD80,#F89ABF,#FCD6FF)] justify-center items-center py-3 gap-3 font-bold">
        <span className="font-medium hidden md:block"> Introducing a completely redesigned interface</span>
        <a href="#" className="underline underline-offset-4"> Explore the demo</a>
    </div>
    <div className="container">
      <div className="flex py-5 items-center justify-between ">
        <div className="inline-flex relative before:content-[''] before:w-full before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src ={Logo} alt = "Saas Logo" height={40} className="relative"/>
        </div>
        <Menu src={Menu} className="h-8 w-8 md:hidden text-white"/>
        <nav className="hidden md:flex gap-6 text-white/60 items-center">
          <a href="#" className="hover:text-white/100">About</a>
          <a href="#" className="hover:text-white/100">Features</a>
          <a href="#" className="hover:text-white/100">Customers</a>
          <a href="#" className="hover:text-white/100">Updates</a>
          <a href="#" className="hover:text-white/100">Help</a>
          <button className="bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">Get for free</button>
        </nav>
      </div>
    </div>
  </header>
  );
};


 
