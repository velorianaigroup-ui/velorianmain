export interface Testimonial {
  id: string;
  client: string;
  role: string;
  company: string;
  logo?: string;
  content: string;
  result: string;
  moneySaved?: number;
  efficiencyGain?: number;
  revenueIncrease?: number;
  category: 'B2B' | 'B2C';
  industry: string;
  projectType: '30days' | '60days';
}
export interface Metric {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}
export interface ConsultingBrand {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  timeline: string;
  color: string;
}
export interface ProcessPhase {
  day: string;
  title: string;
  activities: string[];
}
export interface CaseStudy {
  company: string;
  industry: string;
  timeline: string;
  challenge: string;
  solution: string;
  result: string;
}
export interface FAQ {
  question: string;
  answer: string;
}
