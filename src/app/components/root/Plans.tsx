"use client";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CheckCircle2Icon } from "lucide-react";
import { useState } from "react";

import { motion } from "motion/react";
const Plans = () => {
  const [mode, setMode] = useState("monthly");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='-mt-48 max-w-6xl container mx-auto flex flex-col justify-center items-center'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className='p-1 bg-white/8 border border-white/12 rounded-md'>
        <ToggleGroup className={"relative rounded-[10px] transition-all hover:bg-secondary/50 gap-0"} value={[mode]} onValueChange={v => v[0] && setMode(v[0])}>
          <ToggleGroupItem
            className={"rounded-[10px] z-1 aria-pressed:text-black font-medium aria-pressed:bg-transparent aria-pressed:hover:text-black px-5 py-5"}
            value='monthly'>
            Monthly
          </ToggleGroupItem>
          <ToggleGroupItem
            className={"rounded-[10px] z-1 aria-pressed:text-black font-medium aria-pressed:bg-transparent aria-pressed:hover:text-black px-5 py-5"}
            value='annually'>
            Annually
          </ToggleGroupItem>
          <motion.div
            initial={false}
            animate={{ left: mode === "monthly" ? "0%" : "50%" }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            className='absolute top-0 size-full h-full w-1/2 rounded-[10px] from-primary-100 to-primary-200 bg-linear-to-b'
          />
        </ToggleGroup>
      </motion.div>

      <div className='mt-14 grid gap-6 grid-cols-3 w-full'>
        {[
          {
            title: "Basic",
            subtitle: "Best for personal use.",
            price: "Free",
            buttonVariant: "secondary",
            features: ["Employee directory", "Task management", "Calendar integration", "File storage", "Communication tools", "Reporting and analytics"],
          },
          {
            title: "Enterprise",
            subtitle: "For large teams & corporations.",
            price: mode === "monthly" ? "$20" : "$18",
            suffix: "/ per month",
            buttonVariant: "primary",
            featured: true,
            features: [
              "Advanced employee directory",
              "Project management",
              "Resource scheduling",
              "Version control",
              "Team collaboration",
              "Advanced analytics",
            ],
          },
          {
            title: "Business",
            subtitle: "Best for business owners.",
            price: mode === "monthly" ? "$120" : "$99",
            suffix: "/ per month",
            buttonVariant: "secondary",
            features: [
              "Customizable employee directory",
              "Client project management",
              "Client meeting schedule",
              "Compliance tracking",
              "Client communication",
              "Create custom reports tailored",
            ],
          },
        ].map((plan, index) => (
          <motion.div
            key={plan.title + mode}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 + index * 0.12 }}
            whileHover={{ y: -10, scale: 1.01 }}
            className={[
              "relative flex flex-col rounded-[32px] p-10 backdrop-blur-md",
              plan.featured
                ? "bg-linear-to-b from-primary-100/12 via-primary-100/4 to-primary-100/7"
                : "bg-linear-to-bl from-primary-100/10 via-primary-100/2 to-primary-100/6",
            ].join(" ")}>
            {plan.featured && (
              <>
                <div className=' absolute -top-0.5 left-0 w-full flex items-center justify-center'>
                  <div className='w-[90%] blur-[1px] h-0.5 bg-radial from-primary-100 to-transparent rounded-[50%]' />
                  <div className='absolute -top-0 w-[50%] blur-[2px] h-1 bg-radial from-primary-100 to-transparent rounded-[50%]' />
                </div>

                {/** biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                <svg className='absolute inset-0 w-full h-full pointer-events-none text-primary-100'>
                  <rect
                    x='0.5'
                    y='0.5'
                    rx='32'
                    className='w-[calc(100%-1px)] h-[calc(100%-1px)]'
                    fill='none'
                    stroke='url(#primary-gradient-border)'
                    strokeWidth='1'
                  />
                  <defs>
                    <linearGradient id='primary-gradient-border' x1='0%' y1='0%' x2='0%' y2='100%'>
                      <stop offset='0%' stopColor='currentColor' stopOpacity='0.32' />
                      <stop offset='50%' stopColor='currentColor' stopOpacity='0.10' />
                      <stop offset='100%' stopColor='currentColor' stopOpacity='0.16  ' />
                    </linearGradient>
                  </defs>
                </svg>
              </>
            )}

            <div
              className={[
                "size-10 flex items-center justify-center",
                plan.featured
                  ? "rounded-full bg-linear-to-b from-primary-100 to-primary-100/40 relative z-10"
                  : "border border-white/10 rounded-full bg-white/12",
              ].join(" ")}>
              <div className={["size-5 border-4 rounded-full", plan.featured ? "border-black" : "border-white"].join(" ")} />
            </div>

            <div className={plan.featured ? "mt-5 relative z-10" : "mt-5"}>
              <span className='text-xl font-medium '>{plan.title}</span>
              <p className={plan.featured ? "text-sm text-white/70" : "text-sm"}>{plan.subtitle}</p>
            </div>

            <span className={plan.featured ? "text-5xl font-medium mt-6 relative z-10" : "text-5xl font-medium mt-6"}>
              {plan.price} {plan.suffix ? <span className='text-white/60 text-sm'>{plan.suffix}</span> : null}
            </span>

            <Button
              variant={plan.buttonVariant as "primary" | "secondary"}
              className={["w-full mt-6", plan.featured ? "drop-shadow-primary-100/40 drop-shadow-[0_0_8px] relative z-10" : ""].join(" ")}>
              Get Started
            </Button>

            <hr className={["my-10 border-white/24", plan.featured ? "relative z-10" : ""].join(" ")} />
            <div className={plan.featured ? "relative z-10" : ""}>
              <span className='font-medium'>What you will get</span>
              <div className='mt-4 space-y-5'>
                {plan.features.map(feature => (
                  <p key={feature} className='text-white/80 flex items-center gap-2 text-sm'>
                    <CheckCircle2Icon size={16} /> {feature}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Plans;
