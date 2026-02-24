'use client';
import { process } from '@/lib/data';
import { Zap } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 md:px-12 lg:px-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 font-display">
            THE{' '}
            <span className="bg-gradient-to-r from-electric-500 to-lime-500 bg-clip-text text-transparent">
              30-DAY
            </span>{' '}
            SPRINT
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-semibold">
            Four phases. Zero delays. Maximum impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-400 via-lime-400 to-electric-400 -translate-x-1/2" />

          <div className="space-y-10">
            {process.map((phase, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 bg-white rounded-2xl p-8 border-2 border-neutral-100 hover:border-electric-400 hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-electric-500 to-lime-500 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-lime-100 border border-lime-400 rounded-full text-xs font-black text-lime-700 mb-1">
                        {phase.day}
                      </span>
                      <h3 className="text-2xl font-black text-neutral-900 font-display">
                        {phase.phase}
                      </h3>
                    </div>
                  </div>
                  <p className="text-neutral-600 font-medium leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-5 h-5 rounded-full bg-electric-500 border-4 border-white shadow-md flex-shrink-0 relative z-10" />

                {/* Spacer */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 bg-gradient-to-r from-electric-500 to-lime-500 rounded-2xl p-8 shadow-xl">
          <div className="flex items-start gap-5">
            <div className="p-3 bg-white rounded-xl flex-shrink-0">
              <Zap className="w-7 h-7 text-electric-600" fill="currentColor" />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-2 font-display">
                Daily Updates. Zero Surprises.
              </h4>
              <p className="text-white/90 text-base font-medium leading-relaxed">
                Track progress in real-time. Daily standups. Weekly demos. Full transparency from day 1 to day 30.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
