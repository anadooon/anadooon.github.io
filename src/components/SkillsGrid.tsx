import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Server, Code, Disc, Sliders } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../utils/audio';

export const SkillsGrid: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categoryIcons = [Server, Code, Disc];

  return (
    <section id="skills" className="py-24 relative border-t border-white/10 light:border-slate-300 bg-obsidian-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="font-mono text-xs text-chrome-400 light:text-slate-500 uppercase tracking-widest block mb-2">
              {t.skills.sectionTag}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white light:text-slate-900 tracking-tight">
              {t.skills.title}
            </h2>
          </div>
          <p className="font-mono text-xs text-chrome-400 light:text-slate-600 max-w-sm">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs (Interactive Switcher) */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10 light:border-slate-300">
          {t.skills.categories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => {
                  audioEngine.playClick(900 + (idx * 200), 'sine', 0.03);
                  setActiveCategory(idx);
                }}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-sm font-mono text-xs tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-chrome-100 text-obsidian-950 font-bold shadow-metallic'
                    : 'bg-obsidian-900 light:bg-slate-100 text-chrome-300 light:text-slate-700 border border-white/10 light:border-slate-300 hover:border-chrome-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {t.skills.categories[activeCategory].items.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -3 }}
              onMouseEnter={() => audioEngine.playClick(1400 + (index * 60), 'triangle', 0.015)}
              className="relative group rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/15 light:border-slate-300 p-5 shadow-metallic light:shadow-metallic-light overflow-hidden transition-all duration-300 hover:border-chrome-300 hover:shadow-metallic-hover"
            >
              {/* Metallic Sheen diagonal hover effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-chrome-400 light:text-slate-600">
                  {skill.tag}
                </span>
                <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  {skill.level}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-white light:text-slate-900 mb-2 group-hover:text-chrome-100 transition-colors">
                {skill.name}
              </h3>

              <p className="font-body text-xs text-chrome-400 light:text-slate-600 leading-relaxed">
                {skill.details}
              </p>

              {/* Bottom Subtle Metallic Accent Line */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-chrome-500">
                <span>SLOT_0{index + 1}</span>
                <span className="group-hover:text-amber-400 transition-colors">IO_READY</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Competencies strip */}
        <div className="mt-12 p-4 rounded-sm bg-obsidian-900/50 light:bg-slate-100 border border-white/10 light:border-slate-300 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-chrome-300 light:text-slate-600">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-chrome-400" />
            <span className="font-bold text-white light:text-slate-900">CORE STANDARD:</span>
            <span>Zero "AI Slop" Codebases • Semantic HTML5 • Strict Types</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-chrome-400">
            <span>WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span>Responsive 320px - 4K</span>
            <span>•</span>
            <span>Git Submodules & CI/CD</span>
          </div>
        </div>

      </div>
    </section>
  );
};
