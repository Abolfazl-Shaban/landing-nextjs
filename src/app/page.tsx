"use client";

import Hero from "./components/root/Hero";
import Plans from "./components/root/Plans";

import { motion } from "motion/react";

export default function Home() {
  return (
    <div className='relative overflow-hidden pt-16 w-full'>
      <div className='overflow-hidden w-full'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='absolute  -z-100 w-[max(150%,2500px)] -right-70 h-380 -top-310 rounded-[50%] blur-[120px] rotate-30  border-100 border-primary-100/40'
        />
      </div>
      <Hero />
      <Plans />
    </div>
  );
}
