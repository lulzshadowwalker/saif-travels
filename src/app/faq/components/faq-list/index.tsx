"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main className="container mx-auto my-22 max-md:my-8 px-4">
      <h1 className="text-[2.5rem] font-semibold mb-14 max-md:mb-7 text-balance">
        Frequently Asked Questions
      </h1>

      <ul className="space-y-8">
        {questions().map((item, index) => (
          <FaqItem
            key={index}
            item={item}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => toggleFaq(index)}
          />
        ))}
      </ul>
    </main>
  );
}

function FaqItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <motion.li
      className="card border-l-[10px] border-accent max-w-full cursor-pointer"
      onClick={onToggle}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold pr-4 flex-1">{item.question}</h2>
        <motion.div
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <AngleDownIcon />
        </motion.div>
      </div>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="pt-4 pb-2">
          <p
            className="opacity-0 animate-fade-in"
            style={{
              animationDelay: isOpen ? "0.1s" : "0s",
              animationFillMode: "forwards",
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </motion.li>
  );
}

function AngleDownIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-500"
    >
      <polyline points="6,9 12,15 18,9"></polyline>
    </svg>
  );
}

function questions() {
  return [
    {
      question: "Is it safe for people with medical conditions?",
      answer:
        "Yes, our IV therapy is designed to be safe for most individuals, including those with common medical conditions. However, we recommend consulting with a healthcare professional before starting any new treatment.",
    },
    {
      question: "How many IV sessions are included?",
      answer:
        "Each package includes a specific number of IV sessions, which can vary based on individual needs and treatment plans.",
    },
    {
      question: "Can I choose the drip type myself?",
      answer:
        "Yes, you can choose from a variety of drip types based on your health goals and preferences. Our team will help guide you in selecting the best option for your needs.",
    },
    {
      question: "What should I expect during an IV session?",
      answer:
        "During an IV session, you can expect to relax in a comfortable setting while our trained professionals administer the treatment. The process is generally quick and straightforward.",
    },
    {
      question: "How long does each IV session take?",
      answer:
        "Each IV session typically takes between 30 to 60 minutes, depending on the type of treatment and individual needs.",
    },
  ];
}
