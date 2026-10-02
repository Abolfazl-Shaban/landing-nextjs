'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const navItems = ["Products", "Use Cases", "Blog", "About Us"];

const SiteHeader = () => {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className='fixed w-full bg-gray-100/5 backdrop-blur-md z-10'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.35 }}
        className='max-w-6xl container mx-auto grid py-6 grid-cols-3 items-center'>
        <motion.div whileHover={{ scale: 1.02 }} className='text-white flex items-center gap-2'>
          <div className='size-7 border-7 border-primary-100 rounded-full' /> Ovrall
        </motion.div>

        <div className='flex text-sm justify-center text-nowrap gap-10'>
          {navItems.map(item => (
            <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link href={"#"} className='transition-colors hover:text-white/90'>
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className='flex flex-row-reverse'>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button className={"text-black font-bold"} variant={"default"}>
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.div>
      <div className='w-full h-[1px] bg-radial from-white/20 to-transparent' />
    </motion.header>
  );
};

export default SiteHeader;
