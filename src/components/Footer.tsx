import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../utils/audio';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    audioEngine.playClick(1600, 'sine', 0.04);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 light:border-slate-300 bg-obsidian-950 light:bg-slate-50 font-mono text-xs text-chrome-400 light:text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 light:border-slate-200">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-obsidian-900 light:bg-slate-200 border border-white/20 light:border-slate-400 flex items-center justify-center text-chrome-200 light:text-slate-900 font-bold">
              //
            </div>
            <div>
              <div className="font-bold text-white light:text-slate-900">
                SMR × DAW // PORTFOLIO
              </div>
              <div className="text-[11px] text-chrome-500">
                {t.footer.ghPagesReady}
              </div>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-white/15 light:border-slate-300 hover:border-chrome-400 text-chrome-200 light:text-slate-800 transition-colors"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-chrome-500 light:text-slate-500">
          <div>
            {t.footer.builtWith}
          </div>
          <div>
            {t.footer.license}
          </div>
        </div>

      </div>
    </footer>
  );
};
