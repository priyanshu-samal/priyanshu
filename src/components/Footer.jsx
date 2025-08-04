import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import { Home, Linkedin, Twitter, Calendar, Github } from "lucide-react";

export default function Footer() {
  const links = [
    { title: "Home", icon: <Home size={20} />, href: "#" },
    { title: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/priyanshusamal-/" },
    { title: "X (Twitter)", icon: <Twitter size={20} />, href: "https://x.com/PriyanshuS92042" },
    { title: "Calendar", icon: <Calendar size={20} />, href: "https://cal.com/priyanshu-samal" },
    { title: "GitHub", icon: <Github size={20} />, href: "https://github.com/priyanshu-samal" },
  ];

  return (
    <footer className="w-full bg-black py-16 mt-16 relative">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Idea Deserves to Exist</h2>
        <a
          href="https://calendly.com/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition-colors duration-200 mb-6"
        >
          Book a Call
        </a>
        <div className="w-full flex justify-center mb-8">
          <FloatingDock items={links} desktopClassName="mt-4" mobileClassName="mt-4" />
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 w-full flex items-center justify-between px-6 py-3 text-gray-400 text-sm">
        <span className="block">© 2025 priyanshu.tech. All rights reserved.</span>
        <span className="block">samalpriyanshu966@gmail.com</span>
      </div>
    </footer>
  );
}
