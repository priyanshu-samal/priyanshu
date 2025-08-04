import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import VideoShowcase from "./VideoShowcase";

const projects = [
  {
    name: "Destiny",
    image: "/Destiny.png",
    description: "AI-powered travel planning and management application",
    url: "https://destiny-delta.vercel.app/",
  },
  {
    name: "WordSmith",
    image: "/Wordsmith.png",
    description: "AI-powered SaaS tool designed to help you create high-quality content effortlessly.",
    url: "https://wordsmith-gilt.vercel.app/",
  },
  {
    name: "EasyNotes",
    image: "/Easynotes.png",
    description: "A powerful web application designed specifically for students who need to convert their colorful PDF notes into black and white",
    url: "https://www.easynotes.space/",
  },
  {
    name: "Hissab",
    image: "/Hissab.png",
    description: "A comprehensive finance application designed to facilitate seamless domestic and international transactions.",
    url: "https://hissab.vercel.app/sign-in",
  },
  {
    name: "Periskope",
    image: "/Periskope.png",
    description: "A modern, real-time chat application built with Next.js, Tailwind CSS, and Supabase.",
    url: "https://periskopechat.vercel.app/",
  },
  {
    name: "SnitchRebrand",
    image: "/SnitchRebrand.png",
    description: "Rebranded snitch website for Frontend Hackathon",
    url: "https://hackathonsnitch.vercel.app/",
  },
  {
    name: "BuildMvpFast",
    image: "/BuildMvpFast.png",
    description: "Agency Website for Client",
    url: "https://mvp-genesis-launchpad.vercel.app/",
  },
];

export default function MyProject() {
  return (
    <section id="my-work" className="relative py-20 px-6 md:px-20 bg-[#f8f8f8] overflow-hidden" style={{ textAlign: 'center' }}>
      {/* SVG Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/grid-bg.svg')",
          backgroundRepeat: "repeat",
          opacity: 0.15,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: 16 }}>My Work</h2>
        <p style={{ fontSize: '1.25rem', color: '#333', marginBottom: 40 }}>
          A glimpse into the projects I've brought to life visually and functionally.
        </p>
        {/* Project Cards Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto mb-16">
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col items-center cursor-pointer transition-all"
              style={{ textDecoration: 'none' }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-32 h-32 object-contain mb-4 rounded-lg shadow-sm border"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-900">{project.name}</h3>
              <p className="text-gray-600 text-base">{project.description}</p>
            </motion.a>
          ))}
        </div>
        <VideoShowcase />
      </div>
    </section>
  );
}
