import React, { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, Play, Code, ArrowUpRight, Eye } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_LIST } from '../data/portfolioData';
import { ProjectPreviewModal } from './ProjectPreviewModal';

interface ProjectsSectionProps {
  subdomain: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ subdomain }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-widest">
            <FolderGit2 size={14} />
            <span>Миний бүтээлүүд</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Хийсэн төслүүд ба Вэбүүд
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Миний Netlify серверт байршуулсан ажлууд. Карт дээр даран шууд шинэ цонхонд нээх эсвэл доорх интерактив урьдчилан үзэгчээр туршаарай.
          </p>
        </div>

        {/* Projects Grid (The 4 core projects from user prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_LIST.map((project, index) => {
            const projectUrl = `https://${subdomain}.netlify.app/${project.filename}`;

            return (
              <div
                key={project.id}
                className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-950/20 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top accent gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Clean unboxed metadata (anti-pill discipline) */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-3 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-rose-400 font-semibold">{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Төсөл 0{index + 1}</span>
                    </div>
                    <span className="text-slate-500">/{project.filename}</span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </h3>
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accentColor} flex items-center justify-center text-white text-lg shadow-md shrink-0`}
                    >
                      {project.id === 'dream-job' && '💼'}
                      {project.id === 'my-youtube' && '▶️'}
                      {project.id === 'tusul' && '🎮'}
                      {project.id === 'togloom' && '🐎'}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features highlights */}
                  <div className="space-y-1 mb-5">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Actions & Direct Links */}
                <div>
                  {/* Tech stack inline */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-5 pt-3 border-t border-slate-800/80">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 bg-slate-950 text-slate-300 rounded border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Open in New Window + Interactive Test */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Primary button: Open in New Window (User Rule Requirement) */}
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Шинэ цонхонд нээх</span>
                      <ExternalLink size={13} />
                    </a>

                    {/* Secondary button: Interactive Demo Modal */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-medium rounded-xl border border-slate-700/80 transition-all"
                    >
                      <Eye size={13} />
                      <span>{project.id === 'togloom' ? 'Тоглож үзэх' : 'Туршиж үзэх'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Playable Mini Game Highlight Banner */}
        <div className="mt-10 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-amber-950/30 border border-emerald-900/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-3xl shrink-0">
              🐎
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1 flex items-center justify-center sm:justify-start gap-2">
                <span>"Малаа хашаандаа" тоглоомоор тоглож үзэх үү?</span>
                <span className="text-xs text-emerald-400 font-mono font-normal">Онцлох төсөл</span>
              </h4>
              <p className="text-xs text-slate-300">
                14 настай Жавхаагийн монгол 5 хошуу малаа хашаалдаг хөгжилтэй вэб тоглоомыг шууд энд туршаарай!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              const gameProj = PROJECTS_LIST.find((p) => p.id === 'togloom') || PROJECTS_LIST[3];
              setSelectedProject(gameProj);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-emerald-950/40 transition-transform hover:scale-105 shrink-0"
          >
            <Play size={14} fill="currentColor" />
            <span>Шууд тоглох (Play Demo)</span>
          </button>
        </div>
      </div>

      {/* Interactive Project Preview Modal */}
      {selectedProject && (
        <ProjectPreviewModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          subdomain={subdomain}
        />
      )}
    </section>
  );
};
