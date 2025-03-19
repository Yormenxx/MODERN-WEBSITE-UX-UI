"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-green-500 ",
    },
  ];
  return (
    <div className=" text-white flex flex-col items-center justify-center">
   
      <TypewriterEffectSmooth words={words}  />
  
    </div>
  );
}
