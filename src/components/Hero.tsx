'use client';
import { ArrowRight, Zap, Clock, Rocket, CheckCircle } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-accent-50">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/30 rounded-full blur-3xl animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        {/* Speed badge */}
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary-500 rounded-full mb-8 shadow-xl animate-pulse-fast">
          <Zap className="w-6 h-6 text-primary-500" fill="currentColor" />
          <span className="text-xl font-black text-gradient uppercase tracking-wide">Lightning-Fast AI</span>
          <Rocket className="w-6 h-6 text-accent-500" />
        </div>
        <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-black mb-8 font-display leading-none">
          <span className="text-primary-500">30 DAYS</span>
          <br />
          <span className="text-light-900">TO AI</span>
        </h1>
        <p className="text-3xl md:text-4xl text-light-700 font-bold max-w-4xl mx-auto mb-4">
          Deploy AI. Fast.
        </p>
        <p className="text-xl md:text-2xl text-light-600 max-w-3xl mx-auto mb-12">
          Production-ready solutions in <span className="text-primary-600 font-bold">30 days or less</span>. No compromises.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <a
            href="#solutions"
            className="group px-12 py-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-black text-2xl shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all inline-flex items-center justify-center gap-3"
          >
            <Zap className="w-7 h-7" fill="currentColor" />
            Get Started Now
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
          </a>
          <a
            href="#process"
            className="px-12 py-6 bg-white border-2 border-primary-500 text-primary-600 rounded-2xl font-black text-2xl hover:bg-primary-50 transition-all shadow-lg"
          >
            See How It Works
          </a>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { value: '30', label: 'Days', icon: Clock },
            { value: '95%', label: 'Success', icon: CheckCircle },
          ].map((stat, index) => (
            <div key={index} className="glass-light rounded-2xl p-8 hover:scale-105 transition-all">
              <stat.icon className="w-10 h-10 text-primary-500 mx-auto mb-3" />
              <div className="text-5xl md:text-6xl font-black text-gradient mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-light-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Speed lines effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 shimmer"></div>
    </section>
  );
}
