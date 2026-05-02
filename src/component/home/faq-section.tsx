"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I watch movies on CineTube?",
    answer:
      "You can watch free movies instantly. For premium movies, you need to purchase access using our secure payment system.",
  },
  {
    question: "What happens after I purchase a movie?",
    answer:
      "Once your payment is successful, the movie becomes unlocked. You’ll see a 'Watch Movie' button instead of 'Buy Now'.",
  },
  {
    question: "Can I purchase the same movie twice?",
    answer:
      "No. Our system prevents duplicate purchases. Once you buy a movie, it stays in your account permanently.",
  },
  {
    question: "Where can I see my purchased movies?",
    answer:
      "You can view all your purchased movies in the 'My Purchase History' section from your dashboard.",
  },
  {
    question: "Is my payment secure?",
    answer:
      "Yes. All payments are processed securely using Stripe, ensuring your data is safe.",
  },
  {
    question: "Can I add movies to watch later?",
    answer:
      "Yes! You can add movies to your watchlist and access them anytime from your profile.",
  },
  {
    question: "Who can manage movies on the platform?",
    answer:
      "Only admins can create, update, or delete movies using the admin dashboard.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20  ">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Frequently Asked  
                <span className="bg-gradient-to-r from-pink-800 via-purple-500 to-cyan-700 text-transparent bg-clip-text">
                 { " " }  Questions
                </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Everything you need to know about CineTube
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl bg-white dark:bg-white/5 backdrop-blur-md shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left  cursor-pointer"
              >
                <span className="font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}