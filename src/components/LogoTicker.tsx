'use client'
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { motion } from 'framer-motion';
import Image from "next/image";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
  <section className="bg-black text-white/60 py-[72px]">
    <div className="container">
      <h2 className=" text-center text-xl">Our Trusted Partners:</h2>
      <div className="flex mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
        <motion.div className="flex gap-16 flex-none pr-14" animate={{translateX:'-50%'}} transition={{duration:20, repeat:Infinity, ease:'linear', repeatType:'loop'}}>
          {images.map((images) => (
            <Image src={images.src} alt={images.alt}/>
          ))}
          {/* Second Set of images */}
          {images.map((images) => (
            <Image src={images.src} alt={images.alt}/>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
  );
};
