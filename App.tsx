
import React from 'react';
import { CASE_STUDIES, SKILLS, EXPERIENCES } from './data';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const EXPERTISE_STATS = [
    { label: "EXPERIENCE", value: "5+", sub: "Years Senior Level" },
    { label: "TRAFFIC", value: "19M+", sub: "Monthly Organic Peak" },
    { label: "CLIENTS", value: "50+", sub: "Enterprise & SaaS" },
    { label: "ROI GROWTH", value: "180%", sub: "Average Scalability" }
  ];

  const STRATEGY_2026 = [
    {
      step: "01",
      title: "Semantic Content Silos",
      desc: "Moving beyond keywords to 'Entity Ownership'. I build content architecture that tells Google’s LLM exactly why your brand is the definitive authority in your niche."
    },
    {
      step: "02",
      title: "GEO (Generative Engine Optimization)",
      desc: "Optimizing for AI search snapshots. I engineer brand citations that ensure your product is the 'Recommended Solution' in ChatGPT, Gemini, and SGE."
    },
    {
      step: "03",
      title: "CRSO Framework",
      desc: "Conversion-Ready Search Optimization. We double revenue not by doubling traffic, but by capturing the top 1% of users with the highest purchase intent."
    }
  ];

  const TESTIMONIALS = [
    {
      client: "Remit Choice Ltd",
      role: "Operations Director",
      text: "Mubashar didn't just bring us traffic; he brought us users who actually convert. Our active user base grew by 379% under his strategic roadmap. His technical depth is unparalleled.",
      logo: "fa-money-bill-transfer"
    },
    {
      client: "E-commerce Enterprise",
      role: "Growth Head",
      text: "The nested Schema implementation was a game changer for our 100k+ SKU catalog. We saw a 25% lift in conversion rates within one year of his architectural changes.",
      logo: "fa-cart-shopping"
    },
    {
      client: "NoVA Prof. Services",
      role: "Managing Partner",
      text: "We were stuck for 8 months. Mubashar identified the intent-mismatch in weeks. Our monthly leads jumped from 22 to 127. Truly a results-first analyst.",
      logo: "fa-briefcase"
    }
  ];

  const CERTIFICATIONS = [
    { name: "SEO Professional Certificate", issuer: "Semrush Academy", icon: "fa-award" },
    { name: "Advanced Search Strategy", issuer: "Google Search Central", icon: "fa-certificate" },
    { name: "Digital Growth Blueprint", issuer: "HubSpot", icon: "fa-file-contract" }
  ];

  const FAQS = [
    {
      q: "How do you ensure SEO growth is sustainable after a Google core update?",
      a: "Sustainability is built into the architecture. By focusing on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) rather than search volume, we align with Google's goal: providing high-value information. I prioritize technical health and user intent, which are the only 'update-proof' signals."
    },
    {
      q: "Can you handle enterprise sites with millions of pages?",
      a: "Yes. For enterprise scale, my focus shifts to 'Crawl Efficiency'. I optimize internal link equity and use automated nested Schema to ensure search bots prioritize revenue-generating pages instead of getting lost in 'thin content' or redundant parameters."
    },
    {
      q: "What is your stance on AI-generated content in 2026?",
      a: "AI is a tool for efficiency, not a replacement for authority. My strategy involves 'AI-Assisted, Human-Verified' content. We use AI for clustering and formatting, but a subject matter expert must provide the unique 'Experience' signal that Google requires for top-tier rankings."
    },
    {
      q: "How soon can we expect to see doubling in revenue?",
      a: "While technical fixes can show results in 30-60 days, 'Doubling' is a mid-term goal. Through aggressive content pruning, intent-matching, and CRO, we typically aim for a significant ROI flip within 6-8 months, scaling exponentially as entity authority builds."
    }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#204ecf]/20">
      {/* 1. Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-[#eef1f4] px-6 md:px-12 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#204ecf] text-white flex items-center justify-center font-bold text-lg">M</div>
            <span className="font-black tracking-tighter text-[16px] text-[#262d3d] uppercase">Mubashar Shahzad</span>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="hidden xl:flex gap-8 items-center">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="toptal-nav-link text-[11px] uppercase tracking-[0.15em] font-bold">The Story</a>
              <a href="#career" onClick={(e) => scrollToSection(e, 'career')} className="toptal-nav-link text-[11px] uppercase tracking-[0.15em] font-bold">Career</a>
              <a href="#blueprint" onClick={(e) => scrollToSection(e, 'blueprint')} className="toptal-nav-link text-[11px] uppercase tracking-[0.15em] font-bold">2026 Strategy</a>
              <a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="toptal-nav-link text-[11px] uppercase tracking-[0.15em] font-bold">Success Stories</a>
              <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="toptal-nav-link text-[11px] uppercase tracking-[0.15em] font-bold">FAQ</a>
              <a 
                href="https://www.linkedin.com/in/mubashar-shahzad-seo-32b796236/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#0a66c2] hover:text-[#204ecf] transition-colors text-lg ml-2"
                title="Visit LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <a 
              href="mailto:mubasharshahzad726@gmail.com" 
              className="toptal-btn-primary text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-sm transition-all"
            >
              Consult Now
            </a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="pt-48 pb-20 px-6 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 z-10"
          >
            <div className="flex items-center gap-4 mb-6">
               <span className="text-[#204ecf] text-[12px] font-black uppercase tracking-[0.4em] block">Top-Tier SEO Architect</span>
               <a 
                href="https://www.linkedin.com/in/mubashar-shahzad-seo-32b796236/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:bg-[#204ecf] transition-all"
                title="Connect on LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
            <h1 className="text-5xl md:text-[72px] font-black text-[#262d3d] leading-[1.05] mb-10 tracking-tight">
              I Engineer <br/><span className="text-[#204ecf]">Revenue Engines</span>.
            </h1>
            <p className="text-xl md:text-2xl text-[#6e7a8a] max-w-2xl leading-relaxed mb-12 font-light">
              Don't settle for traffic. Demand revenue. I transform thin organic presence into dominant market authority for Enterprise and FinTech.
            </p>
            <div className="flex flex-wrap gap-5">
              <a 
                href="#portfolio" 
                onClick={(e) => scrollToSection(e, 'portfolio')} 
                className="toptal-btn-primary text-white px-12 py-5 font-bold uppercase text-[12px] tracking-[0.2em] shadow-2xl shadow-blue-500/30 text-center"
              >
                View Success Stories
              </a>
              <a 
                href="#blueprint" 
                onClick={(e) => scrollToSection(e, 'blueprint')} 
                className="toptal-btn-outline px-12 py-5 font-bold uppercase text-[12px] tracking-[0.2em] text-center"
              >
                My 2026 Strategy
              </a>
            </div>
          </motion.div>
          <div className="lg:col-span-5 hidden lg:block relative">
             <div className="bg-white border border-[#eef1f4] p-10 shadow-2xl relative z-10">
               <div className="mb-8 pb-8 border-b border-[#eef1f4]">
                  <p className="text-[11px] font-bold text-[#6e7a8a] uppercase tracking-widest mb-3">Core Performance</p>
                  <p className="text-2xl font-black text-[#262d3d]">The Revenue Framework</p>
               </div>
               <div className="space-y-6">
                  {SKILLS.slice(0, 4).map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[11px] font-bold uppercase mb-3">
                        <span className="text-[#262d3d] tracking-wider">{s.name}</span>
                        <span className="text-[#204ecf]">{s.level}%</span>
                      </div>
                      <div className="h-[2px] bg-[#f5f7f9]">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} className="h-full bg-[#204ecf]" />
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Validation Bar */}
      <section className="py-12 bg-[#262d3d] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {EXPERTISE_STATS.map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-1">{stat.label}</p>
                <p className="text-[11px] text-[#6e7a8a]">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Origin Story & Career Growth Timeline */}
      <section id="about" className="py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-[12px] font-black text-[#204ecf] uppercase tracking-[0.5em] mb-8">About Mubashar Shahzad</h2>
              <p className="text-4xl font-black text-[#262d3d] mb-8 leading-tight">From Creative Content to Technical Architect.</p>
              <div className="space-y-6 text-[#6e7a8a] text-lg leading-relaxed mb-12">
                <p>
                  My journey began in 2018. I quickly noticed a pattern: great content was invisible without the right technical skeleton.
                </p>
                <p>
                  I transitioned into SEO to solve that invisibility. Today, I architect ecosystems for global market leaders.
                </p>
              </div>
              
              {/* Timeline */}
              <div id="career" className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-[#f5f7f9]">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="relative pl-16 group">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-white border-2 border-[#f5f7f9] group-hover:border-[#204ecf] rounded-full flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 bg-[#dce1e6] group-hover:bg-[#204ecf] rounded-full"></div>
                    </div>
                    <p className="text-[11px] font-black text-[#204ecf] uppercase tracking-[0.3em] mb-2">{exp.period}</p>
                    <h4 className="text-xl font-black text-[#262d3d] mb-2">{exp.role}</h4>
                    <p className="text-[13px] font-bold text-[#6e7a8a] uppercase mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.highlights.slice(0, 2).map((h, j) => (
                        <li key={j} className="text-[#6e7a8a] text-sm leading-relaxed flex gap-3">
                          <span className="text-[#204ecf]">•</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:sticky lg:top-40">
              <div className="bg-[#262d3d] p-12 text-white relative overflow-hidden">
                <i className="fas fa-quote-right absolute -bottom-10 -right-10 text-[200px] text-white/5 opacity-10"></i>
                <h3 className="text-3xl font-black mb-8">The Philosophy</h3>
                <p className="text-xl font-light leading-relaxed mb-10 italic">
                  "I don't just 'do SEO'—I build systems. My background in high-level content allows me to fuse creativity with technical rigor, ensuring search engines and human users both find definitive value."
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-[2px] bg-blue-400"></div>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400">Mubashar Shahzad</span>
                </div>
              </div>

              {/* Certifications Mini Grid */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 border border-[#eef1f4] bg-white hover:border-[#204ecf]/20 transition-all">
                    <div className="w-10 h-10 bg-blue-50 text-[#204ecf] flex items-center justify-center rounded">
                      <i className={`fas ${cert.icon}`}></i>
                    </div>
                    <div>
                      <h5 className="font-black text-[#262d3d] text-sm">{cert.name}</h5>
                      <p className="text-[10px] font-bold text-[#6e7a8a] uppercase tracking-widest">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 2026 Strategy Blueprint */}
      <section id="blueprint" className="py-40 px-6 bg-[#262d3d] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[12px] font-black text-blue-400 uppercase tracking-[0.5em] mb-6">The Roadmap</h2>
          <p className="text-4xl md:text-6xl font-black text-white mb-20">How I Double Revenue in 2026</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {STRATEGY_2026.map((s, i) => (
              <div key={i} className="bg-[#1e2430] p-12 border border-[#3b4455] hover:border-blue-400 transition-all group text-left">
                <span className="text-5xl font-black text-blue-400/20 mb-8 block group-hover:text-blue-400 transition-colors">{s.step}</span>
                <h4 className="text-2xl font-black mb-6">{s.title}</h4>
                <p className="text-[#6e7a8a] text-lg leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Success Stories (Case Studies) */}
      <section id="portfolio" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex justify-between items-end flex-wrap gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[12px] font-black text-[#204ecf] uppercase tracking-[0.5em] mb-6">Case Studies</h2>
              <p className="text-4xl md:text-5xl font-black text-[#262d3d]">Success Stories & ROI Proof</p>
            </div>
            <div className="bg-blue-50 px-8 py-4 border-l-4 border-[#204ecf]">
              <p className="text-[11px] font-black text-[#262d3d] uppercase tracking-widest mb-1">Total Impact</p>
              <p className="text-2xl font-black text-[#204ecf]">19M+ Sessions Managed</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {CASE_STUDIES.map((study, i) => (
              <div key={i} className="toptal-card p-10 flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} d="M0 80 Q 25 75, 50 50 T 100 20" fill="none" stroke="#204ecf" strokeWidth="5" />
                  </svg>
                </div>
                <span className="text-[10px] font-black text-[#204ecf] uppercase tracking-[0.3em] mb-4">{study.niche}</span>
                <h3 className="text-2xl font-black text-[#262d3d] mb-6 leading-tight">{study.client}</h3>
                <div className="bg-[#f5f7f9] p-5 border-l-2 border-[#204ecf] mb-6">
                  <p className="text-[10px] font-black text-[#6e7a8a] uppercase tracking-widest mb-2">The Challenge</p>
                  <p className="text-[13px] text-[#262d3d] italic leading-relaxed">"{study.issue}"</p>
                </div>
                <p className="text-[#6e7a8a] text-base leading-relaxed mb-10 flex-grow">{study.strategy}</p>
                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#eef1f4]">
                  {study.metrics.slice(0, 2).map((m, j) => (
                    <div key={j}>
                      <p className="text-[9px] font-black uppercase text-[#6e7a8a] mb-1">{m.label}</p>
                      <p className="text-xl font-black text-[#262d3d]">{m.growth}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Wall of Trust (Testimonials) */}
          <div className="pt-24 border-t border-[#eef1f4]">
            <h2 className="text-[12px] font-black text-[#204ecf] uppercase tracking-[0.5em] mb-12 text-center">Top Rated Clients</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-[#f5f7f9] p-10 relative group hover:bg-[#204ecf] transition-all duration-500">
                  <i className={`fas ${t.logo} text-4xl mb-8 text-[#204ecf] group-hover:text-white transition-colors`}></i>
                  <p className="text-lg leading-relaxed text-[#6e7a8a] group-hover:text-white/90 transition-colors mb-10 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <h5 className="font-black text-[#262d3d] group-hover:text-white transition-colors">{t.client}</h5>
                    <p className="text-[11px] font-bold text-[#6e7a8a] group-hover:text-white/60 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section id="faq" className="py-40 px-6 bg-[#f5f7f9] border-y border-[#eef1f4]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[12px] font-black text-[#204ecf] uppercase tracking-[0.5em] mb-6">Knowledge Base</h2>
          <p className="text-4xl md:text-5xl font-black text-[#262d3d] mb-24">Frequently Asked Questions</p>
          <div className="space-y-8 text-left">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white border border-[#eef1f4] p-10 hover:shadow-xl transition-all duration-300">
                <h4 className="text-xl font-black text-[#262d3d] mb-4 flex gap-4">
                  <span className="text-[#204ecf]">Q.</span>
                  {faq.q}
                </h4>
                <div className="flex gap-4">
                  <span className="text-[#6e7a8a] font-black">A.</span>
                  <p className="text-[#6e7a8a] text-lg leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer id="contact" className="bg-[#262d3d] pt-32 pb-16 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[#204ecf] text-white flex items-center justify-center font-black text-2xl">M</div>
                <span className="font-black tracking-tighter text-2xl uppercase">Mubashar Shahzad</span>
              </div>
              <p className="text-[#6e7a8a] max-w-md mb-12 text-lg leading-relaxed">
                Architecting high-performance organic growth for global market leaders. 2026 Ready.
              </p>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/mubashar-shahzad-seo-32b796236/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 border border-[#3b4455] flex items-center justify-center hover:bg-[#204ecf] hover:border-[#204ecf] transition-all"><i className="fab fa-linkedin-in text-xl"></i></a>
                <a href="mailto:mubasharshahzad726@gmail.com" className="w-14 h-14 border border-[#3b4455] flex items-center justify-center hover:bg-[#204ecf] hover:border-[#204ecf] transition-all"><i className="fas fa-envelope text-xl"></i></a>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10">Capabilities</h4>
              <ul className="space-y-6 text-[#6e7a8a] text-[15px] font-bold uppercase tracking-widest">
                <li>E-E-A-T Architecture</li>
                <li>AI Search Prepping</li>
                <li>Conversion Growth</li>
                <li>Enterprise Audits</li>
              </ul>
            </div>
            
            <div className="lg:col-span-4">
              <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10">Contact Hub</h4>
              <div className="space-y-8 text-xl font-bold">
                <p>+92 305 9158010</p>
                <p>mubasharshahzad726@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-[#3b4455] flex flex-col md:flex-row justify-between items-center gap-8 text-[#6e7a8a] text-[11px] font-black uppercase tracking-[0.3em]">
            <p>© 2025 Mubashar Shahzad. Senior SEO Architect.</p>
            <div className="flex gap-12 text-white">
              <span>Enterprise Ready</span>
              <span>ROI Focused</span>
              <span>2026 Strategy Active</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
