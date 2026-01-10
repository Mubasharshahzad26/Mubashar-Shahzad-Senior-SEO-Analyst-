
export interface CaseStudy {
  id: string;
  client: string;
  niche: string;
  issue: string;
  strategy: string;
  metrics: {
    label: string;
    value: string;
    growth: string;
  }[];
  duration: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}
