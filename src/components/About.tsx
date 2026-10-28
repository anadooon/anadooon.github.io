import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Network, Code2, Music, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../utils/audio';

export const About: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const icons = [Network, Code2, Music];

  return (
    <section id="about" className="py-24 relative border-t border-white/10 light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-chrome-400 light:text-slate-500 uppercase tracking-widest block mb-2">
            {t.about.sectionTag}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white light:text-slate-900 tracking-tight max-w-3xl">
            {t.about.title}
          </h2>
        </div>

        {/* Bento Grid: Narrative & Dual Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Manifesto Box (7 Cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/15 light:border-slate-300 p-8 shadow-metallic light:shadow-metallic-light flex flex-col justify-between"
          >
            <div className="space-y-5 text-chrome-300 light:text-slate-700 font-body text-base sm:text-lg leading-relaxed">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p className="text-white light:text-slate-950 font-medium">
                {t.about.p3}
              </p>
            </div>

            {/* Hardware badge signature */}
            <div className="mt-8 pt-6 border-t border-white/10 light:border-slate-300 flex items-center justify-between text-xs font-mono text-chrome-400 light:text-slate-500">
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-chrome-300" />
                SYSTEM RUNTIME: POSIX & CHROMIUM READY
              </span>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10">
                ES / EN DUAL CAPABILITY
              </span>
            </div>
          </motion.div>

          {/* Metric Columns (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {t.about.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -2 }}
                onMouseEnter={() => audioEngine.playClick(1100 + (idx * 200), 'sine', 0.02)}
                className="flex-1 rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/15 light:border-slate-300 p-6 flex flex-col justify-center shadow-metallic light:shadow-metallic-light group transition-colors hover:border-chrome-400"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-chrome-400 light:text-slate-500 mb-1">
                  {m.label}
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-white light:text-slate-900 chrome-gradient-text tracking-tight group-hover:text-chrome-100 transition-colors">
                  {m.value}
                </div>
                <div className="font-mono text-xs text-chrome-400 light:text-slate-600 mt-1">
                  {m.detail}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Timeline Evolution */}
        <div className="mt-16">
          <div className="font-mono text-xs text-chrome-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chrome-400" />
            {t.about.timelineTitle}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.timeline.map((step, index) => {
              const StepIcon = icons[index % icons.length];
              return (
                <motion.div
                  key={step.title}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="rounded-sm bg-obsidian-900/60 light:bg-slate-100 border border-white/10 light:border-slate-300 p-6 relative group hover:border-white/30 light:hover:border-slate-500 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-chrome-400 light:text-slate-500 font-bold">
                      {step.period}
                    </span>
                    <StepIcon className="w-4 h-4 text-chrome-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white light:text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm font-body text-chrome-300 light:text-slate-700 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
