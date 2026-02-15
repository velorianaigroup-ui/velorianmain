'use client';
import { process } from '@/lib/data';
import { CheckCircle, Zap } from 'lucide-react';
export default function Process() {
  return (
    <section id="process" className="px-6 py-24 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-light-900 mb-6 font-display">
            THE <span className="text-gradient">30-DAY</span> SPRINT
          </h2>
          <p className="text-2xl text-light-600 max-w-3xl mx-auto font-semibold">
            Four phases. Zero delays. Maximum impact.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 -translate-x-1/2"></div>
          <div className="space-y-12">
            {process.map((phase, index) => (
              <div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 bg-white rounded-3xl p-10 border-2 border-light-200 hover:border-primary-400 hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-3xl font-black text-white shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <div className="px-4 py-1 bg-accent-100 border border-accent-400 rounded-full inline-block mb-2">
                        <span className="text-sm font-black text-accent-700">{phase.day}</span>
                      </div>
                      <h3 className="text-3xl font-black text-light-900 font-display">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-white" fill="currentColor" />
                        </div>
                        <span className="text-light-700 font-semibold">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Timeline dot (desktop only) */}
                <div className="hidden lg:block w-6 h-6 rounded-full bg-primary-500 border-4 border-white shadow-lg flex-shrink-0 relative z-10"></div>
                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl p-10 shadow-2xl">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white rounded-2xl flex-shrink-0">
              <Zap className="w-8 h-8 text-accent-600" fill="currentColor" />
            </div>
            <div>
              <h4 className="text-3xl font-black text-white mb-3 font-display">Daily Updates. Zero Surprises.</h4>
              <p className="text-accent-50 text-lg font-medium leading-relaxed">
                Track progress in real-time. Daily standups. Weekly demos. Full transparency from day 1 to day 30.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
