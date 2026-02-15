'use client';
import { consultingBrands } from '@/lib/data';
import { ExternalLink, Clock, Zap } from 'lucide-react';
export default function ConsultingBrands() {
  return (
    <section id="brands" className="section-padding bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Our <span className="text-gradient">Consulting Brands</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Choose the timeline that matches your urgency. Both deliver production-ready AI solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {consultingBrands.map((brand, index) => (
            <div
              key={brand.domain}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${
                brand.color === 'primary' 
                  ? 'from-primary-500/10 to-transparent' 
                  : 'from-accent-500/10 to-transparent'
              } opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                  brand.color === 'primary' 
                    ? 'bg-primary-500/20 border border-primary-500/30' 
                    : 'bg-accent-500/20 border border-accent-500/30'
                }`}>
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-semibold">{brand.timeline} Timeline</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 font-display">
                  {brand.name}
                </h3>
                <a
                  href={`https://${brand.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 mb-4 ${
                    brand.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                  } hover:underline`}
                >
                  {brand.domain}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-lg font-semibold text-dark-200 mb-4">
                  {brand.tagline}
                </p>
                <p className="text-dark-400 mb-6">
                  {brand.description}
                </p>
                <a
                  href={`https://${brand.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
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
        <div className="mt-16 text-center glass-effect rounded-2xl p-8">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-display">
              Powered by <span className="text-gradient">Velorian</span>
            </h3>
            <p className="text-dark-300 leading-relaxed">
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
