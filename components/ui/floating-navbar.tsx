"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() ?? 0;
      const direction = current - previous;

      // Mostrar solo si se hace scroll hacia arriba y no estamos en la parte superior
      if (direction < 0 || scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed  top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  px-2 py-2  items-center justify-center space-x-4 ",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(44,14,89,0.15)",
            borderRadius: "50px",
            border: "1px solid rgba(255,255,255,0.525)",
          }}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-300 dark:hover:text-neutral-300 hover:text-neutral-500 py-2 px-1"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className=" sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
