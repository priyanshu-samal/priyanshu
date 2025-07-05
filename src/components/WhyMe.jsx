import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/Background-Gradient";

const features = [
  {
    title: "Results-Driven Approach",
    desc: "I build with purpose — solving real problems, not just pushing pixels.",
    icon: "🔥",
  },
  {
    title: "Reliable Delivery",
    desc: "No ghosting, no delays — just clean, on-time execution every time.",
    icon: "⚡",
  },
  {
    title: "Modern Stack",
    desc: "Next.js, Tailwind, Framer Motion, Supabase — built to scale and impress.",
    icon: "🛠️",
  },
  {
    title: "Clarity in Handoff",
    desc: "From code to docs, I ensure smooth transitions and future-proof builds.",
    icon: "📦",
  },
];

const WhyMe = () => {
  return (
    <section
      id="why-me"
      className="min-h-screen bg-[#0b0b0b] text-white py-20 px-6 lg:px-24"
    >
      <div className="grid lg:grid-cols-2 gap-16 place-items-center min-h-[80vh] h-full items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Clients Trust Me</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            “Others just deliver websites. I deliver working businesses.
            Whether it's an MVP, a portfolio, or a brand presence — I ensure it's fast,
            aesthetic, and truly yours.”
          </p>
          <p className="text-sm text-gray-400">~ Priyanshu Samal</p>
          <p className="text-sm text-gray-500">Founder, BuildMVPFast</p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <BackgroundGradient className="rounded-2xl bg-[#141414] p-6 min-h-[180px]">
                <div className="text-2xl mb-2">{f.icon}</div>
                <h4 className="font-semibold text-lg mb-1">{f.title}</h4>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
