'use client';
import { solutions } from '@/lib/data';
import { CheckCircle } from 'lucide-react';

export default function Solutions() {
  return (
    <section id="solutions" className="px-6 py-24 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 font-display">
            WHAT WE{' '}
            <span className="bg-gradient-to-r from-electric-500 to-lime-500 bg-clip-text text-transparent">
              SHIP
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-semibold">
            Production-grade AI solutions. Delivered fast. No excuses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border-2 border-neutral-100 hover:border-electric-400 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="text-4xl">{solution.icon}</span>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 font-display mb-1">
                    {solution.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-lime-100 border border-lime-400 rounded-full text-xs font-bold text-lime-700">
                    {solution.timeline}
                  </span>
                </div>
              </div>

              <p className="text-neutral-600 font-medium mb-6 leading-relaxed">
                {solution.description}
              </p>

              <div className="space-y-2">
                {solution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-electric-500 flex-shrink-0" />
                    <span className="text-sm font-semibold text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
