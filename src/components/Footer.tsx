import React from 'react';
import { ExternalLink, Heart, Globe, ArrowUp } from 'lucide-react';
import { USER_INFO, PROJECTS_LIST } from '../data/portfolioData';

interface FooterProps {
  subdomain: string;
}

export const Footer: React.FC<FooterProps> = ({ subdomain }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-900">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 to-red-500 flex items-center justify-center text-white font-bold text-xs shadow-md">
                Ж
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                ЖАВХАА<span className="text-rose-500 font-mono">.dev</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {USER_INFO.subtitle}. Энэхүү портфолио сайт нь миний сурч мэдсэн зүйлс болон Netlify дээрх бие даасан төслүүдийг нэгтгэн харуулж байна.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <Globe size={13} className="text-rose-400" />
              <span>https://{subdomain}.netlify.app</span>
            </div>
          </div>

          {/* Quick Links: 4 Projects */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
              Миний бүтээлүүд
            </h4>
            <ul className="space-y-2">
              {PROJECTS_LIST.map((proj) => (
                <li key={proj.id}>
                  <a
                    href={`https://${subdomain}.netlify.app/${proj.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-rose-400 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{proj.title}</span>
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to top & Info */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3">
                Холбоос
              </h4>
              <div className="space-y-1.5">
                <a
                  href={`mailto:${USER_INFO.email}`}
                  className="block hover:text-rose-400 transition-colors"
                >
                  {USER_INFO.email}
                </a>
                <span className="block text-slate-500">Улаанбаатар хот</span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs w-fit transition-colors border border-slate-800"
            >
              <ArrowUp size={14} />
              <span>Дээш буцах</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>© 2026 Жавхаа. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p className="flex items-center gap-1">
            <span>Вэб хөгжүүлэлтэд дурлагч 14 настай хүүгийн бүтээл</span>
            <span className="text-rose-500">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
