'use client';
import { ArrowRight, Calendar, Zap, TrendingUp, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-24 bg-gradient-to-br from-electric-500 via-electric-600 to-lime-500">
      <div className="max-w-5xl mx-auto text-center relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-10 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
        <div className="absolute bottom-0 right-10 w-32 h-32 bg-lime-300/30 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/40 rounded-full mb-8">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm font-bold text-white uppercase tracking-wide">Ready to Launch?</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 font-display leading-tight">
            START YOUR
            <br />
            30-DAY SPRINT
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-semibold">
            Let&apos;s build your AI solution. Fast. No fluff. Guaranteed results.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
            <a
              href="https://velorian.ai#contact"
              className="group px-10 py-5 bg-white text-electric-600 rounded-2xl font-black text-xl shadow-2xl hover:shadow-white/40 hover:-translate-y-1 transition-all inline-flex items-center justify-center gap-3"
            >
              <Calendar className="w-6 h-6" />
              Book Free Consultation
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://velorian.ai"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-2xl font-black text-xl hover:bg-white/20 transition-all"
            >
              Learn About Velorian
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            {[
              { icon: Zap, label: '30 days guaranteed' },
              { icon: TrendingUp, label: '$180K avg. saved' },
              { icon: CheckCircle, label: '95% success rate' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <stat.icon className="w-7 h-7 text-white" />
                <span className="text-sm text-white font-bold text-center">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/30">
            <p className="text-white/80 text-base font-medium">
              Part of the <span className="text-white font-bold">Velorian AI</span> family
              <br />
              <a href="https://velorian.ai" className="text-white font-bold hover:underline">
                velorian.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
