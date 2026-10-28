import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, Send, Terminal, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../utils/audio';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'contact.smr.daw@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    audioEngine.playClick(1500, 'sine', 0.05);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    audioEngine.playPowerChord(196, false);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);

      // Trigger metallic silver confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#ffffff', '#cbd5e1', '#94a3b8', '#ffb703'],
        });
      } catch {
        // fallback
      }

      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/10 light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14">
          <span className="font-mono text-xs text-chrome-400 light:text-slate-500 uppercase tracking-widest block mb-2">
            {t.contact.sectionTag}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white light:text-slate-900 tracking-tight max-w-2xl">
            {t.contact.title}
          </h2>
          <p className="font-body text-base text-chrome-300 light:text-slate-700 mt-3 max-w-xl">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="font-mono text-xs text-chrome-400 uppercase tracking-widest mb-4">
              {t.contact.directChannelsTitle}
            </div>

            {/* Email Direct Channel with Copy Pill */}
            <motion.div
              whileHover={{ y: -2 }}
              className="p-5 rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/15 light:border-slate-300 shadow-metallic light:shadow-metallic-light"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-white light:text-slate-900 font-display font-bold text-base">
                  <Mail className="w-4 h-4 text-chrome-300" />
                  <span>Email Directo</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-mono text-chrome-200 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? t.contact.copied : t.contact.copyEmail}</span>
                </button>
              </div>
              <div className="font-mono text-xs text-chrome-300 light:text-slate-800 break-all select-all">
                {contactEmail}
              </div>
              <p className="font-body text-xs text-chrome-400 light:text-slate-600 mt-2">
                {t.contact.emailDesc}
              </p>
            </motion.div>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              onClick={() => audioEngine.playClick(1000, 'triangle', 0.02)}
              className="block p-5 rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/15 light:border-slate-300 shadow-metallic light:shadow-metallic-light group hover:border-chrome-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-white light:text-slate-900 font-display font-bold text-base">
                  <Github className="w-4 h-4 text-chrome-300" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-chrome-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="font-body text-xs text-chrome-400 light:text-slate-600">
                {t.contact.githubDesc}
              </p>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              onClick={() => audioEngine.playClick(1200, 'triangle', 0.02)}
              className="block p-5 rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/15 light:border-slate-300 shadow-metallic light:shadow-metallic-light group hover:border-chrome-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-white light:text-slate-900 font-display font-bold text-base">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Network</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-chrome-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="font-body text-xs text-chrome-400 light:text-slate-600">
                {t.contact.linkedinDesc}
              </p>
            </motion.a>

          </div>

          {/* Contact Terminal Form (7 Cols) */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="rounded-sm bg-obsidian-900 light:bg-slate-100 border border-white/15 light:border-slate-300 p-6 sm:p-8 shadow-metallic light:shadow-metallic-light"
            >
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 light:border-slate-200">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-chrome-400" />
                  <span className="font-mono text-xs font-bold text-white light:text-slate-900">
                    CONSOLE_TRANSMITTER://packet_send
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase">
                  READY
                </span>
              </div>

              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 font-mono text-xs flex items-center gap-2"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.contact.sentSuccess}</span>
                </motion.div>
              )}

              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs text-chrome-400 light:text-slate-600 uppercase mb-2">
                    {t.contact.formName} *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-obsidian-950 light:bg-white border border-white/15 light:border-slate-300 text-white light:text-slate-900 font-body text-sm focus:outline-none focus:border-chrome-200 transition-colors"
                    placeholder="Alex Morgan"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs text-chrome-400 light:text-slate-600 uppercase mb-2">
                    {t.contact.formEmail} *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-obsidian-950 light:bg-white border border-white/15 light:border-slate-300 text-white light:text-slate-900 font-body text-sm focus:outline-none focus:border-chrome-200 transition-colors"
                    placeholder="alex@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs text-chrome-400 light:text-slate-600 uppercase mb-2">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-sm bg-obsidian-950 light:bg-white border border-white/15 light:border-slate-300 text-white light:text-slate-900 font-body text-sm focus:outline-none focus:border-chrome-200 transition-colors resize-none"
                    placeholder="Detalles del proyecto, vacante o colaboración..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 px-6 rounded-sm bg-chrome-100 text-obsidian-950 font-mono font-bold text-sm tracking-tight hover:bg-white transition-all shadow-metallic flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-obsidian-950 border-t-transparent rounded-full animate-spin" />
                    <span>{t.contact.sendingBtn}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.sendBtn}</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
