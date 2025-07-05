"use client";

import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className = "",
  textClassName = "",
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = useRef(null);

  const getExtraWidth = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 8; // slightly wider for mobile
      if (window.innerWidth < 768) return 12; // tablet
    }
    return 30; // desktop
  };

  const updateWidth = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + getExtraWidth();
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [currentWordIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  const MotionP = motion("p");
  const MotionDiv = motion("div");
  const MotionSpan = motion("span");

  return (
    <MotionP
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={`relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-black md:text-7xl 
        bg-black text-white
        shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db] 
        dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052] 
        ${className}`}
      key={words[currentWordIndex]}
    >
      <MotionDiv
        transition={{ duration: animationDuration / 1000, ease: "easeInOut" }}
        className={`inline-block ${textClassName}`}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <MotionDiv className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <MotionSpan
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: index * 0.02 }}
            >
              {letter}
            </MotionSpan>
          ))}
        </MotionDiv>
      </MotionDiv>
    </MotionP>
  );
}
