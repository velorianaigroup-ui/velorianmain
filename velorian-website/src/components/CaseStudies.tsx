'use client';
import { caseStudies } from '@/lib/data';
import { BarChart3, Building2 } from 'lucide-react';
export default function CaseStudies() {
  return (
    <section id="results" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 font-display">
            The <span className="text-gradient">Evidence</span> Behind the Approach
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            Why a proper AI engagement pays for itself — backed by industry research and client results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-dark-200 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="mb-4">
                {study.source === 'industry' ? (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-dark-100 rounded-full">
                    <BarChart3 className="w-4 h-4 text-dark-600" />
                    <span className="text-xs font-semibold text-dark-600">Industry Data</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full border border-primary-200">
                    <Building2 className="w-4 h-4 text-primary-600" />
                    <span className="text-xs font-semibold text-primary-600">Client Result</span>
                  </div>
                )}
              </div>
              <p className="text-2xl font-bold text-dark-900 mb-2 leading-snug">
                {study.stat}
              </p>
              {study.description && (
                <p className="text-dark-500 mb-4">{study.description}</p>
              )}
              <p className="text-sm text-dark-400 font-medium">— {study.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
