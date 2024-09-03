'use client'
import ArrowRight from "@/assets/icons/arrow-w.svg";
import Cursor from "@/assets/images/cursor.png";
import Message from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
  <section className="bg-black relative overflow-clip text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px]">
    <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] rounded-[100%] left-1/2 -translate-x-1/2 bg-black border border-[#B48CDE]/50 bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]"></div>
    <div className="container relative">
      <div className="max-w-[640px] mx-auto">
        <div className="flex justify-center">
          <div className="text-sm inline-flex border border-white/30 px-3 py-1 rounded-lg tracking-tight gap-3">
              <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">Version 2.0 is here</span>
              <a href="#" className="inline-flex items-center">Read more <ArrowRight className="h-4 w-5"/></a>
          </div>
        </div>
        <div className="flex relative justify-center">
          <h1 className="mt-8 text-7xl sm:text-9xl text-center font-bold tracking-tighter"> One Task <br /> at a time</h1>
          <motion.div drag dragSnapToOrigin className="absolute right-[566px] top-[148px] hidden sm:inline">
            <Image src={Cursor} draggable="false" height="180" width="180" alt="Cursor" className="max-w-none"/>
          </motion.div>
          <motion.div drag dragSnapToOrigin className="absolute left-[598px] top-[56px] hidden sm:inline">
            <Image src={Message}  draggable="false" alt="Message" height="180" width="180" className="max-w-none"/>
          </motion.div>
          
          
        </div>
        <p className="text-center text-xl mt-8"> 
          Celebrate the joty of accomplishment with an app designed to tracking
          progress, motivate your efforts, and celebrate your successes.
        </p>
        <div className="flex justify-center mt-8">
          <button className="bg-white rounded-lg px-5 py-3 text-black items-center">Get for free</button>
        </div>
      </div>
    </div>
  </section>);
};
