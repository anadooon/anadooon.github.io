import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, Github, RotateCw, Volume2, Layers, CheckCircle } from 'lucide-react';
import { ProjectData } from '../types';
import { audioEngine } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCard3DProps {
  project: ProjectData;
  index: number;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlayingSynth, setIsPlayingSynth] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const handleCardClick = () => {
    audioEngine.playClick(isFlipped ? 1200 : 800, 'sine', 0.04);
    setIsFlipped(!isFlipped);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  const handlePlaySynthNote = (e: React.MouseEvent, freq: number) => {
    e.stopPropagation();
    setIsPlayingSynth(true);
    audioEngine.playSynthNote(freq, 'sawtooth');
    setTimeout(() => setIsPlayingSynth(false), 500);
  };

  return (
    <div className="perspective-1200 w-full min-h-[580px] sm:min-h-[540px]">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay: index * 0.1,
        }}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-label={`${project.title} - ${isFlipped ? t.projects.clickToFlipBack : t.projects.clickToFlipFront}`}
        className="w-full h-full relative cursor-pointer transform-style-3d group focus:outline-none focus:ring-2 focus:ring-chrome-300 rounded-sm"
      >
        
        {/* ========================================================= */}
        {/* FRONT FACE (Card Cover / Teaser / Vinyl-Rack Aesthetic) */}
        {/* ========================================================= */}
        <div className="backface-hidden absolute inset-0 w-full h-full rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/20 light:border-slate-300 p-6 sm:p-7 flex flex-col justify-between shadow-metallic light:shadow-metallic-light group-hover:border-chrome-300 transition-colors">
          
          {/* Top Bar: Category & Flip Prompt */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-chrome-400 light:text-slate-600 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                {project.category}
              </span>
              <span className="font-mono text-[11px] text-chrome-400">
                {project.year}
              </span>
            </div>

            {/* Front Badge & Title */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                  {project.front.badge}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white light:text-slate-900 tracking-tight leading-tight group-hover:text-chrome-100 transition-colors">
                {project.title}
              </h3>
            </div>

            {/* Visualizer Area (Audio / Terminal Graphic) */}
            <div className="relative my-4 p-5 rounded-sm bg-obsidian-950 light:bg-slate-900 border border-white/10 overflow-hidden shadow-inner">
              
              {project.front.visualType === 'synth' && (
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-chrome-400 mb-3">
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <Volume2 className="w-3.5 h-3.5" />
                      DSP WAVE OSC
                    </span>
                    <span className="text-[10px] text-chrome-500">
                      44.1kHz • 32-FLOAT
                    </span>
                  </div>
                  
                  {/* Frequency Wave Animation */}
                  <div className="h-14 flex items-end justify-between gap-1">
                    {[20, 50, 85, 40, 100, 60, 30, 90, 75, 45, 95, 65, 35, 80].map((h, i) => (
                      <div
                        key={i}
                        className={`w-full rounded-t-sm transition-all duration-300 ${
                          isPlayingSynth ? 'bg-amber-400 shadow-sm' : 'bg-chrome-400'
                        }`}
                        style={{ height: `${h}%`, opacity: 0.8 }}
                      />
                    ))}
                  </div>

                  {/* Interactive Mini-Synth Note Buttons */}
                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-chrome-400">
                      {t.projects.testSynth}:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {[
                        { note: 'C4', f: 261.63 },
                        { note: 'E4', f: 329.63 },
                        { note: 'G4', f: 392.00 },
                        { note: 'B4', f: 493.88 }
                      ].map(k => (
                        <button
                          key={k.note}
                          onClick={(e) => handlePlaySynthNote(e, k.f)}
                          className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] transition-all active:scale-95 border border-white/10"
                        >
                          {k.note}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {project.front.visualType === 'terminal' && (
                <div className="font-mono text-xs text-chrome-300 space-y-1.5">
                  <div className="text-chrome-500 text-[10px]"># traceroute to destination...</div>
                  <div className="text-emerald-400">1: gateway.smr.lan (192.168.1.1) 0.42ms</div>
                  <div className="text-emerald-400">2: core-router-vlan20.net (10.20.0.1) 1.15ms</div>
                  <div className="text-cyan-300">3: edge-cdn-cluster.io (172.16.4.88) 3.80ms</div>
                  <div className="text-chrome-500 text-[9px] pt-1 border-t border-white/10">0% PACKET LOSS // MTU 1500</div>
                </div>
              )}

              {project.front.visualType === 'fretboard' && (
                <div className="font-mono text-xs">
                  <div className="text-chrome-500 text-[10px] mb-2"># GUITAR FRET MATRIX // DROP D</div>
                  <div className="space-y-1">
                    {['E4 |---0---3---5---|', 'B3 |---1---3---6---|', 'G3 |---0---2---5---|', 'D3 |---0---3---5---|', 'A2 |---0---3---5---|', 'D2 |---0---3---5---|'].map((str, i) => (
                      <div key={i} className="text-chrome-300 text-[10px] tracking-wider font-mono">
                        {str}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Short Description */}
            <p className="font-body text-sm text-chrome-300 light:text-slate-700 leading-relaxed mb-4">
              {project.front.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-1.5 mb-4">
              {project.front.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-mono text-chrome-300 light:text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Flip Trigger Action Banner */}
          <div className="pt-4 border-t border-white/10 light:border-slate-300 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-chrome-200 light:text-slate-900 group-hover:text-amber-400 transition-colors flex items-center gap-2">
              <RotateCw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500" />
              {t.projects.clickToFlipFront}
            </span>
            <span className="font-mono text-[10px] text-chrome-500 uppercase">
              3D_ROTATE
            </span>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BACK FACE (Rotated 180° Y: Architecture, Tech & Links)    */}
        {/* ========================================================= */}
        <div 
          className="backface-hidden absolute inset-0 w-full h-full rounded-sm bg-obsidian-950 light:bg-white border border-white/20 light:border-slate-300 p-6 sm:p-7 flex flex-col justify-between shadow-metallic light:shadow-metallic-light rotate-y-180"
          onClick={(e) => {
            // Allow clicking buttons without flipping back immediately
            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button')) {
              e.stopPropagation();
            }
          }}
        >
          <div>
            {/* Top Back Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 light:border-slate-200">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-chrome-400" />
                <span className="font-mono text-xs font-bold text-white light:text-slate-900">
                  {project.back.specsTitle}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                className="font-mono text-[11px] text-chrome-400 hover:text-white flex items-center gap-1"
                title={t.projects.clickToFlipBack}
              >
                <RotateCw className="w-3 h-3" />
                <span>↻</span>
              </button>
            </div>

            {/* Detailed Description */}
            <p className="font-body text-xs sm:text-sm text-chrome-300 light:text-slate-700 leading-relaxed mb-4">
              {project.back.descriptionDetailed}
            </p>

            {/* Architecture Highlights */}
            <div className="mb-4 p-3.5 rounded bg-obsidian-900 light:bg-slate-50 border border-white/10 light:border-slate-200">
              <span className="font-mono text-[10px] text-chrome-400 light:text-slate-600 uppercase font-bold tracking-wider block mb-2">
                {project.back.architectureTitle}
              </span>
              <ul className="space-y-1.5">
                {project.back.architectureNotes.map((note) => (
                  <li key={note} className="text-xs font-mono text-chrome-300 light:text-slate-700 flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">›</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Badges */}
            <div className="mb-4">
              <span className="font-mono text-[10px] text-chrome-400 light:text-slate-600 uppercase font-bold tracking-wider block mb-2">
                {t.projects.techTitle}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.back.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] px-2 py-0.5 rounded-sm bg-obsidian-850 light:bg-slate-200 border border-white/10 light:border-slate-300 text-chrome-200 light:text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links (Demo & GitHub) */}
          <div className="pt-4 border-t border-white/10 light:border-slate-200 flex items-center gap-3">
            <a
              href={project.back.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioEngine.playClick(1400, 'sine', 0.03)}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-chrome-100 text-obsidian-950 font-mono text-xs font-bold hover:bg-white transition-all shadow-sm"
            >
              <span>{t.projects.liveDemo}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.back.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioEngine.playClick(1000, 'triangle', 0.03)}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/20 light:border-slate-300 text-chrome-200 light:text-slate-800 font-mono text-xs hover:border-chrome-400 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.projects.viewCode}</span>
            </a>
          </div>

        </div>

      </motion.div>
    </div>
  );
};
