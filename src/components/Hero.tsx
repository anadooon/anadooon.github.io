import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDownRight, Terminal, Activity, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../utils/audio';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const [activeChord, setActiveChord] = useState<string | null>(null);
  const [distortionMode, setDistortionMode] = useState<boolean>(true);

  const chords = [
    { name: 'Drop D (D2)', freq: 73.42 },
    { name: 'Power E (E2)', freq: 82.41 },
    { name: 'Heavy A (A2)', freq: 110.0 },
    { name: 'Lead D (D3)', freq: 146.83 },
  ];

  const handlePlayRiff = (chordName: string, freq: number) => {
    setActiveChord(chordName);
    audioEngine.playPowerChord(freq, distortionMode);
    setTimeout(() => setActiveChord(null), 800);
  };

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden cyber-fret-pattern">
      
      {/* Background ambient metallic sheen elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Manifesto (7 cols) */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-obsidian-900 border border-white/20 light:border-slate-400 text-chrome-200 light:text-slate-800 text-[11px] font-mono tracking-widest uppercase shadow-inner-bevel">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75" />
                {t.hero.badge}
              </span>
              <span className="font-mono text-xs text-chrome-500">
                // SYS_INIT 2025
              </span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tighter leading-[0.95] text-white light:text-slate-950 mb-6">
              <span className="block chrome-gradient-text">
                {t.hero.titleLine1}
              </span>
              <span className="block text-chrome-300 light:text-slate-800">
                {t.hero.titleLine2}
              </span>
              <span className="block relative inline-block text-white light:text-black">
                {t.hero.titleLine3}
                {/* Metallic guitar string line accent */}
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-chrome-100 via-chrome-400 to-transparent rounded-full opacity-80" />
              </span>
            </h1>

            {/* Mission Statement / Description */}
            <p className="text-base sm:text-lg text-chrome-300 light:text-slate-700 max-w-2xl font-body leading-relaxed mb-8">
              {t.hero.description}
            </p>

            {/* Actions & Interactive Guitar Riff Trigger */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => audioEngine.playClick(1000, 'square', 0.04)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-chrome-100 text-obsidian-950 font-mono font-bold text-sm tracking-tight hover:bg-white shadow-metallic transition-all"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowDownRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handlePlayRiff('Drop D', 73.42)}
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/20 light:border-slate-400 text-chrome-200 light:text-slate-900 font-mono text-sm hover:border-chrome-300 light:hover:border-slate-600 transition-all shadow-inner-bevel group"
                aria-label={t.hero.guitarRiffBtn}
              >
                <Zap className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>{t.hero.guitarRiffBtn}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 font-mono text-chrome-400">
                  WebAudio
                </span>
              </motion.button>

              <a
                href="#contact"
                onClick={() => audioEngine.playClick(600, 'sine', 0.02)}
                className="px-4 py-3 text-xs font-mono text-chrome-400 light:text-slate-600 hover:text-white light:hover:text-black transition-colors"
              >
                {t.hero.ctaContact} →
              </a>
            </div>

            {/* Small Hardware & Stack Pills */}
            <div className="mt-10 pt-6 border-t border-white/10 light:border-slate-300 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-chrome-400 light:text-slate-600">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-chrome-400" />
                Linux / Debian / Bash
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-chrome-400" />
                React / TypeScript / Vite
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-chrome-400" />
                Web Audio API DSP
              </span>
            </div>

          </motion.div>

          {/* Right Column: Industrial 19" Rack-Mount SysAdmin / Amp Blade (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/20 light:border-slate-400 p-6 shadow-metallic light:shadow-metallic-light overflow-hidden">
              
              {/* Rack Mount Screws (Industrial hardware feel) */}
              <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full border border-chrome-500/60 flex items-center justify-center text-[7px] font-mono text-chrome-500 select-none">+</div>
              <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full border border-chrome-500/60 flex items-center justify-center text-[7px] font-mono text-chrome-500 select-none">+</div>
              <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full border border-chrome-500/60 flex items-center justify-center text-[7px] font-mono text-chrome-500 select-none">+</div>
              <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full border border-chrome-500/60 flex items-center justify-center text-[7px] font-mono text-chrome-500 select-none">+</div>

              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-white/10 light:border-slate-300 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-chrome-400" />
                  <span className="font-mono text-xs font-bold text-chrome-200 light:text-slate-900 tracking-wide">
                    {t.hero.terminal.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Live Terminal Log Feeds */}
              <div className="font-mono text-xs space-y-2 bg-obsidian-950 light:bg-slate-900 text-chrome-300 p-4 rounded-sm border border-white/10 shadow-inner">
                <div className="text-chrome-500 text-[11px]">
                  # host_os: <span className="text-chrome-200">{t.hero.terminal.host}</span>
                </div>
                <div className="text-chrome-500 text-[11px]">
                  # ip_route: <span className="text-emerald-400">{t.hero.terminal.routing}</span>
                </div>
                <div className="text-chrome-500 text-[11px]">
                  # stack: <span className="text-cyan-300">{t.hero.terminal.runtime}</span>
                </div>
                <div className="text-chrome-500 text-[11px]">
                  # guitar_dsp: <span className="text-amber-400">{t.hero.terminal.rig}</span>
                </div>
                <div className="pt-2 border-t border-white/10 text-[11px] text-chrome-400 flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">&gt;&gt;</span>
                  <span>{t.hero.terminal.ready}</span>
                </div>
              </div>

              {/* Tube Amp Audio Visualizer Simulation */}
              <div className="mt-4 p-4 rounded-sm bg-obsidian-950/80 light:bg-slate-200/90 border border-white/10 light:border-slate-300">
                <div className="flex items-center justify-between text-xs font-mono text-chrome-400 light:text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-500" />
                    HARMONIC SPECTRUM
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDistortionMode(!distortionMode)}
                      className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                        distortionMode
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-white/10 text-chrome-400'
                      }`}
                    >
                      {distortionMode ? 'HIGH-GAIN TUBE' : 'CLEAN TONE'}
                    </button>
                  </div>
                </div>

                {/* Animated EQ Bars */}
                <div className="h-12 flex items-end justify-between gap-1.5 px-2 bg-black/40 rounded py-1">
                  {[45, 80, 60, 95, 70, 85, 40, 90, 65, 75, 50, 88].map((baseHeight, i) => (
                    <motion.div
                      key={i}
                      className={`w-full rounded-t-sm transition-all duration-200 ${
                        activeChord
                          ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                          : 'bg-chrome-400 light:bg-slate-600 opacity-70'
                      }`}
                      style={{
                        height: activeChord ? `${Math.min(100, baseHeight + 15)}%` : `${baseHeight * 0.4}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Chords Strumming Buttons Bar */}
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {chords.map((chord) => (
                    <button
                      key={chord.name}
                      onClick={() => handlePlayRiff(chord.name, chord.freq)}
                      className={`py-1.5 px-1 rounded-sm border text-center transition-all ${
                        activeChord === chord.name
                          ? 'border-amber-400 bg-amber-400/20 text-white font-bold scale-95'
                          : 'border-white/10 light:border-slate-300 bg-obsidian-900 light:bg-white text-chrome-300 light:text-slate-800 hover:border-chrome-400'
                      }`}
                      title={`Tocar acorde ${chord.name}`}
                    >
                      <span className="block font-mono text-[11px] font-bold">
                        {chord.name.split(' ')[0]}
                      </span>
                      <span className="block font-mono text-[9px] text-chrome-500">
                        {chord.name.split(' ')[1]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
