'use client'
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {

  const appImage= useRef<HTMLImageElement>(null);
  const {scrollYProgress}=useScroll({
    target: appImage,
    offset:["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
  <section className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px]">
    <div className=" flex flex-col  container items-center">
      <h2 className="text-center font-bold tracking-tighter text-5xl sm:text-6xl">Intuitive interface</h2>
      <div className="max-w-xl mx-auto">
        <p className="mt-5 text-center text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track
          your progress, motivate your efforts, and celebrate on task at a time.
        </p>
      </div>
      <motion.div style={{opacity:opacity, rotateX: rotateX, transformPerspective:'800px'}} >
        <Image src={appScreen} alt="Screenshot"className="mt-14" ref={appImage}/>
      </motion.div>
      
    </div>


  </section>
  );
};
