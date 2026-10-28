import { motion, useScroll, useSpring } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsGrid } from './components/SkillsGrid';
import { Projects } from './components/Projects';
import { AudioRack } from './components/AudioRack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-obsidian-950 light:bg-slate-50 text-chrome-200 light:text-slate-800 transition-colors duration-300 relative selection:bg-chrome-100 selection:text-obsidian-950">
      
      {/* Top Liquid Metal Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-chrome-400 via-white to-amber-400 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <SkillsGrid />
        <Projects />
        <AudioRack />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioApp />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
