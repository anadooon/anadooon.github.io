import React from 'react';
import { ProjectCard3D } from './ProjectCard3D';
import { useLanguage } from '../context/LanguageContext';
import { ProjectData } from '../types';

export const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projectList: ProjectData[] = [
    {
      id: 'soundcraft',
      title: t.projects.soundCraft.title,
      category: t.projects.soundCraft.category,
      tagline: t.projects.soundCraft.frontBadge,
      year: t.projects.soundCraft.year,
      featured: true,
      front: {
        badge: t.projects.soundCraft.frontBadge,
        description: t.projects.soundCraft.frontDescription,
        highlights: t.projects.soundCraft.frontHighlights,
        visualType: 'synth',
      },
      back: {
        specsTitle: t.projects.soundCraft.backTitle,
        descriptionDetailed: t.projects.soundCraft.backDescription,
        architectureTitle: t.projects.soundCraft.backArchitectureTitle,
        architectureNotes: t.projects.soundCraft.backArchitectureNotes,
        technologies: t.projects.soundCraft.technologies,
        githubUrl: t.projects.soundCraft.githubUrl,
        demoUrl: t.projects.soundCraft.demoUrl,
        audioPreviewAvailable: true,
      }
    },
    {
      id: 'netpulse',
      title: t.projects.netPulse.title,
      category: t.projects.netPulse.category,
      tagline: t.projects.netPulse.frontBadge,
      year: t.projects.netPulse.year,
      featured: false,
      front: {
        badge: t.projects.netPulse.frontBadge,
        description: t.projects.netPulse.frontDescription,
        highlights: t.projects.netPulse.frontHighlights,
        visualType: 'terminal',
      },
      back: {
        specsTitle: t.projects.netPulse.backTitle,
        descriptionDetailed: t.projects.netPulse.backDescription,
        architectureTitle: t.projects.netPulse.backArchitectureTitle,
        architectureNotes: t.projects.netPulse.backArchitectureNotes,
        technologies: t.projects.netPulse.technologies,
        githubUrl: t.projects.netPulse.githubUrl,
        demoUrl: t.projects.netPulse.demoUrl,
      }
    },
    {
      id: 'fretforge',
      title: t.projects.fretForge.title,
      category: t.projects.fretForge.category,
      tagline: t.projects.fretForge.frontBadge,
      year: t.projects.fretForge.year,
      featured: false,
      front: {
        badge: t.projects.fretForge.frontBadge,
        description: t.projects.fretForge.frontDescription,
        highlights: t.projects.fretForge.frontHighlights,
        visualType: 'fretboard',
      },
      back: {
        specsTitle: t.projects.fretForge.backTitle,
        descriptionDetailed: t.projects.fretForge.backDescription,
        architectureTitle: t.projects.fretForge.backArchitectureTitle,
        architectureNotes: t.projects.fretForge.backArchitectureNotes,
        technologies: t.projects.fretForge.technologies,
        githubUrl: t.projects.fretForge.githubUrl,
        demoUrl: t.projects.fretForge.demoUrl,
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative border-t border-white/10 light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="font-mono text-xs text-chrome-400 light:text-slate-500 uppercase tracking-widest block mb-2">
              {t.projects.sectionTag}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white light:text-slate-900 tracking-tight">
              {t.projects.title}
            </h2>
          </div>
          <p className="font-mono text-xs text-chrome-400 light:text-slate-600 max-w-md leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* 3D Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectList.map((project, index) => (
            <ProjectCard3D key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
