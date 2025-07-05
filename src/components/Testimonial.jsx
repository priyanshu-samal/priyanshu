'use client';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Incredible work ethic and aesthetic sense. It felt like we had a full-time product team on our side.',
    name: 'Liam Rhodes',
    role: 'Founder, ScalarLabs',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote: 'Quick turnaround, pixel-perfect implementation, and they just "got" what we needed without 10 meetings.',
    name: 'Nina Patel',
    role: 'COO, Devfinity',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote: 'We trusted them with our rebrand and it was the best decision. Every page looks stunning.',
    name: 'Marc Huerta',
    role: 'CMO, Loopwise',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    quote: 'Communication was seamless and the results exceeded our expectations. Highly recommended!',
    name: 'Sara Kim',
    role: 'Product Lead, FinEdge',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    quote: 'They delivered on time and the quality was top-notch. Will work with them again!',
    name: 'David Lin',
    role: 'CTO, Appify',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    quote: 'A pleasure to work with—creative, reliable, and always professional.',
    name: 'Priya Desai',
    role: 'CEO, Marketly',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

// Split testimonials into 3 columns
const columns = [
  testimonials.filter((_, i) => i % 3 === 0),
  testimonials.filter((_, i) => i % 3 === 1),
  testimonials.filter((_, i) => i % 3 === 2),
];

// Duplicate for seamless looping (4x for even smoother loop)
const loopColumn = (col) => [...col, ...col, ...col, ...col];

// Increased speed: lower duration values
const columnSpeeds = [10, 6, 8]; // seconds for one full loop (middle is fastest)

export default function Testimonial() {
  const cardMinHeight = 240; // px, reduced for a more compact grid
  const visibleCards = 3;
  const fadeHeight = 40; // px, reduced for a more compact grid

  return (
    <section className="bg-white text-black px-6 md:px-20 py-20 min-h-[60vh] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/grid-bg.svg')",
          backgroundRepeat: "repeat",
          opacity: 0.2,
        }}
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.p
          className="text-sm uppercase tracking-widest text-gray-500 mb-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Why clients choose us [I know that not real i know but soon there will be real i trust my skills ]
        </motion.p>
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-12 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>
        {/* 3x3 animated columns, each column scrolls vertically upward */}
        <div className="w-full flex justify-center items-center gap-6">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className="relative overflow-hidden flex flex-col items-center"
              style={{ height: cardMinHeight * visibleCards }}
            >
              {/* Stronger fog fade overlays */}
              <div className="pointer-events-none absolute top-0 left-0 w-full" style={{height: fadeHeight, background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 70%, rgba(255,255,255,0.5) 90%, transparent 100%)'}} />
              <div className="pointer-events-none absolute bottom-0 left-0 w-full" style={{height: fadeHeight, background: 'linear-gradient(to top, rgba(255,255,255,0.95) 70%, rgba(255,255,255,0.5) 90%, transparent 100%)'}} />
              <motion.div
                className="flex flex-col"
                animate={{ y: [0, -cardMinHeight * (col.length - 1)] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: columnSpeeds[colIdx],
                  ease: 'linear',
                }}
                style={{ willChange: 'transform' }}
              >
                {loopColumn(col).map((t, i) => (
                  <div
                    key={i}
                    className={`bg-white rounded-2xl p-6 shadow-md flex flex-col justify-between items-center border border-neutral-200 min-w-[220px] max-w-xs text-black`} 
                    style={{ minHeight: cardMinHeight }}
                  >
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-4 border-white shadow mb-3"
                      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                    />
                    <p className="text-sm leading-relaxed mb-4 text-center text-gray-800">"{t.quote}"</p>
                    <div className="pt-2 border-t border-neutral-200 w-full text-center">
                      <p className="font-semibold text-black text-base">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
