'use client';
import { ArrowRight, Sparkles } from 'lucide-react';
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
        <div className="animate-slide-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-dark-300 font-medium">Deploy AI in 30-60 Days</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up font-display">
          <span className="text-gradient">Transform Your Business</span>
          <br />
          <span className="text-white">With Lightning-Fast AI</span>
        </h1>
        <p className="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          We deploy production-ready AI solutions in weeks, not months. 
          <span className="text-primary-400 font-semibold"> $18M+ in value</span> created for our clients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
          
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
          >
            Start Your AI Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
            href="#results"
            className="px-8 py-4 glass-effect text-white rounded-lg font-semibold text-lg hover:bg-dark-800/50 transition-all inline-flex items-center justify-center"
          >
            See Results
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {[
            { value: '50+', label: 'AI Solutions Deployed' },
            { value: '$18M+', label: 'Value Created' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '30-60', label: 'Days to Deploy' },
          ].map((stat, index) => (
            <div key={index} className="glass-effect rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-dark-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
