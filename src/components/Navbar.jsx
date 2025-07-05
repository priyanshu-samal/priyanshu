"use client";

import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "My Work", href: "#my-work" },
    { label: "Why Me", href: "#why-me" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#doubts" },
  ];

  return (
    <header
      className={`fixed top-0 mt-2 z-50 border-b border-black/10 backdrop-blur-md bg-white/60 rounded-full shadow-md
        ${menuOpen ? 'w-full mx-0' : 'w-12 mx-auto'}
        sm:max-w-6xl sm:w-[calc(100%-2rem)] sm:left-1/2 sm:-translate-x-1/2 sm:mx-0`
      }
    >
      <div className="px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="hidden sm:block">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-black">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-full h-full object-cover object-center"
              style={{ transform: "scale(1.3)" }}
            />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://cal.com/priyanshu-samal"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-black text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
          >
            Connect
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button className="block sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-black/10 shadow-md px-4 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-base font-medium text-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/priyanshu-samal"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-fit bg-black text-white px-5 py-2 rounded-full mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 