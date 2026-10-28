import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sun, Moon, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { audioEngine } from '../utils/audio';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMuted, setIsMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const handleAudioToggle = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      audioEngine.playPowerChord(220, false);
    }
  };

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-obsidian-950/90 dark:bg-obsidian-950/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 light:border-slate-300 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brandmark */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => audioEngine.playClick(1500, 'triangle', 0.03)}
          >
            <div className="w-10 h-10 rounded-sm bg-obsidian-900 border border-white/20 light:border-slate-400 flex items-center justify-center text-chrome-100 group-hover:border-chrome-300 transition-colors shadow-inner-bevel">
              <span className="font-mono text-xs font-bold tracking-tighter text-chrome-200 group-hover:text-white">
                //&gt;
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm tracking-tight text-white light:text-slate-900 flex items-center gap-1.5">
                SMR × DAW
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Ready to Build" />
              </span>
              <span className="font-mono text-[10px] tracking-wider text-chrome-400 uppercase">
                {t.nav.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-obsidian-900/70 light:bg-slate-100/90 border border-white/10 light:border-slate-300 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => audioEngine.playClick(800, 'sine', 0.02)}
                className="px-3.5 py-1 text-xs font-mono text-chrome-300 light:text-slate-600 hover:text-white light:hover:text-black transition-colors rounded-full hover:bg-white/5 light:hover:bg-slate-200/80"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Audio FX + i18n + Theme + Status */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Audio Feedback Toggle */}
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAudioToggle}
              className={`p-2 rounded border text-xs font-mono transition-all flex items-center gap-1.5 ${
                isMuted
                  ? 'border-red-900/40 bg-red-950/20 text-red-400'
                  : 'border-white/15 light:border-slate-300 bg-obsidian-900 light:bg-slate-100 text-chrome-300 light:text-slate-700 hover:border-chrome-400'
              }`}
              title={isMuted ? 'Audio Desactivado' : 'Audio Interactivo Activado'}
              aria-label="Toggle Web Audio Engine"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
              <span className="hidden lg:inline text-[11px]">
                {isMuted ? 'MUTE' : 'AUDIO'}
              </span>
            </motion.button>

            {/* Language Switcher (ES / EN) */}
            <div className="flex items-center border border-white/15 light:border-slate-300 rounded p-0.5 bg-obsidian-900 light:bg-slate-100">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 text-[11px] font-mono font-medium rounded transition-all ${
                  language === 'es'
                    ? 'bg-chrome-100 text-obsidian-950 font-bold shadow-sm'
                    : 'text-chrome-400 hover:text-white light:text-slate-600'
                }`}
                aria-label="Cambiar idioma a Español"
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-[11px] font-mono font-medium rounded transition-all ${
                  language === 'en'
                    ? 'bg-chrome-100 text-obsidian-950 font-bold shadow-sm'
                    : 'text-chrome-400 hover:text-white light:text-slate-600'
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
            </div>

            {/* Theme Switcher (Dark / Light) */}
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded border border-white/15 light:border-slate-300 bg-obsidian-900 light:bg-slate-100 text-chrome-200 light:text-slate-800 hover:border-chrome-400 transition-colors"
              title={theme === 'dark' ? t.nav.themeToggleLight : t.nav.themeToggleDark}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-700" />
              )}
            </motion.button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => {
                audioEngine.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded border border-white/20 light:border-slate-300 text-chrome-200 light:text-slate-800"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10 light:border-slate-200 bg-obsidian-950/95 light:bg-slate-50/95 p-4 rounded-lg flex flex-col gap-4 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    audioEngine.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="py-2 px-3 text-sm font-mono text-chrome-200 light:text-slate-800 hover:bg-white/5 rounded"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 light:border-slate-200 flex items-center justify-between">
              {/* Language Switch */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-chrome-400">LANG:</span>
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-2.5 py-1 text-xs font-mono rounded ${
                    language === 'es' ? 'bg-white text-black font-bold' : 'text-chrome-400'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 text-xs font-mono rounded ${
                    language === 'en' ? 'bg-white text-black font-bold' : 'text-chrome-400'
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Theme & Audio */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleAudioToggle}
                  className="p-2 rounded border border-white/15 light:border-slate-300 text-chrome-200 light:text-slate-800"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded border border-white/15 light:border-slate-300 text-chrome-200 light:text-slate-800"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </header>
  );
};
