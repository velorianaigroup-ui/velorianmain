import { ConsultingBrand, CaseStudy } from '@/types';
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
