'use client';
import { caseStudies } from '@/lib/data';
import { Building2, Target, TrendingUp, Clock } from 'lucide-react';
export default function CaseStudies() {
  return (
    <section id="cases" className="px-6 py-20 md:px-12 lg:px-24 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-display">
            <span className="text-gradient">PROVEN RESULTS</span>
          </h2>
          <p className="text-2xl text-dark-300 max-w-3xl mx-auto">
            Real companies, real transformations, all in 30 days or less
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary-400" />
                  <span className="text-sm font-semibold text-primary-400">{study.industry}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary-500/20 rounded-full">
                  <Clock className="w-4 h-4 text-primary-400" />
                  <span className="text-xs font-bold text-primary-400">{study.timeline}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-display">
                {study.company}
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-dark-400" />
                    <span className="text-sm font-semibold text-dark-400">Challenge</span>
                  </div>
                  <p className="text-dark-200">{study.challenge}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-primary-400" />
                    <span className="text-sm font-semibold text-primary-400">Solution</span>
                  </div>
                  <p className="text-dark-200">{study.solution}</p>
                </div>
                <div className="pt-4 border-t border-dark-700">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-primary-400" />
                    <span className="text-sm font-semibold text-primary-400">Result</span>
                  </div>
                  <p className="text-lg font-bold text-gradient">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
