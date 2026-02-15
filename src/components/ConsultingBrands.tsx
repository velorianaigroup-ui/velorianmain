'use client';
import { consultingBrands } from '@/lib/data';
import { ExternalLink, Clock, Zap } from 'lucide-react';
export default function ConsultingBrands() {
  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black text-light-900 mb-6 font-display">
            OUR <span className="text-gradient">SOLUTIONS</span>
          </h2>
          <p className="text-xl text-light-600 max-w-2xl mx-auto font-semibold">
            Choose the timeline that matches your urgency. Both deliver production-ready AI solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {consultingBrands.map((brand) => (
            <div
              key={brand.domain}
              className="bg-white rounded-3xl p-8 border-2 border-light-200 hover:border-primary-400 hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                brand.color === 'primary'
                  ? 'from-primary-100/50 to-transparent'
                  : 'from-accent-100/50 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                  brand.color === 'primary'
                    ? 'bg-primary-100 border border-primary-300'
                    : 'bg-accent-100 border border-accent-300'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-black">{brand.timeline} Timeline</span>
                </div>
                <h3 className="text-3xl font-black text-light-900 mb-2 font-display">
                  {brand.name}
                </h3>
                <a
                  href={`https://${brand.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 mb-4 ${
                    brand.color === 'primary' ? 'text-primary-500' : 'text-accent-600'
                  } hover:underline font-bold`}
                >
                  {brand.domain}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-lg font-bold text-light-800 mb-4">
                  {brand.tagline}
                </p>
                <p className="text-light-600 mb-6">
                  {brand.description}
                </p>
                <a
                  href={`https://${brand.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black transition-all ${
                    brand.color === 'primary'
                      ? 'bg-primary-500 hover:bg-primary-600 text-white'
                      : 'bg-accent-500 hover:bg-accent-600 text-white'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center bg-gradient-to-r from-primary-100 to-accent-100 rounded-3xl p-8 border border-primary-200">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-black text-light-900 mb-4 font-display">
              Powered by <span className="text-gradient">Velorian</span>
            </h3>
            <p className="text-light-600 leading-relaxed">
              Velorian is the parent company behind both 30 Days to AI and 60 Days to AI.
              We specialize in rapid AI deployment for businesses of all sizes, combining
              cutting-edge technology with proven implementation methodologies. Our mission
              is to make enterprise-grade AI accessible, affordable, and fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
