'use client';
import { process } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
export default function Process() {
  return (
    <section id="process" className="px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-display">
            THE <span className="text-gradient">30-DAY SPRINT</span>
          </h2>
          <p className="text-2xl text-dark-300 max-w-3xl mx-auto">
            Our battle-tested process delivers results on time, every time
          </p>
        </div>
        <div className="grid gap-8">
          {process.map((phase, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 lg:p-10 hover:scale-102 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center text-2xl font-bold text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-white font-display">
                      {phase.title}
                    </h3>
                    <div className="px-4 py-1 bg-primary-500/20 rounded-full border border-primary-500/30">
                      <span className="text-sm font-semibold text-primary-400">{phase.day}</span>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {phase.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-200">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl border border-primary-500/20">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-500/20 rounded-lg flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2 font-display">Daily Progress Updates</h4>
              <p className="text-dark-300 text-lg">
                You&apos;ll never wonder what&apos;s happening. We provide daily standup reports, weekly demos, and real-time access to our project board. Complete transparency throughout the 30-day journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
