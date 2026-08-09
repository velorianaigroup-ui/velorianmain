'use client';
import { caseStudies } from '@/lib/data';
import { BarChart3, Building2 } from 'lucide-react';
export default function CaseStudies() {
  return (
    <section id="cases" className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-b from-light-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-light-900 mb-6 font-display">
            THE <span className="text-gradient">EVIDENCE</span>
          </h2>
          <p className="text-2xl text-light-600 max-w-3xl mx-auto font-semibold">
            Why a proper AI engagement pays for itself — backed by industry research.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border-2 border-light-200 hover:border-primary-400 hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-2 transition-all"
            >
              <div className="mb-6">
                {study.source === 'industry' ? (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-light-200 rounded-full">
                    <BarChart3 className="w-4 h-4 text-light-700" />
                    <span className="text-sm font-bold text-light-700">Industry Data</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full">
                    <Building2 className="w-4 h-4 text-primary-600" />
                    <span className="text-sm font-bold text-primary-700">Client Result</span>
                  </div>
                )}
              </div>
              <p className="text-3xl font-black text-light-900 mb-4 font-display leading-snug">
                {study.stat}
              </p>
              {study.description && (
                <p className="text-light-600 font-medium mb-4">{study.description}</p>
              )}
              <p className="text-sm text-light-500 font-bold">— {study.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
