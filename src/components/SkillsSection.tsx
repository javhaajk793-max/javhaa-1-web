import React, { useState } from 'react';
import { Cpu, CheckCircle2, Code, Terminal, Sparkles } from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'deployment' | 'creativity'>('all');

  const filteredSkills = filter === 'all' ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-20 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-widest">
            <Cpu size={14} />
            <span>Ур чадварууд</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Эзэмшсэн технологи & Мэдлэг
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Вэб сайтууд болон тоглоомын төслүүдээ хийх явцдаа сурч эзэмшсэн технологиуд.
          </p>

          {/* Interactive filter tabs (functional buttons) */}
          <div className="inline-flex items-center p-1 bg-slate-900 border border-slate-800 rounded-xl mt-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Бүгд
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === 'frontend'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter('deployment')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === 'deployment'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Байршуулалт
            </button>
            <button
              onClick={() => setFilter('creativity')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === 'creativity'
                  ? 'bg-rose-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Сэтгэлгээ
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800/80 p-5 rounded-2xl flex flex-col justify-between hover:border-slate-700 transition-all hover:bg-slate-900 group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-xs font-mono font-bold text-amber-400">{skill.level}%</span>
                </div>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">{skill.description}</p>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    style={{ width: `${skill.level}%` }}
                    className="h-full bg-gradient-to-r from-rose-600 to-amber-500 rounded-full transition-all duration-1000"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Tools Banner */}
        <div className="mt-12 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <Terminal size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Ашигладаг багаж & Хэрэгслүүд</h4>
              <p className="text-xs text-slate-400">VS Code, Chrome DevTools, GitHub, Netlify, Figma</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Шинэ технологи суралцахдаа баяртай байдаг</span>
          </div>
        </div>
      </div>
    </section>
  );
};
