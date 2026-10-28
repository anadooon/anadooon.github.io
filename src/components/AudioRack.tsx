import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../utils/audio';

export const AudioRack: React.FC = () => {
  const { t } = useLanguage();
  const [isDistorted, setIsDistorted] = useState<boolean>(true);
  const [activePad, setActivePad] = useState<number | null>(null);

  const guitarRiffs = [
    { label: 'Drop D5', note: 'D2 / 73.4Hz', freq: 73.42 },
    { label: 'F5 Power', note: 'F2 / 87.3Hz', freq: 87.31 },
    { label: 'G5 Power', note: 'G2 / 98.0Hz', freq: 97.99 },
    { label: 'A5 Heavy', note: 'A2 / 110Hz', freq: 110.0 },
    { label: 'C5 Punch', note: 'C3 / 130.8Hz', freq: 130.81 },
  ];

  const handleTriggerChord = (idx: number, freq: number) => {
    setActivePad(idx);
    audioEngine.playPowerChord(freq, isDistorted);
    setTimeout(() => setActivePad(null), 700);
  };

  return (
    <section className="py-16 relative border-t border-white/10 light:border-slate-300 bg-obsidian-900/60 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-sm bg-obsidian-950 light:bg-white border border-white/20 light:border-slate-300 p-6 sm:p-8 shadow-metallic light:shadow-metallic-light relative overflow-hidden">
          
          {/* Industrial Rack Accents */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-white/10 light:border-slate-200 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Radio className="w-4 h-4 text-amber-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-white light:text-slate-900 tracking-wider">
                  {t.audioRack.title}
                </span>
              </div>
              <p className="font-body text-xs text-chrome-400 light:text-slate-600">
                {t.audioRack.subtitle}
              </p>
            </div>

            {/* Mode Selector (Clean vs High-Gain Lead) */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-chrome-400 light:text-slate-500">TONE STAGE:</span>
              <div className="flex items-center border border-white/15 light:border-slate-300 rounded p-0.5 bg-obsidian-900 light:bg-slate-100">
                <button
                  onClick={() => {
                    audioEngine.playClick(600, 'sine', 0.03);
                    setIsDistorted(false);
                  }}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    !isDistorted
                      ? 'bg-chrome-100 text-obsidian-950 font-bold shadow-sm'
                      : 'text-chrome-400 light:text-slate-600'
                  }`}
                >
                  {t.audioRack.cleanTone}
                </button>
                <button
                  onClick={() => {
                    audioEngine.playClick(1200, 'sine', 0.03);
                    setIsDistorted(true);
                  }}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    isDistorted
                      ? 'bg-amber-500 text-black font-bold shadow-sm'
                      : 'text-chrome-400 light:text-slate-600'
                  }`}
                >
                  {t.audioRack.leadTone}
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Chords Grid */}
          <div>
            <span className="font-mono text-xs text-chrome-400 light:text-slate-600 block mb-3 uppercase tracking-wider">
              {t.audioRack.strumChords}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {guitarRiffs.map((riff, idx) => (
                <motion.button
                  key={riff.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => handleTriggerChord(idx, riff.freq)}
                  className={`p-4 rounded-sm border text-left transition-all ${
                    activePad === idx
                      ? 'bg-amber-400/20 border-amber-400 text-white shadow-lg'
                      : 'bg-obsidian-900 light:bg-slate-50 border-white/10 light:border-slate-200 text-chrome-200 light:text-slate-800 hover:border-chrome-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-chrome-500 font-bold">
                      RIFF_0{idx + 1}
                    </span>
                    <Zap className={`w-3.5 h-3.5 ${activePad === idx ? 'text-amber-400 animate-spin' : 'text-chrome-500'}`} />
                  </div>
                  <div className="font-display font-bold text-base text-white light:text-slate-900">
                    {riff.label}
                  </div>
                  <div className="font-mono text-[10px] text-chrome-400 light:text-slate-500 mt-1">
                    {riff.note}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Hardware Status Strip */}
          <div className="mt-6 pt-4 border-t border-white/10 light:border-slate-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-chrome-500 light:text-slate-500 gap-2">
            <span>{t.audioRack.activeAmp}</span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SIGNAL LATENCY: &lt; 2.5ms (DIRECT HARDWARE BUFFER)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
