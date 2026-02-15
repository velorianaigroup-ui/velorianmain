#!/bin/bash
# src/types/index.ts
cat > src/types/index.ts << 'EOF'
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
EOF
echo "Types created ✓"
