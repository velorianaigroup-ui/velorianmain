import { ConsultingBrand, ProcessPhase, CaseStudy, FAQ } from '@/types';
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
export const process: ProcessPhase[] = [
  {
    day: 'Days 1-5',
    title: 'Discovery & Strategy',
    activities: [
      'Deep-dive into your business processes',
      'Identify highest-impact AI opportunities',
      'Define success metrics and KPIs',
      'Create detailed implementation roadmap',
    ],
  },
  {
    day: 'Days 6-15',
    title: 'Build & Develop',
    activities: [
      'Architect the AI solution',
      'Develop and train models',
      'Integrate with existing systems',
      'Daily progress updates',
    ],
  },
  {
    day: 'Days 16-25',
    title: 'Test & Optimize',
    activities: [
      'Rigorous testing and QA',
      'Performance optimization',
      'User acceptance testing',
      'Fine-tune based on feedback',
    ],
  },
  {
    day: 'Days 26-30',
    title: 'Launch & Scale',
    activities: [
      'Production deployment',
      'Team training and handoff',
      'Monitoring setup',
      'Post-launch support plan',
    ],
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
    question: 'Can you really deliver in 30 days?',
    answer: 'Yes. Our 30-day sprint methodology is battle-tested across 50+ projects. We focus on high-impact, production-ready solutions with a clear scope defined in the first 5 days. Complex enterprise solutions may use our 60-day timeline.',
  },
  {
    question: 'What types of AI solutions do you build?',
    answer: 'We build chatbots, automation systems, predictive analytics, recommendation engines, document processing, content generation tools, and custom ML models. If it involves AI, we can build it fast.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Every project is custom-quoted based on scope and complexity. We offer transparent, fixed-price quotes after our free consultation. No hidden fees, no surprises. Most 30-day projects range from $25K-$75K with ROI typically within 3 months.',
  },
  {
    question: 'What if the project takes longer than 30 days?',
    answer: 'We guarantee our timeline. If we go over 30 days due to our fault, you don\'t pay extra. Our discovery phase ensures we scope correctly so this rarely happens. For larger projects, we recommend our 60-day timeline upfront.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Absolutely. Every project includes 30 days of post-launch support. We also offer monthly maintenance plans for monitoring, optimization, and updates to keep your AI solution performing at its best.',
  },
];
