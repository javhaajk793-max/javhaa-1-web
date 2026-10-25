import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import spiderManImg from '../spider-man.png';

interface ProfileAvatarProps {
  photoUrl?: string;
  name: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ photoUrl, name }) => {
  // Use uploaded spider-man.png as primary profile image
  const [currentSrc, setCurrentSrc] = useState<string>(spiderManImg);

  return (
    <div className="relative group select-none">
      {/* Outer ambient glow with Spider-Man red/neon lighting */}
      <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 opacity-70 blur-xl group-hover:opacity-100 transition duration-500 animate-pulse" />

      {/* Frame Container */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-b from-rose-500/90 via-red-950/70 to-slate-900 border border-rose-500/40 shadow-2xl">
        <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative flex items-center justify-center">
          <img
            src={currentSrc}
            alt={`${name} - Spider-Man Profile`}
            onError={() => {
              if (currentSrc !== spiderManImg) {
                setCurrentSrc(spiderManImg);
              }
            }}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />

          {/* Toggle button to switch between Spider-Man and Netlify URL if configured */}
          {photoUrl && (
            <button
              onClick={() => {
                setCurrentSrc((prev) => (prev === spiderManImg ? photoUrl : spiderManImg));
              }}
              title="Зураг солих (Spider-Man / Netlify)"
              className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-rose-400 border border-rose-500/30 transition-all opacity-0 group-hover:opacity-100 shadow-md"
            >
              <ImageIcon size={14} />
            </button>
          )}

          {/* Spider-Man label tag */}
          <div className="absolute bottom-2.5 inset-x-0 flex justify-center pointer-events-none">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-rose-200 bg-black/80 px-2.5 py-0.5 rounded-full border border-rose-500/50 backdrop-blur-sm shadow-md">
              SPIDER-MAN · ЖАВХАА
            </span>
          </div>
        </div>
      </div>

      {/* Online / Active status badge */}
      <div className="absolute -bottom-2 -right-2 bg-slate-900 border-2 border-slate-800 text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute" />
        <span className="font-semibold text-slate-200 text-[11px] ml-2">14 настай хөгжүүлэгч</span>
      </div>
    </div>
  );
};
