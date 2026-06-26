'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items, className = '' }: { items: FAQItem[]; className?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="card overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-medical-50/50 transition-colors"
          >
            <span className="font-medium text-medical-800 pr-4 text-sm md:text-base">{item.question}</span>
            <span
              className={`shrink-0 w-6 h-6 rounded-full bg-medical-50 flex items-center justify-center text-medical-400 transition-transform duration-200 ${
                openIndex === idx ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-5">
              <p className="text-sm text-medical-500 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
