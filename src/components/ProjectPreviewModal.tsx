import React, { useState } from 'react';
import { X, ExternalLink, Code2, Sparkles, CheckCircle2, Play, Trophy, Globe, Layers } from 'lucide-react';
import { Project } from '../types';
import { MalaaHashaandaaGame } from './MalaaHashaandaaGame';

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
  subdomain: string;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ project, onClose, subdomain }) => {
  if (!project) return null;

  const projectUrl = `https://${subdomain}.netlify.app/${project.filename}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-slate-950/90 px-5 py-4 border-b border-slate-800 flex items-center justify-between gap-3 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.accentColor} flex items-center justify-center text-white font-bold shadow-md`}>
              <Layers size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <span className="text-xs text-slate-400 font-mono">/{project.filename}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400">Netlify Төсөл</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg shadow-md transition-all hover:scale-105"
            >
              <span>Шинэ цонхонд нээх</span>
              <ExternalLink size={14} />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Хаах"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Main Description */}
          <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullDetails}
            </p>
          </div>

          {/* Interactive Live Demo Component based on project */}
          {project.id === 'togloom' && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} />
                  Шууд тоглон үзэх боломжтой хувилбар
                </span>
                <span className="text-xs text-slate-400">Жавхаагийн кодчилсон дүрмийн дагуу</span>
              </div>
              <MalaaHashaandaaGame externalUrl={projectUrl} />
            </div>
          )}

          {project.id === 'dream-job' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider">
                <Sparkles size={14} />
                Мөрөөдлийн ажил төслийн танилцуулга самбар
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="text-2xl mb-2 block">💻</span>
                  <h4 className="text-sm font-bold text-white mb-1">Мэргэжил: Programmer</h4>
                  <p className="text-xs text-rose-300 font-semibold mb-1">
                    "Би 10 жилийн дараа programmer болно"
                  </p>
                  <p className="text-xs text-slate-400">
                    Юу хийдэг вэ: Программ бичих, код бичих. Том том газруудын сайтыг найдвартай хөгжүүлэх.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  <span className="text-2xl mb-2 block">🧠</span>
                  <h4 className="text-sm font-bold text-white mb-1">Хэрэгтэй ур чадвар</h4>
                  <ul className="text-xs text-slate-400 space-y-1">
                    <li>• Код бичих ур чадвар</li>
                    <li>• Компьютер дээр илүү ихийг мэдэх</li>
                    <li>• Физикийг гүнзгийрүүлэн судлах</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-950/30 to-amber-950/30 p-4 rounded-xl border border-rose-900/30">
                <h5 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">
                  Миний төлөвлөгөө & Яагаад энэ ажил вэ:
                </h5>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-600/30 text-rose-300 flex items-center justify-center font-bold text-[10px]">1</span>
                    <span>HTML сайн суралцах, вэбийн суурийг батжуулах</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-600/30 text-rose-300 flex items-center justify-center font-bold text-[10px]">2</span>
                    <span>Илүү суралцах, өөрөө бие даан сонирхолтой тоглоом зохиох</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-600/30 text-rose-300 flex items-center justify-center font-bold text-[10px]">3</span>
                    <span>Том том байгууллагуудын сайтыг гардан хөгжүүлэгч Programmer болох</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {project.id === 'my-youtube' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-red-400 uppercase tracking-wider">
                <Sparkles size={14} />
                Миний YouTube — Сонгосон суваг, контентууд
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="text-xl mb-1.5">👨‍💻</div>
                  <h4 className="text-xs font-bold text-white mb-1">Web Dev & Код</h4>
                  <p className="text-[11px] text-slate-400">
                    HTML, CSS, JS анхлан суралцагчдад зориулсан шилдэг зааврууд ба сонирхолтой трикүүд.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="text-xl mb-1.5">🤖</div>
                  <h4 className="text-xs font-bold text-white mb-1">Ирээдүйн Технологи</h4>
                  <p className="text-[11px] text-slate-400">
                    Шинэ үеийн компьютер, роботууд болон технологийн ертөнцийн сонин хачин.
                  </p>
                </div>
                <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <div className="text-xl mb-1.5">🎯</div>
                  <h4 className="text-xs font-bold text-white mb-1">Тоглоомын Дизайн</h4>
                  <p className="text-[11px] text-slate-400">
                    Шилдэг тоглоомууд хэрхэн бүтдэг тухай хөгжүүлэгчдийн өнцөг ба задлан шинжилгээ.
                  </p>
                </div>
              </div>
            </div>
          )}

          {project.id === 'tusul' && (
            <ReactionMiniGame projectUrl={projectUrl} />
          )}

          {/* Features and Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                Гол боломжууд & Бүтэц
              </h4>
              <ul className="space-y-1.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-rose-400 mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Code2 size={14} className="text-cyan-400" />
                Ашигласан технологиуд
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 bg-slate-800/80 text-cyan-300 rounded-md border border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 flex items-center justify-between">
                <span>Байршил:</span>
                <span className="text-slate-300 font-mono font-medium">{project.filename}</span>
              </div>
            </div>
          </div>

          {/* Direct Netlify URL Box */}
          <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs">
              <Globe size={15} className="text-slate-500" />
              <span className="text-slate-400">Шууд холбоос:</span>
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 hover:underline font-mono truncate max-w-xs sm:max-w-md"
              >
                {projectUrl}
              </a>
            </div>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-semibold rounded-lg shadow transition-transform hover:scale-105"
            >
              <span>Сайт руу очих</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Reaction Speed Game for 'tusul' project
const ReactionMiniGame: React.FC<{ projectUrl: string }> = ({ projectUrl }) => {
  const [gameState, setGameState] = useState<'idle' | 'waiting' | 'ready' | 'finished'>('idle');
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number>(0);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [earlyClick, setEarlyClick] = useState(false);
  const timerRef = React.useRef<number | null>(null);

  const startTest = () => {
    setEarlyClick(false);
    setGameState('waiting');
    const delay = 1200 + Math.random() * 2500;
    timerRef.current = window.setTimeout(() => {
      setGameState('ready');
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (gameState === 'waiting') {
      if (timerRef.current) clearTimeout(timerRef.current);
      setEarlyClick(true);
      setGameState('idle');
      return;
    }

    if (gameState === 'ready') {
      const elapsed = Date.now() - startTime;
      setReactionTime(elapsed);
      if (!bestTime || elapsed < bestTime) {
        setBestTime(elapsed);
      }
      setGameState('finished');
    }
  };

  return (
    <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider flex items-center gap-1.5">
          <Sparkles size={14} />
          Тоглоомын сайт — Интерактив Реакц Шалгагч Мини Төсөл
        </span>
        {bestTime && (
          <span className="text-xs text-amber-400 font-mono">
            Дээд амжилт: {bestTime}ms
          </span>
        )}
      </div>

      <div
        onClick={gameState === 'waiting' || gameState === 'ready' ? handleClick : undefined}
        className={`h-40 rounded-xl flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-200 border text-center p-4 ${
          gameState === 'waiting'
            ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
            : gameState === 'ready'
            ? 'bg-emerald-600/80 border-emerald-400 text-white scale-[1.02] shadow-lg shadow-emerald-500/30'
            : gameState === 'finished'
            ? 'bg-slate-900 border-slate-700 text-slate-100'
            : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
        }`}
      >
        {gameState === 'idle' && (
          <>
            <span className="text-2xl mb-1">⚡</span>
            <p className="text-sm font-bold text-white">Реакцын хурдаа шалгаарай!</p>
            <p className="text-xs text-slate-400 mb-3">Дэлгэц ногоон болох үед аль болох хурдан дарна уу.</p>
            {earlyClick && (
              <p className="text-xs text-rose-400 font-medium mb-2">Хэт эрт дарлаа! Ногоон болтол хүлээнэ үү.</p>
            )}
            <button
              onClick={startTest}
              className="px-4 py-1.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold rounded-lg shadow"
            >
              Эхлэх
            </button>
          </>
        )}

        {gameState === 'waiting' && (
          <>
            <div className="w-4 h-4 rounded-full bg-amber-400 animate-ping mb-2" />
            <p className="text-base font-bold text-amber-300">Бэлдээрэй...</p>
            <p className="text-xs text-amber-400/80">Ногоон өнгө гарахыг хүлээнэ үү!</p>
          </>
        )}

        {gameState === 'ready' && (
          <>
            <span className="text-3xl mb-1 animate-bounce">🟢</span>
            <p className="text-xl font-extrabold text-white uppercase tracking-wider">ОДОО ДАР!</p>
          </>
        )}

        {gameState === 'finished' && reactionTime && (
          <>
            <Trophy size={28} className="text-amber-400 mb-1" />
            <p className="text-lg font-extrabold text-white">{reactionTime} миллисекунд!</p>
            <p className="text-xs text-slate-300 mb-3">
              {reactionTime < 250
                ? 'Гайхалтай! Жинхэнэ кибер тамирчны реакцтай байна!'
                : reactionTime < 350
                ? 'Маш сайн! Дунджаас хамаагүй өндөр хурд!'
                : 'Сайн байна! Дахин туршаад амжилтаа ахиулаарай!'}
            </p>
            <button
              onClick={startTest}
              className="px-4 py-1.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold rounded-lg shadow"
            >
              Дахин турших
            </button>
          </>
        )}
      </div>
    </div>
  );
};
