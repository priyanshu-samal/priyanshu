// src/components/VideoShowcase.jsx

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const videos = [
   {
    title: "BuildMvpFast",
    subtitle: "Priyanshu",
    video: "/4aug.mp4",,
  },
  {
    title: "FRA! Doodle Artist Portfolio",
    subtitle: "Patrick David",
    url: "https://gsap.com/community/uploads/monthly_2025_07/small.mp4.a0a2b2732381fed886ad76d34f86f81a.mp4",
  },
  {
    title: "GSAP Showreel 2024",
    subtitle: "GSAP Team",
    url: "https://gsap.com/community/uploads/monthly_2025_01/trimmed.mp4.b3ee24a03e178b0c306dba74ff29e698.mp4",
  },
  {
    title: "Palmer Dinnerware",
    subtitle: "UNCOMMON",
    url: "https://gsap.com/community/uploads/monthly_2025_06/palmer-gsap(compressed).mp4.4c2f38a33a1ecb43889e76a4c66593b9.mp4",
  },
];

const VideoShowcase = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    gsap.from(".showcase-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="bg-black py-16 text-white">
      <h2 className="text-4xl text-center font-bold mb-6 showcase-title">
        
      </h2>

      <div className="relative max-w-[1200px] mx-auto px-4">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="swiper-container"
        >
          {videos.map((item, index) => (
            <SwiperSlide
              key={index}
              className="relative w-[100px] h-[150px] rounded-xl overflow-hidden shadow-xl"
            >
              <video
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="swiper-button-prev text-white text-3xl absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer select-none px-2">
            ❮
          </div>
          <div className="swiper-button-next text-white text-3xl absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer select-none px-2">
            ❯
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default VideoShowcase;
