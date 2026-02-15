'use client';
import { useState } from 'react';
import { faqs } from '@/lib/data';
import { ChevronDown, HelpCircle } from 'lucide-react';
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 py-24 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 border border-primary-300 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 text-primary-600" />
            <span className="text-sm font-bold text-primary-700 uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-light-900 mb-6 font-display">
            GOT <span className="text-gradient">QUESTIONS?</span>
          </h2>
          <p className="text-xl text-light-600 font-semibold">
            Everything you need to know about our 30-day process
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border-2 border-light-200 overflow-hidden hover:border-primary-400 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-light-50 transition-colors"
              >
                <span className="text-xl font-bold text-light-900 pr-4">
                  {faq.question}
                </span>
                <div className={`w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180 bg-primary-500' : ''
                }`}>
                  <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-primary-600'}`} />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-light-50">
                  <p className="text-light-700 leading-relaxed font-medium text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
