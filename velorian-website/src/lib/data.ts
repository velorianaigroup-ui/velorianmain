import { ConsultingBrand, CaseStudy, FAQ } from '@/types';
export const consultingBrands: ConsultingBrand[] = [
  {
    name: '30 Days to AI',
    domain: '30days2ai.com',
    tagline: 'AI Solutions Deployed in 30 Days',
    description: 'Rapid AI implementation for businesses ready to transform quickly. Perfect for focused solutions like chatbots, automation, and predictive analytics.',
    timeline: '30 days',
    color: 'primary',
  },
  {
    name: '60 Days to AI',
    domain: '60days2ai.com',
    tagline: 'Complex AI Systems in 60 Days',
    description: 'Comprehensive AI solutions for enterprises requiring custom ML models, multi-system integrations, and advanced data pipelines.',
    timeline: '60 days',
    color: 'accent',
  },
];
export const caseStudies: CaseStudy[] = [
  {
    source: 'industry',
    attribution: 'IDC Research, 2025',
    stat: '$3.70 in returns for every $1 spent',
  },
  {
    source: 'industry',
    attribution: 'IBM 2025 CEO Study',
    stat: 'Only 1 in 4 AI initiatives deliver their expected ROI',
    description: 'The difference is a proper business case before the money starts flowing.',
  },
];
export const faqs: FAQ[] = [
  {
    question: 'Do I need clean data first?',
    answer: 'No. Most engagements start with the data you already have. We identify what\'s usable, patch the gaps that actually matter, and build around the rest. "Wait until the data\'s perfect" is usually just a way to delay starting.',
  },
  {
    question: 'What if my team isn\'t technical?',
    answer: 'That\'s the default, not the exception. We build the system, document it in plain language, and train your team to run it day to day. No engineering background required.',
  },
  {
    question: 'What happens after the 30/60 days?',
    answer: 'You own everything we build — code, infrastructure, documentation. Ongoing support is available if you want it, but nothing ships locked behind a subscription.',
  },
  {
    question: 'Isn\'t AI overhyped?',
    answer: 'Some of it, yes. IBM\'s 2025 CEO study found only 1 in 4 AI initiatives deliver their expected ROI, and MIT\'s "GenAI Divide" report found 95% of generative AI pilots failed to show measurable bottom-line impact. Most of that gap comes down to skipping the business case before the build starts. We don\'t skip it. That\'s the difference between an AI project and an AI investment.',
  },
];
