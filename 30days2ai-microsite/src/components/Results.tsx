'use client';
import { results } from '@/lib/data';
import { TrendingUp, Clock, Building2 } from 'lucide-react';

export default function Results() {
  return (
    <section id="results" className="px-6 py-24 md:px-12 lg:px-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 font-display">
            REAL{' '}
            <span className="bg-gradient-to-r from-electric-500 to-lime-500 bg-clip-text text-transparent">
              RESULTS
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-semibold">
            Real businesses. Real numbers. Zero spin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-neutral-100 hover:border-electric-400 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-lime-500 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-black text-neutral-900 text-lg">{item.company}</div>
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">{item.industry}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-black bg-gradient-to-r from-electric-500 to-lime-500 bg-clip-text text-transparent mb-1">
                  {item.result}
                </div>
                <div className="flex items-center gap-2 text-neutral-600 text-sm font-semibold">
                  <TrendingUp className="w-4 h-4 text-electric-500" />
                  {item.metric}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-neutral-100">
                <Clock className="w-4 h-4 text-lime-600" />
                <span className="text-sm font-bold text-neutral-500">Delivered in {item.timeline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 font-semibold mb-4">Ready to be our next success story?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-electric-500 to-lime-500 text-white rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-electric-500/30 hover:-translate-y-0.5 transition-all"
          >
            Start Your 30-Day Sprint
          </a>
        </div>
      </div>
    </section>
  );
}
