'use client'
import EcosystemIcon from '@/assets/icons/ecosystem.svg';
import { useEffect, useRef } from 'react';
import {motion, useMotionTemplate, useMotionValue} from 'framer-motion'

export const Feature = ({title, description,}:{title:string, description:string}) => {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null); 
    useEffect(()=>{
        const updateMousePosition = (e:MouseEvent) => {
            if(!border.current) return;
            const rect = border.current?.getBoundingClientRect();
            offsetX.set(e.x - rect?.x);
            offsetY.set(e.y - rect?.y);
        };
        window.addEventListener('mousemove', updateMousePosition)
        return ()=> {window.removeEventListener}
    }, []);
    return(
        <div key={title} className="mt-6 text-center border border-white/30 px-5 py-10 rounded-xl relative">
            
            <motion.div className="absolute inset-0 border-2 border-purple-400 rounded-xl" 
                style={{
                    WebkitMaskImage:maskImage,
                    maskImage,}}
                ref={border}
            ></motion.div>
            <div className="rounded-xl inline-flex h-14 w-14 bg-white text-black justify-center items-center">
                <EcosystemIcon />
            </div>
            <h3 className="text-center mt-2">{title}</h3>
            <p className="text-center mt-1 text-sm text-white/70">{description}</p>
        </div>
    );
}