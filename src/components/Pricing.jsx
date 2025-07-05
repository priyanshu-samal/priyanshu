import React from "react";
import { BackgroundGradient } from "./ui/Background-Gradient";

const pricingOptions = [
  {
    title: "Standard",
    subtitle: "One Time Payment",
    price: "$1549 USD",
    highlight: false,
    description: "One time payment for MVP Development",
    features: [
      "MVP Development in 1 Month",
      "Founder Led Development",
      "Free Maintenance for Next Month",
      "Scalable Tech Stack: Next.js, Supabase",
      "Regular Updates",
    ],
    button: "Book",
  },
  {
    title: "Pro",
    subtitle: "Most Popular",
    price: "$2599 USD",
    highlight: true,
    description: "Recurring Payment for MVP Development",
    features: [
      "Everything in Standard +",
      "Min 90 Hours of Development per Month",
      "Time Flexibility",
      "Continuous Maintenance and Updates",
      "Quick Emergency Support",
      "Marketing Support",
    ],
    button: "Book",
  },
];

const calLink = "https://cal.com/priyanshu-samal";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We offer a range of pricing options to suit your needs.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {pricingOptions.map((option, idx) => (
          <BackgroundGradient
            key={option.title}
            className="rounded-2xl bg-[#18181b] p-8 flex flex-col items-center shadow-xl min-h-[480px] relative"
          >
            {option.highlight && (
              <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold mb-1 text-white">{option.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{option.subtitle}</p>
            <div className="text-4xl font-extrabold mb-2 text-white">{option.price}</div>
            <p className="text-sm text-green-400 font-semibold mb-4 text-center">
              {option.description}
            </p>
            <ul className="mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              {option.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200">
                  <span className="text-green-400 font-bold">✔</span> {f}
                </li>
              ))}
            </ul>
            <a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full"
            >
              <button className="w-full bg-white text-black rounded-full py-2 font-semibold hover:bg-gray-200 transition">
                {option.button}
              </button>
            </a>
          </BackgroundGradient>
        ))}
      </div>
    </section>
  );
} 
