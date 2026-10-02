"use client";

import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className='bg-[url("/herobg.png")] pb-60 bg-cover flex-col flex items-center justify-center bg-center pt-20'>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='bg-white/5 text-white/75 border-t backdrop-blur-sm py-1.5 text-sm px-3 border border-primary-100/10 rounded-full'>
        Bring your business to the best scale
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='inline-block mt-6 text-7xl
        bg-linear-to-b   from-white to-white/60
        from-20% to-75%
        py-1
        bg-clip-text text-center text-transparent'>
        Discover Products <br /> With the Best Pricing
      </motion.p>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 , delay: 0.2}} className='mt-6 text-white/80 text-center'>
        Select from best plan, ensuring a perfect match. Need more or less? <br /> Customize your subscription for a seamless fit!
      </motion.p>
    </div>
  );
};

export default Hero;
