import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import {
  Settings,
  Target,
  Brain,
  Briefcase,
  Puzzle,
  Rocket,
  Ruler,
  PackageOpen,
} from "lucide-react";

gsap.registerPlugin(Observer);

const itemsData = [
  { icon: <Settings className="w-12 h-12 text-white" />, text: "Engineering MVPs that work" },
  { icon: <Target className="w-12 h-12 text-white" />, text: "Solving real-world problems" },
  { icon: <Brain className="w-12 h-12 text-white" />, text: "Thoughtful UX & UI decisions" },
  { icon: <Briefcase className="w-12 h-12 text-white" />, text: "Helping founders move faster" },
  { icon: <Puzzle className="w-12 h-12 text-white" />, text: "Clean code, no clutter" },
  { icon: <Rocket className="w-12 h-12 text-white" />, text: "Built to launch — and scale" },
  { icon: <Ruler className="w-12 h-12 text-white" />, text: "Design-first development" },
  { icon: <PackageOpen className="w-12 h-12 text-white" />, text: "Pixel-perfect product delivery" },
];

const horizontalLoop = (items, config = {}) => {
  let tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () =>
        tl.totalTime(tl.rawTime() + tl.duration() * 100),
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;

  gsap.set(items, {
    xPercent: (i, el) => {
      const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
      xPercents[i] = snap(
        (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
          gsap.getProperty(el, "xPercent")
      );
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });

  totalWidth =
    items[length - 1].offsetLeft +
    (xPercents[length - 1] / 100) * widths[length - 1] -
    startX +
    items[length - 1].offsetWidth *
      gsap.getProperty(items[length - 1], "scaleX") +
    (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = (xPercents[i] / 100) * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");

    tl.to(
      item,
      {
        xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
        duration: distanceToLoop / pixelsPerSecond,
      },
      0
    )
      .fromTo(
        item,
        {
          xPercent: snap(
            ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
          ),
        },
        {
          xPercent: xPercents[i],
          duration:
            (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
          immediateRender: false,
        },
        distanceToLoop / pixelsPerSecond
      )
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index, vars = {}) {
    if (Math.abs(index - curIndex) > length / 2)
      index += index > curIndex ? -length : length;
    const newIndex = gsap.utils.wrap(0, length, index);
    let time = times[newIndex];

    if ((time > tl.time()) !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }

    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  return tl;
};

const ScrollingText = () => {
  const railRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(railRef.current?.children || []);
    const tl = horizontalLoop(items, {
      repeat: -1,
      paddingRight: 30,
    });

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if (self.deltaY < 0) factor *= -1;
        gsap
          .timeline({ defaults: { ease: "none" } })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });
  }, []);

  return (
    <div className="
  overflow-hidden 
  w-full 
  bg-black 
  flex items-center 
  h-[10vh]         /* Mobile height */
  sm:h-[30vh]      /* Small tablets */
  md:h-[40vh]      /* Medium tablets */
  lg:h-[50vh]      /* Desktop */
  py-4
">
  <div ref={railRef} className="flex whitespace-nowrap px-4">
    {itemsData.map((item, idx) => (
      <h4
        key={idx}
        className="
          text-white 
          flex items-center gap-3 
          font-black 
          text-[6vw]        /* Mobile */
          sm:text-[4.5vw]   /* Small tablet */
          md:text-[3.5vw]   /* Medium tablet */
          lg:text-[2.5vw]   /* Desktop */
          mr-10 tracking-tight
        "
      >
        <span
          className="
            inline-block 
            text-[7vw] 
            sm:text-[5vw] 
            md:text-[3.5vw] 
            lg:text-[2.5vw]
          "
        >
          {item.icon}
        </span>
        <span>{item.text}</span>
      </h4>
    ))}
  </div>
</div>

  );
};

export default ScrollingText;
