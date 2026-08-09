'use client';
import { ArrowRight, Calendar, Zap, Rocket, CheckCircle } from 'lucide-react';
export default function CTA() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-10 w-20 h-20 bg-white/20 rounded-full blur-2xl animate-pulse-fast"></div>
          <div className="absolute bottom-0 right-10 w-32 h-32 bg-accent-300/30 rounded-full blur-2xl animate-pulse-fast" style={{ animationDelay: '1s' }}></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full mb-8">
              <Rocket className="w-5 h-5 text-white" />
              <span className="text-sm font-bold text-white uppercase tracking-wide">Ready to Launch?</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 font-display leading-tight">
              START YOUR
              <br />
              30-DAY SPRINT
            </h2>
            <p className="text-3xl text-primary-50 mb-12 max-w-3xl mx-auto font-bold">
              Let&apos;s build your AI solution. Fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="https://velorian.ai#contact"
                className="group px-12 py-6 bg-white text-primary-600 rounded-2xl font-black text-2xl shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all inline-flex items-center justify-center gap-3"
              >
                <Calendar className="w-7 h-7" />
                Book Free Consultation
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="https://velorian.ai"
                className="px-12 py-6 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-2xl font-black text-2xl hover:bg-white/20 transition-all"
              >
                Learn About Velorian
              </a>
            </div>
            {/* Fast stats */}
            <div className="grid grid-cols-2 gap-6 max-w-xl mx-auto mb-12">
              {[
                { icon: Zap, label: '30 days guaranteed' },
                { icon: CheckCircle, label: '95% success rate' },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <stat.icon className="w-8 h-8 text-white" />
                  <span className="text-sm text-white font-bold text-center">{stat.label}</span>
                </div>
              ))}
            </div>
            {/* Footer note */}
            <div className="pt-8 border-t border-white/30">
              <p className="text-white/80 text-lg font-medium">
                Part of the <span className="text-white font-bold">Velorian AI</span> family
                <br />
                <a href="https://velorian.ai" className="text-white font-bold hover:underline">
                  velorian.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
