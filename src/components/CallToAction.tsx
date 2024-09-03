'use client'
import helixImage from '@/assets/images/helix2.png'
import emojiStarImage from '@/assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';


export const CallToAction = () => {

  const sectionRef= useRef(null);
  const {scrollYProgress}=useScroll({
    target: sectionRef,
    offset:["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [1700, -300]);

  return (
    <section className="py-[72px] text-center bg-black text-white">
    <div className="container max-w-lg relative">
      <motion.img src={helixImage.src} alt='Helix' className='absolute -top-6 left-[calc(100%+36px)]' style={{translateY: translateY,}}/>
      <motion.img src={emojiStarImage.src} alt='EmojiStar' className='absolute -top-[120px] right-[calc(100%+24px)]' style={{translateY: translateY,}}/>
      <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h2>
      <p className="text-xl text-white/70 mt-5">
        Celebrate the joy of accomplishment with an app designed to track
        your progress, motivate your efforts.
      </p>
      <form className="mt-10 flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
        <input 
          type="email"
          placeholder="your@email.com"
          className=" mr-2 flex-1 h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF]">
        </input>
        <button className="px-5 bg-white text-black h-12 rounded lg">Get access</button>
      </form>
    </div>
  </section>
  );
};
