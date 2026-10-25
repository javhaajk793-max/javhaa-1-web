import React, { useState, useEffect, useRef } from 'react';
import { Play, RotateCcw, Award, CheckCircle, Volume2, VolumeX, Sparkles, ExternalLink } from 'lucide-react';

interface Animal {
  id: number;
  name: string;
  emoji: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  isInYard: boolean;
  speed: number;
}

const INITIAL_ANIMALS: Omit<Animal, 'x' | 'y' | 'targetX' | 'targetY' | 'isInYard' | 'speed'>[] = [
  { id: 1, name: 'Хонь', emoji: '🐑' },
  { id: 2, name: 'Ямаа', emoji: '🐐' },
  { id: 3, name: 'Морь', emoji: '🐎' },
  { id: 4, name: 'Үхэр', emoji: '🐂' },
  { id: 5, name: 'Тэмээ', emoji: '🐪' },
];

interface MalaaHashaandaaGameProps {
  externalUrl: string;
}

export const MalaaHashaandaaGame: React.FC<MalaaHashaandaaGameProps> = ({ externalUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const pastureRef = useRef<HTMLDivElement>(null);

  // Simple Web Audio API sound synthesizers
  const playSound = (type: 'collect' | 'win' | 'start' | 'click') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'collect') {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      } else if (type === 'win') {
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.connect(g);
          g.connect(ctx.destination);
          o.frequency.value = freq;
          g.gain.setValueAtTime(0.15, now + idx * 0.1);
          g.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.1 + 0.3);
          o.start(now + idx * 0.1);
          o.stop(now + idx * 0.1 + 0.35);
        });
      } else if (type === 'start') {
        osc.frequency.setValueAtTime(330, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(660, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
      }
    } catch {
      // Audio might be blocked before user gesture
    }
  };

  const spawnAnimals = () => {
    return INITIAL_ANIMALS.map((a) => {
      // Spawn in left/center pasture area (0% to 55% width, 10% to 80% height)
      return {
        ...a,
        x: Math.floor(10 + Math.random() * 45),
        y: Math.floor(15 + Math.random() * 65),
        targetX: 0,
        targetY: 0,
        isInYard: false,
        speed: 1 + Math.random() * 1.5,
      };
    });
  };

  const startGame = () => {
    setAnimals(spawnAnimals());
    setTimeLeft(25);
    setScore(0);
    setIsGameOver(false);
    setIsWon(false);
    setIsPlaying(true);
    playSound('start');
  };

  // Timer countdown
  useEffect(() => {
    if (!isPlaying || isGameOver || isWon) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying, isGameOver, isWon]);

  // Gentle animal wandering when outside yard
  useEffect(() => {
    if (!isPlaying || isGameOver || isWon) return;

    const wanderInterval = setInterval(() => {
      setAnimals((prev) =>
        prev.map((animal) => {
          if (animal.isInYard) return animal;
          const deltaX = (Math.random() - 0.5) * 6;
          const deltaY = (Math.random() - 0.5) * 6;
          const newX = Math.max(5, Math.min(50, animal.x + deltaX));
          const newY = Math.max(10, Math.min(80, animal.y + deltaY));
          return {
            ...animal,
            x: newX,
            y: newY,
          };
        })
      );
    }, 800);

    return () => clearInterval(wanderInterval);
  }, [isPlaying, isGameOver, isWon]);

  // Action: Herd animal into yard
  const herdAnimal = (id: number) => {
    if (!isPlaying || isGameOver || isWon) return;

    setAnimals((prev) => {
      let newlyHerded = false;
      const updated = prev.map((animal) => {
        if (animal.id === id && !animal.isInYard) {
          newlyHerded = true;
          // Place animal nicely inside the yard (Yard is situated at 72% - 92% width, 25% - 75% height)
          const yardPositions = [
            { x: 75, y: 35 },
            { x: 85, y: 35 },
            { x: 75, y: 65 },
            { x: 85, y: 65 },
            { x: 80, y: 50 },
          ];
          const yardPos = yardPositions[(id - 1) % yardPositions.length];
          return {
            ...animal,
            x: yardPos.x,
            y: yardPos.y,
            isInYard: true,
          };
        }
        return animal;
      });

      if (newlyHerded) {
        playSound('collect');
        const yardCount = updated.filter((a) => a.isInYard).length;
        setScore(yardCount);
        if (yardCount === INITIAL_ANIMALS.length) {
          setIsWon(true);
          playSound('win');
        }
      }
      return updated;
    });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
      {/* Game Header Bar */}
      <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎪</span>
          <div>
            <h4 className="text-sm font-semibold text-white">Малаа хашаандаа — Интерактив тоглоом</h4>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Хурд шалгах тоглоом</span>
              <span aria-hidden="true">·</span>
              <span>5 хошуу мал</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/80 transition-colors"
            title={soundEnabled ? 'Дуу хаах' : 'Дуу нээх'}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-400 hover:text-rose-300 bg-rose-500/10 px-2.5 py-1.5 rounded-lg border border-rose-500/20 transition-all hover:bg-rose-500/20"
          >
            <span>Бүрэн хувилбараар нээх</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Game Stats Bar */}
      <div className="bg-slate-900/90 px-4 py-2 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-slate-500">Цаг:</span>
            <span className={`font-bold text-sm ${timeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-amber-400'}`}>
              {timeLeft} сек
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-slate-500">Хашаалсан мал:</span>
            <span className="font-bold text-sm text-emerald-400">
              {score} / {INITIAL_ANIMALS.length}
            </span>
          </div>
        </div>

        {isPlaying && !isGameOver && !isWon && (
          <span className="text-rose-400 text-xs flex items-center gap-1 animate-pulse">
            <span>Малууд дээр дарж хашаа руу оруулаарай!</span>
          </span>
        )}
      </div>

      {/* Game Stage / Pasture Canvas */}
      <div
        ref={pastureRef}
        className="relative h-72 sm:h-80 w-full overflow-hidden select-none bg-gradient-to-b from-emerald-950/60 via-slate-900 to-slate-950"
      >
        {/* Grassland textures */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Traditional Mongolian Ger decoration in background */}
        <div className="absolute top-3 left-4 text-slate-700/60 text-xs font-sans flex items-center gap-1.5 pointer-events-none">
          <span className="text-2xl">⛺</span>
          <span>Өвөлжөөний бэлчээр</span>
        </div>

        {/* The Yard (Хашаа) Area */}
        <div className="absolute top-6 bottom-6 right-3 sm:right-6 w-32 sm:w-40 border-2 border-dashed border-amber-600/70 bg-amber-950/30 rounded-xl flex flex-col justify-between p-2 pointer-events-none">
          <div className="flex items-center justify-between text-[11px] font-semibold text-amber-300">
            <span>🪵 ХАШАА</span>
            <span className="text-amber-400">{score}/{INITIAL_ANIMALS.length}</span>
          </div>
          <div className="text-[10px] text-amber-500/80 text-center">
            {score === 5 ? 'Бүх мал аюулгүй!' : 'Энд малыг оруул'}
          </div>
          <div className="text-[10px] text-amber-400/60 border-t border-amber-600/40 pt-1 text-center">
            Хаалга 🚪
          </div>
        </div>

        {/* Wandering & Herded Animals */}
        {isPlaying &&
          animals.map((animal) => (
            <button
              key={animal.id}
              onClick={() => herdAnimal(animal.id)}
              disabled={animal.isInYard}
              style={{
                left: `${animal.x}%`,
                top: `${animal.y}%`,
                transition: animal.isInYard ? 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'all 0.8s ease-out',
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer ${
                animal.isInYard ? 'cursor-default opacity-95 scale-90' : 'hover:scale-125 active:scale-95'
              }`}
            >
              <span className="text-3xl sm:text-4xl filter drop-shadow-md transition-transform group-hover:rotate-6">
                {animal.emoji}
              </span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium mt-0.5 whitespace-nowrap shadow-sm ${
                  animal.isInYard
                    ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-700/50'
                    : 'bg-slate-900/90 text-slate-200 border border-slate-700 group-hover:bg-rose-900/90 group-hover:text-rose-200'
                }`}
              >
                {animal.name} {animal.isInYard ? '✓' : ''}
              </span>
            </button>
          ))}

        {/* Start Overlay */}
        {!isPlaying && !isGameOver && !isWon && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-3xl mb-3 shadow-lg shadow-rose-500/10">
              🐎
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Малаа хашаандаа оруулж амжих уу?</h3>
            <p className="text-xs text-slate-300 max-w-sm mb-4">
              Таван хошуу малаа хулганаар товшин барьж, цаг дуусахаас өмнө баруун талын хашаанд аюулгүй оруулаарай!
            </p>
            <button
              onClick={startGame}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-semibold rounded-xl shadow-lg shadow-rose-900/30 transition-all hover:scale-105"
            >
              <Play size={15} fill="currentColor" />
              <span>Тоглоом эхлүүлэх (25 сек)</span>
            </button>
          </div>
        )}

        {/* Game Won Celebration Overlay */}
        {isWon && (
          <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-3xl mb-2 animate-bounce">
              🎉
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs mb-1">
              <Sparkles size={14} />
              <span>ГАЙХАЛТАЙ АМЖИЛТ!</span>
            </div>
            <h3 className="text-xl font-extrabold text-white mb-2">Та бүх малаа амжилттай хашааллаа!</h3>
            <p className="text-xs text-emerald-200/90 max-w-sm mb-4">
              Үлдсэн хугацаа: <b>{timeLeft} секунд</b>. Та жинхэнэ шалмаг малчин шиг чадварлаг байлаа!
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={startGame}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition-all shadow-md"
              >
                <RotateCcw size={14} />
                <span>Дахин тоглох</span>
              </button>
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-xl border border-slate-700 transition-all"
              >
                <span>Бүтээлийг үзэх</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}

        {/* Game Over (Time Out) Overlay */}
        {isGameOver && !isWon && (
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-2xl mb-2 text-rose-400">
              ⏰
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Цаг дууслаа!</h3>
            <p className="text-xs text-slate-400 max-w-sm mb-4">
              Та нийт <b>{score} / 5</b> мал оруулж чадлаа. Дахин нэг удаа туршаад үзэх үү?
            </p>
            <button
              onClick={startGame}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-xl shadow-lg transition-all"
            >
              <RotateCcw size={14} />
              <span>Дахин оролдох</span>
            </button>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-slate-950/90 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <Award size={14} className="text-amber-400" />
          <span>Жавхаагийн бүтээсэн анхны JavaScript вэб тоглоом</span>
        </span>
        <span className="text-slate-500 hidden sm:inline">HTML5 · CSS Animations · DOM Logic</span>
      </div>
    </div>
  );
};
