'use client';
import { ArrowRight, Zap, Clock } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full mb-8 animate-pulse-glow">
          <Clock className="w-5 h-5 text-primary-400" />
          <span className="text-lg font-bold text-gradient">30 DAYS TO TRANSFORM</span>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 font-display">
          <span className="text-gradient">RAPID AI</span>
          <br />
          <span className="text-white">DEPLOYMENT</span>
        </h1>
        <p className="text-2xl md:text-3xl text-dark-300 max-w-3xl mx-auto mb-12">
          Production-ready AI solutions in <span className="text-primary-400 font-bold">30 days</span>.
          <br />Fast. Focused. Effective.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#solutions"
            className="group px-10 py-5 bg-gradient-to-r from-primary-500 to-accent-400 text-white rounded-lg font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-3"
          >
            <Zap className="w-6 h-6" />
            See What&apos;s Possible
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#process"
            className="px-10 py-5 glass-effect text-white rounded-lg font-bold text-xl hover:bg-dark-800/50 transition-all"
          >
            How It Works
          </a>
        </div>
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: '30', label: 'Days to Deploy' },
            { value: '$180K+', label: 'Avg. Cost Savings' },
            { value: '95%', label: 'Success Rate' },
          ].map((stat, index) => (
            <div key={index} className="glass-effect rounded-xl p-6">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-dark-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
