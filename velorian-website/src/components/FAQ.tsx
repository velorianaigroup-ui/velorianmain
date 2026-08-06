'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data';
import { ChevronDown } from 'lucide-react';
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="section-padding bg-dark-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 font-display">
            Straight <span className="text-gradient">Answers</span>
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            The questions we actually get, answered honestly.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-dark-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-dark-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-dark-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
