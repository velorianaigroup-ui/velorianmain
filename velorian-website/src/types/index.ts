export interface ConsultingBrand {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  timeline: string;
  color: string;
}
export interface CaseStudy {
  source: 'industry' | 'client';
  attribution: string;
  stat: string;
  description?: string;
}
export interface FAQ {
  question: string;
  answer: string;
}
