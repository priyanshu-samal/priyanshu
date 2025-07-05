import React from "react";
import { ContainerTextFlip } from "./ui/Container-text-flip";
import { cn } from "../utils/cn";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Hero = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonth = monthNames[new Date().getMonth()];

  return (
    <section className="relative min-h-[400px] lg:min-h-screen w-full bg-white flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* SVG background layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/grid-bg.svg')",
          backgroundRepeat: "repeat",
          opacity: 0.2,
        }}
        aria-hidden="true"
      />
      {/* Lottie Animation - visible on tablet and desktop only */}
      <div
        className="hidden lg:block absolute right-[23%] bottom-[38%] z-10 pointer-events-none select-none"
        style={{ width: 120, height: 120 }}
      >
        <lottie-player
          src="/Animation - 1751430508659.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-10 text-center relative z-10 pt-10 lg:pt-12 lg:mt-[-60px]">
        {/* Available for Work icon and text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center text-green-600 font-medium mb-4 text-base sm:text-lg lg:text-xl"
        >
          <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></span>
          Available for {currentMonth}...
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-black text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl leading-tight mb-6"
        >
          <span className="whitespace-nowrap">BUILDING DIGITAL BRAND</span>
          <br />
          <span>
            FOR{" "}
            <ContainerTextFlip
              words={["STARTUPS", "AGENCIES", "TEAMS", "CLIENTS"]}
              className={cn("bg-black text-white px-1 py-0.5 text-base sm:px-2 sm:py-1 sm:text-xl md:text-4xl lg:text-6xl xl:text-7xl rounded-md inline-block")}
              textClassName="text-white text-base sm:text-xl md:text-4xl lg:text-6xl xl:text-7xl"
              interval={2000}
              animationDuration={700}
            />
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-8"
        >
          Good ideas deserve great execution that's where I come in.
        </motion.p>
        <a href="https://cal.com/priyanshu-samal" target="_blank" rel="noopener noreferrer">
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="px-4 py-2 bg-black text-white rounded-full hover:scale-105 transition text-sm md:text-base"
          >
            Connect with me
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
