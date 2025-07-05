import React, { useState } from "react";

const faqs = [
  {
    question: "What is included in the MVP package?",
    answer:
      "The MVP package includes end-to-end product development, founder-led execution, scalable tech stack, and free maintenance for the next month.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs are delivered within 1 month, depending on complexity and requirements.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, scalable technologies like Next.js, Supabase, and Tailwind CSS for rapid and robust development.",
  },
  {
    question: "Can I upgrade to the Pro plan later?",
    answer:
      "Yes, you can upgrade to the Pro plan at any time for additional features and ongoing support.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "We offer a satisfaction guarantee. If you're not happy with the delivered MVP, reach out and we'll make it right.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="doubts" className="relative py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/grid-bg.svg')",
          backgroundRepeat: "repeat",
          opacity: 0.2,
        }}
        aria-hidden="true"
      />
      <div className="relative max-w-3xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Doubts</h2>
        <p className="text-lg text-gray-600 mb-10 text-center">
          Answers to common questions about our process, pricing, and more.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 ml-4 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 pb-4 text-gray-700 text-base transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 