import { useState } from 'react';
import { testimonials } from '@/lib/data';
import { Building2, TrendingUp, DollarSign, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  const currentTestimonial = testimonials[currentIndex];
  return (
    <section id="testimonials" className="section-padding bg-dark-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 mb-4 font-display">
            <span className="text-gradient">Success Stories</span> That Speak Volumes
          </h2>
          <p className="text-xl text-dark-500 max-w-2xl mx-auto">
            Real businesses, real results. See how we&apos;ve helped companies transform with AI.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 lg:p-12 mb-12 relative border border-dark-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full border border-primary-200">
              <Building2 className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">{currentTestimonial.industry}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-dark-50 border border-dark-200 rounded-lg hover:bg-dark-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-dark-600" />
              </button>
              <span className="text-dark-500 text-sm px-3">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-dark-50 border border-dark-200 rounded-lg hover:bg-dark-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-dark-600" />
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="text-6xl text-primary-200 font-serif mb-4">&ldquo;</div>
              <p className="text-xl text-dark-700 leading-relaxed mb-6">
                {currentTestimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl font-bold text-white">
                  {currentTestimonial.client.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-dark-900 text-lg">{currentTestimonial.client}</div>
                  <div className="text-dark-500">{currentTestimonial.role}, {currentTestimonial.company}</div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-dark-50 rounded-lg border border-primary-200">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold text-dark-900">Key Result</span>
                </div>
                <p className="text-dark-600">{currentTestimonial.result}</p>
              </div>
              {currentTestimonial.moneySaved && (
                <div className="p-4 bg-dark-50 rounded-lg border border-primary-200">
                  <div className="flex items-center gap-3 mb-2">
                    <DollarSign className="w-5 h-5 text-primary-500" />
                    <span className="font-semibold text-dark-900">Money Saved</span>
                  </div>
                  <p className="text-3xl font-bold text-gradient">
                    ${(currentTestimonial.moneySaved / 1000).toFixed(0)}K
                  </p>
                </div>
              )}
              {currentTestimonial.revenueIncrease && (
                <div className="p-4 bg-dark-50 rounded-lg border border-accent-200">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent-500" />
                    <span className="font-semibold text-dark-900">Revenue Increase</span>
                  </div>
                  <p className="text-3xl font-bold text-gradient">
                    ${(currentTestimonial.revenueIncrease / 1000).toFixed(0)}K
                  </p>
                </div>
              )}
              {currentTestimonial.efficiencyGain && (
                <div className="p-4 bg-dark-50 rounded-lg border border-primary-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-primary-500" />
                    <span className="font-semibold text-dark-900">Efficiency Gain</span>
                  </div>
                  <p className="text-3xl font-bold text-gradient">
                    {currentTestimonial.efficiencyGain}%
                  </p>
                </div>
              )}
              <div className="flex items-center gap-2 pt-2">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentTestimonial.projectType === '30days'
                    ? 'bg-primary-50 text-primary-600 border border-primary-200'
                    : 'bg-accent-50 text-accent-600 border border-accent-200'
                }`}>
                  {currentTestimonial.projectType === '30days' ? '30 Days to AI' : '60 Days to AI'}
                </div>
                <div className="px-3 py-1 bg-dark-100 rounded-full text-sm font-medium text-dark-600">
                  {currentTestimonial.category}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.filter((_, idx) => idx !== currentIndex).slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 border border-dark-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              onClick={() => setCurrentIndex(testimonials.indexOf(testimonial))}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-lg font-bold text-white">
                  {testimonial.client.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-dark-900">{testimonial.client}</div>
                  <div className="text-sm text-dark-500">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-dark-600 text-sm line-clamp-3 mb-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                {testimonial.moneySaved && (
                  <div className="px-3 py-1 bg-primary-50 rounded-full text-xs font-semibold text-primary-600 border border-primary-200">
                    ${(testimonial.moneySaved / 1000).toFixed(0)}K saved
                  </div>
                )}
                {testimonial.revenueIncrease && (
                  <div className="px-3 py-1 bg-accent-50 rounded-full text-xs font-semibold text-accent-600 border border-accent-200">
                    +${(testimonial.revenueIncrease / 1000).toFixed(0)}K revenue
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
