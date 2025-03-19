"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "motion/react";
import { TypewriterEffectSmoothDemo } from "./TypeWritter";

export function SparklesPreview() {
  return (
    <div className="w-full z-10 relative  flex flex-col items-center justify-center overflow-hidden rounded-md">

        <TypewriterEffectSmoothDemo/>
      <motion.h1 
      initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      
      className="md:text-7xl text-5xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 relative z-20">
        Modern UI/UX
      </motion.h1>
      <div className="relative w-full max-w-screen-lg sm:w-80 md:w-[40rem] h-40 overflow-hidden">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={600}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
