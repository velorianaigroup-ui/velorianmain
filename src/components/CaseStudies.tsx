'use client';
import { caseStudies } from '@/lib/data';
import { Building2, Target, TrendingUp, Clock, Sparkles } from 'lucide-react';
export default function CaseStudies() {
  return (
    <section id="cases" className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-b from-light-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent-100 border border-accent-300 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-accent-600" />
            <span className="text-sm font-bold text-accent-700 uppercase tracking-wide">Real Results</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-light-900 mb-6 font-display">
            PROVEN <span className="text-gradient">SUCCESS</span>
          </h2>
          <p className="text-2xl text-light-600 max-w-3xl mx-auto font-semibold">
            Real companies. Real transformations. All in 30 days.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-light-200 hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-2 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full">
                  <Building2 className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-bold text-primary-700">{study.industry}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-accent-100 rounded-full">
                  <Clock className="w-4 h-4 text-accent-700" />
                  <span className="text-xs font-black text-accent-700">{study.timeline}</span>
                </div>
              </div>
              <h3 className="text-3xl font-black text-light-900 mb-6 font-display">
                {study.company}
              </h3>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-light-400" />
                    <span className="text-xs font-bold text-light-500 uppercase tracking-wide">Challenge</span>
                  </div>
                  <p className="text-light-700 font-medium">{study.challenge}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-primary-500" />
                    <span className="text-xs font-bold text-primary-600 uppercase tracking-wide">Solution</span>
                  </div>
                  <p className="text-light-700 font-medium">{study.solution}</p>
                </div>
                <div className="pt-5 border-t-2 border-light-200">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent-600" />
                    <span className="text-xs font-bold text-accent-600 uppercase tracking-wide">Impact</span>
                  </div>
                  <p className="text-xl font-black text-gradient leading-snug">{study.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-white rounded-3xl p-12 border-2 border-primary-300 shadow-xl">
          <p className="text-2xl text-light-700 font-bold">
            Average client ROI: <span className="text-5xl text-gradient font-black">387%</span> in first year
          </p>
        </div>
      </div>
    </section>
  );
}
