'use client';
import { ArrowRight, Zap, Clock, TrendingUp, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-electric-100/60 rounded-full blur-3xl animate-bounce-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-100/60 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-electric-50 border-2 border-electric-400 rounded-full mb-8 shadow-sm">
          <Zap className="w-5 h-5 text-electric-500" fill="currentColor" />
          <span className="text-sm font-black text-electric-700 uppercase tracking-widest">Lightning-Fast AI Deployment</span>
        </div>

        {/* Headline */}
        <h1 className="text-7xl md:text-9xl font-black mb-6 font-display leading-none">
          <span className="text-electric-500">30 DAYS</span>
          <br />
          <span className="text-neutral-900">TO AI</span>
        </h1>

        <p className="text-2xl md:text-3xl text-neutral-700 font-bold max-w-3xl mx-auto mb-4">
          Deploy AI. Fast.
        </p>
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-12">
          Production-ready solutions in{' '}
          <span className="text-electric-600 font-bold">30 days or less</span>.
          Zero fluff. Guaranteed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#solutions"
            className="group px-10 py-5 bg-gradient-to-r from-electric-500 to-lime-500 text-white rounded-2xl font-black text-xl shadow-xl hover:shadow-electric-500/40 hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-3"
          >
            <Zap className="w-6 h-6" fill="currentColor" />
            Get Started Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#process"
            className="px-10 py-5 bg-white border-2 border-electric-400 text-electric-600 rounded-2xl font-black text-xl hover:bg-electric-50 transition-all shadow-sm"
          >
            See How It Works
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { value: '30', label: 'Days Max', icon: Clock },
            { value: '$180K', label: 'Avg. Saved', icon: TrendingUp },
            { value: '95%', label: 'Success Rate', icon: CheckCircle },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border-2 border-neutral-100 hover:border-electric-400 hover:shadow-lg transition-all"
            >
              <stat.icon className="w-8 h-8 text-electric-500 mx-auto mb-2" />
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-electric-500 to-lime-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-neutral-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-500 via-lime-400 to-electric-500" />
    </section>
  );
}
