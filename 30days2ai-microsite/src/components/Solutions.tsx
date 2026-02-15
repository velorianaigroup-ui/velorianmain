'use client';
import { solutions } from '@/lib/data';
import { MessageSquare, Zap, TrendingUp, Target, Clock, CheckCircle, ArrowRight } from 'lucide-react';
const iconMap: { [key: string]: any } = {
  MessageSquare,
  Zap,
  TrendingUp,
  Target,
};
export default function Solutions() {
  return (
    <section id="solutions" className="px-6 py-20 md:px-12 lg:px-24 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-display">
            <span className="text-gradient">RAPID SOLUTIONS</span>
          </h2>
          <p className="text-2xl text-dark-300 max-w-3xl mx-auto">
            Proven AI implementations designed for speed without compromising quality
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            return (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-primary-500/20 to-accent-400/20 rounded-xl">
                    <Icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary-500/20 rounded-full border border-primary-500/30">
                    <Clock className="w-4 h-4 text-primary-400" />
                    <span className="text-sm font-semibold text-primary-400">{solution.timeline}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 font-display">
                  {solution.title}
                </h3>
                <p className="text-dark-300 text-lg mb-6">
                  {solution.description}
                </p>
                <div className="space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span className="text-dark-200">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center glass-effect rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-white mb-4 font-display">
            Need Something Custom?
          </h3>
          <p className="text-xl text-dark-300 mb-6 max-w-2xl mx-auto">
            While we focus on proven solutions for speed, we can customize any implementation to your specific needs within the 30-day timeline.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-400 text-white rounded-lg font-semibold text-lg hover:shadow-xl transition-all"
          >
            Discuss Your Needs
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
