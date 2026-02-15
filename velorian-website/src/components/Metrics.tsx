import { metrics } from '@/lib/data';
import { DollarSign, TrendingUp, Zap, Rocket } from 'lucide-react';
const iconMap: { [key: string]: any } = {
  DollarSign,
  TrendingUp,
  Zap,
  Rocket,
};
export default function Metrics() {
  return (
    <section id="results" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 font-display">
            Real <span className="text-gradient">Results</span>, Real Impact
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            Our AI solutions deliver measurable ROI from day one. Here&apos;s what we&apos;ve achieved for our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-dark-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-dark-800 mb-1">{metric.label}</div>
                <div className="text-sm text-dark-500">{metric.subtext}</div>
              </div>
            );
          })}
        </div>
        <div className="bg-white rounded-2xl p-8 lg:p-12 border border-dark-200 shadow-sm">
          <h3 className="text-3xl font-bold text-dark-900 mb-8 text-center font-display">
            How We Create <span className="text-gradient">Value</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-3">$5.2M+</div>
              <div className="text-xl font-semibold text-dark-800 mb-2">Direct Cost Savings</div>
              <div className="text-dark-500">
                Reduced operational costs through automation, efficiency gains, and optimized processes
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-accent-500 mb-3">$12.8M+</div>
              <div className="text-xl font-semibold text-dark-800 mb-2">Revenue Growth</div>
              <div className="text-dark-500">
                Increased sales through better recommendations, conversion optimization, and market expansion
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-500 mb-3">847%</div>
              <div className="text-xl font-semibold text-dark-800 mb-2">Efficiency Boost</div>
              <div className="text-dark-500">
                Average productivity improvement across automation projects and AI implementations
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border border-primary-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-dark-900 mb-2">Total Value Created: $18M+</h4>
                <p className="text-dark-600">
                  Combining direct savings and revenue growth, our AI solutions have generated over $18 million
                  in measurable value for our clients in 2024 alone. Every project is designed for maximum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
